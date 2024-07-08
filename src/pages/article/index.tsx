import axios from 'axios';
import { useEffect } from 'react';

export default function Article() {
  async function getArticles() {
    const res = await axios.get('/articles');
    console.log(res);
  }
  useEffect(() => {
    getArticles();
  }, []);

  return <article>Article</article>;
}
