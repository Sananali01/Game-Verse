import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import Catalog from '../components/Catalog'
import { games } from '../data/games'
import { accessories, consoles, gamingPCs, components } from '../data/catalog'

export default function Shop() {
  const allProducts = useMemo(() => [
    ...games.map((p) => ({ ...p, _type: 'games' })),
    ...accessories.map((p) => ({ ...p, _type: 'accessories' })),
    ...consoles.map((p) => ({ ...p, _type: 'consoles' })),
    ...gamingPCs.map((p) => ({ ...p, _type: 'gaming-pcs' })),
    ...components.map((p) => ({ ...p, _type: 'components' })),
  ], [])

  return (
    <>
      <Helmet><title>Shop All — GameVerse</title></Helmet>
      <Catalog
        products={allProducts}
        type="games"
        eyebrow="Everything"
        title="Shop All"
        subtitle="Every game, console, PC and accessory in the GameVerse catalog, in one place."
      />
    </>
  )
}
