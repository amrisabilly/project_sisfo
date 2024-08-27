import React from 'react';
import LogoHima from '../../../public/Assets/LogoHimasisfo.svg';
import LogoIg from '../../../public/Assets/LogoIg.svg'
import LogoYt from '../../../public/Assets/LogoYt.svg'
import LogoSpotify from '../../../public/Assets/LogoSpotify.svg'
import LogoEmail from '../../../public/Assets/LogoEmail.svg'

const FooterComponent = () => {
  return (
    <div className='bg-white/10 h-[421px] w-full rounded-b rounded-[20px] border border-borderColor px-32 flex flex-col items-center justify-center gap-12 text-[16px] font-normal'>
      <div className='flex flex-row items-center justify-center w-full mt-10'>
        <div className='mr-10'>
          <img src={LogoHima} alt="" className='w-[167px] h-[167px]'/>
        </div>
        <div className='w-[261px] ms-1 flex flex-col'>
          <p>Kampus Unit II (Prodi Sistem Informasi) Jl. Babarsari 2, Janti, Caturtunggal, Depok, Sleman Regency, Special Region of Yogyakarta 55281</p>
          <div className='flex gap-4 mt-4'>
            <a href=""><img src={LogoIg} alt=""/></a>
            <a href=""><img src={LogoYt} alt="" /></a>
            <a href=""><img src={LogoSpotify} alt="" /></a>
            <a href=""><img src={LogoEmail} alt="" /></a>
          </div>
        </div>
        <div className='w-[261px] ms-10 flex flex-col gap-3'>
          <h4 className='font-bold'>Tautan Akademik</h4>
          <a href="https://spada.upnyk.ac.id/">Spada Wimaya</a>
          <a href="https://bima.upnyk.ac.id/">Bima</a>
          <a href="">AR-SI-P</a>
          <a href="">Lynk-Kesma</a>
        </div>
        <div className='gmap-frame mt-5'>
          <iframe
            title="Google Map"
            src="https://maps.google.com/maps?width=227&amp;height=356&amp;hl=en&amp;q=Sistem%20informasi%20upnyk+(upn%20maps)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="356"
            height="227"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className='w-full text-center'>
        <h4>Copyright © 2024 HIMASISFO - All rights reserved.</h4>
      </div>
    </div>
  );
};

export default FooterComponent;
