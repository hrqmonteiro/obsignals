import Link from 'next/link'
import cn from 'classnames'
import s from './FloatingMenu.module.scss'

export default function FloatingMenu(): JSX.Element {
  return (
    <div className={cn(s.floatingmenu, 'hidden md:hidden lg:block')}>
      <ul>
        <li>
          <Link href='#'>
            <a>Facebook</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Instagram</a>
          </Link>
        </li>
        <li>
          <Link href='#'>
            <a>Telegram</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}
