import express from 'npm:express';
import { router } from './router/router.ts';
import './db/mongose.ts'
const app = express();

app.use(express.json());
app.use( express.urlencoded( { extended: true } ) );
app.use('/', router);

app.listen(8080, () => {
    console.log(`Server is running on http://localhost:8080`);
});