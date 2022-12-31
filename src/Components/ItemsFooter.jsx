import React from 'react'
import Item from './Item'
import { PRODUCTS,RESOURCES ,COMPANY , SUPPORT ,Icons } from './FooterMenus'

const ItemsFooter = () => {
  return (
    <div className='flex justify-evenly mx-auto flex-col md:flex-row'>
        <Item Links={COMPANY} Title=" COMPANY"/>
        <Item Links={PRODUCTS} Title="PRODUCTS"/>
        <Item Links={RESOURCES} Title="RESOURCES"/>
        <Item Links={SUPPORT} Title="SUPPORT"/>
    </div>
  )
}

export default ItemsFooter