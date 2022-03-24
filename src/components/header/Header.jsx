import React from 'react'
import { CTA } from './CTA'
import './Header.css'
import me from '../../assets/me.png'
import { HeaderSoical } from './HeaderSoical'

export const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sameh Dheir</h1>
        <h5 className='text-light'>FrontEnd Devloper && Reactjs Devloper</h5>
        <CTA />
        <HeaderSoical/>
        
        <div className="me">
          <img src={me} alt="Sameh Dheir Image" />
        </div>

        <a href="#contact" className='scroll__down'>Scrool Down</a>

      </div>
    </header>
  )
}
