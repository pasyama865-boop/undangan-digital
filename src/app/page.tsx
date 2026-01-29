import Hero from "@/components/Hero";
import Couple from "@/components/Couple";
import Event from "@/components/Event";
import Rsvp from "@/components/Rsvp";
import GuestList  from "@/components/GuestList";
import PhotoAlbum from "@/components/PhotoAlbum";
import AudioPlayer from "@/components/AudioPlayer";


type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Home(props: Props) {
  const searchParams = await props.searchParams;
  
  const guestName = typeof searchParams.to === 'string' ? searchParams.to : "Tamu Undangan";

  return (
    <main className="min-h-screen bg-dark">
      <Hero guestName={guestName} />
      <Couple />
      <Event />
      <Rsvp />
      <GuestList />
      <PhotoAlbum />
      <AudioPlayer />
      
      <footer className="py-8 text-center text-gray-500 text-xs bg-dark">
        <p>Created with Muhamad ali pasha</p>
      </footer>
    </main>
  );
}