import express from 'express'
import RepositoryCachorro from '../repository/cachorro.js'

const router = express.Router()

//  Devera conter 5 coisas "CRUD"

//  ------------------------------------------------------------------------------------------

//  Buscar 1
    router.get('/buscar', (req, res) => {
        res.send({message : cachorro})
    })
//  ------------------------------------------------------------------------------------------

//  Buscar todos
    router.get('/detalhe/:id', (req,res)=>{
        const id = req.params.id
        const cachorro = cachorro.find( it === it.id === id)
        res.send({message : cachorro})
    })
//  ------------------------------------------------------------------------------------------

//  Criar
    router.post('/criar', (req,res) => {
        const {nome, dono, idade, brinquedo} = req.body
        if (!nome || !dono || !idade || !brinquedo){
            res.send({message: "Por favor, informar as quedencias do seu pet"})
            return
        }
        cachorro.push({nome, dono, idade, brinquedo})
        res.send({message : "Cadastro concluido com sucesso"})
    })
//  ------------------------------------------------------------------------------------------

//  Alterar
    router.put('/alterar', (req,res) => {

    })
//  ------------------------------------------------------------------------------------------

//  Deletar
    router.delete("/deletar", (req, res) => {
    const id = req.body.id

    carros.splice(it => it.id === id, 1)
    
    res.send({mensage : "Deletado"})
})
//  ------------------------------------------------------------------------------------------
export default router