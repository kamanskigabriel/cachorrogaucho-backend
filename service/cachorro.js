import RepositoryCachorro from "../repository/cachorro";

class ServiceCachorro{
    Buscar () {
        return RepositoryCachorro
    }
    Detalhe (id) {
        if (!id){
            throw new Error("Por favor informar o ID")
        }
        const cachorro = RepositoryCachorro.find(it => it.id === id)
        if(!cachorro){
            throw new Error(`ID ${id} do cachorro bro`)
        }
        return cachorro
    }

    Criar (nome, dono, idade, brinquedo) {
        if (!nome || !dono || !idade || !brinquedo) {
            throw new Error("Informa os dados do dog bro")
        }
        RepositoryCachorro.push({nome, dono, idade, brinquedo})
        return {nome, dono, idade, brinquedo}
    }

    Deletar (id) {
        if (!id) {
            throw new Error("Informa o ID bro")
        }
        RepositoryCachorro.splice(it => it.id === id, 1)
        return id
    }
}