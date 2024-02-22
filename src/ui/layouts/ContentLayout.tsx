import { ReactNode } from 'react'
import styles from './contentLayout.module.scss'

export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.contentLayout}>{children}</div>
  )
}
