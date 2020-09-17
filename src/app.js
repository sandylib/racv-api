import express from 'express'
import  cors  from 'cors'
import routes from './routes'
import { serverError, notFound } from './middleware'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/v1', routes)

app.use(notFound);
app.use(serverError);


export default app;