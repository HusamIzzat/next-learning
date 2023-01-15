import Layout from '../components/layout'
import {API_URL} from '@/config/index'
import EventItem from "@/components/EventItem";
export default function Home({events}) {
  return (
    <Layout title="Home Page" description="home page events dj">
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No Events To Show</h3>}
      {events.map(evt => (
        <EventItem key={evt.id} evt={evt}></EventItem>
      ))}
    </Layout>
  )
}


export async function getStaticProps(){
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  return{
    props:{events},
    revalidate: 1
  }
  
}

