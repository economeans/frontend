import useStore from '@/store';
import Chartjs from '@/components/home/chartjs';
import D3chart from '@/components/home/d3chart';
import Amcharts from '@/components/home/amcharts';

export default function Home() {
  const store = useStore();
  return (
    <article>
      <h1>{store.username}, Hello World!</h1>
      <Chartjs />
      <D3chart />
      <Amcharts />
    </article>
  );
}
