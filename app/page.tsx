'use client'

import dynamic from 'next/dynamic'

const ThreeScene = dynamic(() => import('@/components/ThreeScene'), { ssr: false })

export default function Home() {
  return (
    <main className="w-full h-screen">
      <ThreeScene />
    </main>
  )
}