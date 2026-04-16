import './globals.css'
export const metadata = { title: 'Ornamental Design & Fabrication LLC | Salt Lake City' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
