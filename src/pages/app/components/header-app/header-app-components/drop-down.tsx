import { useEffect, useRef, useState } from 'react'
import { Button } from '../../../../../components/button'
import { DropDownContent } from './drop-down-content'

export function DropDownAppMenu() {
  const [open, setOpen] = useState(false)
  const dropdownref = useRef<HTMLDivElement>(null)

  function closeDropdown() {
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownref.current &&
        !dropdownref.current.contains(event.target as Node)
      ) {
        closeDropdown()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div ref={dropdownref}>
      <Button
        onClick={() => setOpen(!open)}
        variant={open ? 'active' : 'default'}
      >
        Menu
      </Button>

      {open && <DropDownContent />}
    </div>
  )
}
