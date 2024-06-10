import useStore from '@/store';

export default function () {
  const store = useStore();
  return <article>{store.username}, Hello World!</article>;
}
