import { QrCode as ChakraQRCode } from '@chakra-ui/react'
import type { ComponentPropsWithoutRef } from 'react'

export type QRCodeProps = ComponentPropsWithoutRef<typeof ChakraQRCode.Root>

export const QRCodeRoot = ChakraQRCode.Root

export const QRCode = Object.assign(ChakraQRCode.Root, {
  ...ChakraQRCode,
})
