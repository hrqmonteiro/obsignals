import { useState } from 'react'
import { Logo } from 'components/ui'
import Link from 'next/link'
import cn from 'classnames'
import { FiMenu, FiX } from 'react-icons/fi'
import Flag from 'react-flags'

export default function MobileNavbar(): JSX.Element {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [dropdown, setDropdown] = useState<boolean>(false)
  const [currentLanguage, setCurrentLanguage] = useState<String>('EN')

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
          <div className='dropdown dropdown-end text-white'>
            <button
              onClick={() => setDropdown(!dropdown)}
              style={{
                borderRadius: '12px',
                borderWidth: '1px',
                borderColor: '#505050'
              }}
              className='lg:py-3 lg:px-8 p-3 hover:opacity-80 transition-all duration-300 text-white'
            >
              <div className='flex items-center'>
                <Flag
                  basePath='/img/flags'
                  name='USA'
                  format='png'
                  pngSize={24}
                  shiny={true}
                  className='mr-2 w-full h-full'
                />
                <span>{currentLanguage}</span>
              </div>
            </button>
            {dropdown && (
              <ul
                tabIndex={0}
                className='dropdown-content mt-2 menu p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <a>
                    <div className='flex items-center'>
                      <Flag
                        basePath='/img/flags'
                        name='ESP'
                        format='png'
                        pngSize={24}
                        shiny={true}
                        className='mr-2 w-full h-full'
                      />
                      <span>ES</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a>
                    <div className='flex items-center'>
                      <Flag
                        basePath='/img/flags'
                        name='BRA'
                        format='png'
                        pngSize={24}
                        shiny={true}
                        className='mr-2 w-full h-full'
                      />
                      <span>PT</span>
                    </div>
                  </a>
                </li>
              </ul>
            )}
          </div>
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
