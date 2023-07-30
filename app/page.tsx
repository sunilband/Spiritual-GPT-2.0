import Logo from '@/components/Logo/Logo'
import { Main } from '../components/MainSection/Main'
import type { Metadata } from 'next'
import FlowersBG from '@/components/Background/BG'

export const metadata: Metadata = {
  title: 'Spiritual GPT',
  description: 'Get spiiitual answers with the power of AI',
}

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-hidden">
      <Main />
      <Logo />
    </div>
  )
}
