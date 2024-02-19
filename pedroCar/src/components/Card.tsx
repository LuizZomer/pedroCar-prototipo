import React, { useContext, useEffect } from "react"
import styled from 'styled-components'
import { ProductContext } from "../context/ProductContext";

interface Product {
    id:number;
    nome:string;
    imageCode: string
}

interface SetVisible{
  setVisible: (Visible: boolean) => void;
}

const Card: React.FC<{productUni: Product, SetVisible: setVisible }> = ({productUni, setVisible}) => {

  const {setProduct} = useContext(ProductContext)

  const handleClick = () => {
    setProduct(productUni)
    setVisible(true)
  }

  useEffect(() => {
    console.log(productUni)
  }, [])

  return (
    <CardArea onClick={handleClick}>
        <h3>{productUni.nome}</h3>
        <img width={150} height={150} src={productUni.imageCode} alt={productUni.nome} />
    </CardArea>
  )
}

const CardArea = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    &:hover{
      transform: scale(1.03);
      cursor: pointer;
    }
`



export default Card