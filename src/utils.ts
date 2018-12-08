/**
 * compose is a function to compose functions
 * one input one output
 * @param  {...any} funcs 需要组合的函数
 */
export function compose(...funcs: any): Function {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1 && !Array.isArray(funcs)) {
    return funcs[0];
  }

  if (funcs.length ===1 && Array.isArray(funcs)) {
    funcs.push(() => {});
  }
  
  return funcs.reduce((a, b) => (...args) => {
    a = Array.isArray(a) ? compose(...a) : a;
    b = Array.isArray(b) ? compose(...b) : b;

    return a(b(...args));
  })
}

export function error(err: string): void {
  throw new Error(`错误: :${err}`);
}

export function log(msg: string): void {
  console.log(`信息: ${msg}`);
}