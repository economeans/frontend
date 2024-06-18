'use client';

import useStore from '@/store';

export default function Page() {
  const store = useStore();
  return <article>{store.username}, Hello World!</article>;
}
