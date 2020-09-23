
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.JSON2GQL = factory());
}(this, (function () { 'use strict';

  /**
   * 判断是否对象
   *
   * @param {object} object 要判断的对象
   * @return {bool}
   */
  var isObject = function isObject(obj) {
    if (obj) {
      return Object.prototype.toString.call(obj) === "[object Object]";
    }

    return false;
  };
  /**
   * 判断是否为undefined
   *
   * @param {any} value 要判断的值
   * @return {bool}
   */

  var isUndefined = function isUndefined(value) {
    return typeof value === "undefined";
  };

  /**
   * 递归创建查询内容
   * @param {*} keys
   */

  var createKeys = function createKeys(keys) {
    var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    keys.forEach(function (item, index) {
      if (isObject(item)) {
        str += "".concat(item.field, "{");
        str += createKeys(item.keys);
        str += "}";
      } else {
        str += item;
      }

      if (index !== keys.length - 1) {
        str += ",";
      }
    });
    return str;
  };
  /**
   * 创建符合GraphQL的查询字符串
   * @param {*} params
   */


  var createQuery = function createQuery(_ref) {
    var _ref$params = _ref.params,
        params = _ref$params === void 0 ? {} : _ref$params,
        _ref$keys = _ref.keys,
        keys = _ref$keys === void 0 ? [] : _ref$keys;
    var query = "";

    if (fun && isArray(keys)) {
      query = "{query" + fun;

      if (isObject(params)) {
        query += "(";

        for (var key in params) {
          var k = params[key];

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

      query += "{".concat(createKeys(keys), "}}");
    }

    return query;
  };

  var main = {
    query: createQuery,
    version: 'v0.0.1'
  };

  return main;

})));
