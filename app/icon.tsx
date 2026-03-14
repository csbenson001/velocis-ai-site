import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{
        width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'linear-gradient(135deg, #0066ff, #00d4ff)', borderRadius: 6,
      }}>
        <span style={{ color: 'white', fontSize: 18, fontWeight: 900, fontFamily: 'sans-serif' }}>V</span>
      </div>
    ),
    { ...size }
  )
}
