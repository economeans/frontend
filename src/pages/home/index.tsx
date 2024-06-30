import useStore from '@/store';
import PackedCircles from '@/components/home/PackedCircles';
import TagCloud from '@/components/home/TagCloud';

export default function Home() {
  const store = useStore();
  return (
    <article>
      <h1>{store.username}, Hello World!</h1>
      <PackedCircles />
      <TagCloud />
    </article>
  );
}
