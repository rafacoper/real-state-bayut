import office from "../app/assets/images/office.avif"
import Property from "./components/Property"
import { fetchSales } from "./hooks/fetchSales"
import { fetchRents } from "./hooks/fetchRents"
import Banner from "./components/Banner"

const Home = async () => {
  const propertiesForSales = await fetchSales()
  const propertiesForRents = await fetchRents()

  return (
    <div>
      <Banner
        purpose='BUY A HOME'
        title1=' Find, Buy & Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageLoad={office}
      >
        <div className="flex-wrap justify-center items-center m-3" >
          {propertiesForRents?.hits.map((property: any) => <Property property={property} key={property.id} />)}
        </div>
      </Banner>
      <Banner
        purpose='BUY A HOME'
        title1=' Find, Buy & Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageLoad={office}
      >
        <div className="flex-wrap justify-center items-center m-3" >
          {propertiesForSales?.hits.map((property: any) => <Property property={property} key={property.id} />)}
        </div>
      </Banner>
    </div>
  )
}

export default Home;