import app from "./app.js";

app.listen(4000,()=>{
    console.log(`Server Listening  on port ${process.env.PORT}`);
})