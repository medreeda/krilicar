import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Layout from '../components/Layout/Layout'

export const metadata = {
  title: 'KriliCar',
  description: 'Discover world\'s best car showcase application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Layout>
            {children}
          </Layout>
        </body>
      </html>
    </ClerkProvider>
  )
}
