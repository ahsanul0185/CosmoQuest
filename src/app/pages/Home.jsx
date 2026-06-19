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
      <Astronauts onSelect={setSelectedItem} />
      <Missions onSelect={setSelectedItem} />
      <Galaxies onSelect={setSelectedItem} />
      <Facts />
      <CTA />
      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  )
}
