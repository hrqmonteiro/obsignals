import { ChromeButton } from 'components/ui'
import cn from 'classnames'
import s from './Hero.module.scss'

export default function Hero(): JSX.Element {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='h-full w-full flex flex-nowrap'>
        {/* Texts */}
        <div className='w-1/2 bg-black flex flex-wrap justify-center items-center px-6'>
          <p data-aos='fade-up' data-aos-offset='500' data-aos-duration='500'>
            <h1 data-aos-delay='200' className='font-bold text-5xl mb-10'>
              Signals for Binary Options
            </h1>
            <div style={{ color: '#b6b6b6' }} className='mb-10'>
              Download obsignals extension and receive signals every day for the
              binary options market, including OTC.
            </div>
            <ChromeButton />
          </p>
        </div>
        {/* image */}
        <div
          data-aos='fade-down'
          data-aos-offset='500'
          data-aos-duration='500'
          className={cn(
            s.heroimg,
            'w-1/2 flex justify-center items-center bg-white'
          )}
        ></div>
      </div>
    </div>
  )
}
