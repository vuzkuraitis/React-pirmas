import React from "react";
import "./Article.css";

const Article = ({ title, children }) => {
  return (
    <article>
      <h2 className="article-title">{title}</h2>
      <div className="content">{children}</div>
    </article>
  );
};

export default Article;
