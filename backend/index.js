import express from "express";
import cors from "cors";
import Main from './routes/Main.js'
const app = express()


app.use(cors());
app.use(express.json());
app.use(Main);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`);
});
