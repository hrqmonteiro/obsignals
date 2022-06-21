import { ChromeButton } from 'components/ui'
import cn from 'classnames'
import s from './About.module.scss'

export default function About(): JSX.Element {
  return (
    <section
      id='about'
      className='min-h-screen lg:h-screen flex justify-center items-center'
    >
      <div className='h-full w-full flex flex-wrap'>
        {/* Texts */}
        <div className='w-full md:w-full lg:w-1/2 bg-black flex flex-wrap justify-center items-center px-6 py-20'>
          <div>
            <h1 data-aos-delay='200' className='font-bold text-5xl mb-10'>
              About obsignals
            </h1>
            <div style={{ color: '#b6b6b6' }} className='mb-10 '>
              Obsignals is a signal provider for the binary options market, the
              signals are compatible with various brokers.
            </div>
            <div className='mb-10'>
              <ChromeButton />
            </div>
            <div className='w-full flex flex-wrap md:flex-nowrap lg:flex-nowrap justify-center mt-20'>
              {/* first */}
              <div className='w-full md:w-full lg:w-1/3 mb-10 mr-3'>
                <h3 className='font-bold uppercase mb-3'>High Accuracy</h3>
                <span style={{ color: '#b6b6b6' }}>
                  Signal accuracy exceeds
                  <br />
                  90% daily
                </span>
              </div>
              <div className='w-full md:w-full lg:w-1/3 mb-10 mr-3'>
                <h3 className='font-bold uppercase mb-3'>Quick Setup</h3>
                <span style={{ color: '#b6b6b6' }}>
                  Installing obsignals
                  <br />
                  extension will not take
                  <br />1 minute.
                </span>
              </div>
              <div className='w-full md:w-full lg:w-1/3 mb-10 mr-3'>
                <h3 className='font-bold uppercase mb-3'>
                  User-friendly Interface
                </h3>
                <span style={{ color: '#b6b6b6' }}>
                  Detailed instructions
                  <br />
                  are included, ease to
                  <br />
                  use.
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* image */}
        <div
          className={cn(
            s.aboutimg,
            'w-full md:w-full lg:w-1/2 flex justify-center items-center bg-white'
          )}
        >
          <img src='/assets/about.png' alt='obsignals' />
        </div>
      </div>
    </section>
  )
}
