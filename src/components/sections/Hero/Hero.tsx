export default function Hero(): JSX.Element {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='h-full w-full flex flex-nowrap'>
        {/* Texts */}
        <div className='w-full md:w-1/2 lg:w-1/2 flex justify-center items-center px-6'>
          <h1 className='text-5xl font-bold my-12'>
            Signals for Binary Options
          </h1>
          <p className='my-12'>
            Download obsignals extension and receive signals every day for the
            binary options market, including OTC.
          </p>
        </div>
        {/* image */}
        <div className='w-full md:w-1/2 lg:w-1/2 flex justify-center items-center bg-white'>
          <img src='/assets/home.png' alt='obsignals' />
        </div>
      </div>
    </div>
  )
}
