import { isObject, isUndefined } from './utils'

/**
 * 递归创建查询内容
 * @param {*} keys
 */
const createKeys = (keys, str = '') => {
  keys.forEach((item, index) => {
    if (isObject(item)) {
      str += `${item.field}{`
      str += createKeys(item.keys)
      str += `}`
    } else {
      str += item;
    }
    if (index !== keys.length - 1) {
      str += ",";
    }
  });
  return str
}

/**
 * 创建符合GraphQL的查询字符串
 * @param {*} params
 */
const createQuery = ({ params = {}, keys = [] }) => {
  let query = "";
  if (fun && isArray(keys)) {
    query = "{query" + fun;
    if (isObject(params)) {
      query += "(";
      for (let key in params) {
        const k = params[key];
        if (isObject(k) && !isUndefined(k.type) && !isUndefined(k.value)) {
          switch (k.type) {
            case "String":
              query += key + ':"' + k.value + '",';
          }
        } else {
          query += key + ":" + params[key] + ",";
        }
      }
      query += ")";
    }
    query += `{${createKeys(keys)}}}`;
  }
  return query;
};

export default {
  query: createQuery,
  version: 'v0.0.1'
}
