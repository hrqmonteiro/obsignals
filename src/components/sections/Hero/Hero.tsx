// @ts-ignore
import { ChromeButton, Counter } from 'components/ui'
import cn from 'classnames'
import s from './Hero.module.scss'

export default function Hero(): JSX.Element {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='h-full w-full flex flex-wrap'>
        {/* Texts */}
        <div className='w-full md:w-full lg:w-1/2 bg-black flex flex-wrap justify-center items-center px-6 pt-36 pb-20'>
          <div>
            <h1 data-aos-delay='200' className='font-bold text-5xl mb-10'>
              Signals for Binary Options
            </h1>
            <div style={{ color: '#b6b6b6' }} className='mb-10'>
              Download obsignals extension and receive signals every day for the
              binary options market, including OTC.
            </div>
            <div className='mb-14 lg:mb-24'>
              <ChromeButton />
            </div>
            <Counter />
          </div>
        </div>
        {/* image */}
        <div className='w-full md:w-full lg:w-1/2 flex justify-center items-center bg-white'>
          <img src='/assets/home.png' alt='obsignals' />
        </div>
      </div>
    </div>
  )
}
