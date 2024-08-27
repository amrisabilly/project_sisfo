import React, { useState, useEffect } from 'react';
import Search from "../../../public/Assets/Search.svg";
import { TugasAkhir } from '../../../public/Assets/asset';

const Searchbar = () => {
  const [activeSearch, setActiveSearch] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Mengambil 5 rekomendasi Tugas Akhir awal
    setRecommendations(TugasAkhir.slice(0, 5));
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();

    if (query === '') {
      setActiveSearch([]);
      return;
    }

    const filteredResults = TugasAkhir.filter(item =>
      item.namaTa.toLowerCase().includes(query) || item.nim.toLowerCase().includes(query)
    ).slice(0, 8);

    setActiveSearch(filteredResults);
  };

  return (
    <>
      <form>
        <div className='relative mb-20'>
        <input 
  type="search" 
  placeholder="Searching" 
  className="w-[927px] py-[17px] px-[37px] rounded-xl bg-white text-borderColor font-normal text-[22px] border-none focus:outline-none focus:ring-0" 
  onChange={handleSearch}
/>

          <img 
            src={Search} 
            alt="Search Icon" 
            className='absolute right-32 top-1/2 -translate-y-1/2 bg-white cursor-pointer'
          />
        </div>

        <div className='flex flex-col gap-9'>
          {activeSearch.length > 0 ? (
            activeSearch.map((item) => (
              <div key={item.id} className="bg-white/20 py-[12px] px-[77px] w-[1116px] h-auto rounded-xl text-start flex flex-col justify-center gap-2">
                <h2 className="font-bold text-[34px] capitalize">{item.namaTa}</h2>
                <h3 className="capitalize text-[22px] font-normal">NIM: {item.nim}</h3>
              </div>
            ))
          ) : (
            recommendations.length > 0 ? (
              recommendations.map((item) => (
                <div key={item.id} className="bg-white/20 py-[12px] px-[77px] w-[1116px] h-auto rounded-xl text-start flex flex-col justify-center gap-2">
                  <h2 className="font-bold text-[34px] capitalize">{item.namaTa}</h2>
                  <h3 className="capitalize text-[22px] font-normal">NIM: {item.nim}</h3>
                </div>
              ))
            ) : (
              <div className="text-center py-5">
                <h2 className="text-xl font-bold">Data tidak ada</h2>
              </div>
            )
          )}
        </div>
      </form>
    </>
  );
};

export default Searchbar;
