import React from 'react'
import { Icons } from './FooterMenus'
import ItemsFooter from './ItemsFooter'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    <div className='bg-gradient-to-b from-teal-200 to-teal-400 text-black rounded-tr-[2.5rem]'>
        <div className="px-16 py-20">
            <ItemsFooter/>
            <SocialLinks Icons={Icons}/>
        </div>
    </div>
  )
}

export default Footer