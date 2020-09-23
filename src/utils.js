/**
 * 判断是否对象
 *
 * @param {object} object 要判断的对象
 * @return {bool}
 */
export const isObject = (obj) => {
  if (obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  return false;
};

/**
 * 判断是否数组
 *
 * @param {object} object 要判断的对象
 * @return {bool}
 */
export const isArray = (obj) => {
  if (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  }
  return false;
};

/**
 * 判断是否为undefined
 *
 * @param {any} value 要判断的值
 * @return {bool}
 */
export const isUndefined = (value) => {
  return typeof value === "undefined";
};
