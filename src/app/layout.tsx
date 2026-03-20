import '@/styles/globals.css'
import Header from '@/layout/Header'
import Footer from '@/layout/Footer'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <div className="mobile-shell">
          <div className="mobile-shell__glow mobile-shell__glow--top" />
          <div className="mobile-shell__glow mobile-shell__glow--bottom" />
          <div className="mobile-shell__frame">
            <Header />
            <main className="mobile-shell__content">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
