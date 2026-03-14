import { ImageResponse } from 'next/og'

export const alt = 'Velocis AI — AI at Velocity'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        background: '#0a0e1a', fontFamily: 'sans-serif',
      }}>
        <div style={{ fontSize: 80, fontWeight: 900, color: '#0066ff', letterSpacing: '0.05em' }}>VELOCIS AI</div>
        <div style={{ fontSize: 32, color: '#00d4ff', marginTop: 16 }}>AI at Velocity</div>
      </div>
    ),
    { ...size }
  )
}
