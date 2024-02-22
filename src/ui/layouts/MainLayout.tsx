import { ReactNode } from 'react'
import styles from './mainLayout.module.scss'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.mainLayout}>{children}</div>
  )
}
