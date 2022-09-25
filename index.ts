import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { GetSomething, GetUsers } from './src/controllers/user_controller';
import { CONFIG } from './config';

const app: Express = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/api/something', GetSomething);

app.get('/api/users', GetUsers);


app.get('/', (req: Request, res: Response) => res.send("Fiuumber Server"));

app.listen(CONFIG.app.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.app.port}`);
});
