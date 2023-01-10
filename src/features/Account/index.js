import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import BaseLayout from "general/components/BaseLayout";
import Utils from "general/utils/Utils";
import UserHelper from "general/helpers/UserHelper";
import AppTabs from "general/components/AppTabs";
import AccountProfile from "./screens/AccountProfile";
import AccountQuestionScreen from "./screens/AccountQuestionScreen";
import AccounttagScreen from "./screens/AccountTagScreen";
import AccountAnswerScreen from "./screens/AccountAnswerScreen";
import { useSelector } from "react-redux";
import ModalChangeAvatar from "./components/ModalChangeAvatar";

Account.propTypes = {
    fullname: PropTypes.string,
    email: PropTypes.string,
    avatar: PropTypes.string,
};

Account.defaultProps = {
    fullname: "",
    email: "",
    avatar: "",
};

const tabs = ["Thông tin cá nhân", "Câu hỏi", "Tag", "Câu trả lời"];

function Account(props) {
    // MARK: --- Params ---
    const { fullname, email, avatar } = props;
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    const { currentAccount } = useSelector((state) => state?.auth);
    const [showModalChangeAvatar, setShowModalChangeAvatar] = useState(false);

    // MARK: --- Functions ---
    function handleSelectedTab(newTab) {
        setSelectedTab(newTab);
    }

    return (
        <BaseLayout>
            <div className='Account flex-column-fluid'>
                <div className='container-xxl'>
                    {/* account navbar */}
                    <div className='card card-flush mb-9'>
                        <div
                            className='card-header rounded-top bgi-size-cover h-200px Account_CoverImage'
                            style={{
                                backgroundPosition: "100% 50%",
                                backgroundImage: `url(${Utils.getRandomImageLink(2600, 900)})`,
                            }}></div>
                        <div className='card-body mt-n19'>
                            <div className='m-0'>
                                <div className='d-flex flex-stack align-items-end pb-4 mt-n19'>
                                    <div className=' position-relative'>
                                        <div className='symbol symbol-120 symbol-lg-150 symbol-fixed mt-n3'>
                                            <img
                                                src={currentAccount?.avatar?.path || UserHelper.getRandomAvatarUrl()}
                                                onError={(e) => {
                                                    e.target.onerror = null;
                                                    e.target.src = UserHelper.getRandomAvatarUrl();
                                                }}
                                                alt='avatar'
                                                className='border border-white border-4'
                                                style={{
                                                    borderRadius: "20px",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        </div>
                                        <label
                                            className='position-absolute btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
                                            style={{ top: "-8%", right: "-4%" }}
                                            onClick={() => setShowModalChangeAvatar(true)}>
                                            <i className='fas fa-pen'></i>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <p className='font-weight-bolder font-size-h3 text-remaining'>
                                        {currentAccount?.fullname}
                                    </p>
                                    <p className='text-muted'>{currentAccount?.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* tab */}
                    <div>
                        <AppTabs
                            tabs={tabs}
                            activeTab={selectedTab}
                            handleClick={handleSelectedTab}
                            className='flex-grow-1'
                        />
                    </div>
                    <div>
                        {selectedTab === "Thông tin cá nhân" ? (
                            <AccountProfile />
                        ) : selectedTab === "Câu hỏi" ? (
                            <AccountQuestionScreen />
                        ) : selectedTab === "Tag" ? (
                            <AccounttagScreen />
                        ) : selectedTab === "Câu trả lời" ? (
                            <AccountAnswerScreen />
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
            <ModalChangeAvatar show={showModalChangeAvatar} onClose={() => setShowModalChangeAvatar(false)} />
        </BaseLayout>
    );
}

export default Account;
