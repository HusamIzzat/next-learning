import Link from "next/link";
import Layout from "@/components/layout";
export default function AboutPage() {
  return (
    <Layout>
        <h1>About Page</h1>
        <p>Find The latest Dj and other musical events</p>
        <Link href='/'>Home Page</Link>
    </Layout>
  )
}
