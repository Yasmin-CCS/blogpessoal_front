import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { useEffect, useState } from "react";
import Usuario from "../../models/Usuario";
import { buscaId } from "../../service/Service";

export default function Perfil() {
  const token = useSelector<TokenState, TokenState["token"]>(
    (state) => state.token
  );
  
  const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
  )

  const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    nome: '',
    usuario: '',
    senha: '',
  })

  async function getUserById(id: number) {
    await buscaId(`/usuarios/${id}`, setUsuario, {
      headers: { Authorization: token }
    })
  }
  useEffect(() => {
    getUserById(+userId)
  }, [])
  
  return (
    <>
    </>
  )

}