export default function ChromeButton(): JSX.Element {
  return (
    <button
      style={{
        borderRadius: '12px',
        borderWidth: '1px',
        borderColor: '#505050'
      }}
      className='py-3 px-8 hover:opacity-80 transition-all duration-300'
    >
      <div className='flex justify-center items-center'>
        <img width={32} className='mr-4' src='/assets/chrome.svg' alt='' />
        <p className='text-left mr-4'>
          <span className='font-regular'>Download for</span>
          <br />
          <span className='font-bold'>Google Chrome</span>
        </p>
      </div>
    </button>
  )
}
