import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function Component({ children }: Props): JSX.Element {
  return <div className='container mx-auto px-2'>{children}</div>
}
