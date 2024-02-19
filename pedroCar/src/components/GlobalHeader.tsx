import styled from 'styled-components'
import { FaTruck } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa";

const GlobalHeader = () => {
  return (
    <Header>
      <FaTruck className='truck' />
      <h1>Pedro<span>Car</span></h1>
      <div className='location'>
        <FaMapPin /><p>Orleans - SC</p>
      </div>

    </Header>
  )
}

const Header = styled.header`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100px;
  border: 1px solid black;

  h1{
    color: blue;
  }

  span{
    color: white;
    -webkit-text-stroke: 2px #000;
  }

  .truck{
    font-size: 40px;
    color: blue;
  }

  .location{
    display: flex;
  }
`

export default GlobalHeader