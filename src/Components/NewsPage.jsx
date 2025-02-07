/* eslint-disable react/prop-types */
import { useState } from "react";
import NewsCard from "./NewsCard";
import { useEffect } from "react";

const NewsPage = ({ category }) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setArticle(data.articles));
  }, [category]);
  return (
    <div className="container  mt-3">
        <h1 className="text-center mt-4 inline">
          Latest <span className="badge text-bg-danger">News</span>
        </h1>
      <div className="d-flex gap-4 flex-wrap">
        <NewsCard />
        {article.map((news, idx) => {
          return (
            <NewsCard
              key={idx}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsPage;
