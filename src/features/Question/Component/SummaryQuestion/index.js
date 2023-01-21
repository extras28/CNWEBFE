import React from "react";
import PropTypes from "prop-types";
import Tag from "general/components/Tag";
import "./style.scss";
import UserHelper from "general/helpers/UserHelper";

SummaryQuestion.propTypes = {
    avatar: PropTypes.string,
    userName: PropTypes.string,
    createAt: PropTypes.string,
    titleQuestion: PropTypes.string,
    Tags: PropTypes.array,
    comments: PropTypes.string,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    clickQuestion: PropTypes.func,
    clickLike: PropTypes.func,
    colorIconLike: PropTypes.func,
    clickDislike: PropTypes.string,
    colorIconDislike: PropTypes.string,
};

SummaryQuestion.defaultProps = {
    avatar: "",
    userName: "",
    createAt: "",
    titleQuestion: "",
    tags: [],
    comments: "",
    likes: null,
    dislikes: null,
    clickQuestion: null,
    clickLike: null,
    clickDislike: null,
    colorIconLike: "",
    colorIconDislike: "",
};

function SummaryQuestion(props) {
    const {
        avatar,
        userName,
        createAt,
        titleQuestion,
        tags,
        comments,
        likes,
        dislikes,
        clickQuestion,
        clickLike,
        clickDislike,
        colorIconLike,
        colorIconDislike,
    } = props;
    return (
        <div className="my-5 SummaryQuestion">
            <div className="comment p-5 bg-body shadow-sm rounded">
                <div className="d-flex">
                    <div className="flex-shrink-0">
                        <img
                            className="header-avatar rounded-circle"
                            src={avatar || UserHelper.getRandomAvatarUrl()}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = UserHelper.getRandomAvatarUrl();
                            }}
                            alt="avatar"
                        />
                    </div>
                    <div className="flex-grow-1 mx-2">
                        <p className="fw-bold fs-5 my-0">{userName}</p>
                        <p className="fw-normal fs-6">Ngày tạo: {createAt}</p>
                    </div>
                </div>
                <div
                    className="SummaryQuestion_Title content cursor-pointer"
                    onClick={clickQuestion}
                >
                    <p className="fw-bold fs-4">{titleQuestion}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="d-flex flex-fill flex-wrap">
                        {tags?.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="badge badge-secondary mr-4 d-flex align-items-center"
                                >
                                    <span>{item?.name}</span>
                                </div>
                            );
                        })}
                    </div>
                    <div className="d-flex flex-wrap ms-auto">
                        <button className="btn SummaryQuestion_IconReact">
                            <i className="fas fa-comment"></i>
                            {comments}
                        </button>
                        <button className="btn SummaryQuestion_IconReact" onClick={clickLike}>
                            <i
                                className={`fas fa-thumbs-up text-hover-primary ${colorIconLike}`}
                            ></i>
                            {likes}
                        </button>
                        <button className="btn SummaryQuestion_IconReact" onClick={clickDislike}>
                            <i
                                className={`fas fa-thumbs-down text-hover-danger ${colorIconDislike}`}
                            ></i>
                            {dislikes}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SummaryQuestion;