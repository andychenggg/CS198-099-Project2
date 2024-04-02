import "./styles/Carousel.css"
import React, { useState } from 'react';
import {COLOR_SCHEME} from "../Configurations/constants.jsx";

const Carousel = ({ images, img_width, img_height, shift_time, shrink_scale, bt_style}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMovingRight, setMoveRight] = useState(false)
    const [isMovingLeft, setMoveLeft] = useState(false)
    const [isAble, setAble] = useState(true)

    const getPreviousImageIndex = (dif) => {
        return (currentIndex - dif + images.length) % images.length;
    };

    const getNextImageIndex = (dif) => {
        return (currentIndex + dif) % images.length;
    };

    const goToPrevious = (event) => {
        event.preventDefault();
        if(isAble){
            setAble(false);
            setMoveRight(true);
            setTimeout(() => {
                setAble(true);
                setMoveRight(false);
                setCurrentIndex(getPreviousImageIndex(1));
            }, 1000 * shift_time)
        }
    };

    const goToNext = (event) => {
        event.preventDefault();
        if(isAble){
            setAble(false);
            setMoveLeft(true);
            setTimeout(() => {
                setAble(true);
                setMoveLeft(false);
                setCurrentIndex(getNextImageIndex(1));
            }, 1000 * shift_time)
        }
    };

    const img_style = {
        width: img_width,
        height: img_height
    }

    const imgWidthNumber = parseInt(img_width, 10);
    const imgHeightNumber = parseInt(img_height, 10);
    const previewStyle = {
        width: `${imgWidthNumber * shrink_scale}px`,
        height: `${imgHeightNumber * shrink_scale}px`,
        opacity: 0.5, // or any other style you prefer
    };

    const hiddenStyle = {
        width: `${imgWidthNumber * shrink_scale}px`,
        height: `${imgHeightNumber * shrink_scale}px`,
        opacity: 0
    }

    const moving_style = {
        transition: "transform 1s, width 1s, height 1s, opacity 1s"
    }

    const non_moving = {
        transition: "transform 0s, width 0s, height 0s, opacity 0s"
    }

    const current_moving_right = {
        transform: `translateX(${100 * shrink_scale}px) scale(${shrink_scale})`,
        opacity: 0.5
    }

    const current_moving_left = {
        transform: `translateX(${-100 * shrink_scale}px) scale(${shrink_scale})`,
        opacity: 0.5
    }

    const left_moving_right = {
        transform: `translateX(${100 * shrink_scale}px) scale(${1 / shrink_scale})`,
        opacity: 1
    }

    const right_moving_left = {
        transform: `translateX(${-100 * shrink_scale}px) scale(${1 / shrink_scale})`,
        opacity: 1
    }

    const left2left_moving_right = {
        opacity: 0.5
    }

    const right2right_moving_left = {
        opacity: 0.5
    }

    const right_moving_right = {
        opacity: 0
    }

    const left_moving_left = {
        opacity: 0
    }

    const zIndexSty = (index) => {
        return {
            zIndex: index
        }
    }



    return (
        <div className="carousel">
            <button onMouseDown={goToPrevious} style={bt_style === undefined ? {} : bt_style}>{"<"}</button>
            <div className="previous-hidden" onClick={goToPrevious}
                 style={isMovingRight ? zIndexSty(10) : zIndexSty(5)}>
                <img
                    src={images[getPreviousImageIndex(2)]}
                    alt={`Slide ${getPreviousImageIndex(2)}`}
                    style={isMovingRight ? {...hiddenStyle, ...moving_style, ...left2left_moving_right} : {...non_moving, ...hiddenStyle}}
                />
            </div>
            <div className="preview previous" onClick={goToPrevious} style={isMovingRight ? zIndexSty(20) : {}}>
                <img
                    src={images[getPreviousImageIndex(1)]}
                    alt={`Slide ${getPreviousImageIndex(1)}`}
                    style={isMovingRight ? {
                            ...previewStyle,
                            ...moving_style,
                            ...left_moving_right
                        } : (isMovingLeft ? {
                            ...previewStyle,
                            ...moving_style,
                            ...left_moving_left
                        }: {
                            ...non_moving,
                            ...previewStyle
                        })
                    }
                />
            </div>
            <div className="current" style={isMovingRight || isMovingLeft ? zIndexSty(10) : {}}>
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    style={isMovingRight ? {
                        ...img_style,
                        ...moving_style,
                        ...current_moving_right
                    } : (isMovingLeft ? {
                        ...img_style,
                        ...moving_style,
                        ...current_moving_left
                    } : {...non_moving, ...img_style})
                }/>
            </div>
            <div className="preview next" onClick={goToNext} style={isMovingRight ? zIndexSty(5) : {}}>
                <img
                    src={images[getNextImageIndex(1)]}
                    alt={`Slide ${getNextImageIndex(1)}`}
                    style={isMovingRight ? {
                        ...previewStyle,
                        ...moving_style,
                        ...right_moving_right
                    } : (isMovingLeft ? {
                        ...previewStyle,
                        ...moving_style,
                        ...right_moving_left
                    } : {...non_moving, ...previewStyle})
                }/>
            </div>
            <div className="next-hidden" onClick={goToPrevious}
                 style={isMovingRight ? zIndexSty(10) : zIndexSty(5)}>
                <img
                    src={images[getNextImageIndex(2)]}
                    alt={`Slide ${getNextImageIndex(2)}`}
                    style={isMovingLeft ? {...hiddenStyle, ...moving_style, ...right2right_moving_left} : {...non_moving, ...hiddenStyle}}
                />
            </div>
            <button onMouseDown={goToNext} style={bt_style === undefined ? {} : bt_style}>
                {">"}
            </button>
        </div>
    );
};

export default Carousel;


