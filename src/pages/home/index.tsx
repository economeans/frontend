import Exchange from '@/components/home/exchange';
import useStore from '@/store';

export default function Home() {
  const store = useStore();
  return (
    <article>
      {store.username}, Hello World!
      <Exchange />
    </article>
  );
}
