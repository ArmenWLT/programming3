let express = require("express");
let app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});

app.get("/anun/azganun/:anun", function(req, res){
   let name = req.params.anun;
   res.send("<h1>Hello " + name +"</h1>");
});
app.listen(3000, function(){
   console.log("Example is running on port 3000");
});


