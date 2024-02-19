import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// Components 
import Card from './Card'
import ModalPecas from './modalPecas'

interface MainHome {
    search: string,
}

const MainHome: React.FC<MainHome> = ({search}) => {

    const [products, setProducts] = useState([])
    const [searchProducts, setSearchProducts] = useState([])
    const [visible, setVisible] = useState(false)


    useEffect(() => {

        const fetchProducts = async() => {
            const res = await fetch('http://localhost:3001/',{
                method:'GET',
                headers:{
                    'Origin': 'http://localhost:5173',
                    'Content-Type':'application/json'
                },
                mode:'cors'
            })

            const data = await res.json()

            setProducts(data)

            return 
        }

        fetchProducts()
    },[])

    useEffect(() => {
        console.log(products)
        if(search !== ''){
            const searchProducts = products.filter((product => product.nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(search.toLowerCase()))) 
            setSearchProducts(searchProducts)
            
        }else{
            setSearchProducts([])
        }
    },[search])

  return (
    <Main>
        <h1>Produtos:</h1>
        <Grid>
            {searchProducts.length > 0 ? (
                searchProducts.map((product) => <Card key={product.id} productUni={product} setVisible={setVisible} />)
            ) : (
                products.map((product) => <Card key={product.id} productUni={product} setVisible={setVisible} />)
            )}
        </Grid>
        <ModalPecas visible={visible} setVisible={setVisible}/>
    </Main>
  )
}

export default MainHome

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) ;
    grid-template-rows: 200px;
    gap: 10px;
`

const Main = styled.main`
    padding-left: 10px;
    float: left;
    border: 1px solid black;
    width: 85%;

    @media screen and (max-width:1670px) {
        width: 70%;
    }

    @media screen and (max-width:950px) {
        width: 60%;
    }

    @media screen and (max-width:900px) {
        width: 50%;
    }

`