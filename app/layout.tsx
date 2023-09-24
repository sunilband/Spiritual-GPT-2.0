'use client'
import './globals.css'
import Navbar from '../components/Navbar/Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { Toaster } from '@/components/ui/toaster'
import { useEffect, useState } from 'react'
import dropdownContext from '../context/dropdownContext'
import userContext from '../context/userContext'
import historyContext from '../context/historyContext'

import { UserInterface } from '../context/userContext'
import { firebaseObject } from '../context/historyContext'

import clsx from 'clsx'
import Dailog from '@/components/Dailog/Dailog'
import { setCookie, parseCookies } from 'nookies'
import { getCookie } from '@/utils/getCookie'
import { COOKIE_KEYS } from '@/utils/cookieEnums'
import { useRouter, usePathname } from 'next/navigation'
import {
  set,
  ref,
  push,
  query,
  orderByChild,
  orderByKey,
  limitToLast,
  equalTo,
  onValue,
  orderByValue,
} from 'firebase/database'
import { db, app, auth, provider } from '../firebase/firebase'
import BG from '@/components/Background/BG'
import Favicon from 'react-favicon'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

// export const metadata: Metadata = {
//   title: 'Spiritual GPT',
//   description: 'Get all the spiritual answers with the power of AI',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const page = usePathname()
  // setting language and scripture state for Context
  const [language, setLanguage] = useState<string | null>('English')
  const [scripture, setScripture] = useState<string | null>(
    'Bhagavad Gita/ Hinduism',
  )
  // set user context state
  const [user, setUser] = useState<UserInterface | null>({
    email: '',
    image: '',
    name: '',
  })
  // set history context state
  const [history, setHistory] = useState<firebaseObject[] | null>(null)
  const checkUser = ['/']
  useEffect(() => {
    // checking if user in cookies
    const cookies = parseCookies()
    const data = cookies.user ? JSON.parse(cookies.user) : null
    if (data) {
      setUser({
        ...user,
        name: data.name,
        email: data.email,
        image: data.image,
      })
    }

    if (checkUser.includes(page)) {
      if (!data) {
        router.push('/login')
      }
    }
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const postsRef = query(
        ref(db, 'responses'),
        // limitToLast(6),
        orderByChild('email'),
        // @ts-ignore
        equalTo(user?.email),
      )
      try {
        onValue(postsRef, (snapshot) => {
          const fetchedData = snapshot.val()
          if (fetchedData == null) {
            setHistory(null)
            return
          }
          const tempArr = []
          for (var key in fetchedData) {
            if (fetchedData.hasOwnProperty(key)) {
              tempArr.push(fetchedData[key])
              setHistory(tempArr.reverse())
            }
          }
        })
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [user])

  return (
    <html lang="en" suppressHydrationWarning>
       <Head>
        <title>Spiritual GPT</title>
        <meta property="og:title" content="The Knowledge Of Spiritual Scriptures At Your FingerTips With The Power Of AI !" key="title" />
        {/* add faviceon */}
        {/* <Favicon url="/favicon.ico" /> */}
      </Head>
      <body className={clsx(inter.className)}>
        <userContext.Provider value={{ user, setUser }}>
          <historyContext.Provider value={{ history, setHistory }}>
            <dropdownContext.Provider
              value={{ language, setLanguage, scripture, setScripture }}
            >
              <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                <BG />
                <Navbar />
                {children}
                <Toaster />
              </ThemeProvider>
            </dropdownContext.Provider>
          </historyContext.Provider>
        </userContext.Provider>
      </body>
    </html>
  )
}
