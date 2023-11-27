import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
          About
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
    </div>
  )
}
