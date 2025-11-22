import express, { urlencoded } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { mainRouter } from './routes/main'
import dotenv from 'dotenv'
import { appConfig } from './config/app'

dotenv.config()

appConfig.validate();

const server = express()
const PORT = appConfig.port

server.use(helmet())
server.use(cors())
server.use(urlencoded({ extended: true }))
server.use(express.json())

server.use(mainRouter)

server.listen(PORT, () => {
    console.log(`Servidor Rodando: ${appConfig.baseURL}`)
    console.log(`Porta: ${PORT}`)
})