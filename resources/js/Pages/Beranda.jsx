import React from 'react'
import NavbarComponent from '@/Components/NavbarComponent'
import FooterComponent from '@/Components/FooterComponent'

const Beranda = () => {
  return (
    <div>
        <NavbarComponent/>
        <div className='min-h-screen text-white bg-darkFigma'>
            Beranda
        </div>
        <FooterComponent/>
    </div>
  )
}

export default Beranda
