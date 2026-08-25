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

//  ------------------------------------------------------------------------------------------

//  Alterar

//  ------------------------------------------------------------------------------------------

//  Deletar

//  ------------------------------------------------------------------------------------------
export default router