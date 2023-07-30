import React from 'react'
import WarpText from '../WarpText/WarpText'
import Image from 'next/image'

type Props = {}

const IntroSection = (props: Props) => {
  return (
    <div className="h-screen w-screen max-h-screen max-w-screen overflow-clip">
      <div className="flex justify-center items-center ">
        <WarpText words={['आध्यात्म', 'ज्ञान', 'भक्ति', 'सद्भाव', 'शांति']} />
      </div>
      <div className="px-14 w-[80vw] flex flex-wrap gap-11">
        <div>
          <h2 className="text-xl font-semibold mt-12 mb-2 ">About</h2>
          <p className="text-wrap text-justify text-md tracking-widest leading-8">
            Spiritual GPT is a web app that generates answers for all the
            spiritual questions based on the {`user's`} choice of language and
            scripture. The app is built using GPT-3, a state-of-the-art language
            model developed by OpenAI. The model is trained on a large corpus of
            spiritual texts and is fine-tuned on the {`user's`} choice of
            language and scripture. The app is built by{' '}
            <a href="https://sunilband.netlify.app/" target="_blank">
              <span className="underline cursor-pointer">Sunil Band</span>
            </a>{' '}
            in his free time using his awesomeness.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-12 mb-2 ">Tech Stack</h2>
          <div className="mt-4 flex  gap-10">
            <span className="flex flex-col gap-2 justify-center items-center">
              <Image
                src="https://sunilband.netlify.app/_ipx/w_1200,q_75/https%3A%2F%2Fi.ibb.co%2F3vDj7JL%2FNext-js-900x0.png?url=https%3A%2F%2Fi.ibb.co%2F3vDj7JL%2FNext-js-900x0.png&w=1200&q=75"
                alt="firebase"
                height={100}
                width={100}
                className="rounded-full w-14 h-14 hover:scale-105 transition-all duration-300 ease-in-out"
              ></Image>
              <p className="text-md text-center ">Next.js</p>
            </span>

            <span className="flex flex-col gap-2 justify-center items-center">
              <Image
                src="https://sunilband.netlify.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FV3Fw2Ft%2FTypescript-logo-2020-svg.png&w=3840&q=75"
                alt="firebase"
                height={100}
                width={100}
                className="rounded-full w-14 h-14 hover:scale-105 transition-all"
              ></Image>
              <p className="text-md text-center">TypeScript</p>
            </span>

            <span className="flex flex-col gap-2 justify-center items-center">
              <Image
                src="https://sunilband.netlify.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FmD3rstb%2Fz8hzeszc9eb3sp3vp3qc.jpg&w=3840&q=75"
                alt="firebase"
                height={100}
                width={100}
                className="rounded-full w-14 h-14 hover:scale-105 transition-all"
              ></Image>
              <p className="text-md text-center">Tailwind CSS</p>
            </span>

            <span className="flex flex-col gap-2 justify-center items-center">
              <Image
                src="https://pbs.twimg.com/media/FxoIFVgagAE-gqB?format=png&name=4096x4096"
                alt="firebase"
                height={100}
                width={100}
                className="rounded-full w-14 h-14 hover:scale-105 transition-all"
              ></Image>
              <p className="text-md text-center">Shadcn/ui</p>
            </span>

            <span className="flex flex-col gap-2 justify-center items-center">
              <Image
                src="https://ionicacademy.com/wp-content/uploads/2017/06/firebase-circle.png"
                alt="firebase"
                height={100}
                width={100}
                className="rounded-full w-14 h-14 hover:scale-105 transition-all"
              ></Image>
              <p className="text-md text-center">Firebase</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroSection
