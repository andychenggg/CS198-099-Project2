import "./styles/AboutUs.css"
import DynamicText from "../Components/DynamicText.jsx";
import aboutUs from "../../public/texts/aboutUs.json"
import {COLOR_SCHEME} from "../Configurations/constants.jsx";
import eventImg from "../../public/images/events/filenames.json";
// import Carousel from "../Components/Carousel.jsx";
import 'element-theme-default';
import {Carousel} from "element-react";
import hireUs from "../../public/images/hire-us/Copy of Noteworthy-at-ST-City-Hall.jpg"
import SingleImageViewer from "../Components/SimgleImageViewer.jsx";
import { PhotoProvider, PhotoView } from 'react-photo-view'
import fb_svg from "../../public/images/follow-us/facebook.svg"
import ins_svg from "../../public/images/follow-us/instagram.svg"
import tk_svg from "../../public/images/follow-us/tiktoklogo_tiktok.svg"
import yt_svg from "../../public/images/follow-us/youtube.svg"
import MenuBar from "../Components/MenuBar.jsx";
import white_bear from "../../public/images/noteworthy bear-01.png"
import black_bear from "../../public/images/noteworthy bear-01-black.png"

const AboutUs = () => {
    const dyt_style = {
        width: "45%",
        textAlign: "justify",
        overflowWrap: "break-word",
        color: "white",
        fontSize: "20px",
        marginLeft: "50px",
        marginRight: "50px",
        lineHeight: "29px"
    }

    const bt_style = {
        backgroundColor: "transparent",
        margin: "5px",
    }

    const img_style = {
        width: "100%",
        height: "100%",
        borderRadius: "10px 10px 10px 10px",

    }
    return (
        <>
            <MenuBar/>
            <div style={{
                position: "absolute",
                left: "80px",
                top: "100px",
                rotate: "20deg",
            }}>
                <svg t="1712001194140" className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="21197" width="100" height="100">
                    <path
                        d="M749.5 239.9C681 199.5 629.9 140 629.9 140c-161.4-161.5-269.1-15.4-269.1-15.4L354 678.1c-10.2-2.6-80.2-121.1-91-120.4-62.8 4.2-117.4 84-117.4 197.3 0 113.2 72.3 205 161.5 205 89.1 0 161.4-91.8 161.4-205 0-12.3-1-24.2-2.6-35.9h0.1l-28.8-535.9c183.8 358.4 441.3 149 441.3 115.7 0-14.8-74.9-27.1-129-59z"
                        fill="#f78da7" p-id="21198"></path>
                </svg>
            </div>
            <div style={{
                position: "absolute",
                left: "200px",
                top: "110px",
                rotate: "20deg",
            }}>
                <svg t="1712001194140" className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="21197" width="100" height="100">
                    <path
                        d="M749.5 239.9C681 199.5 629.9 140 629.9 140c-161.4-161.5-269.1-15.4-269.1-15.4L354 678.1c-10.2-2.6-80.2-121.1-91-120.4-62.8 4.2-117.4 84-117.4 197.3 0 113.2 72.3 205 161.5 205 89.1 0 161.4-91.8 161.4-205 0-12.3-1-24.2-2.6-35.9h0.1l-28.8-535.9c183.8 358.4 441.3 149 441.3 115.7 0-14.8-74.9-27.1-129-59z"
                        fill="#ff6900" p-id="21198"></path>
                </svg>
            </div>
            <div style={{
                position: "absolute",
                left: "300px",
                top: "90px",
                rotate: "20deg",
            }}>
                <svg t="1712001194140" className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="21197" width="100" height="100">
                    <path
                        d="M749.5 239.9C681 199.5 629.9 140 629.9 140c-161.4-161.5-269.1-15.4-269.1-15.4L354 678.1c-10.2-2.6-80.2-121.1-91-120.4-62.8 4.2-117.4 84-117.4 197.3 0 113.2 72.3 205 161.5 205 89.1 0 161.4-91.8 161.4-205 0-12.3-1-24.2-2.6-35.9h0.1l-28.8-535.9c183.8 358.4 441.3 149 441.3 115.7 0-14.8-74.9-27.1-129-59z"
                        fill="#cf2e2e" p-id="21198"></path>
                </svg>
            </div>
            <div style={{
                position: "absolute",
                left: "430px",
                top: "150px",
                rotate: "20deg",
            }}>
                <svg t="1712001194140" className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="21197" width="100" height="100">
                    <path
                        d="M749.5 239.9C681 199.5 629.9 140 629.9 140c-161.4-161.5-269.1-15.4-269.1-15.4L354 678.1c-10.2-2.6-80.2-121.1-91-120.4-62.8 4.2-117.4 84-117.4 197.3 0 113.2 72.3 205 161.5 205 89.1 0 161.4-91.8 161.4-205 0-12.3-1-24.2-2.6-35.9h0.1l-28.8-535.9c183.8 358.4 441.3 149 441.3 115.7 0-14.8-74.9-27.1-129-59z"
                        fill="#f78da7" p-id="21198"></path>
                </svg>
            </div>
            <div style={{
                position: "absolute",
                right: "50px",
                top: "80px",
                rotate: "20deg",
            }}>

                <svg t="1712001726473" className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="21435" width="230" height="230">
                    <path
                        d="M822.4 64l-481.8 79.8L365.3 697c-9.7-2.7-49.1-47.8-59.5-47.3-58.6 2.9-106.7 56.9-106.7 147.1 0 90.2 59.7 163.2 133.3 163.2s133.3-73.1 133.3-163.2c0-3.7-0.3-7.3-0.5-11h0.1l-8.8-433.4 261.2-39.9 11.4 388c-11.1-3.7-59.7-49.4-71.7-49-43.2 1.3-99.3 55.1-99.3 145.3 0 90.2 59.7 163.2 133.3 163.2 73.6 0 133.3-73.1 133.3-163.2 0.2-10.8-2.3-732.8-2.3-732.8z"
                        fill="#0693e3" p-id="21436"></path>
                </svg>
            </div>
            <div style={{
                position: "absolute",
                right: "300px",
                top: "150px",
                rotate: "-30deg",
            }}>

                <svg t="1712001726473" className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="21435" width="180" height="180">
                    <path
                        d="M822.4 64l-481.8 79.8L365.3 697c-9.7-2.7-49.1-47.8-59.5-47.3-58.6 2.9-106.7 56.9-106.7 147.1 0 90.2 59.7 163.2 133.3 163.2s133.3-73.1 133.3-163.2c0-3.7-0.3-7.3-0.5-11h0.1l-8.8-433.4 261.2-39.9 11.4 388c-11.1-3.7-59.7-49.4-71.7-49-43.2 1.3-99.3 55.1-99.3 145.3 0 90.2 59.7 163.2 133.3 163.2 73.6 0 133.3-73.1 133.3-163.2 0.2-10.8-2.3-732.8-2.3-732.8z"
                        fill="#8ed1fc" p-id="21436"></path>
                </svg>
            </div>
            <div style={{
                position: "absolute",
                right: "40px",
                top: "430px"
            }}>
                <svg t="1712001973989" className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="22635" width="140" height="140">
                    <path
                        d="M568.2 570.5c-9.9-8.9-24.1-11-36.2-5.3l-143.6 68c-12.4 5.9-19.7 18.5-18.8 32.1 0.9 13.6 10 25.1 23 29.2l19.8 6.2v206.7c0 21 17 38 38 38H515c21 0 38-17 38-38V675.1l24.2-69.1c4.4-12.6 0.9-26.5-9-35.5zM532.4 481.5l-69.7-155.6c-6.7-14.8-19.3-26.3-34.8-31.4-15.5-5.1-32.4-3.4-46.6 4.6L89.1 463.8c-26.3 14.8-36.8 46.7-24.4 74.3l44.6 99.5c9.6 21.5 30.5 34.3 52.7 34.3 6.3 0 12.7-1 19-3.2l317.3-108.6c15.4-5.3 27.9-16.8 34.4-31.8 6.4-14.9 6.4-31.9-0.3-46.8zM956.3 308.5c0-61.1-23.8-118.5-67-161.7-43.2-43.2-100.6-67-161.7-67-21.9 0-43.3 3.1-63.8 9l179 417.2c16.7-9.8 32.4-21.8 46.4-35.9 43.3-43.1 67.1-100.6 67.1-161.6zM565.9 146.8c-43.2 43.2-67 100.6-67 161.7s23.8 118.5 67 161.7c43.2 43.2 100.6 67 161.7 67 21.9 0 43.3-3.1 63.8-9L612.4 111c-16.8 9.7-32.4 21.7-46.5 35.8z"
                        fill="#7bdcb5" p-id="22636"></path>
                </svg>
            </div>
            <div style={{
                position: "absolute",
                right: "200px",
                top: "440px"
            }}>
                <svg t="1712001973989" className="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="22635" width="120" height="120">
                    <path
                        d="M568.2 570.5c-9.9-8.9-24.1-11-36.2-5.3l-143.6 68c-12.4 5.9-19.7 18.5-18.8 32.1 0.9 13.6 10 25.1 23 29.2l19.8 6.2v206.7c0 21 17 38 38 38H515c21 0 38-17 38-38V675.1l24.2-69.1c4.4-12.6 0.9-26.5-9-35.5zM532.4 481.5l-69.7-155.6c-6.7-14.8-19.3-26.3-34.8-31.4-15.5-5.1-32.4-3.4-46.6 4.6L89.1 463.8c-26.3 14.8-36.8 46.7-24.4 74.3l44.6 99.5c9.6 21.5 30.5 34.3 52.7 34.3 6.3 0 12.7-1 19-3.2l317.3-108.6c15.4-5.3 27.9-16.8 34.4-31.8 6.4-14.9 6.4-31.9-0.3-46.8zM956.3 308.5c0-61.1-23.8-118.5-67-161.7-43.2-43.2-100.6-67-161.7-67-21.9 0-43.3 3.1-63.8 9l179 417.2c16.7-9.8 32.4-21.8 46.4-35.9 43.3-43.1 67.1-100.6 67.1-161.6zM565.9 146.8c-43.2 43.2-67 100.6-67 161.7s23.8 118.5 67 161.7c43.2 43.2 100.6 67 161.7 67 21.9 0 43.3-3.1 63.8-9L612.4 111c-16.8 9.7-32.4 21.7-46.5 35.8z"
                        fill="#4CA09A" p-id="22636"></path>
                </svg>
            </div>


            <div id="main" style={{
                backgroundColor: `${COLOR_SCHEME.GREEN_DEEP}`
            }}>
                <div id="header">
                    <div className="title" style={{
                        color: COLOR_SCHEME.AMBER
                    }}>About Us
                    </div>
                    <span className="subTitle1" style={{
                        color: COLOR_SCHEME.CYAN_LIGHT
                    }}>Noteworthy</span>
                    <span className="subTitle2" style={{
                        color: COLOR_SCHEME.GREEN_VIVID
                    }}>In-vest-ed in A Cappella</span>
                    <div className="para">
                        <DynamicText
                            text={aboutUs.paragraph1}
                            extraSty={dyt_style}
                            wordPerSecond={20}
                        ></DynamicText>
                        <DynamicText
                            text={aboutUs.paragraph2}
                            extraSty={dyt_style}
                            flip="true"
                            wordPerSecond={20}
                        ></DynamicText>
                    </div>
                </div>
                <div className={"triangle-left"}></div>
                <div className={"bear-row"}>
                    {[0, 1, 2, 3, 4, 5].map((value, index) => {
                        if (value % 2 === 0) {
                            return (
                                <img
                                    key={index}
                                    src={white_bear}
                                    alt="bear"
                                    style={{
                                        width: `${180 - value * 10}px`,
                                        height: `${180 - value * 10}px`,
                                        transform: `rotate(${value * 60}deg)`
                                    }}
                                />
                            );
                        } else {
                            return (
                                <img
                                    key={index}
                                    src={black_bear}
                                    alt="bear"
                                    style={{
                                        width: `${180 - value * 10}px`,
                                        height: `${180 - value * 10}px`,
                                        transform: `rotate(${value * 60}deg)`
                                    }}
                                />
                            );
                        }
                    })}
                </div>

                <div className={"triangle-left-top"}></div>
                <div className="content">
                    <div className="subPart">
                        <div className="subHeader">
                            Events
                        </div>
                        <div className="event-shortText">
                            We organize <b>Welcome Back to A Cappella</b>, Cal's a cappella orientation, at the
                            beginning of
                            every semester. Hundreds of students turn out to hear 13+ a cappella groups perform. The
                            show is
                            always fun, and we hope you'll come!
                        </div>
                        <Carousel interval="4000" type="card" height="300px" arrow={"never"} className={"ca"}>
                            {
                                eventImg.map((item, index) => {
                                    return (
                                        <Carousel.Item key={index} bodyStyle={{
                                            width: "320px",

                                        }} className={"ci"}>
                                            <PhotoProvider>
                                                <PhotoView src={item}>
                                                    <img src={item} alt={`image ${index}`} style={img_style}/>
                                                </PhotoView>
                                            </PhotoProvider>
                                            {/*<img src={item} alt={`image ${index}`} style={img_style}/>*/}
                                        </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                    <div className="subPart">
                        <div className="subHeader">
                            Hire Us
                        </div>
                        <div className="event-shortText" style={{
                            marginBottom: "15px"
                        }}>
                            Please e-mail our business manager at <a
                            href={"mailto:noteworthy@ucchoral.berkeley.edu"}>noteworthy@ucchoral.berkeley.edu</a> and
                            fill out this
                            <a href={"https://forms.gle/8d4TJZrQ7eX4oSbz8"}> form</a>.
                            Then we'll respond to you with a quote as soon as possible. In your email, let us know:
                        </div>
                        <ul>
                            <li className="event-shortText" style={{
                                marginBottom: "10px"
                            }}>
                                Who you are
                            </li>
                            <li className="event-shortText" style={{
                                marginBottom: "10px"
                            }}>
                                The details of the event (where and when it'll be)
                            </li>
                            <li className="event-shortText" style={{
                                marginBottom: "10px"
                            }}>
                                What kind of songs you'd like us to perform and how long the performance should be
                            </li>
                        </ul>
                        <PhotoProvider>
                            <PhotoView src={hireUs}>
                                <img src={hireUs} alt="" style={{
                                    width: "400px",
                                    height: "250px",
                                    cursor: "pointer"
                                }}/>
                            </PhotoView>
                        </PhotoProvider>
                    </div>
                    <div className="subPart">
                        <div className="subHeader">
                            Follow us
                        </div>
                        <div className="grid-container">
                            <div className="grid-item">
                                <a href="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA" target="_blank"
                                   style={
                                       {
                                           width: "100%",
                                           height: "100%"
                                       }
                                   }>
                                    <button style={{
                                        backgroundImage: `url(${yt_svg})`,
                                        backgroundColor: "red",
                                        width: "100%",
                                        height: "100%"
                                    }} className={"yt-bt"} onMouseDown={
                                        (e) => {
                                            e.preventDefault()
                                        }
                                    }></button>
                                </a>
                            </div>
                            <div className="grid-item">
                                <a href="https://www.instagram.com/cal_noteworthy/" target="_blank" style={
                                    {
                                        width: "100%",
                                        height: "100%"
                                    }
                                }>
                                    <button style={{
                                        backgroundImage: `url(${ins_svg})`,
                                        backgroundColor: "grey",
                                        width: "100%",
                                        height: "100%"
                                    }} className={"ins-bt"} onMouseDown={
                                        (e) => {
                                            e.preventDefault()
                                        }
                                    }></button>
                                </a>
                            </div>
                            <div className="grid-item">
                                <a href="https://www.facebook.com/Noteworthy" target="_blank" style={
                                    {
                                        width: "100%",
                                        height: "100%"
                                    }
                                }>
                                    <button style={{
                                        backgroundImage: `url(${fb_svg})`,
                                        backgroundColor: "#537BBC",
                                        width: "100%",
                                        height: "100%"
                                    }} className={"fb-bt"} onMouseDown={
                                        (e) => {
                                            e.preventDefault()
                                        }
                                    }></button>
                                </a>
                            </div>
                            <div className="grid-item">
                                <a href="https://www.tiktok.com/@uc_noteworthy" target="_blank" style={
                                    {
                                        width: "100%",
                                        height: "100%"
                                    }
                                }>
                                    <button style={{
                                        backgroundImage: `url(${tk_svg})`,
                                        backgroundColor: "black",
                                        width: "100%",
                                        height: "100%"
                                    }} className={"tk-bt"} onMouseDown={
                                        (e) => {
                                            e.preventDefault()
                                        }
                                    }></button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="triangle-right" style={{
                    marginTop: "0px"
                }}></div>
            </div>
        </>
    )
}
export default AboutUs