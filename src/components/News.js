import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loaderProgress, setLoaderProgress] = useState(0);

  const getNewsArticles = async () => {
    setLoaderProgress(20);
    let newsApiUrl = "";
    if (props.category) {
      newsApiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${curPage}&pageSize=20`;
    } else
      newsApiUrl = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.api_key}&page=${curPage}&pageSize=20`;
    let response = await fetch(newsApiUrl);
    let newsArticles = await response.json();
    setArticles(articles.concat(newsArticles.articles));
    setTotalResults(newsArticles.totalResults);
    setLoaderProgress(100);
  };

  useEffect(() => {
    getNewsArticles();
    // eslint-disable-next-line
  }, [curPage]);

  const fetchMoreData = () => {
    setCurPage(curPage + 1);
  };

  return (
    <>
      <LoadingBar
        color="#0d6efd"
        progress={loaderProgress}
        onLoaderFinished={() => {
          setLoaderProgress(0);
        }}
      />
      <h1 className="text-center mt-3">Top Headlines</h1>
      <div className="container text-center">
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          style={{ overflow: "hidden" }}
          loader={<Spinner />}>
          <div className="news-items row justify-content-center">
            {articles.map((element) => {
              return (
                <div
                  key={element.url ? element.url : Math.random}
                  className="col-md-4">
                  <NewsItem
                    title={element.title ? element.title.slice(0, 30) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imgUrl={element.urlToImage ? element.urlToImage : ""}
                    newsUrl={element.url ? element.url : ""}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default News;
