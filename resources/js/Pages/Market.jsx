import FooterComponent from '@/Components/FooterComponent'
import NavbarComponent from '@/Components/NavbarComponent'
import React from 'react'

const Market = () => {
  return (
    <div>
      <NavbarComponent/>
        <div className='min-h-screen text-white bg-darkFigma'>
            Market
        </div>
        <FooterComponent/>
    </div>
  )
}

export default Market
