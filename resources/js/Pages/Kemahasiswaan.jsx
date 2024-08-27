import NavbarComponent from "@/Components/NavbarComponent"
import Layout1 from "@/Layouts/Layout1"
import Layout2 from "@/Layouts/Layout2"
import Gradient from "../../../public/Assets/Gradient.svg"
import ArrowDown from "../../../public/Assets/ArrowDown.svg"

import { slides, opsi } from "../../../public/Assets/asset.js"
import Carousel from "@/Components/Carousel"
import Searchbar from "@/Components/Searchbar"
import FooterComponent from "@/Components/FooterComponent"
import Layout3 from "@/Layouts/Layout3"
import {Link} from '@inertiajs/react'


const Kemahasiswaan = () => {
  return (
    <>
      <div className="bg-darkFigma relative overflow-hidden z-0 text-white font-inter">
        <Layout1/>
        <NavbarComponent/>

        {/* Hero */}
            <div className="w-full min-h-screen flex flex-col items-center  text-center mb-32">
                <h4 className="font-normal text-[18px] mt-[387px] mb-[141px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, minima? <br />
                  Lorem ipsum dolor sit amet.
                </h4>
                <div className="flex gap-[65px]">
                  <div className="bg-white/20 py-3 px-[77px] w-[365px] h-[123px] rounded-xl"></div>
                  <div className="bg-white/20 py-3 px-[77px] w-[365px] h-[123px] rounded-xl"></div>
                  <div className="bg-white/20 py-3 px-[77px] w-[365px] h-[123px] rounded-xl"></div>
                </div>
            </div>

        {/* Galeri */}
            <div className="max-w-full flex flex-col w-full mx-auto mb-32">
                <div className="flex items-center justify-center mb-20">
                  <img src={ArrowDown} alt="" />
                </div>
                <div className="flex flex-col items-center mb-10">
                    <h1 className="font-bold text-[46px] mb-10 ">Lorem Ipsum</h1>
                    <h4 className="text-center font-normal text-[18px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, nihil? <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h4>
                </div>
        
                    
                    <Carousel>
                    {slides.map((name)=>(
                     
                      <img src={name.img} alt="" className=""/>
                      
                    ))}
                    </Carousel> 
                  <Layout2/>
          
            </div>

         {/* Kemahasiswaan */}
                
                
          <div className="w-full flex flex-col items-center  text-center mb-32">
                <div className="flex flex-col items-center mb-24">
                    <h1 className="font-bold text-[46px] mb-10 capitalize text-textColor">kemahasiswaan</h1>
                    <h4 className="text-center font-normal text-[18px] text-textColor">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, nihil? <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h4>
                </div>
                
                <div className="grid grid-cols-2 gap-[68px]" >
                {opsi.map((item,index) => (
                  <div className="bg-white/20 py-[36px] px-[59px] w-[598px] h-[388px] rounded-xl flex flex-col text-start" key={index}>
                    <h2 className="font-bold text-[34px] mb-3">{item.title}</h2>
                    <div className=" w-[480px] h-[160px]">
                      <h3 className="font-normal text-[22px]  text-[#BCBCBC] h-44">{item.keterangan}</h3>
                        <button> <Link href={item.path}>Jelajahi Kami </Link></button>                     
                    </div>
                  </div>
                ))}
                </div>
          </div>

          
          {/*Tugas Akhir*/}
          <div className="w-full flex flex-col items-center  text-center mb-32">
                <div className="flex flex-col items-center mb-24">
                    <h1 className="font-bold text-[46px] mb-10 capitalize">tugas akhir</h1>
                    <h4 className="text-center font-normal text-[18px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, nihil? <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </h4>
                </div>
                <Searchbar/>
          </div>
          <Layout3/>
          <FooterComponent/>
        </div>
    </>
  )
}

export default Kemahasiswaan
