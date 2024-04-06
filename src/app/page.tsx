'use client'

import Image from "next/image";
import { useState } from "react";
import profilePic from '../../public/DefaultProfile.png';
import progressBar from '../../public/progress-bar.svg';
import chart from '../../public/chart.svg';
import intersect from '../../public/Intersect.svg';
import intersect2 from '../../public/Intersect2.svg';
import { useRouter } from 'next/navigation';


const SpinningLogo = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-customBlue">
      <Image
        src="/icon.svg"
        alt="StoryTech Logo"
        className="spinning-element"
        width={100}
        height={24}
        priority
      />
    </main>
  );
};

export default function Home() {
  // Set the timer that displays the default logo page for 2.5 seconds then displays the home page.
  const delayInMilliseconds = 2500;
  const [switchPage, setSwitchPage] = useState<boolean>(false);
  setTimeout(()=> {setSwitchPage(true)}, delayInMilliseconds);
  return (
    <>
      { switchPage ? <HomePage/> : <SpinningLogo/>}
    </>
  );
};

const HomePage = () => {
  const router = useRouter();
  return(
    <main className="flex min-h-screen flex-col gap-4 items-center p-4 pt-20 md:p-24 bg-backgroundColor">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 grid grid-cols-3 gap-4 pb-6 pt-8 w-full place-items-center bg-backgroundColor">
          <div className="flex flex-row items-center gap-2">
            <Image
              src={profilePic}
              alt="Profile Picture"
              className="border-1 border-blue-500 rounded-full"
              priority
              width={40}
              height={40}
            />
            <div>
              <p className="text-black">Welcome</p>
              <p className="font-bold text-black">Tunji.</p>
            </div>    
          </div>
          <Image
            src="/icon.svg"
            alt="StoryTech Logo"
            width={26}
            height={26}
            priority
          />
          <Image
            src="/toggle.svg"
            alt="Night Mode Toggle"
            className="mr-[-50px]"
            width={26}
            height={26}
            priority
          />
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center justify-between bg-blue-100 w-full h-10 rounded border border-primaryColor p-2">
          <Image
            src="/search-normal.svg"
            alt="Search Icon"
            width={18}
            height={18}
            priority
          />
          <input className='bg-blue-100 w-full h-full placeholder-text-500 text-black' type="search" name="searchBox" id="searchBox" placeholder="Search..." />
        </div>
      <div className="flex flex-col mt-3 gap-3 items-center w-full h-full">
        <div className="flex flex-row gap-3 justify-between shadow-lg bg-primaryColor w-full rounded border border-primaryColor p-6 pt-2 pb-2">
          <div className="flex flex-col justify-between">
            <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Image
                src="/teacher.svg"
                alt="Academic Icon"
                width={25}
                height={25}
                priority
                />
              <p className="text-lg font-semibold whitespace-nowrap">Academic Path</p>
            </div>
            <button className='p-2 bg-backgroundColor rounded border text-primaryColor text-sm' type="button">Continue</button>
          </div>

          <div className="flex flex-col justify-between align-end mr-[-26px] mb-[-9px]">
            <div className="flex flex-row items-center justify-end w-full">
            <p className="text-sm bg-blue-400 rounded border border-blue-400 mr-6">1/30</p>
            </div>
            <Image
                src={intersect}
                alt="Academic Icon"
                width={165}
                height={120}
                priority
                />
          </div>
        </div>

        <div className="flex flex-row gap-3 justify-between shadow-lg bg-primaryColor w-full rounded border border-primaryColor p-6 pt-2 pb-2">
          <div className="flex flex-col justify-between">
            <div className="flex flex-row gap-2 items-start justify-between w-full">
                <Image
                src="/message-programming.svg"
                alt="Academic Icon"
                width={25}
                height={25}
                priority
                />
              <p className="text-lg font-semibold whitespace-nowrap">High Tech Path</p>
            </div>
            <button className='p-2 bg-backgroundColor rounded border text-primaryColor text-sm' type="button">Continue</button>
          </div>

          <div className="flex flex-col justify-between align-end mr-[-24px] mb-[-10px]">
            <div className="flex flex-row items-center justify-end w-full">
            <p className="text-sm bg-blue-400 rounded border border-blue-400 mr-4">10/10</p>
            </div>
            <Image
                src={intersect2}
                alt="Academic Icon"
                className="mt-[-8px]"
                width={165}
                height={120}
                priority
                />
          </div>
        </div>
      </div>

      <div onClick={() => router.push('/hero-story')} className="flex flex-col gap-2 items-center rounded border border-primaryColor w-full cursor-pointer">
        <div className="relative flex flex-row gap-2 items-center justify-center w-full pl-2 pr-2 pt-2 ">
          <Image
            src="/icon.svg"
            alt="Hero Icon"
            width={18}
            height={18}
            priority
          />
          <p className="text-primaryColor text-lg font-bold">Hero Journey</p>
          <Image
            src="/pen-add.svg"
            alt="Hero Icon"
            className="absolute top-0 right-0 m-2"
            width={18}
            height={18}
            priority
          />
        </div>
        <div className="flex flex-col gap-1 items-start p-2">
          <div className="flex flex-row gap-1">
            <p className="text-primaryColor text-xs font-bold whitespace-nowrap iniline">Feb 02:</p>
            <p className="text-black text-xs iniline">Brain fried today! Finally wrapped my head around coding functions.
            </p>
          </div>
          <div className="flex flex-row gap-1">
            <p className="text-primaryColor text-xs font-bold whitespace-nowrap iniline">Feb 03:</p>
            <p className="text-black text-xs iniline">A few lines of code and suddenly the program knows what to do next!
            </p>
          </div>
          <div className="flex flex-row gap-1">
            <p className="text-primaryColor text-xs font-bold whitespace-nowrap iniline">Feb 04:</p>
            <p className="text-black text-xs inline">Learning the principle of User experience.
            </p>
          </div>
        </div>
      </div>

      <Image
            src={progressBar}
            alt="Progress Bar"
            className="w-full"
            priority
      />

      <Image
            src={chart}
            alt="Chart"
            className="w-full"
            priority
      />
    </main>
  );
};