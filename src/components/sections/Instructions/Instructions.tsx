import { ChromeButton } from 'components/ui'

export default function Instructions(): JSX.Element {
  return (
    <section id='about' className='h-screen flex justify-center items-center'>
      <div className='h-full w-full flex flex-wrap'>
        {/* Texts */}
        <div className='w-full md:w-full lg:w-1/2 bg-black flex flex-wrap justify-center items-center px-6 py-20'>
          <div>
            <h1 data-aos-delay='200' className='font-bold text-5xl mb-10'>
              Install the extension
              <br />
              according to your browser
            </h1>
            <div style={{ color: '#b6b6b6' }} className='mb-10 '>
              After completing the installation step, you will be able to
              receive the signals.
              <br />
              The following instructions are necessary to understand how to use
              use obsignals.
            </div>
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
