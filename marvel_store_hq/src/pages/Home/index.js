import { MainStyled } from "./styles"
import RareCardList from "../../components/RareCardList"
import CardList from "../../components/CardList"

const Home = () => {
    return(
        <MainStyled>
            <RareCardList/>
            <CardList/>
        </MainStyled>
    )
}

export default Home