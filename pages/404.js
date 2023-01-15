import Layout from "@/components/layout";
import styles from '@/styles/404.module.css';
import {FaExclamationTriangle} from 'react-icons/fa';
import Link from "next/link";
export default function PageNotFound() {
  return (
    <Layout title='page not found'>
        <div className={styles.error}>
            <h1><FaExclamationTriangle /> 404</h1>
            <h4>Sorry there is nothing here</h4>
            <Link href="/">Home Page</Link>
        </div>
    </Layout>
  )
}
