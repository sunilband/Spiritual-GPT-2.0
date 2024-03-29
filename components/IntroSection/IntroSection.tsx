import React from 'react'
import WarpText from '../WarpText/WarpText'
import Image from 'next/image'

type Props = {}

const IntroSection = (props: Props) => {
  return (
    <div className="h-screen w-screen max-h-screen max-w-screen overflow-scroll-y">
      <div className="flex justify-center items-center ">
        <WarpText words={['आध्यात्म', 'ज्ञान', 'भक्ति', 'सद्भाव', 'शांति']} />
      </div>
      <div className="px-14  flex flex-wrap gap-11 h-[70vh] sm:h-auto pb-[6rem] pt-2 py-1 overflow-y-auto ">
        <div className="w-[90vw]">
          <h2 className="text-xl font-semibold  mb-2 sm:text-left text-center tracking-widest">
            About
          </h2>
          <p className="text-wrap text-justify text-md tracking-widest leading-8">
            Spiritual GPT is a web app that generates answers for all the
            spiritual questions based on the {`user's`} choice of language and
            scripture. The app is built using Gemini AI, a state-of-the-art language
            model developed by Google. The model is trained on a large corpus of
            spiritual texts and is fine-tuned on the {`user's`} choice of
            language and scripture. The app is built by{' '}
            <a href="https://sunilband.me" target="_blank">
              <span className="underline cursor-pointer">Sunil Band</span>
            </a>{' '}
            in his free time using his awesomeness.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-12 mb-2 sm:text-left text-center tracking-widest">
            Tech Stack
          </h2>
          <div className="mt-4 flex justify-evenly  flex-wrap gap-10 gap-y-24">
            <span className="flex flex-col gap-2 justify-center items-center  relative">
              <Image
                src="https://sunilband.netlify.app/_ipx/w_1200,q_75/https%3A%2F%2Fi.ibb.co%2F3vDj7JL%2FNext-js-900x0.png?url=https%3A%2F%2Fi.ibb.co%2F3vDj7JL%2FNext-js-900x0.png&w=1200&q=75"
                alt="firebase"
                height={100}
                width={100}
                className="rounded-full w-14 h-14 hover:scale-105 transition-all duration-300 ease-in-out "
              ></Image>
              <p className="text-md text-center absolute top-20">Next.js</p>
            </span>

            <span className="flex flex-col gap-2 justify-center items-center  relative ">
              <Image
                src="https://sunilband.netlify.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FV3Fw2Ft%2FTypescript-logo-2020-svg.png&w=3840&q=75"
                alt="typescript"
                height={100}
                width={100}
                className="rounded-full w-14 h-14 hover:scale-105 transition-all duration-300 ease-in-out"
              ></Image>
              <p className="text-md text-center absolute top-20">TypeScript</p>
            </span>

            <span className="flex flex-col gap-2 justify-center items-center relative">
              <Image
                src="https://sunilband.netlify.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FmD3rstb%2Fz8hzeszc9eb3sp3vp3qc.jpg&w=3840&q=75"
                alt="firebase"
                height={100}
                width={100}
                className="rounded-full w-14 h-14 hover:scale-105 transition-all duration-300 ease-in-out"
              ></Image>
              <p className="text-md text-center absolute top-20">
                Tailwind CSS
              </p>
            </span>

            <span className="flex flex-col gap-2 justify-center items-center relative">
              <Image
                src="https://pbs.twimg.com/media/FxoIFVgagAE-gqB?format=png&name=4096x4096"
                alt="firebase"
                height={100}
                width={100}
                className="rounded-full w-14 h-14 hover:scale-105 transition-all duration-300 ease-in-out"
              ></Image>
              <p className="text-md text-center absolute top-20">Shadcn/ui</p>
            </span>

            <span className="flex flex-col gap-2 justify-center items-center relative">
              <Image
                src="https://ionicacademy.com/wp-content/uploads/2017/06/firebase-circle.png"
                alt="firebase"
                height={100}
                width={100}
                className="rounded-full w-14 h-14 hover:scale-105 transition-all duration-300 ease-in-out"
              ></Image>
              <p className="text-md text-center absolute top-20">Firebase</p>
            </span>

            <span className="flex flex-col gap-2 justify-center items-center relative">
              <Image
                src="https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png"
                alt="firebase"
                height={100}
                width={100}
                className="rounded-full w-14 h-14 hover:scale-105 transition-all duration-300 ease-in-out bg-white p-2" 
              ></Image>
              <p className="text-md text-center absolute top-20">Express</p>
            </span>

            <span className="flex flex-col gap-2 justify-center items-center relative">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socket-io.svg/1024px-Socket-io.svg.png"
                alt="firebase"
                height={100}
                width={100}
                className="rounded-full w-14 h-14 hover:scale-105 transition-all duration-300 ease-in-out bg-white p-2" 
              ></Image>
              <p className="text-md text-center absolute top-20">Socket.io</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroSection
