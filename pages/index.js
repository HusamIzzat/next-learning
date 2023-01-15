import Link from "next/link";
import Layout from '../components/layout'
export default function Home() {
  return (
    <Layout title="Home Page" description="home page events dj">
      <h1>Home Page</h1>
      <Link href='/about'>About Page</Link>
    </Layout>
  )
}
