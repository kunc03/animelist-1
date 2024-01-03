'use client';

import { Copyright, CaretDoubleUp, FacebookLogo, LinkedinLogo, InstagramLogo, TelegramLogo, TwitterLogo, AppleLogo, AndroidLogo } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
// import InputSearch from "./inputSearch"

const Footer = () => {
  const scrollTop = () => {
    scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  const handlePage = () => {
    scrollTop();
  };

  return (
    <footer className=" bg-cyan-400 mt-10 bottom-0">
      <div className="flex justify-between items-center px-[8%] py-4 items-center mb-6">
        <Link href="/" className="text-2xl font-bold text-cyan-400 bg-cyan-950 py-1 px-2 rounded-lg">
          BAGANIME
        </Link>
        <div>
          <button onClick={handlePage} className="bg-cyan-950 border-2 border-cyan-400 text-cyan-400 p-1 rounded-lg hover:text-cyan-950 hover:bg-cyan-400 hover:border-cyan-950 transition ease-in-out">
            <CaretDoubleUp size={32} />
          </button>
          {/*<InputSearch />*/}
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-center">
          <div className="flex md:flex-row flex-col w-[90%] mb-2 md:items-center items-start justify-between">
            <div className="flex md:flex-row flex-col md:items-center items-start">
              <h1 className="font-bold">Follow Us</h1>
              <div className="grid grid-cols-5 gap-2 ml-2">
                <button className="hover:text-cyan-400 hover:bg-cyan-950 rounded-full p-1 transition ease-in-out">
                  <FacebookLogo size={30} />
                </button>
                <button className="hover:text-cyan-400 hover:bg-cyan-950 rounded-full p-1 transition ease-in-out">
                  <LinkedinLogo size={30} />
                </button>
                <button className="hover:text-cyan-400 hover:bg-cyan-950 rounded-full p-1 transition ease-in-out">
                  <InstagramLogo size={30} />
                </button>
                <button className="hover:text-cyan-400 hover:bg-cyan-950 rounded-full p-1 transition ease-in-out">
                  <TelegramLogo size={30} />
                </button>
                <button className="hover:text-cyan-400 hover:bg-cyan-950 rounded-full p-1 transition ease-in-out">
                  <TwitterLogo size={30} />
                </button>
              </div>
            </div>
            <div className="flex md:flex-row flex-col md:items-center items-start md:mt-0 mt-4">
              <h1 className="font-bold">Mobile App</h1>
              <div className="grid grid-cols-2 gap-2 ml-2">
                <button className="hover:text-cyan-400 hover:bg-cyan-950 rounded-full p-1 transition ease-in-out">
                  <AppleLogo size={30} />
                </button>
                <button className="hover:text-cyan-400 hover:bg-cyan-950 rounded-full p-1 transition ease-in-out">
                  <AndroidLogo size={30} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex border-t-4 border-cyan-950 w-[90%] justify-center ">
            <h1 className="flex justify-center items-center text-sm mt-2 mb-10">
              <Copyright size={15} />
              2023 Baganime® Global Inc
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
