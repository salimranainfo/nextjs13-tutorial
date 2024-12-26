import { ReactNode } from 'react'
import './globals.css'
interface Props {
  children: ReactNode
}

const layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>{children}</body>
    </html>
  )
}

export default layout
