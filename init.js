import "regenerator-runtime";
import "dotenv/config";
import "./db.js";
import "./src/models/Video.js";
import "./src/models/User.js";
import app from "./app.js";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅ Server listenting on http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);