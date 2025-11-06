import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Insurance Application - Easy & Fast',
  description: 'Get your property insured in just 5 minutes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''
  
  return (
    <html lang="en">
      <body>
        {googleMapsApiKey && (
          <Script
            src={`https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`}
            strategy="afterInteractive"
          />
        )}
        {children}
      </body>
    </html>
  )
}
