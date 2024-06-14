import { useState } from 'react'
import { Button } from '../../../../../components/button'

export function DropDownAppMenu() {
  const [open, setOpen] = useState(false)
  return (
    <div className="dropdown">
      <Button onClick={() => setOpen(!open)}>Menu</Button>

      {open && <h1>Aberto dropdown</h1>}
    </div>
  )
}
