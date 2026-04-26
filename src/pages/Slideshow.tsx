import { useState, useEffect, useRef } from 'react'

interface CatImage {
  id: string
  url: string
}

export default function Slideshow() {
  const [images, setImages] = useState<CatImage[]>([])
  const [index, setIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
      .then(res => res.json())
      .then((data: CatImage[]) => {
        setImages(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (playing && images.length > 0) {
      intervalRef.current = setInterval(() => {
        setIndex(i => (i + 1) % images.length)
      }, 5000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [playing, images.length])

  if (loading) return <main><p>Loading cat images...</p></main>
  if (error || images.length === 0) return <main><p>Failed to load images. Please try again.</p></main>

  const current = images[index]

  const btnStyle: React.CSSProperties = {
    padding: '0.5rem 1rem',
    margin: '0 0.25rem',
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  }

  return (
    <main>
      <h2>Cat Slideshow</h2>
      <p>Images fetched from <a href="https://thecatapi.com" target="_blank" rel="noreferrer">The Cat API</a>.</p>
      <div style={{ textAlign: 'center' }}>
        <div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
          <img
            src={current.url}
            alt={`Cat ${index + 1} of ${images.length}`}
            style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '8px' }}
          />
        </div>
        <p style={{ marginBottom: '1rem' }}>{index + 1} / {images.length}</p>
        <div>
          <button style={btnStyle} onClick={() => setIndex(0)} disabled={index === 0}>First</button>
          <button style={btnStyle} onClick={() => setIndex(i => Math.max(0, i - 1))} disabled={index === 0}>Previous</button>
          <button style={{ ...btnStyle, backgroundColor: playing ? '#dc2626' : '#16a34a', color: '#fff', border: 'none' }} onClick={() => setPlaying(p => !p)}>
            {playing ? 'Stop' : 'Play'}
          </button>
          <button style={btnStyle} onClick={() => setIndex(i => Math.min(images.length - 1, i + 1))} disabled={index === images.length - 1}>Next</button>
          <button style={btnStyle} onClick={() => setIndex(images.length - 1)} disabled={index === images.length - 1}>Last</button>
        </div>
      </div>
    </main>
  )
}
