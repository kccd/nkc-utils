import { pureJsMethod, sharedUtil } from "./index.js";

export { pureJsMethod, sharedUtil };

export function nodeOnlyMethod(): never {
  throw new Error(
    "nodeOnlyMethod() 仅在 Node.js 环境中可用，请勿在浏览器调用。",
  );
}
