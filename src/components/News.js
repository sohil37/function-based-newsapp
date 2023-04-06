import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      curPage: 1,
      totalResults: 0,
      loaderProgress: 0,
    };
  }

  async componentDidMount() {
    this.setState({ loading: true, loaderProgress: 20 });
    let newsArticiles = await this.getNewsArticiles();
    this.setState({ loading: false });
    this.setState({
      articles: newsArticiles.articles,
      totalResults: newsArticiles.totalResults,
      loading: false,
      loaderProgress: 100,
    });
  }

  getNewsArticiles = async () => {
    let newsApiUrl = "";
    if (this.props.category) {
      newsApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api_key}&page=${this.state.curPage}&pageSize=20`;
    } else
      newsApiUrl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.api_key}&page=${this.state.curPage}&pageSize=20`;
    let response = await fetch(newsApiUrl);
    let parsedResponse = await response.json();
    return parsedResponse;
  };

  fetchMoreData = async () => {
    this.setState(
      { curPage: this.state.curPage + 1, loading: true, loaderProgress: 20 },
      async () => {
        let newsArticiles = await this.getNewsArticiles();
        this.setState({
          articles: this.state.articles.concat(newsArticiles.articles),
          totalResults: newsArticiles.totalResults,
          loading: false,
          loaderProgress: 100,
        });
      }
    );
  };

  render() {
    return (
      <>
        <LoadingBar
          color="#0d6efd"
          progress={this.state.loaderProgress}
          onLoaderFinished={() => {
            this.setState({ loaderProgress: 0 });
          }}
        />
        <h1 className="text-center mt-3">Top Headlines</h1>
        <div className="container text-center">
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            style={{ overflow: "hidden" }}
            loader={<Spinner />}>
            <div className="news-items row justify-content-center">
              {this.state.articles.map((element) => {
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
  }
}

export default News;
