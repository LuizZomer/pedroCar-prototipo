import React, { useState } from 'react'
import styled from 'styled-components'

const AsideGlobal: React.FC<{setSearchHome: (search: string) => void}> = ({setSearchHome}) => {

  const [search, setSearch] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchHome(search.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
  }

  return (
    <Aside>
      <h2>Filtro:</h2>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder='Digite o nome da peça' onChange={(e) => setSearch(e.target.value)} />
        <button type='submit'>Pesquisar</button>
      </form>
    </Aside>
  )
}

export default AsideGlobal

const Aside = styled.aside`
    width: 250px;
    height: 100%;
    border: 1px solid black;
    float: left;
`