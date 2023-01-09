const mydb = require('./db');
const Video = require('./src/models/Video');
const User = require('./src/models/User');
const app = require('./app');


const PORT = 4000;

const handleListening = () =>
 {console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀`);}


 app.listen(PORT, handleListening);