import DetailAnswer from "features/Question/Component/DetailAnswer";
import DetailQuestion from "features/Question/Component/DetailQuestion";
import { thunkGetDetailQuestion } from "features/Question/questionSlice";
import MdEditor from "react-markdown-editor-lite";
import BaseLayout from "general/components/BaseLayout";
import Loading from "general/components/Loading";
import PreferenceKeys from "general/constants/PreferenceKey";
import Utils from "general/utils/Utils";
import useRouter from "Hooks/useRouter";
import * as Yup from "yup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.scss";
import MDEditor from "@uiw/react-md-editor";
import { useFormik } from "formik";
import AppButton from "general/components/AppButton";
import AppResource from "general/constants/AppResource";
import WebsocketHelper from "../../../../general/helpers/WebSocketClientHelper";

QuestionDetailScreen.propTypes = {};

function QuestionDetailScreen(props) {
    const dispatch = useDispatch();
    const router = useRouter();
    const { isGettingDetailQuestion, detailQuestion } = useSelector((state) => state?.question);
    const { currentAccount } = useSelector((state) => state?.auth);
    const questionId = router.query?._id;
    useEffect(() => {
        if (questionId) {
            dispatch(thunkGetDetailQuestion({ _id: questionId }));
        }
    }, [questionId]);

    const formik = useFormik({
        initialValues: {
            contentMyAnswer: "",
            account: currentAccount,
            questionId: questionId,
        },
        onSubmit: async (values) => {
            try {
                const params = { ...values };
                console.log(params);
                WebsocketHelper.sendAnswer(params);
            } catch (error) {
                console.log(error.message);
            }
        },
        validationSchema: Yup.object({
            contentMyAnswer: Yup.string().trim().required("Bạn chưa nhập câu trả lời của bạn"),
        }),
    });

    function handleEditMyAnswerChange({ html, text }) {
        formik.getFieldHelpers("contentMyAnswer").setValue(text);
    }

    async function onImageUpload(file) {
        const image = await Utils.uploadCloudinary(file);
        return image.data.secure_url;
    }

    useEffect(() => {
        formik.getFieldHelpers("account").setValue(currentAccount);
        formik.getFieldHelpers("questionId").setValue(questionId);
    }, [currentAccount]);

    return (
        <BaseLayout selected='questions'>
            <div className='container-xxl'>
                <div>
                    {isGettingDetailQuestion ? (
                        <div className='d-flex align-items-center justify-content-center mt-8'>
                            <Loading showBackground={false} message='Đang lấy dữ liệu' />
                        </div>
                    ) : detailQuestion ? (
                        <DetailQuestion
                            avatar={detailQuestion?.account?.avatar?.path}
                            fullname={detailQuestion?.account?.fullname}
                            createdAt={Utils.formatDateTime(detailQuestion?.createdAt, "DD-MM-YYYY")}
                            title={detailQuestion.title}
                            contentTextProblem={detailQuestion.contentTextProblem}
                            contentTextExpect={detailQuestion.contentTextExpect}
                            tags={detailQuestion?.tagIds}
                            comments='15'
                            likes={detailQuestion?.likeCount ?? 0}
                            dislikes={detailQuestion?.dislikeCount ?? 0}
                        />
                    ) : (
                        <div className='mt-8'>
                            <Empty
                                text='Không có kết quả phù hợp'
                                buttonText='Làm mới'
                                visible={false}
                                imageEmpty={AppResource.images.errorStates.noMatchFound}
                            />
                        </div>
                    )}
                    <div className='d-flex flex-column justify-content-center align-items-start'>
                        <h1 className='mt-6 mt-md-9 ms-3'>2 câu trả lời</h1>
                        <DetailAnswer
                            fullname='Nguyễn Quang Dũng'
                            createdAt='14-01-2023'
                            contentAnswer={detailQuestion.contentTextProblem}
                            likes={0}
                            dislikes={0}
                        />
                        <DetailAnswer
                            fullname='Nguyễn Quang Dũng'
                            createdAt='14-01-2023'
                            contentAnswer={detailQuestion.contentTextProblem}
                            likes={0}
                            dislikes={0}
                        />
                    </div>

                    {/* Thêm câu trả lời */}
                    <div>
                        <h1 className='mt-6 mt-md-9 ms-3'>Câu trả lời của bạn</h1>
                        <div data-color-mode='light'>
                            <MdEditor
                                view={{ html: false }}
                                canView={{ fullScreen: false }}
                                onImageUpload={onImageUpload}
                                allowPasteImage={true}
                                placeholder='Nhập câu trả lời của bạn tại đây...'
                                style={{
                                    minHeight: "300px",
                                    maxHeight: "600px",
                                }}
                                renderHTML={(text) => <MDEditor.Markdown source={text} />}
                                value={formik.getFieldProps("contentMyAnswer").value}
                                onChange={handleEditMyAnswerChange}
                            />
                        </div>
                        <AppButton className='btn-orange mt-5' text='Đăng câu trả lời' onClick={formik.handleSubmit} />
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
}

export default QuestionDetailScreen;