import React from "react";
import { Fade, Zoom, Flip, Bounce, Roll } from "react-reveal";
import PropTypes from "prop-types";
// import NotFound from 'general/components/AppNotFound';
import HeaderLandingPage from "general/components/HeaderLandingPage";
import FooterDashboard from "general/components/Footer";
import AppResource from "general/constants/AppResource";
import "./style.scss";
import Web from "../../assets/images/Web.png";
import Img1 from "../../assets/images/PostView.jpg";
import Img2 from "../../assets/images/illo-for-you.png";
import Img3 from "../../assets/images/MainSignedState.jpg";
import Img4 from "../../assets/images/img4.png";
import Img5 from "../../assets/images/Blog.jpg";
import Shape from "../../assets/images/Path.png";
import Img6 from "../../assets/images/img6.png";
import Img7 from "../../assets/images/img7.png";
import Img8 from "../../assets/images/img8.png";
import Img9 from "../../assets/images/img9.png";
import Img10 from "../../assets/images/img10.png";
import Item from "../../assets/images/Item.png";
import Item1 from "../../assets/images/Item-1.png";
import Item2 from "../../assets/images/Item-2.png";
import Item3 from "../../assets/images/Item-3.png";
import Item4 from "../../assets/images/Item-4.png";
import Item5 from "../../assets/images/Item-5.png";

import {
    HtmlIcon,
    CssIcon,
    JavascriptIcon,
    JavaIcon,
    C_plusplusIcon,
    PHPIcon,
    C_sharpIcon,
    PythonIcon,
    StarIcon,
    StarGrayIcon,
    LogoIcon,
} from "../../assets/icons/Icons.js";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

LandingPage.propTypes = {};

function LandingPage(props) {
    const { loggedIn } = useSelector((state) => state?.auth);
    return (
        <div className='min-vh-100 min-vw-90'>
            <HeaderLandingPage logo={true} searchBar={false} menu={true} buttonAddQuestion={true} />
            <div className='bg-white'>
                {/* Screen 1 */}
                <div className='Screen1' id='home'>
                    <div className='py-20'>
                        <div className='h-100 container-xl'>
                            <div className='row'>
                                <div className='col-md-6 d-flex flex-column align-items-center align-items-md-start p-10'>
                                    <Fade left>
                                        <h1>
                                            <span>N???n t???ng trao ?????i </span>
                                            <span>v??? l???p tr??nh </span>
                                            <span></span>
                                            mi???n ph??
                                        </h1>
                                        <p className='mt-5 mt-md-10 lh-lg'>
                                            M???t c???ng ?????ng l???n m???nh v???i nhi???u l???p tr??nh vi??n c?? kinh nghi???m. Cung c???p c??c
                                            gi???i ph??p t???t nh???t cho v???n ????? trong m?? ngu???n c???a b???n.
                                        </p>
                                        <div>
                                            {!loggedIn ? (
                                                <NavLink to='/sign-up' className='ButtonPrimary'>
                                                    ????ng k?? ngay
                                                </NavLink>
                                            ) : null}
                                        </div>
                                        <div
                                            className='d-flex mt-10 mt-md-15 justify-content-between'
                                            style={{ width: "25rem" }}>
                                            <div className='fst-italic'>
                                                <i className='far fa-check'></i>
                                                Mi???n ph??
                                            </div>
                                            <div className='fst-italic'>
                                                <i className='far fa-check'></i>
                                                Ch??nh x??c
                                            </div>
                                            <div className='fst-italic'>
                                                <i className='far fa-check'></i>
                                                Nhanh ch??ng
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                                <div className='col-md-6'>
                                    <Fade right>
                                        <img className='w-100' src={Web} alt='' />
                                    </Fade>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Screen 2 */}
                <div className='Screen2 d-flex flex-column align-items-center' id='introduction'>
                    <div
                        className='d-flex flex-column align-items-center'
                        style={{
                            backgroundColor: "#F7F8F9",
                            width: "95%",
                            borderRadius: "2rem",
                        }}>
                        <Zoom>
                            <h1 className='mt-20 mb-10'>C?? t???t c??? c??c ng??n ng??? l???p tr??nh</h1>
                        </Zoom>
                        <Zoom delay={100}>
                            <p>M???i c??u h???i v?? gi???i ph??p v??? c??c ng??n ng??? l???p tr??nh kh??c nhau.</p>
                        </Zoom>
                        <div className='IconContainer d-flex flex-column flex-md-row'>
                            <div className='d-flex justify-content-between'>
                                <Bounce left delay={300}>
                                    <div className='IconWrapper'>
                                        <HtmlIcon height='2.5rem' width='2.5rem' />
                                    </div>
                                </Bounce>
                                <Bounce left delay={200}>
                                    <div className='IconWrapper'>
                                        <CssIcon height='2.5rem' width='2.5rem' />
                                    </div>
                                </Bounce>
                                <Bounce left delay={100}>
                                    <div className='IconWrapper'>
                                        <JavascriptIcon height='2.5rem' width='2.5rem' />
                                    </div>
                                </Bounce>
                                <Bounce left>
                                    <div className='IconWrapper'>
                                        <JavaIcon height='2.5rem' width='2.5rem' />
                                    </div>
                                </Bounce>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <Bounce right>
                                    <div className='IconWrapper'>
                                        <C_plusplusIcon height='2.5rem' width='2.5rem' />
                                    </div>
                                </Bounce>
                                <Bounce right delay={100}>
                                    <div className='IconWrapper'>
                                        <PHPIcon height='2.5rem' width='2.5rem' />
                                    </div>
                                </Bounce>
                                <Bounce right delay={200}>
                                    <div className='IconWrapper'>
                                        <C_sharpIcon height='2.5rem' width='2.5rem' />
                                    </div>
                                </Bounce>
                                <Bounce right delay={300}>
                                    <div className='IconWrapper'>
                                        <PythonIcon height='2.5rem' width='2.5rem' />
                                    </div>
                                </Bounce>
                            </div>
                        </div>
                        <div className='d-flex w-100 justify-content-center justify-content-md-between p-5 p-sm-10 p-md-0 mt-md-30 mt-lg-40 mb-md-0 position-relative'>
                            <Zoom delay={400} duration={2000}>
                                <img
                                    className='d-none d-md-flex'
                                    style={{
                                        width: "35%",
                                        borderRadius: "2rem",
                                        filter: " drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                                    }}
                                    src={Img1}
                                    alt=''
                                />
                            </Zoom>
                            <Zoom delay={400} duration={2000}>
                                <img className='ImgScreen2' src={Img2} alt='' />
                            </Zoom>
                            <Zoom delay={400} duration={2000}>
                                <img
                                    className='d-none d-md-flex'
                                    style={{
                                        width: "35%",
                                        borderRadius: "2rem",
                                        filter: " drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                                    }}
                                    src={Img3}
                                    alt=''
                                />
                            </Zoom>
                        </div>
                    </div>
                </div>
                {/* Line */}
                <div
                    className='mt-40 mb-20 pt-10 mx-auto'
                    style={{
                        width: "15rem",
                        borderBottom: "2px solid #5A7184",
                    }}></div>
                {/* Screen 3 */}
                <div
                    className='Screen3 d-flex mx-auto'
                    style={{
                        backgroundColor: "#FBFBFB",
                        width: "95%",
                        borderRadius: "2rem",
                    }}>
                    <div className='py-10'>
                        <div className='h-100 container-xl'>
                            <div className='row d-lg-flex flex-row-reverse'>
                                <div className='col-md-6 d-flex justify-content-center align-items-center'>
                                    <Bounce right duration={2000}>
                                        <img style={{ width: "100%" }} src={Img4} alt='' />
                                    </Bounce>
                                </div>
                                <div className='col-md-6 d-flex flex-column p-10'>
                                    <Fade left>
                                        <h1 className='fw-bold lh-base'>C??c l???p tr??nh vi??n y??u th??ch CodeHelper</h1>
                                    </Fade>
                                    <Fade left delay={100}>
                                        <p className='mt-10 mb-2 lh-lg'>
                                            Khi c??c l???p tr??nh vi??n g???p v???n ????? v??? m?? h??a, h??? s??? t??m ?????n CodeHelper. B???i
                                            v?? h??? bi???t h??? s??? t??m ra gi???i ph??p.
                                        </p>
                                    </Fade>
                                    <div className='Screen3-percent d-flex flex-column mt-10'>
                                        <Fade left delay={200}>
                                            <div className='d-flex align-items-center py-5'>
                                                <h2 className='mx-5'>53%</h2>
                                                c??c l???p tr??nh vi??n truy c???p CodeHelper m???i ng??y
                                            </div>
                                        </Fade>
                                        <Fade left delay={300}>
                                            <div className='d-flex align-items-center p-3 mt-6'>
                                                <h2 className='mx-5'>81%</h2>
                                                trong s??? c??c l???p tr??nh vi??n truy c???p CodeHelper ??t nh???t m???t l???n m???t tu???n
                                            </div>
                                        </Fade>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Line */}
                <div
                    className='mt-30 mb-20 mx-auto'
                    style={{
                        width: "15rem",
                        borderBottom: "2px solid #5A7184",
                    }}></div>
                {/* Screen 4 */}
                <div
                    className='Screen4 d-flex flex-column mx-auto'
                    style={{
                        backgroundColor: "#F7F8F9",
                        width: "95%",
                        borderRadius: "2rem",
                    }}>
                    <Zoom>
                        <h1
                            className='mt-15 mb-10 mx-auto'
                            style={{
                                color: "#183B56",
                                fontSize: "3rem",
                                fontWeight: "800",
                            }}>
                            C??c Blog chia s??? v??? l???p tr??nh
                        </h1>
                    </Zoom>
                    <Zoom delay={100}>
                        <p className='fs-5 mx-auto' style={{ color: "#5A7184" }}>
                            Gi???i thi???u b?? quy???t k??? thu???t c???a b???n.
                        </p>
                    </Zoom>
                    <div className='ImgScreen4Wrapper d-flex my-15 mb-md-40 mx-auto position-relative'>
                        <Roll top delay={200}>
                            <img
                                style={{
                                    position: "absolute",
                                    top: "40%",
                                    left: "-15%",
                                    width: "25%",
                                }}
                                src={Shape}
                                alt=''
                            />
                        </Roll>
                        <Roll bottom delay={200}>
                            <img
                                style={{
                                    position: "absolute",
                                    bottom: "-10%",
                                    right: "-10%",
                                    width: "25%",
                                }}
                                src={Shape}
                                alt=''
                            />
                        </Roll>
                        <Roll right delay={200}>
                            <img
                                style={{
                                    position: "absolute",
                                    top: "-20%",
                                    right: "30%",
                                    width: "20%",
                                }}
                                src={Shape}
                                alt=''
                            />
                        </Roll>
                        <Zoom delay={400}>
                            <img className='ImgScreen4' src={Img5} alt='' />
                        </Zoom>
                        <Fade bottom delay={500}>
                            <div
                                className='Screen4Infor  d-none d-md-flex'
                                style={{
                                    top: "-15%",
                                    left: "-10%",
                                }}>
                                <i className='fas fa-check-circle'></i>
                                <p className='text-center fw-bold'>
                                    K???t n???i v???i c??c l???p tr??nh vi??n theo c??ch tr?? chuy???n, ?????c ????o
                                </p>
                            </div>
                        </Fade>
                        <Fade bottom delay={700}>
                            <div
                                className='Screen4Infor d-none d-md-flex'
                                style={{
                                    top: "25%",
                                    right: "-15%",
                                }}>
                                <i className='fas fa-check-circle'></i>
                                <p className='text-center fw-bold'>
                                    C??c b??i blog ???????c bi??n so???n v???i tr??nh ????? chuy??n m??n cao
                                </p>
                            </div>
                        </Fade>
                        <Fade bottom delay={900}>
                            <div
                                className='Screen4Infor d-none d-md-flex'
                                style={{
                                    bottom: "-25%",
                                    left: "25%",
                                }}>
                                <i className='fas fa-check-circle'></i>
                                <p className='text-center fw-bold'>
                                    H??n 1000 b??i blog ???????c th??m m???i trong v??ng 6 th??ng
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <div className='d-flex d-md-none justify-content-evenly mb-10 mb-sm-20'>
                        <div className='row'>
                            <div className='col-6 col-sm-4'>
                                <Fade bottom delay={500}>
                                    <div
                                        className='Screen4Infor'
                                        style={{
                                            top: "-15%",
                                            left: "-10%",
                                        }}>
                                        <i className='fas fa-check-circle'></i>
                                        <p className='text-center fw-bold'>
                                            K???t n???i v???i c??c l???p tr??nh vi??n theo c??ch tr?? chuy???n, ?????c ????o
                                        </p>
                                    </div>
                                </Fade>
                            </div>
                            <div className='col-6 col-sm-4'>
                                <Fade bottom delay={700}>
                                    <div
                                        className='Screen4Infor'
                                        style={{
                                            top: "25%",
                                            right: "-15%",
                                        }}>
                                        <i className='fas fa-check-circle'></i>
                                        <p className='text-center fw-bold'>
                                            C??c b??i blog ???????c bi??n so???n v???i tr??nh ????? chuy??n m??n cao
                                        </p>
                                    </div>
                                </Fade>
                            </div>
                            <div className='col-12 col-sm-4 text-center'>
                                <Fade bottom delay={900}>
                                    <div
                                        className='Screen4Infor'
                                        style={{
                                            bottom: "-25%",
                                            left: "25%",
                                        }}>
                                        <i className='fas fa-check-circle'></i>
                                        <p className='text-center fw-bold'>
                                            H??n 1000 b??i blog ???????c th??m m???i trong v??ng 6 th??ng
                                        </p>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Line */}
                <div
                    className='mt-30 mx-auto'
                    style={{
                        width: "80vw",
                        borderBottom: "1px solid #E3E7ED",
                    }}></div>
                {/* Screen 5 */}
                <div className='Screen5 py-20'>
                    <div className='h-100 container-xl'>
                        <div className='row'>
                            <div className='col-md-6 d-flex justify-content-center align-items-center'>
                                <Zoom>
                                    <img className='w-100 my-20' src={Img6} alt='' />
                                </Zoom>
                            </div>
                            <div className='col-md-6 d-flex flex-column align-items-center px-10'>
                                <Fade bottom>
                                    <h1
                                        className='mr-40'
                                        style={{
                                            width: "16rem",
                                            color: "#fff",
                                            padding: "0.3rem 1rem",
                                            backgroundColor: "#FAAD13",
                                            borderRadius: "0.5rem",
                                        }}>
                                        Ph??? bi???n
                                    </h1>
                                </Fade>
                                <Fade bottom delay={100}>
                                    <h1>tr??n to??n th??? gi???i</h1>
                                </Fade>
                                <Fade bottom delay={200}>
                                    <div className='w-100'>
                                        <input type='checkbox' id='touch1' />
                                        <label className='mt-10' id='LabelDrop1' htmlFor='touch1'>
                                            <i className='fas fa-chevron-down ArrowDown1'></i>
                                            <i className='fas fa-chevron-up ArrowUp1'></i>
                                            <span>L?????ng truy c???p CodeHelper l???n</span>
                                        </label>
                                        <div className='SlideText1'>
                                            Trung b??nh CodeHelper nh???n ???????c h??n 100 tri???u l?????t truy c???p h??ng th??ng t???
                                            c??c nh?? ph??t tri???n.
                                        </div>
                                    </div>
                                </Fade>
                                <Fade bottom delay={300}>
                                    <div className='w-100'>
                                        <input type='checkbox' id='touch2' />
                                        <label className='mt-6' id='LabelDrop2' htmlFor='touch2'>
                                            <i className='fas fa-chevron-down ArrowDown2'></i>
                                            <i className='fas fa-chevron-up ArrowUp2'></i>
                                            <span>10 qu???c gia c?? l??u l?????ng truy c???p nhi???u nh???t</span>
                                        </label>
                                        <div className='SlideText2'>
                                            Hoa K???, ???n ?????, Anh, ?????c, Canada, Ph??p, Brazil, Nga, ??c v?? T??y Ban Nha
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Line */}
                <div
                    className='mx-auto'
                    style={{
                        width: "15rem",
                        borderBottom: "2px solid #5A7184",
                    }}></div>
                {/* Screen 6 */}
                <div className='Screen6 py-30'>
                    <div className='h-100 container-xl'>
                        <div className='row d-flex justify-content-between align-items-center'>
                            <Flip top delay={400}>
                                <div className='col-6 col-md-4 px-5 my-5 mx-auto'>
                                    <div className='ItemScreen6 d-flex flex-column align-items-center'>
                                        <img src={Img7} alt='' />
                                        <h1>200,000</h1>
                                        <p>L???p tr??nh vi??n</p>
                                    </div>
                                </div>
                            </Flip>

                            <Flip top delay={600}>
                                <div className='col-6 col-md-4 px-5 my-5 mx-auto'>
                                    <div className='ItemScreen6 d-flex flex-column align-items-center'>
                                        <img src={Img8} alt='' />
                                        <h1>+500</h1>
                                        <p>L???p tr??nh vi??n m???i m???i th??ng</p>
                                    </div>
                                </div>
                            </Flip>
                            <Flip top delay={800}>
                                <div className='col-6 col-md-4 px-5 my-5 mx-auto'>
                                    <div className='ItemScreen6 d-flex flex-column align-items-center'>
                                        <img src={Img9} alt='' />
                                        <h1>+50</h1>
                                        <p>Qu???c gia k???t n???i</p>
                                    </div>
                                </div>
                            </Flip>
                        </div>
                    </div>
                </div>
                {/* Screen 7 (Our Customer Testimony) */}
                <div
                    className='Screen7 d-flex flex-column text-center mx-auto'
                    style={{
                        backgroundColor: "#F7F8F9",
                        width: "95%",
                        borderRadius: "2rem",
                    }}>
                    <div className='d-flex flex-column mx-auto'>
                        <Zoom>
                            <h1 className='mt-15 mb-10 mx-auto'>Our Customer Testimony</h1>
                        </Zoom>
                        <Zoom delay={100}>
                            <p className='mx-auto w-75 text-center'>
                                See what our customer say about us. It really matter for us. How good or bad we will
                                make it for evaluation to make EhyaLive better.
                            </p>
                        </Zoom>
                    </div>
                    <div className='row d-flex px-20 py-15 justify-content-between'>
                        <Fade right delay={200}>
                            <div
                                className='col-lg-4 d-flex flex-column my-5 justify-content-between align-items-start p-8 bg-white'
                                style={{ borderRadius: "2rem" }}>
                                <div className='d-flex'>
                                    <StarIcon className='me-2' />
                                    <StarIcon className='me-2' />
                                    <StarIcon className='me-2' />
                                    <StarIcon className='me-2' />
                                    <StarGrayIcon className='me-2' />
                                </div>
                                <span className='my-6'>
                                    "I know in real-time where the money is spent, and I don???t have to lend out the
                                    company???s credit card anymore. What a relief!"
                                </span>
                                <div
                                    style={{
                                        color: "#183B56",
                                        fontSize: "1.3rem",
                                        fontWeight: "600",
                                    }}>
                                    Boniface Esanji
                                </div>
                            </div>
                        </Fade>
                        <Fade right delay={400}>
                            <div
                                className='col-lg-4 d-flex flex-column my-5 justify-content-between align-items-start p-8 bg-white'
                                style={{ borderRadius: "2rem" }}>
                                <div className='d-flex'>
                                    <StarIcon className='me-2' />
                                    <StarIcon className='me-2' />
                                    <StarIcon className='me-2' />
                                    <StarIcon className='me-2' />
                                    <StarIcon className='me-2' />
                                </div>
                                <span className='my-6'>
                                    "A great tool to monitor credit card expenses, collect receipts, and facilitate
                                    accounting!!"
                                </span>
                                <div
                                    style={{
                                        color: "#183B56",
                                        fontSize: "1.3rem",
                                        fontWeight: "600",
                                    }}>
                                    Dana Kop??ivov??
                                </div>
                            </div>
                        </Fade>
                        <Fade right delay={600}>
                            <div
                                className='col-lg-3 d-flex flex-column my-5 justify-content-between align-items-start p-8 bg-white'
                                style={{ borderRadius: "2rem" }}>
                                <div className='d-flex'>
                                    <StarIcon className='me-2' />
                                    <StarIcon className='me-2' />
                                    <StarIcon className='me-2' />
                                    <StarIcon className='me-2' />
                                    <StarGrayIcon className='me-2' />
                                </div>
                                <span className='my-6'>"The easiest expense software I have ever used!"</span>
                                <div
                                    style={{
                                        color: "#183B56",
                                        fontSize: "1.3rem",
                                        fontWeight: "600",
                                    }}>
                                    Gvozden Boskovsky
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
                {/* Screen 8 */}
                <div className='Screen8 my-20'>
                    <h1
                        style={{
                            textAlign: "center",
                            color: "#183B56",
                            fontSize: "2.2rem",
                            fontWeight: "750",
                        }}>
                        ???????c ch???ng nh???n b???i c??c t??? ch???c h??ng ?????u
                    </h1>
                    <div>
                        <div className='row row-cols-2 row-cols-lg-6 g-2 g-lg-3 py-10 mx-auto mx-md-25'>
                            <div className='col'>
                                <div className='py-5 text-center'>
                                    <img src={Item} alt='' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='py-5 text-center'>
                                    <img src={Item1} alt='' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='py-5 text-center'>
                                    <img src={Item2} alt='' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='py-5 text-center'>
                                    <img src={Item3} alt='' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='py-5 text-center'>
                                    <img src={Item4} alt='' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='py-5 text-center'>
                                    <img src={Item5} alt='' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='py-5 text-center'>
                                    <img src={Item2} alt='' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='py-5 text-center'>
                                    <img src={Item} alt='' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='py-5 text-center'>
                                    <img src={Item3} alt='' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='py-5 text-center'>
                                    <img src={Item1} alt='' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='py-5 text-center'>
                                    <img src={Item5} alt='' />
                                </div>
                            </div>
                            <div className='col'>
                                <div className='py-5 text-center'>
                                    <img src={Item4} alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Screen 9 */}
                <div
                    className='Screen9 d-flex justify-content-end mx-auto'
                    style={{
                        backgroundColor: "#485763",
                        width: "95%",
                        borderRadius: "2rem",
                    }}
                    id='contact'>
                    <div className='h-100 container-xl'>
                        <div className='row d-flex flex-row-reverse'>
                            <Fade right delay={400}>
                                <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                    <img className='w-100' src={Img10} alt='' />
                                </div>
                            </Fade>
                            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                <Zoom delay={400}>
                                    <div className='BoxScreen9 d-flex flex-column bg-white align-items-center justify-content-between my-20 py-10 px-20'>
                                        <LogoIcon height='3.6rem' width='3.6rem' />
                                        <h1 className='fw-bold text-center' style={{ color: "#485763" }}>
                                            N???n t???ng c??ng khai c???a ch??ng t??i
                                        </h1>
                                        <p className='text-center' style={{ color: "#485763" }}>
                                            N??i c??c nh?? ph??t tri???n v?? l???p tr??nh vi??n trao ?????i ki???n th???c
                                        </p>
                                        <NavLink to='/sign-up' className='ButtonPrimary text-decoration-none fs-6'>
                                            Tham gia ngay
                                        </NavLink>
                                    </div>
                                </Zoom>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterDashboard />
        </div>
    );
}

export default LandingPage;
