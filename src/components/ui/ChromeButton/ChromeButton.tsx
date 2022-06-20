export default function ChromeButton(): JSX.Element {
  return (
    <button
      style={{
        borderRadius: '12px',
        borderWidth: '1px',
        borderColor: '#505050'
      }}
      className='lg:py-3 lg:px-8 p-3 hover:opacity-80 transition-all duration-300'
    >
      <div className='flex justify-center items-center'>
        <img width={32} className='mr-4' src='/assets/chrome.svg' alt='' />
        <p className='text-left mr-4 text-2xs lg:text-base'>
          <span className='font-regular'>Download for</span>
          <br />
          <span className='font-bold'>Google Chrome</span>
        </p>
      </div>
    </button>
  )
}
