'use client'
import { useState, useEffect } from 'react'

const box = { border: '2px', backgroundColor: '#fff', padding: '12px', margin: '15px' }

const page = () => {
  const [now, setNow] = useState(null)

  useEffect(() => {
    setNow(new Date())
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div style={box}>
      <h2 style={{ marginTop: 0 }}>Current Time (IST)</h2>
      {!now ? (
        <p>Loading...</p>
      ) : (
        <>
          <p style={{ fontSize: '32px', fontFamily: 'Courier New, monospace', margin: '10px 0' }}>
            {now.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
          <p>
            {now.toLocaleDateString('en-IN', {
              timeZone: 'Asia/Kolkata',
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </>
      )}
    </div>
  )
}

export default page
