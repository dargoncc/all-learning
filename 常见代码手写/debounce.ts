export function debounce(func: Function, wait: number) {
  let timeout: number | undefined | null;
  return function (...args: any[]) {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null
    }
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}