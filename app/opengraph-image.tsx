import { ImageResponse } from 'next/og'
import { fontSans } from '@/lib/font'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'About Quantum One'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/jpg'
 
// Image generation
export default async function Image() {
  // Font
  
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div className="flex text-lg text -justified font-sans items-center"
        
        
      >
        About Quantum One
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
    }
  )
}
