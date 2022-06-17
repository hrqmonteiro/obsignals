import { ChromeButton } from 'components/ui'
import cn from 'classnames'
import s from './Hero.module.scss'

export default function Hero(): JSX.Element {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='h-full w-full flex flex-nowrap'>
        {/* Texts */}
        <div className='w-full md:w-1/2 lg:w-1/2 flex flex-wrap justify-center items-center px-2 lg:px-16'>
          <p>
            <h1 className='font-bold text-5xl mb-10'>
              Signals for Binary Options
            </h1>
            <div className='mb-10'>
              Download obsignals extension and receive signals every day for the
              binary options market, including OTC.
            </div>
            <ChromeButton />
          </p>
        </div>
        {/* image */}
        <div
          className={cn(
            s.heroimg,
            'w-full md:w-1/2 lg:w-1/2 flex justify-center items-center bg-white'
          )}
        ></div>
      </div>
    </div>
  )
}
