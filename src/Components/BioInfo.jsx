import React, {useState} from 'react';
import "./styles/BioInfo.css"
import left_arr from "../../public/images/arrow/left-arrow.svg"
import right_arr from "../../public/images/arrow/right-arrow.svg"

const BioInfo = ({bios, initialIndex, bc_style, c_style}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [index, setIndex] = useState(initialIndex); // 将index作为内部状态

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const increment = (e) => {
        e.preventDefault();
        setIndex((currentIndex) => (currentIndex + 1) % bios.length);
        console.error(index);
    };

    const decrement = (e) => {
        e.preventDefault();
        setIndex((currentIndex) => (currentIndex - 1 + bios.length) % bios.length);
        console.error(index);

    };

    return (
        <>
            <div className={"brief-card"} style={{
                ...bc_style,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <img src={bios[initialIndex]["imgSrc"]}
                     alt={bios[initialIndex]["Name"]}
                     onClick={toggleModal}
                     className={"bf-img"}
                     style={{borderRadius: `0px`}}
                />
                <div className="bf-name">{bios[initialIndex]["Name"]}</div>

            </div>
            {isModalOpen && (index + 1) && (<div>
                    <div className="modal-backdrop" onClick={toggleModal}>
                    </div>
                    <button className="circle-button left-arr" onMouseDown={decrement}>
                        <img src={left_arr} alt="Button Image" className={"bt-img"}/>
                    </button>
                    <button className="circle-button right-arr" onMouseDown={increment}>
                        <img src={right_arr} alt="Button Image" className={"bt-img"}/>
                    </button>

                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div style={{
                            display: "flex",
                            marginBottom: "10px",
                            justifyContent: "space-between"
                        }}>
                            <img src={bios[index]["imgSrc"]}
                                 alt={bios[index]["Name"]}
                                 className={"dt-img"}
                                 style={{borderRadius: `10px`}}
                            />
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                minWidth: "60%"
                            }}>
                                <div className={"item-key"} style={{
                                    justifyContent: "flex-start"
                                }}>{"BIO: "}</div>
                                <div className={"bio-value"} style={
                                    bios[index]["Bio"].length > 1500 ?
                                    {
                                        fontSize: "12px"
                                    } : {}
                                }>{bios[index]["Bio"]}</div>
                            </div>
                        </div>
                        {Object.keys(bios[index])
                            .filter((key, itemIndex) => key !== "Timestamp" && key !== "Bio" && key !== "imgSrc")
                            .map((key, itemIndex) => (
                                <div className={"info-item"}>
                                    <div className={"item-key"}>{key + ": "}</div>
                                    <div className={"item-value"} style={
                                        bios[index][key].length > 400 ?
                                            {
                                                fontSize: "12px"
                                            } : {}
                                    }>{bios[index][key]}</div>
                                </div>

                            ))}

                    </div>
                </div>
            )
            }
        </>
    )
        ;
};

export default BioInfo;
