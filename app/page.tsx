'use client'

import dynamic from 'next/dynamic'

// Import ThreeScene dynamically to avoid SSR issues
const ThreeScene = dynamic(() => import('@/components/ThreeScene'), { ssr: false })

export default function Home() {
  return (
    <main className="w-full h-screen">
      <ThreeScene />
    </main>
  )
}