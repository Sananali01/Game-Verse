import { Helmet } from 'react-helmet-async'
import Catalog from '../components/Catalog'
import { components } from '../data/catalog'

export default function Components() {
  return (
    <>
      <Helmet><title>PC Components — GameVerse</title></Helmet>
      <Catalog
        products={components}
        type="components"
        eyebrow="Upgrade Path"
        title="Components"
        subtitle="GPUs, CPUs, motherboards, and everything else inside the case."
      />
    </>
  )
}
