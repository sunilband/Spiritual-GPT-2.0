import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import { history } from './data'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import userContext from '@/context/userContext'
import historyContext from '@/context/historyContext'
import { useContext } from 'react'
import { ThemeButton } from '../ThemeButton/ThemeButton'
import { Button } from '../ui/button'
import { signOut } from 'firebase/auth'
import { auth, provider } from '../../firebase/firebase'
import { destroyCookie } from 'nookies'
import { COOKIE_KEYS } from '@/utils/cookieEnums'
import Avatar from 'react-avatar'
import { usePathname } from 'next/navigation'
import Dailog from '../Dailog/Dailog'
import { useRouter } from 'next/navigation'
import { set } from 'firebase/database'
function Navbar() {
  const page = usePathname()
  const router = useRouter()
  const routes = ['/login', '/signup']
  const hideLogoRoutes = ['/login', '/signup', '/']
  const { setUser, user } = useContext(userContext)
  const { history, setHistory } = useContext(historyContext)
  const [dailogData, setDailogData] = React.useState({
    question: '',
    answer: '',
    time: '',
    scripture: '',
    language: '',
  })
  const [openValue, setOpenValue] = React.useState(false)

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
        destroyCookie(null, COOKIE_KEYS.User, {
          path: '/',
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="flex justify-center items-center absolute left-0 right-0 z-50">
      {!hideLogoRoutes.includes(page) && (
        <div className="absolute left-10 saman text-2xl invisible sm:visible">
          <Link href={user?.email !== '' ? '/' : '/login'}>
            <p
              onClick={() => {
                user?.email !== '' ? router.push('/') : router.push('/login')
              }}
              className="cursor-pointer"
            >
              Spiritual GPT
            </p>
          </Link>
        </div>
      )}

      {history ? (
        <Dailog
          question={dailogData.question}
          answer={dailogData.answer}
          time={dailogData.time}
          scripture={dailogData.scripture}
          language={dailogData.language}
          openValue={openValue}
          setOpenValue={setOpenValue}
        />
      ) : null}

      <NavigationMenu className="h-16">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
              Getting started
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="card grid gap-3 p-6 border w-[340px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
                {user?.email !== '' && page !== '/' && (
                  <div className="md:hidden ">
                    <Link href="/">
                      <ListItem title="Home">
                        Experience the power of Spiritual GPT.
                      </ListItem>
                    </Link>
                  </div>
                )}
                <Link href="/introduction">
                  <ListItem title="Introduction">
                    Get to know the basic usage of Spiritual GPT.
                  </ListItem>
                </Link>
                <Link href="/privacy">
                  <ListItem title="Privacy Policy">
                    Read the privacy policy before using Spiritual GPT.
                  </ListItem>
                </Link>
                <Link
                  href="https://sunilband.netlify.app/#contact"
                  target="_blank"
                >
                  <ListItem title="Contact">
                    Contact us for any questions or concerns.
                  </ListItem>
                </Link>

                <Link href="https://sunilband.netlify.app/" target="_blank">
                  <ListItem title="About Developer">
                    Get to know more about the developer and his work.
                  </ListItem>
                </Link>

                <Link
                  href="https://buy.stripe.com/9AQ7vF3kjedO17G3cd"
                  target="_blank"
                >
                  {' '}
                  <div className="lg:w-[240%] flex justify-center">
                    <Button variant="outline" className="w-[100%]">
                      Buy me a Coffee
                    </Button>
                  </div>
                </Link>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* signup/login */}
          {user?.email == '' ? (
            <Link
              href={
                page == '/login'
                  ? '/signup'
                  : page == '/signup'
                  ? '/login'
                  : '/login'
              }
            >
              <NavigationMenuItem>
                <p className="text-sm text-center hover:underline cursor-pointer">
                  {page == '/login'
                    ? 'Signup'
                    : page == '/signup'
                    ? 'Login'
                    : 'Login'}
                </p>
              </NavigationMenuItem>
            </Link>
          ) : null}

          {!routes.includes(page) && user?.email !== '' ? (
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
                History
              </NavigationMenuTrigger>
              <NavigationMenuContent className="z-10">
                {history ? (
                  <div className="flex flex-col gap-2 justify-center items-center pb-4">
                    {/* <ul className={`card grid w-[340px] gap-3 p-4 md:w-[500px] ${history.length>1?"md:grid-cols-2":"md:grid-cols-1"} lg:w-[600px] `}> */}
                    <ul
                      className={`card grid w-[320px] gap-3 p-4 md:w-[500px] ${
                        history.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'
                      } lg:w-[600px] `}
                    >
                      {history?.map((item: any, key: any) =>
                        key <= 3 ? (
                          <div key={key} className="border p-2 rounded-md">
                            <ListItem
                              title={
                                item.question.length > 30
                                  ? item.question.substring(0, 30) + '...'
                                  : item.question
                              }
                              onClick={() => {
                                setDailogData({
                                  question: item.question,
                                  answer: item.answer,
                                  time: item.time,
                                  scripture: item.scripture,
                                  language: item.language,
                                })
                                setOpenValue(true)
                              }}
                            >
                              {item.answer}
                            </ListItem>
                            <p className="text-xs text-center mt-1">
                              {item.time}
                            </p>
                          </div>
                        ) : null,
                      )}
                    </ul>
                    <div className="w-[90%] bg-[#0A0F1D]">
                      <Link href="/history">
                        <Button variant="default" className="w-[100%] pb-2">
                          View all history
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <ul className=" card flex p-4 w-max py-9">
                    <p className="text-center">Ask questions to view history</p>
                  </ul>
                )}
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : null}

          {!routes.includes(page) && user?.email !== '' ? (
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
                User
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="card flex justify-center items-center gap-4 p-6 w-[320px] md:w-[400px] lg:w-[400px] ">
                  <li className="flex flex-col justify-center items-center w-auto">
                    <div className="mb-2">
                      <Avatar
                        name={user?.name}
                        src={user?.image}
                        round={true}
                        size="70"
                        color="gray"
                      />
                    </div>

                    <ListItem
                      href="#"
                      title={user?.name}
                      className="text-center w-64 hover:bg-transparent cur"
                    ></ListItem>
                    <ListItem
                      onClick={logout}
                      href="/"
                      title="Sign Out"
                      className="text-center text-[#EF4444] hover:text-[#EF4444] w-64"
                    ></ListItem>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : null}

          {/* theme button */}
          {/* <NavigationMenuItem>
            <ThemeButton />
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

export default Navbar
