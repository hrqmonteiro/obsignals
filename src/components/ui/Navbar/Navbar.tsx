import { useState } from 'react'
import { Logo } from 'components/ui'
import Link from 'next/link'
import Container from '../Container'
import s from './Navbar.module.scss'
import cn from 'classnames'
import Flag from 'react-flags'

export default function Navbar(): JSX.Element {
  const [dropdown, setDropdown] = useState<boolean>(false)
  const [currentLanguage, setCurrentLanguage] = useState<String>('EN')

  return (
    <div className='fixed z-50 top-0 w-full navbar px-14'>
      {/* <div className='container mx-auto'> */}
      <div className='w-full hidden lg:flex flex-nowrap items-center justify-between p-5'>
        {/* first half */}
        <div className='w-1/2'>
          <div className='w-full flex justify-between items-center'>
            <Logo width={150} />
            <ul className={cn(s.linknav, 'flex')}>
              <li className='mx-10 hover:opacity-80 transition-all duration-300'>
                <Link href='#'>
                  <a>Home</a>
                </Link>
              </li>
              <li className='mx-10 hover:opacity-80 transition-all duration-300'>
                <Link href='#about'>
                  <a>About obsignals</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* second half */}
        <div className='w-1/2'>
          <div className='w-full flex justify-between items-center text-black'>
            {/* links */}
            <ul className={cn(s.linknav, 'flex')}>
              <li className='mx-10 hover:opacity-80 transition-all duration-300'>
                <Link href='#download'>
                  <a>Download</a>
                </Link>
              </li>
              <li className='mx-10 hover:opacity-80 transition-all duration-300'>
                <Link href='#instruction'>
                  <a>Instruction</a>
                </Link>
              </li>
            </ul>
            {/* language menu */}
            <div className='dropdown dropdown-end text-white'>
              <button
                onClick={() => setDropdown(!dropdown)}
                style={{
                  borderRadius: '12px',
                  borderWidth: '1px',
                  borderColor: '#505050'
                }}
                className='lg:py-3 lg:px-8 p-3 hover:opacity-80 transition-all duration-300 text-black'
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
      </div>
      {/* </div> */}
    </div>
  )
}
