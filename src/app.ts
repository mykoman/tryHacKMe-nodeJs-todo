import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { json } from 'body-parser';
import router from './routes/todos';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(json());

app.use('/todos', router);

mongoose.connect('mongodb://0.0.0.0:27017/todoListDb', { retryWrites: true, w: 'majority' });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
