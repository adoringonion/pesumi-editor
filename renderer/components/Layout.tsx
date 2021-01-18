import { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styles from './styles/Layout.module.scss'

type Props = {
  children: ReactNode
  title?: string
}

const Layout:React.FC<Props> = ({ children, title = 'This is the default title' }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header id={styles.header}>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>{' '}
          |{' '}
          <Link href="/about">
          </Link>{' '}
          |{' '}
          <Link href="/initial-props">
            <a>With Initial Props</a>
          </Link>
        </nav>
      </header>
          {children}
      <footer>
        <hr />
        <span>ここにいます</span>
      </footer>
    </div>
  )
}

export default Layout
