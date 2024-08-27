import NavbarComponent from "@/Components/NavbarComponent";
import ArrowDrop from '../../../public/Assets/ArrowDrop.svg';
import ArrowUp from '../../../public/Assets/ArrowUp.svg';
import React, { useState } from "react";
import Layout1 from "@/Layouts/Layout1";
import FooterComponent from "@/Components/FooterComponent";
import { Information } from '../../../public/Assets/asset.js';
import Layout2 from "@/Layouts/Layout2";


const AssetInformasi = () => {
    const [openItems, setOpenItems] = useState({});
  
    const clickItem = (index) => {
      setOpenItems((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    };
  
    return (
      <>
        {Information.map((item, index) => (
          <div key={index} className="mt-24 gap-[60px] px-2 w-full text-textColor font-inter">
            <div
              className="bg-white/10 rounded-[20px] z-40 border-2 border-borderColor py-[29px] px-[45px] flex justify-between items-center cursor-pointer mb-20"
              onClick={() => clickItem(index)}
            >
              <h1 className="text-[46px] font-bold">{item.name}</h1>
              <img
                src={ArrowDrop}  
                alt="Toggle"
                className="cursor-pointer"
                onClick={() => clickItem(index)} 
              />
            </div>
  
            {openItems[index] && (
              <div className="bg-white/10 rounded-[20px] border-2 border-borderColor py-[29px] px-[45px] flex flex-col mt-4">
                <div className="flex justify-between items-center">
                  <h1 className=" font-inter text-[46px] font-bold">{item.name}</h1>
                  <img
                    src={openItems[index] ? ArrowUp : ArrowDrop} 
                    alt="Toggle"
                    className="cursor-pointer"
                    onClick={() => clickItem(index)} 
                  />
                </div>
                <ul className="list-decimal text-[34px] font-normal mt-4 ms-10" style={{ listStylePosition: 'outside' }}>
                  {item.keterangan.map((detail, idx) => (
                    <li key={idx}>
                      {typeof detail === 'string' ? (
                        detail
                      ) : (
                        <>
                          <span>{detail.text} </span>
                          <a
                            href={detail.link}
                            className="text-blue-500 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {detail.link}
                          </a>
                          {' '}{detail.textLanjut}
                          <ul className="list-disc ml-6 text-[34px] font-normal mt-2">
                            {detail.subList.map((subDetail, subIdx) => (
                              <li key={subIdx} className="ms-7">{subDetail}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </>
    );
  };
  




const Pelayanan = () => {
  return (
    <div>
      <div className="bg-darkFigma relative overflow-hidden z-0 text-textColor">
        <Layout1 />
        <Layout2 />
        <NavbarComponent />
        <div className="flex flex-col items-center min-h-screen">
          <h1 className="text-[46px] font-bold mt-[307px] mb-4">Pelayanan Administrasi</h1>
          <h4 className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <h4 className="text-lg">Lorem ipsum dolor sit.</h4>
        </div>
        <div className="px-32 mb-44">
          <AssetInformasi />
        </div>
        <FooterComponent />
      </div>

    </div>
  )
}

export default Pelayanan
