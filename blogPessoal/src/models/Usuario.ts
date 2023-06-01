import Postagem from "./Postagem"

interface Usuario {
  id: number
  nome: string
  usuario: string
  senha: string
  podtagem?:Postagem[]

}

export default Usuario