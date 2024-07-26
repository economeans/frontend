import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import GET_LIST_ARTICLE from '@/graphql/article.gql';

export default function Article() {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const { data } = useQuery(GET_LIST_ARTICLE, { variables: { category: 'general' } });

  useEffect(() => {
    if (data) {
      setArticles(data.getListArticle.articles);
    }
  }, [data]);

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
            <a className="text-end font-bold" href={article.url} target="_blank" rel="noreferrer">
              DETAIL
            </a>
          </div>
        ))}
      </div>
    </article>
  );
}
