import { Helmet } from 'react-helmet-async'
import Catalog from '../components/Catalog'
import { consoles } from '../data/catalog'

export default function Consoles() {
  return (
    <>
      <Helmet><title>Consoles — GameVerse</title></Helmet>
      <Catalog
        products={consoles}
        type="consoles"
        eyebrow="Play Anywhere"
        title="Consoles"
        subtitle="Home consoles and handhelds from PlayStation, Xbox, Nintendo, and more."
      />
    </>
  )
}
