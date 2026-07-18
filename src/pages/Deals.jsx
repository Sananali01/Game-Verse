import { useMemo } from 'react'
import { Helmet } from 'react-helmet-async'
import Catalog from '../components/Catalog'
import { games } from '../data/games'
import { accessories, consoles, gamingPCs, components } from '../data/catalog'

export default function Deals() {
  const deals = useMemo(() => [
    ...games.map((p) => ({ ...p, _type: 'games' })),
    ...accessories.map((p) => ({ ...p, _type: 'accessories' })),
    ...consoles.map((p) => ({ ...p, _type: 'consoles' })),
    ...gamingPCs.map((p) => ({ ...p, _type: 'gaming-pcs' })),
    ...components.map((p) => ({ ...p, _type: 'components' })),
  ].filter((p) => p.discount > 0).sort((a, b) => b.discount - a.discount), [])

  return (
    <>
      <Helmet><title>Deals — GameVerse</title></Helmet>
      <Catalog
        products={deals}
        type="games"
        eyebrow="Flash Sale"
        title="Deals & Offers"
        subtitle="Every discounted item in the store, sorted by the biggest savings first."
      />
    </>
  )
}
