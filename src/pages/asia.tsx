import { NextPage } from "next";
import { ContinentBanner } from "../components/ContinentBanner";
import { ContinentCities } from "../components/ContinentCities";
import { ContinentDescription } from "../components/ContinentDescription";
import { Header } from "../components/Header";
import { continentDescriptions } from '../utils/continentsInfo'

const Asia: NextPage = () => {
  const continent = continentDescriptions.find(continent => continent.name === 'asia')

  return (
    <>
      <Header isHome={false} />
      <ContinentBanner backgroundUrl="/europeBanner.png" continentName="Ásia" />
      <ContinentDescription description={continent?.text} />
      <ContinentCities cities={continent?.cities} />
    </>
  )
}

export default Asia