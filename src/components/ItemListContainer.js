import React from 'react'

const ItemListContainer = ({children,nombre}) => {
      return (
    <h1>Bienvenido {nombre} {children}</h1>
  )
}
export default ItemListContainer
