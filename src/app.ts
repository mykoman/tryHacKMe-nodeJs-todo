import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://0.0.0.0:27017/todoListDb');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
