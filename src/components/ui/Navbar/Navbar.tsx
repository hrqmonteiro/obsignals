import { Logo } from 'components/ui'
import Link from 'next/link'
import Container from '../Container'
import s from './Navbar.module.scss'
import cn from 'classnames'

export default function Navbar(): JSX.Element {
  return (
    <div className='md:fixed lg:fixed z-50 top-0 w-full navbar px-14'>
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
                <Link href='#'>
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
                <Link href='#'>
                  <a>Download</a>
                </Link>
              </li>
              <li className='mx-10 hover:opacity-80 transition-all duration-300'>
                <Link href='#'>
                  <a>Instruction</a>
                </Link>
              </li>
            </ul>
            {/* language menu */}
            <div>EN</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  )
}
