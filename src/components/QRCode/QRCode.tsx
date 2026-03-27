import { QrCode as ChakraQRCode } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type QRCodeProps = ComponentPropsWithoutRef<typeof ChakraQRCode.Root>
type QRCodeComponent = typeof ChakraQRCode.Root & typeof ChakraQRCode

export const QRCodeRoot = ChakraQRCode.Root

export const QRCode: QRCodeComponent = Object.assign(ChakraQRCode.Root, {
  ...ChakraQRCode,
})
