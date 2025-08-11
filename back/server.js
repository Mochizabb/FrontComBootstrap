import express from 'express'
import dotenv from 'dotenv'
import publicRoute from './routes/PublicRoutes.js'

const app = express()
app.use(express.json())

app.use('/', publicRoute)


const PORT = 3333

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})