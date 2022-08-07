import React from 'react'
import Slider from "react-slick";
import { FaSortAmountDown } from "react-icons/fa";


export default function Component_Header() {


    var settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    };



    return (
        <>
            <div className='container-fluid mt-4'>
                <div className="row col-12">
                    <div className="d-flex justify-content-center">
                        <h1 className="pageHeader">Mobiles & Tablets</h1>
                    </div>
                    <div className="mb-5">
                        <div className='container'>
                            <Slider {...settings}>
                                <div class="compareButton p-3 m-2 d-flex justify-content-center">
                                    Mobiles
                                </div>
                                <div className="mx-2"></div>
                                <div class="compareButton p-3 m-2 d-flex justify-content-center">
                                    Mobile Accessories
                                </div>
                                <div className="mx-2"></div>
                                <div class="compareButton p-3 m-2 d-flex justify-content-center">
                                    Tablet
                                </div>
                                <div className="mx-2"></div>
                                <div class="compareButton p-3 m-2 d-flex justify-content-center">
                                    Feature Phones
                                </div>
                            </Slider>
                        </div>

                    </div>
                </div>


            </div>

        </>
    )
}
