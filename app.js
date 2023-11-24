let express = require('express');
let app = express();
let cors = require('cors');
let port = 3000;
require("./models")
app.use(express.json());
app.use(express.urlencoded({extended:true}));


let userRouter = require("./routes/user.routs")
app.use('/user',userRouter)

app.use(cors());
app.listen(port,()=>{
    console.log("app are running on port "+ port)
})
