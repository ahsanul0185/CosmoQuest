import { planetData } from './planetData'
import { astronautData } from './astronautData'
import { missionData } from './missionData'
import { galaxyData } from './galaxyData'
import { factData } from './factData'

export const spaceData = [
  ...planetData.map((item) => ({ ...item, category: 'planets', searchName: item.name })),
  ...astronautData.map((item) => ({ ...item, category: 'astronauts', searchName: item.name })),
  ...missionData.map((item) => ({ ...item, category: 'missions', searchName: item.name })),
  ...galaxyData.map((item) => ({ ...item, category: 'galaxies', searchName: item.name })),
  ...factData.map((item) => ({
    ...item,
    category: 'facts',
    searchName: item.label,
    name: item.label,
    description: item.text,
    image: '/hero.png',
    details: [
      { label: 'Category', value: 'Cosmic Fact' },
      { label: 'Source', value: 'CosmoQuest Database' },
    ],
    funFact: item.text,
  })),
]

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'planets', label: 'Planets' },
  { id: 'astronauts', label: 'Astronauts' },
  { id: 'missions', label: 'Missions' },
  { id: 'galaxies', label: 'Galaxies' },
  { id: 'facts', label: 'Facts' },
]
