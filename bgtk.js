function Get_ResponseInfo()
{
    var ResponseHeaders;
    RequestHeaders = $response.headers;
    console.log(RequestHeaders);
}
//修改消息体
function Change_ResponseBody()
{
    var RespnseBodyData = $response.body
    RespnseBodyData = Json.parse(RespnseBodyData);
    console.log(RespnseBodyData);
   // RespnseBodyData["ExampleTree"] = "ExampleChangeTree";
    //$done({RespnseBodyData});//修改完成之后需要调用$done
}
