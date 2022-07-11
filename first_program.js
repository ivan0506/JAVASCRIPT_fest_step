const http = require("http");
http.createServer(function(request,response){
    response.write("ps IvanJS! ") 
    response.write("ps JonhJS! ")
    response.end("Hello IvanJS!");
     
}).listen(3000, "127.0.0.1",function(){
    console.log("Сервер начал прослушивание запросов на порту 3000");
});