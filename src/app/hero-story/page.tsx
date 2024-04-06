'use client'

import Image from "next/image";
import boxIcon from '../../../public/box-icon.svg';
import screenshot from '../../../public/screenshot.svg';
import { useRouter } from 'next/navigation';


const HeroStory = () => {
    const router = useRouter();
    return(
      <main className="flex min-h-screen flex-col gap-4 items-center p-4 pt-20 md:p-24 bg-backgroundColor">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <div className="fixed left-0 top-0 grid grid-cols-3 gap-4 pb-6 pt-8 w-full place-items-center bg-backgroundColor">
            <Image
            src={boxIcon}
            alt="Profile Picture"
            priority
            width={35}
            height={35}
            />    
            <Image
              src="/icon.svg"
              alt="StoryTech Logo"
              onClick={() => router.push('/')}
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

        <div className="w-full h-10 p-2 flex flex-col gap-2 items-start">
            <p className="text-black text-3xl font-semibold whitespace-nowrap
            ">Don&apos;t Lose</p>
            <p className="text-black text-3xl font-semibold whitespace-nowrap">Your Balance</p>
            <p className="text-text-500 text-sm mt-[-10px]">Discover the perfect story for you.</p>
        </div>

        <div className="mt-16 w-full h-full flex flex-row gap-2 align-center justify-between">
            <p className="text-black font-semibold">Recent</p>
            <p className="text-black font-semibold">Popular</p>
            <p className="text-black font-semibold">FrontEnd</p>
            <p className="text-black font-semibold">Medicine</p>
            <p className="text-black font-semibold">Pharmacy</p>
        </div>

        <div className="flex flex-row align-start gap-3 p-2 h-full shadow-lg bg-primaryColor rounded-2xl border border-primaryColor">
            <p className="self-center font-semibold whitespace-nowrap">Welcome to the Future...</p>
            <Image
                  src={screenshot}
                  alt="Academic Icon"
                  priority
            />
        </div>

        <div className="flex flex-col align-center gap-2 w-full h-full p-2">
            <p className="text-black font-bold text-2xl">Description:</p>
            <p className="text-black text-xs">Dive into the World of User Experience (UX) and User Interface (UI) Design!</p>
            <p className="text-black text-xs">This course will equip you with the skills to create user-centered digital products and applications. You&apos;ll learn the fundamentals of UX/UI design, from understanding user needs to crafting beautiful and intuitive interfaces.</p>
            <p className="text-black text-xs">Here&apos;s what you&apos;ll learn:</p>
            <ul className="text-black text-xs list-disc pl-8">
                <li>The UX/UI Design Process: Master the design thinking approach, user research methods, and information architecture principles.</li>
                <li>Wireframing and Prototyping: Learn to create low-fidelity wireframes and interactive prototypes to test and refine your design ideas</li>
                <li>UI Design Principles: Understand visual design principles like typography, color theory, and  layout to create aesthetically pleasing and functional interfaces.</li>
                <li>Industry-Standard Tools: Get hands-on experience with popular UX/UI design tools like Figma, Sketch, or Adobe XD.</li>
            </ul>
        </div>

        <button className='p-2 w-full bg-primaryColor rounded border text-backgroundColor text-sm' type="button">Continue</button>
      </main>
    );
};

export default HeroStory;