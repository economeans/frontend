import useStore from '@/store';

export default function Home() {
  const store = useStore();
  return <article>{store.username}, Hello World!</article>;
}

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then((registration) => {
//         console.log('ServiceWorker registration successful with scope: ', registration.scope);
//       })
//       .catch((error) => {
//         console.log('ServiceWorker registration failed: ', error);
//       });
//   });
// }
