/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";

const NewsPage = ({ category }) => {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        
        return res.json();
      })
      .then((data) => {
        if (!data.articles) {
          throw new Error("No articles found");
        }
        setArticle(data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setError(error.message);
        setArticle([]); // Prevents crash
      })
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="container mt-3">
      <h1 className="text-center mt-4 inline">
        Latest <span className="badge text-bg-danger">News</span>
      </h1>

      {loading && <p>Loading news...</p>}
      {error && <p className="text-danger">Error: {error}</p>}

      <div className="d-flex gap-4 flex-wrap">
        {article.length === 0 && !loading && !error && (
          <p>No news available for this category.</p>
        )}
        {article.map((news, idx) => (
          <NewsCard
            key={idx}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
