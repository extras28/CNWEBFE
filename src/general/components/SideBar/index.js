import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MenuItem from "../MenuItem";
import "./style.scss";
import UserHelper from "general/helpers/UserHelper";
import { NavLink } from "react-router-dom";

SideBar.propTypes = {
    className: PropTypes.string,
    loggedIn: PropTypes.bool,
    headerHeight: PropTypes.string,
    selected: PropTypes.string
};

SideBar.defaultProps = {
    className: "",
    loggedIn: false,
    headerHeight: "78",
    selected: ""
};

function SideBar(props) {
    const { className, headerHeight, selected } = props;
    const loggedIn = UserHelper.checkAccessTokenValid();
    let [showSideBar, setShowSideBar] = useState(true);
    let [dropdownSideBar_MobileMode, setDropdownSideBar_MobileMode] =
        useState(false);
    const handleShowSideBar = () => {
        setShowSideBar(!showSideBar);
    };
    const handledropdownSideBar_MobileMode = () => {
        setDropdownSideBar_MobileMode(!dropdownSideBar_MobileMode);
    };
    useEffect(() => {
        // console.log(headerHeight);
    }, []);
    return (
        <div
            className={`SideBar d-inline-flex flex-column align-items-center ${className}`}
            // style={{ top: `${headerHeight}px` }}
        >
            <div
                className="d-flex text-decoration-none align-items-center w-100"
                style={{
                    color: "#fff",
                    height: "5rem",
                }}
            >
                <NavLink
                    to="/"
                    className="d-flex w-100 mx-4 align-items-center fs-5 fw-normal "
                >
                    <i className="fab fa-forumbee d-flex fa-2x ms-lg-2"></i>
                    {showSideBar && (
                        <div className="d-none d-lg-flex ms-2 text-white mr-lg-25">
                            Code<div className="fw-bolder">Helper</div>
                        </div>
                    )}
                </NavLink>
                {showSideBar && (
                    <i
                        className="ButtonShowSideBar fas fa-caret-circle-left d-none d-lg-flex"
                        onClick={handleShowSideBar}
                    ></i>
                )}
                {!showSideBar && (
                    <div className="ButtonShowSideBar d-none d-lg-flex">
                        <i
                            className="fas fa-caret-circle-right"
                            style={{ fontSize: "2rem" }}
                            onClick={handleShowSideBar}
                        ></i>
                    </div>
                )}
            </div>
            <div className="d-none d-sm-inline-flex flex-column align-items-center w-100">
                <div className="MenuSideBar w-100 mt-5">
                    <MenuItem
                        className={
                            selected === "questions" ? "MenuItem_active" : ""
                        }
                        classNameTitle="d-none d-lg-block"
                        url="/dashboard"
                        text={showSideBar ? "Câu hỏi" : ""}
                        title="Câu hỏi"
                        icon="fas fa-list-ul"
                    />
                    <MenuItem
                        className={selected === "users" ? "MenuItem_active" : ""}
                        classNameTitle="d-none d-lg-block"
                        url="/users"
                        text={showSideBar ? "Người dùng" : ""}
                        title="Người dùng"
                        icon="far fa-users"
                    />
                    <MenuItem
                        className={selected === "tag" ? "MenuItem_active" : ""}
                        classNameTitle="d-none d-lg-block"
                        url=""
                        text={showSideBar ? "Thẻ" : ""}
                        title="Thẻ"
                        icon="far fa-tags"
                    />
                    <MenuItem
                        className={selected === "ranking" ? "MenuItem_active" : ""}
                        classNameTitle="d-none d-lg-block"
                        url=""
                        text={showSideBar ? "Xếp hạng" : ""}
                        title="Xếp hạng"
                        icon="far fa-trophy-alt"
                    />
                </div>
                {loggedIn && (
                    <div className="w-100 d-flex flex-column align-items-center">
                        {showSideBar && (
                            <div className="MenuTitle d-none d-lg-block fw-bolder text-white opacity-80 col-9 mb-2 mt-5">
                                DI CHUYỂN ĐẾN
                            </div>
                        )}
                        <div className="d-block d-lg-none w-100 border border-bottom border-secondary my-5"></div>
                        {!showSideBar && (
                            <div className="d-none d-lg-block w-100 border border-bottom border-secondary my-5"></div>
                        )}
                        <div className="MenuSideBar w-100">
                            <MenuItem
                                className={
                                    selected === "my-question" ? "MenuItem_active" : ""
                                }
                                classNameTitle="d-none d-lg-block"
                                url=""
                                text={showSideBar ? "Câu hỏi của bạn" : ""}
                                title="Câu hỏi của bạn"
                                icon="far fa-question-circle"
                            />
                            <MenuItem
                                className={
                                    selected === "my-answer" ? "MenuItem_active" : ""
                                }
                                classNameTitle="d-none d-lg-block"
                                url=""
                                text={showSideBar ? "Câu trả lời của bạn" : ""}
                                title="Câu trả lời của bạn"
                                icon="far fa-comment"
                            />
                            <MenuItem
                                className={
                                    selected === "like" ? "MenuItem_active" : ""
                                }
                                classNameTitle="d-none d-lg-block"
                                url=""
                                text={showSideBar ? "Yêu thích" : ""}
                                title="Yêu thích"
                                icon="far fa-heart"
                            />
                        </div>
                    </div>
                )}
            </div>
            <div
                className={`IconFooter d-none d-sm-flex flex-sm-fill flex-column justify-content-end ${
                    showSideBar && `flex-lg-row align-items-lg-end`
                }`}
            >
                <i className="fab fa-github cursor-pointer hover-opacity-60"></i>
                <i className="fab fa-instagram cursor-pointer hover-opacity-60"></i>
                <i className="fab fa-facebook cursor-pointer hover-opacity-60"></i>
            </div>
            {dropdownSideBar_MobileMode && (
                <button
                    className="btn_dropdownSideBar d-block d-sm-none position-absolute"
                    onClick={handledropdownSideBar_MobileMode}
                    style={{ padding: "0.8rem 1.2rem 0" }}
                >
                    <i className="fas fa-sort-up "></i>
                </button>
            )}
            {!dropdownSideBar_MobileMode && (
                <button
                    className="btn_dropdownSideBar d-block d-sm-none position-absolute"
                    onClick={handledropdownSideBar_MobileMode}
                    style={{ padding: "0.2rem 1.2rem 0.6rem" }}
                >
                    <i className="fas fa-sort-down "></i>
                </button>
            )}
            {dropdownSideBar_MobileMode && (
                <div
                    className="d-inline-flex d-sm-none position-absolute flex-column align-items-center"
                    style={{
                        top: "5rem",
                        left: "0.5rem",
                        backgroundColor: "#3F4254",
                        width: "18rem",
                    }}
                >
                    <div className="MenuSideBar w-100">
                        <MenuItem
                            className={
                                selected === "questions" ? "MenuItem_active" : ""
                            }
                            url=""
                            text="Câu hỏi"
                            title="Câu hỏi"
                            icon="fas fa-list-ul text-white"
                        />
                        <MenuItem
                            className={
                                selected === "users" ? "MenuItem_active" : ""
                            }
                            url=""
                            text="Người dùng"
                            title="Người dùng"
                            icon="far fa-users text-white"
                        />
                        <MenuItem
                            className={selected === "tag" ? "MenuItem_active" : ""}
                            url=""
                            text="Thẻ"
                            title="Thẻ"
                            icon="far fa-tags text-white"
                        />
                        <MenuItem
                            className={
                                selected === "ranking" ? "MenuItem_active" : ""
                            }
                            url=""
                            text="Xếp hạng"
                            title="Xếp hạng"
                            icon="far fa-trophy-alt text-white"
                        />
                    </div>
                    {loggedIn && (
                        <div className="w-100 d-flex flex-column align-items-center">
                            <div className="MenuTitle d-block d-sm-none fw-bolder text-white opacity-80 col-9 mb-2 mt-5">
                                DI CHUYỂN ĐẾN
                            </div>
                            <div className="MenuSideBar w-100">
                                <MenuItem
                                    className={
                                        selected === "my-question" ? "MenuItem_active" : ""
                                    }
                                    url=""
                                    text="Câu hỏi của bạn"
                                    title="Câu hỏi của bạn"
                                    icon="far fa-question-circle text-white"
                                />
                                <MenuItem
                                    className={
                                        selected === "my-answer" ? "MenuItem_active" : ""
                                    }
                                    url=""
                                    text="Câu trả lời của bạn"
                                    title="Câu trả lời của bạn"
                                    icon="far fa-comment text-white"
                                />
                                <MenuItem
                                    className={
                                        selected === "like" ? "MenuItem_active" : ""
                                    }
                                    url=""
                                    text="Yêu thích"
                                    title="Yêu thích"
                                    icon="far fa-heart text-white"
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default SideBar;
