"use client" // required since we have used new experimental /app directory
import { ChakraProvider } from "@chakra-ui/react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider></body>
    </html>
  )
}
