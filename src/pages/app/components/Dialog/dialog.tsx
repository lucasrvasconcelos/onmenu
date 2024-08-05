import * as Dialog from '@radix-ui/react-dialog'
import { NotepadText } from 'lucide-react'
import {
  SaveObservation,
  DialogContent,
  DialogOverlay,
  DiscartChange,
  ObservationContainer,
  DialogButtonsContainer,
  CountObservation,
  ObservationButton,
} from './dialog.styled'
import { GetProduct } from '../../../../api/get-product'

interface ObservationDialogProps {
  quantity: number
  product: GetProduct
  observationDescription: string
  handleObservationDescription: (observation: string, clear?: boolean) => void
}

export function ObservationDialog({
  product,
  quantity,
  observationDescription,
  handleObservationDescription,
}: ObservationDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ObservationButton>
          <NotepadText size={30} strokeWidth={2} />
        </ObservationButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <DialogOverlay>
            <Dialog.Content asChild>
              <DialogContent>
                <Dialog.Title>Alguma observação?</Dialog.Title>
                <Dialog.Description>
                  Esta observação irá valer para o produto:
                </Dialog.Description>
                <ObservationContainer>
                  <div>
                    {product.data?.description && (
                      <span>
                        {quantity} x {product.data.description}
                      </span>
                    )}
                  </div>
                  <textarea
                    placeholder="Ex: sem tomate e sem mostarda"
                    value={observationDescription}
                    onChange={(e) =>
                      handleObservationDescription(e.target.value)
                    }
                  ></textarea>
                  <CountObservation>
                    {observationDescription.length}/255
                  </CountObservation>
                </ObservationContainer>
                <DialogButtonsContainer>
                  <Dialog.Close asChild>
                    <SaveObservation>Salvar</SaveObservation>
                  </Dialog.Close>
                  <DiscartChange
                    onClick={() => handleObservationDescription('', true)}
                  >
                    Limpar
                  </DiscartChange>
                </DialogButtonsContainer>
              </DialogContent>
            </Dialog.Content>
          </DialogOverlay>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
