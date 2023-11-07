import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ArticleService from "../server/article";
import { getArticleStart, getArticleSuccess } from "../slice/articleSlice";
import Loader from "../store/Loader";

const Main = () => {
  const dispatch = useDispatch();
  const { articles, isLoading } = useSelector((state) => state.article);
  const { loggedIn, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  //  fetch sync data
  const getArticle = async () => {
    dispatch(getArticleStart());
    try {
      const response = await ArticleService.getArticle();

      dispatch(getArticleSuccess(response.articles));
    } catch (error) {
      console.log(error);
    }
  };

  // =========== DELETE ARTICLE =============//
  const deleteArticle = async (slug) => {
    try {
      await ArticleService.deleteArticle(slug);
      // i call getArticle because after delete all article refresh one more
      getArticle();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);
  return (
    <>
      {isLoading && <Loader />}
      <div className="album py-5 ">
        <div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {articles.map((item) => (
              <div className="col" key={item.id}>
                <div className="card shadow-sm h-100">
                  <svg
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: Thumbnail"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#55595c"></rect>
                  </svg>

                  <div className="card-body ">
                    <p className="card-text fw-bold m-0">{item.title}</p>
                    <p className="card-text ">{item.description}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center card-footer">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                        onClick={() => navigate(`/articles/${item.slug}`)}
                      >
                        View
                      </button>
                      {loggedIn && user.username === item.author.username && (
                        <>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-secondary"
                            onClick={() => navigate(`/edit/${item.slug}`)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => deleteArticle(item.slug)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                    <small className="text-muted text-capitalize">
                      {item.author.username}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
