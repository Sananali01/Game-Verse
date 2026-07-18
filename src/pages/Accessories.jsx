import { Helmet } from 'react-helmet-async'
import Catalog from '../components/Catalog'
import { accessories } from '../data/catalog'

export default function Accessories() {
  return (
    <>
      <Helmet><title>Gaming Accessories — GameVerse</title></Helmet>
      <Catalog
        products={accessories}
        type="accessories"
        eyebrow="Gear Up"
        title="Gaming Accessories"
        subtitle="Mice, keyboards, headsets, chairs and everything else your setup is missing."
      />
    </>
  )
}
