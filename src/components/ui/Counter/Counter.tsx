import s from './Counter.module.css'
import cn from 'classnames'

export default function Counter(): JSX.Element {
  return (
    <div className={s.counters}>
      <div className={s.container}>
        <div className={s.item}>
          <div className={s.title}>+90%</div>
          <div className={s.content}>Accuracy</div>
        </div>
        <div className={s.item}>
          <div className={s.title}>100+</div>
          <div className={s.content}>Daily Signals</div>
        </div>
        <div className={s.item}>
          <div className={s.title}>4646</div>
          <div className={s.content}>Active users</div>
        </div>
        <div className={s.item}>
          <div className={s.title}>Free</div>
          <div className={s.content}>No Payments</div>
        </div>
      </div>
    </div>
  )
}
