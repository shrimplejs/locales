import fs from "node:fs/promises";
import path from "node:path";
import zlib from "node:zlib";

import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const __dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), process.argv[2]);

const gunzip = promisify(zlib.gunzip);
const gzip = promisify(zlib.gzip);

(async () => {
  async function updateHtmlReferences(dir) {
    const files = await fs.readdir(dir, { withFileTypes: true });
    for (const file of files) {
      const filePath = path.join(file.parentPath, file.name);
      if (file.isDirectory()) await updateHtmlReferences(filePath);
      else if (filePath.includes(".html")) {
        const fileData = await fs.readFile(filePath, "utf8");
        if (!fileData.includes("/functions/")) continue;
        fs.writeFile(filePath, fileData.replace(/\/functions\//g, "/funcs/"));
      }
    }
  }

  async function updateUrlReferences(payload) {
    if (typeof payload === "object" && payload !== null) {
      for (const key in payload) {
        if (typeof payload[key] === "string") {
          payload[key] = payload[key].replace(/functions\//g, "funcs/");
        } else if (typeof payload[key] === "object") {
          await updateUrlReferences(payload[key]);
        }
      }
    }
    return payload;
  }

  await fs.rename(path.join(__dirname, "functions"), path.join(__dirname, "funcs"));

  console.log("Directory renamed: funcitons -> funcs");

  await updateHtmlReferences(__dirname);

  console.log("HTML references updated successfully");

  const navigationFilePath = path.join(__dirname, "assets", "navigation.js");
  const navigationFileData = await fs.readFile(navigationFilePath, "utf8");

  const matchResult = navigationFileData.match(/window\.navigationData = "(.*?)"/);

  if (!matchResult || matchResult.length < 2)
    throw new Error("Failed to find navigation data in file");

  const navigationData = matchResult[1];

  const navigationDataBase64 = navigationData.replace(
    /^data:application\/octet-stream;base64,/,
    "",
  );
  const navigationDataBytes = Buffer.from(navigationDataBase64, "base64");
  const navigationDataDecompressed = await gunzip(navigationDataBytes);

  const navigationDataJson = JSON.parse(navigationDataDecompressed.toString("utf-8"));

  const updatedNavigationData = await updateUrlReferences(navigationDataJson);

  const navigationDataCompressed = await gzip(JSON.stringify(updatedNavigationData));

  const navigationDataUpdated = `data:application/octet-stream;base64,${navigationDataCompressed.toString("base64")}`;

  await fs.writeFile(navigationFilePath, `window.navigationData = "${navigationDataUpdated}"`);

  console.log("Navigation data updated successfully");
})().catch(console.error);

