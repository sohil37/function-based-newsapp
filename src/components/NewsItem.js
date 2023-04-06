import React from "react";

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl } = props;
  return (
    <>
      <div className="card my-3">
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary">
            Read more
          </a>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
