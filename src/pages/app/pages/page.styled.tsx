import { useNavigate, useParams } from 'react-router-dom'

export function Item() {
  const navigate = useNavigate()
  const { proid } = useParams<{ proid: string }>()

  console.log(proid)

  return (
    <div>
      <span onClick={() => navigate(-1)}>Página Itens ID:{proid}</span>
    </div>
  )
}
