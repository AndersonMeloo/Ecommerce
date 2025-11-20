import express, { urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { mainRouter } from './routes/main'
import dotenv from 'dotenv'

dotenv.config()

const server = express()
const PORT = process.env.PORT || 5000

server.use(helmet())
server.use(cors())
server.use(urlencoded({ extended: true }))
server.use(express.json())

server.use(mainRouter)

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.BASE_URL}`)
    console.log(`Porta: ${PORT}`)
})