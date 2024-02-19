import { FC, useContext } from "react"
import styled from 'styled-components'
import { TbLetterX } from "react-icons/tb";

import { ProductContext } from "../context/ProductContext"

interface ModalPecasProps {
  visible: boolean
  setVisible: (Visible: boolean) => void;
}

const ModalPecas: FC<ModalPecasProps> = ({visible, setVisible}) => {

  const {product} = useContext(ProductContext)

  const handleClick = () => {
    setVisible(false)
  }

  if(visible === false){
    return null
  }

  return (
    <ModalOverlay>
      <ModalArea>
        <TbLetterX className="x" onClick={handleClick} />
        {product && <h1>{product.nome}</h1>}
        {product && <p>{product.descricao}</p>}
        <GreenButton onClick={() => console.log("Botão clicado")}>Reservar peça</GreenButton>
      </ModalArea>
    </ModalOverlay>
  )
}

const ModalArea = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  .x{
    cursor: pointer;
  }
`

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

const GreenButton = styled.button`
  background-color: #4caf50; /* Cor verde clara */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049; /* Cor verde um pouco mais escura ao passar o mouse */
  }
`;

export default ModalPecas