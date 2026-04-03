export function pureJsMethod(name: string): string {
  return `Hello ${name}! 纯 JS 方法，浏览器和 Node 都可用。`;
}

export function sharedUtil(a: number, b: number): number {
  return a + b;
}
