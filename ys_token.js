function Get_Ys_Token()
{
    RequestHeaders = $request.headers;
    const Token = Headers["token"];
    console.log(RequestHeaders);
    console.log("Token");
    $persistentStore.write(Token, "Ys_Token");
    console.log("写入Ys Token成功:${Token}");
    $notification.post("写入Ys Token成功");
    
}
Get_Ys_Token();
