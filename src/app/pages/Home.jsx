import { useState } from 'react'
import { Hero } from '../../components/sections/Hero'
import { Planets } from '../../components/sections/Planets'
import { Astronauts } from '../../components/sections/Astronauts'
import { Missions } from '../../components/sections/Missions'
import { Galaxies } from '../../components/sections/Galaxies'
import { Facts } from '../../components/sections/Facts'
import { CTA } from '../../components/sections/CTA'
import { Modal } from '../../components/ui/Modal/Modal'

export function Home() {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <>
      <Hero />
      <Planets onSelect={setSelectedItem} />
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <Astronauts onSelect={setSelectedItem} />
          <Missions onSelect={setSelectedItem} />
        </div>
      </div>
      <Galaxies onSelect={setSelectedItem} />
      <Facts />
      <CTA />
      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  )
}
