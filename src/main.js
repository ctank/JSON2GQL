import { isObject, isArray, isUndefined } from './utils'

/**
 * 递归创建查询内容
 * @param {*} keys
 */
const createFields = (fields, str = '') => {
  fields.forEach((item, index) => {
    if (isObject(item)) {
      const fieldKeys = Object.keys(item)
      fieldKeys.forEach((key, i) => {
        str += `${key}{`
        str += createFields(item[key])
        str += `}`
        if (i < fieldKeys.length - 1) {
          str += ",";
        }
      })
    } else {
      str += item;
    }
    if (index !== fields.length - 1) {
      str += ",";
    }
  });
  return str
}

/**
 * 创建符合GraphQL的查询字符串
 * @param {*} params
 */
const create = (queries, options = []) => {
  let query = '' + queries
  if (options.length > 0) {
    query += "{";
    options.forEach(({ operation = '', argument, fields }) => {
      if (operation && isArray(fields)) {
        query += operation;
        if (isObject(argument)) {
          query += "(";
          for (let key in argument) {
            const k = argument[key];
            if (isObject(k) && !isUndefined(k.type) && !isUndefined(k.value)) {
              switch (k.type) {
                case "String":
                  query += key + ':"' + k.value + '",';
              }
            } else {
              query += key + ":" + argument[key] + ",";
            }
          }
          query += ")";
        }
        query += `{${createFields(fields)}},`;
      }
    })
    query += '}'
  }
  return query
};


const createQuery = (options) => {
  return create('query', options)
}

const createMutation = (options) => {
  return create('mutation', options)
}

export default {
  query: createQuery,
  mutation: createMutation,
  version: 'v0.0.1'
}
