const express = require('express');
const cors = require('cors');
const app = express();
const main=require('./routes/main')

app.use(cors());
app.use(express.json());
app.use(main)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`);
});
