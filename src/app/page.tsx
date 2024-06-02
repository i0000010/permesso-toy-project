import 'server-only';
// import Posts from '@/components/Posts';
import Posts from '@/components/ClientPosts';

export default function Home() {

  return (
    <main className="p-4">
      <Posts />
    </main>
  );
}