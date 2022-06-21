// @ts-ignore
import { ChromeButton } from 'components/ui'
import cn from 'classnames'
import s from './Hero.module.scss'

export default function About(): JSX.Element {
  return (
    <section
      id='download'
      className='min-h-screen lg:h-screen flex justify-center items-center'
    >
      <div className='h-full w-full flex flex-wrap'>
        {/* Texts */}
        <div className='w-full md:w-full lg:w-1/2 bg-black flex flex-wrap justify-center items-center px-6 py-20'>
          <div className='w-full lg:px-10'>
            <h1 data-aos-delay='200' className='font-bold text-5xl mb-10'>
              Download extension <br /> obsignals
            </h1>
            <div className='mb-10'>
              <ChromeButton />
            </div>
          </div>
        </div>
        {/* image */}
        <div className='w-full md:w-full lg:w-1/2 flex justify-center items-center bg-white'>
          <img src='/assets/download.png' alt='obsignals' />
        </div>
      </div>
    </section>
  )
}
