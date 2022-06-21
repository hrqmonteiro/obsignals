import { Logo } from 'components/ui'
import Link from 'next/link'
import cn from 'classnames'
import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'

export default function MobileNavbar(): JSX.Element {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  return (
    <>
      <div className='fixed z-50 h-20 top-0 w-screen md:fixed lg:hidden navbar bg-black mb-20 p-6'>
        <div className='w-full flex justify-between items-center'>
          <label className='swap swap-rotate'>
            <input type='checkbox' />

            <FiX
              onClick={() => setShowMenu(!showMenu)}
              className='swap-on text-2xl hover:opacity-70'
            />

            <FiMenu
              onClick={() => setShowMenu(!showMenu)}
              className='swap-off text-2xl hover:opacity-70'
            />
          </label>
          <Logo width={100} />
          <div>EN</div>
        </div>
      </div>

      {showMenu && (
        <div
          className={cn(
            !showMenu ? 'h-0' : 'h-screen',
            'fixed z-50 top-20 min-h-screen w-screen md:fixed lg:hidden bg-black'
          )}
        >
          <div className='w-full h-full flex justify-center items-center text-center'>
            <ul>
              <li className='mx-10 hover:opacity-80 transition-all duration-300 mb-5'>
                <Link href='#'>
                  <a>Home</a>
                </Link>
              </li>
              <li className='mx-10 hover:opacity-80 transition-all duration-300 mb-5'>
                <Link href='#'>
                  <a>About obsignals</a>
                </Link>
              </li>
              <li className='mx-10 hover:opacity-80 transition-all duration-300 mb-5'>
                <Link href='#'>
                  <a>Download</a>
                </Link>
              </li>
              <li className='mx-10 hover:opacity-80 transition-all duration-300 mb-5'>
                <Link href='#'>
                  <a>Instruction</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
