import Link from 'next/link'

interface Props {
  width: number
}

export default function Logo({ width }: Props): JSX.Element {
  return (
    <Link href='/'>
      <a className='hover:opacity-80 transition-all duration-300'>
        <img src='/assets/logo.png' width={width} alt='OBSignals' />
      </a>
    </Link>
  )
}
