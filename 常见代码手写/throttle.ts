export function throttle(func: Function, wait: number) {
  let timeout: number | undefined | null;
  return function (...args: any[]) {
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = undefined;
        func.apply(this, args);
        clearTimeout(timeout)
        timeout = null
      }, wait);
    }
  };
}