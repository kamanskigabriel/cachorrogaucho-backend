import express from 'express'
import router from './router/cachorro'

const app = express

app.use(express.json())

app.use("/api/v1/cachorro", router)

app.listen(3000, () => {
    console.log("O servidor está na porta 3000")})