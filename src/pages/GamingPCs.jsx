import { Helmet } from 'react-helmet-async'
import Catalog from '../components/Catalog'
import { gamingPCs } from '../data/catalog'

export default function GamingPCs() {
  return (
    <>
      <Helmet><title>Gaming PCs — GameVerse</title></Helmet>
      <Catalog
        products={gamingPCs}
        type="gaming-pcs"
        eyebrow="Build Your Rig"
        title="Gaming PCs"
        subtitle="Desktops, laptops, and mini PCs — or configure a fully custom build."
      />
    </>
  )
}
