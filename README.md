# OBJ2GQL

JSON转GraphQL的query语句的前端函数库



## 使用

```JavaScript
import JSON2GQL from 'json2gql'

JSON2GQL.query(options: object)
```



#### Options

| 名称      | 说明     | 类型          | 示例                    |
| --------- | -------- | ------------- | ----------------------- |
| operation | 操作     | string        | "getUsers"              |
| argument  | 请求参数 | object        | {page: 1, pageSize: 10} |
| fields    | 请求字段 | array[string] | ["id", "name"]          |

#### Demo

```javascript
import JSON2GQL from 'json2gql'

// 获取含有用户id和name的列表
const query = JSON2GQL.query({
    operation: 'getUserList',
    argument: {
        page: 1,
        pageSize: 10
    },
    fields: ["id", "name"]
})

console.log(query)

// 输出
{"query":"{getUserList(page:1,pageSize:10,){id,name}}"}
```



## 未来

