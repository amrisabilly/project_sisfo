import FooterComponent from '@/Components/FooterComponent'
import NavbarComponent from '@/Components/NavbarComponent'
import React from 'react'

const Informasi = () => {
  return (
    <div>
      <NavbarComponent/>
        <div className='min-h-screen text-white bg-darkFigma'>
            Informasi
        </div>
        <FooterComponent/>
    </div>
  )
}

export default Informasi
