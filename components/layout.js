import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';
import Showcase from './Showcase';
import { useRouter } from 'next/router';
export default function Layout({title,description,keywords,children}) {
  const router = useRouter();
  return (
    <div>
        <Head>
             <title>{title}</title>
             <meta name="description" content={description} />
             <meta name="keywords" content={keywords} />
        </Head>
        <Header />
        {router.pathname === '/' && <Showcase />}
        <div className={styles.container}>
        {children}
        </div>
        <Footer />
    </div>
  )
}

Layout.defaultProps = {
    title: "Dj Events , find your hottest partries",
    description: "find your latest Dj and other Musical events",
    keywords:"music , dj, edm , events"
}
