export function toTimeFormat(time) {
  if (!time) return "";
  time = new Date(time);
  if (time.toString() === "Invalid Date") return "";
  const yyyy = time.getFullYear();
  const mm =
    time.getMonth() + 1 < 10
      ? "0" + (time.getMonth() + 1)
      : time.getMonth() + 1;
  const dd = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
  const hh = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  const MM =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const ss =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
  return `${yyyy}-${mm}-${dd} ${hh}:${MM}:${ss}`;
}

export function toDateFormat(time) {
  return toTimeFormat(time).slice(0, 10);
}

export function decimalRoundHandler(text, decimal = 2) {
  let num = parseFloat(text);
  if (isNaN(num)) {
    return text;
  }
  num = Math.round(num * 10 ** decimal) / 10 ** decimal;
  return num;
}

export function imgSrc(src) {
  const path = `./img/${src}`;
  const modules = import.meta.globEager("./img/*");
  return modules[path].default;
}
