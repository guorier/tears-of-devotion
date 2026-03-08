import '@/styles/globals.css'
import Menu from '@/components/ui/Menu'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>

        <Menu />

        {children}

      </body>
    </html>
  )
}