import React from "react";
import { MdCompare } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import StarRating from 'star-rating-react';
import { FaSortAmountDown } from "react-icons/fa";


const Mobiles_Tablets = () => {


    return (<>

        <div className="mx-3">
            <div className="container-fluid">

                <div className="row d-flex flex-column flex-grow-1">

                    <div className="col-12">


                    <div className="col-12 py-5">
                            <div className="d-flex mx-3 col-12 justify-content-between flex-wrap">

                                <span className="col-md-6 col-12">10000 Product</span>

                                <div className="d-flex">
                                <FaSortAmountDown />
                                <select className="d-flex px-5 border-bottom dropDown active">
                                    <option className="dropdown-item" value="1" selected disabled>Position</option>
                                    <option className="dropdown-item" value="2">Price</option>
                                    <option className="dropdown-item" value="3">A-z</option>
                                    <option className="dropdown-item" value="4">Rating</option>
                                </select>
                                </div>
                            </div>
                        </div>



                        <div className="d-flex flex-wrap justify-content-center">

                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>
                            <div className="ProductCard  d-flex flex-column flex-grow-1 shadow bg-white mx-3 my-2 position-relative" style={{ width: "14rem" }}>
                                <div className="d-flex position-absolute heart">
                                    <FiHeart className="loveBtn grow" />
                                </div>
                                <div className="my-4 d-flex justify-content-center">
                                    <img src="https://api-rayashop.freetls.fastly.net/media/catalog/product/cache/4e49ac3a70c0b98a165f3fa6633ffee1/p/h/phm7sl6_swid9jhjx4xociew.jpeg" alt='Samsung' loading="lazy" className="ProductCard__Thumb object-contain grow mt-5" />
                                </div>
                                <div className="ProductCard__Details p-3 bg-white">
                                    <div>
                                        <StarRating size={5} value={0} disable />
                                    </div>
                                    <p className="font-body text-sm">Xiaomi Redmi Note 11S Dual SIM, 128GB, 6GB RAM, 4G LTE, Blue</p>
                                    <span className="product-price">7,200 EGP</span>
                                    <div data-v-6569f61a="" class="border border-secondary-200 w-full mt-1 mb-3"></div>
                                    <p className="font-body text-sm">From 480 EGP / 24 Months with Raya Installments</p>
                                    <button type="button" class="compareButton p-3 text-sm mb-2">
                                        <MdCompare className="mx-3" size={18} />
                                        Compare
                                    </button>
                                </div>
                            </div>

                        </div>



                        <div className="endLine mt-5"><span>Showing 20 out of 2022</span></div>

                        <div className="d-flex align-items-center justify-content-center my-5">
                            <div className="mx-3">
                                <i class="bi bi-arrow-down loadMore btn text-light"></i>
                            </div>
                            <p className="mt-3">Load More</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>


    </>);
}

export default Mobiles_Tablets;