import styled from 'styled-components'
import { useState } from 'react'

// Components 
import AsideGlobal from "../../components/AsideGlobal"
import MainHome from "../../components/MainHome"

export const Home = () => {

  const [searchHome, setSearchHome] = useState('')

  return (
    <HomeDiv >
        <AsideGlobal setSearchHome={setSearchHome} />
        <MainHome search={searchHome} />
    </HomeDiv>
  )
}

const HomeDiv = styled.div`
    height: 89vh;
`

