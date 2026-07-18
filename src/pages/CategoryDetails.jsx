import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Catalog from '../components/Catalog'
import { games } from '../data/games'

export default function CategoryDetails() {
  const { genre } = useParams()
  const matches = games.filter((g) => g.genre === genre || g.tags?.includes(genre))

  return (
    <>
      <Helmet><title>{genre} Games — GameVerse</title></Helmet>
      <Catalog
        products={matches}
        type="games"
        eyebrow="Category"
        title={`${genre} Games`}
        subtitle={`Every ${genre.toLowerCase()} title currently available on GameVerse.`}
      />
    </>
  )
}
