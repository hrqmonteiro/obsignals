interface Props {
  width: number
}

export default function Logo({ width }: Props): JSX.Element {
  return <img src='/assets/logo.png' width={width} alt='OBSignals' />
}
