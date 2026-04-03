import fs from "node:fs/promises";
import { pureJsMethod, sharedUtil } from "./index.js";

export { pureJsMethod, sharedUtil };

export async function nodeOnlyMethod(filePath: string): Promise<string> {
  const content = await fs.readFile(filePath, "utf-8");
  return `Node.js 专属方法执行成功，文件长度: ${content.length}`;
}
