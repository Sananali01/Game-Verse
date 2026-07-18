import { Helmet } from 'react-helmet-async'
import Catalog from '../components/Catalog'
import { games } from '../data/games'

export default function Games() {
  return (
    <>
      <Helmet><title>Games — GameVerse</title></Helmet>
      <Catalog
        products={games}
        type="games"
        eyebrow="Full Library"
        title="Games"
        subtitle="30+ AAA titles across every genre, from open-world epics to competitive shooters."
      />
    </>
  )
}
