import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import taskRoutes  from './routes/taskRoute';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(taskRoutes);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});