require('dotenv').config();
const mongoose = require('mongoose')


mongoose.connect("mongodb://127.0.0.1:27017/wetube", { 
useNewUrlParser: true, 
useUnifiedTopology: true,
})

const db = mongoose.connection;



const handleError = (error) => {console.log("DB Error !", error)}
const handleOpen = () => { console.log(" ✅ Connected to DB !! ")}

//db 에러시 오류 출력.
db.on("error", handleError);

// on은 여러번 계속해서 발생시킴 (ex: 클릭)
// once는 한 번만 실행.
db.once("open", handleOpen )