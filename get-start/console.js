// get-start/console.js

var { graphql, buildSchema } = require('graphql');

//定义schema
var schema = buildSchema(`
    type User{
        name: String
        sex: String
        intro: String
    }
    type Query {
        user:User
    }
`);

//定义服务端数据
var root= {
    user: {
        name: 'zhaiqianfeng',
        sex: '男',
        intro: '博主，专注于Linux,Java,nodeJs,Web前端:Html5,JavaScript,CSS3'
    }
};

graphql(schema, '{\
        user{\
            name\
            intro\
        }\
    }', root).then((response) => {
    console.log(response);
});