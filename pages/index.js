import Head from "next/head";
import { useEffect, useState } from "react";
import NewsCard from "../components/newsCard";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    getArticleData();
  }, []);

  const getArticleData = async () => {
    const data = await (await fetch("/api/articles")).json();
    setArticleData(data);
    console.log(data);
    return data;
  };


//   var s = new Date(1504095567183).toLocaleDateString("en-US")
// console.log(s)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <form className="d-flex flex-row">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            &nbsp;
            <button
              className="btn btn-outline-success my-2 my-sm-0 ml-5 "
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>

      {articleData &&
        articleData.map((article) =>
          article?.url ? <NewsCard article={article} key={article.id} /> : null
        )}
    </div>
  );
}
