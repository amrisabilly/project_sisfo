import FooterComponent from '@/Components/FooterComponent'
import NavbarComponent from '@/Components/NavbarComponent'
import React from 'react'

const Event = () => {
  return (
    <div>
      <NavbarComponent/>
        <div className='min-h-screen text-white bg-darkFigma'>
            Event
        </div>
        <FooterComponent/>
    </div>
  )
}

export default Event
