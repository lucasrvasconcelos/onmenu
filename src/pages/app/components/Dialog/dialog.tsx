import * as Dialog from '@radix-ui/react-dialog'
import { Observation } from '../../pages/Item/page.styled'
import { PencilLine } from 'lucide-react'
import {
  SaveObservation,
  DialogContent,
  DialogOverlay,
  DiscartChange,
  ObservationContainer,
  DialogButtonsContainer,
  CountObservation,
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
        <Observation type="button">
          <PencilLine />
        </Observation>
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
