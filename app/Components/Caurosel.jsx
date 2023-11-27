'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import heroImage from '@/public/images/hero.png'
import heartImage from '@/public/images/heart.svg'
import heroImage2 from '@/public/images/hero2.jpg'
export default function Caurosel() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner container-fluid">
                    <div className="carousel-item active text-white">
                        <Image src={heroImage} className="w-100 Image-fluid object-fit-cover" id="hero" alt="hero" />
                        <div className="d-inline-block position-absolute" id="caurosol">
                            <Image src={heartImage} alt="Heart" className="pb-3 mb-2" />
                            <h1 className=" txt fw-bold">Find the</h1>
                            <h1 className="txt">Perfect Wedding Vendor</h1>
                            <p className="fs-5 py-2">Search tamil wedding suppliers by category location or name</p>
                            <div>
                                <div className="aho">
                                    <div
                                        style={{ borderRadius: "2px solid rgba(235, 40, 105, 0.918)" }}>
                                        <input type="text" id="input" className="value px-2 py-2 border border-0" placeholder="We're looking for" />
                                        <div className="btn-group">
                                            <button type="button" className="drop btn dropdown-toggle border border-0"
                                                data-bs-toggle="dropdown"></button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="/">Option one</a></li>
                                                <li><a className="dropdown-item" href="/">Option two</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div style={{ borderRadius: "2px solid rgba(235, 40, 105, 0.918)" }}>
                                        <input type="text" id="input" className="value px-2 py-2 border border-0" placeholder="Enter Location" />
                                        <div className="btn-group">
                                            <button type="button" className="drop btn dropdown-toggle border border-0" data-bs-toggle="dropdown">
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="/">Option one</a></li>
                                                <li><a className="dropdown-item" href="/">Option two</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div >
                                        <input type="text" id="input" className="value px-2 py-2 border border-0" placeholder="Or called" />
                                        <div className="btn-group">
                                            <button type="button" className="drop btn dropdown-toggle border border-0" data-bs-toggle="dropdown">
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="/">Option one</a></li>
                                                <li><a className="dropdown-item" href="/">Option two</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid carousel-item text-white">
                        <Image src={heroImage2} className="d-block w-100 heroImage2" alt="Hero2" />
                        <div className=" container d-inline-block position-absolute" id="caurosol">
                            <Image src={heartImage} alt="Heart" className="pb-3 mb-2" />
                            <h1 className=" txt fw-bold">Find the</h1>
                            <h1 className="txt">Perfect Wedding Vendor</h1>
                            <p className="fs-5 fw-bold py-2">Search tamil wedding suppliers by category location or name</p>
                            <div>
                                <div className="container"
                                    style={{ width: 'fit-content', display: 'inline-flex', borderRadius: 10, backgroundColor: 'white', padding: '3px 5px' }}
                                >
                                    <div style={{ borderRadius: "2px solid rgba(235, 40, 105, 0.918)" }}>
                                        <input type="text" id="input" className="px-2 py-2 border border-0" placeholder="We're looking for" />
                                        <div className="btn-group">
                                            <button type="button" className="drop btn dropdown-toggle border border-0"
                                                data-bs-toggle="dropdown"></button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="/">Option one</a></li>
                                                <li><a className="dropdown-item" href="/">Option two</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div style={{ borderRadius: "2px solid rgba(235, 40, 105, 0.918)" }}>
                                        <input type="text" id="input" className=" px-2 py-2 border border-0" placeholder="Enter Location" />
                                        <div className="btn-group">
                                            <button type="button" className="drop btn dropdown-toggle border border-0" data-bs-toggle="dropdown">
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="/">Option one</a></li>
                                                <li><a className="dropdown-item" href="/">Option two</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div >
                                        <input type="text" id="input" className=" px-2 py-2 border border-0" placeholder="Or called" />
                                        <div className="btn-group">
                                            <button type="button" className="drop btn dropdown-toggle border border-0" data-bs-toggle="dropdown">
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="/">Option one</a></li>
                                                <li><a className="dropdown-item" href="/">Option two</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
