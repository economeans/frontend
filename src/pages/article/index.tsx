import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Article() {
  const [articles, setArticles] = useState<ArticleData[]>([]);

  async function getArticles() {
    try {
      const { data } = await axios.get('/articles');
      setArticles(data.articles);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <article>
      <div className="flex flex-col gap-10">
        {articles.map((article: ArticleData) => (
          <div className="m-auto flex w-80 flex-col gap-5 rounded-3xl border-2 border-purple-400 p-5" key={article.id}>
            <img className="m-auto block aspect-video w-full object-contain" src={article.image} alt={article.id} />
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-bold">{article.headline}</h3>
              <p className="text-base">{article.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
