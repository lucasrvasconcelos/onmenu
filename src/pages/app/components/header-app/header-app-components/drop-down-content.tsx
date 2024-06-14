import { DropDownButton, DropDownWrapper } from './drop-down-content.styled'

export function DropDownContent() {
  return (
    <DropDownWrapper>
      <DropDownButton>Inicio</DropDownButton>
      <DropDownButton>Meus pedidos</DropDownButton>
      <DropDownButton>Configurações</DropDownButton>
    </DropDownWrapper>
  )
}
