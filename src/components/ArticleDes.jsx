import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ArticleService from "../server/article";
import Loader from "../store/Loader";
import moment from "moment";
import {
  getArticleDetailFailure,
  getArticleDetailStart,
  getArticleDetailSuccess,
} from "../slice/articleSlice";

const ArticleDes = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { articleDetail, isLoading } = useSelector((state) => state.article);
  useEffect(() => {
    const getArticleDetail = async () => {
      dispatch(getArticleDetailStart());

      try {
        const response = await ArticleService.getArticleDetail(slug);
        dispatch(getArticleDetailSuccess(response.article));
      } catch (error) {
        dispatch(getArticleDetailFailure());
      }
    };
    getArticleDetail();
  }, [slug]);
  return isLoading ? (
    <Loader />
  ) : (
    articleDetail && (
      <div>
        <div className="py-3 mb-4  rounded-3">
          <div className="container-fluid pb-5">
            <p className="d-inline-block">{articleDetail.author.username}</p>
            <p
              className="text-muted float-end  d-block"
              style={{ fontSize: "12px" }}
            >
              <span className="fw-bold"> Created at: </span>
              {moment(articleDetail.createdAt).format("DD MMM, YYYY")}
            </p>
            <h1 className="display-5 fw-bold">{articleDetail.title}</h1>
            <p className="col-md-8 fs-4 mt-3">{articleDetail.description}</p>

            <div className="mt-3">{articleDetail.body}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default ArticleDes;
