import ContentCard from '../../components/contentPokemonCard/Cnt_card_pokemon'
import Content_type from '../../components/contentType/Content_type'
import './main.css'

function MainIndex() {
  return(
    <>
      {/* <Content_type /> */}
      <ContentCard start={1} end={151}/>
    </>
  )
}

export default MainIndex