import FooterComponent from '@/Components/FooterComponent'
import NavbarComponent from '@/Components/NavbarComponent'
import React from 'react'

const Tentang = () => {
  return (
    <div>
      <NavbarComponent/>
        <div className='min-h-screen text-white bg-darkFigma'>
            Tentang
        </div>
        <FooterComponent/>
    </div>
  )
}

export default Tentang
