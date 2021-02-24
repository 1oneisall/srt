//console.log("test");
var body = response.body;
let obj = JSON.parse(body);
obj.data.is_super_vip = 1;
$done({body:JSON.stringify(obj)});
//var ResponseHeaders;
//RequestHeaders = $response.headers;
//console.log(RequestHeaders);
