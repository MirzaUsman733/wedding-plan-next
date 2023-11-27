import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from "@/public/images/playStore.svg"
import img1 from "@/public/images/appStore.svg"

export default function Footer() {
    return (
        <div>
            <footer style={{backgroundColor: '#ac636e'}} className="container-fluid mt-5 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col text-white py-5">
                            <h5 className="ms-4 fw-bold">Quick Links</h5>
                            <ul className="list">
                                <li>
                                    <Link href="">Trending</Link>
                                </li>
                                <li>
                                    <Link href="">Destination</Link>
                                </li>
                                <li>
                                    <Link href="">Best Trip Orgnazers</Link>
                                </li>
                                <li>
                                    <Link href="">Your Travel Mate</Link>
                                </li>
                                <li>
                                    <Link href="">Meet Our Guide</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col text-white py-5">
                            <h5 className="ms-4 fw-bold">Quick Links</h5>
                            <ul className="list">
                                <li>
                                    <Link href="">Turkey</Link>
                                </li>
                                <li>
                                    <Link href="">Malasia</Link>
                                </li>
                                <li>
                                    <Link href="">Dubai</Link>
                                </li>
                                <li>
                                    <Link href="">SwizzerLand</Link>
                                </li>

                            </ul>
                        </div>

                        <div className="col text-white py-5">
                            <h5 className="ms-4 fw-bold">For Business</h5>
                            <ul className="list">
                                <li>
                                    <Link href="">Resturant</Link>
                                </li>
                                <li>
                                    <Link href="">Experiences</Link>
                                </li>
                                <li>
                                    <Link href="">Community</Link>
                                </li>
                                <li>
                                    <Link href="">Homes</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col text-white py-5">
                            <h5 className="ms-5 fw-bold">Get Our Apps</h5>
                            <ul className="list">
                                <li className="py-2">
                                    <Link href=""><Image src={img} height={50} alt="" /></Link>
                                </li>
                                <li>
                                    <Link href=""><Image src={img1} height={50} alt="" /></Link>
                                </li>
                                </ul>
                        </div>
                    </div>
                </div>
                <div className=" container border border-start-0 border-end-0 border-bottom-0 border-top border-white">
                    <p className="text-white text-center py-3">&copy; 2023. All Right Reserved</p>
                </div>
            </footer>
        </div>
    )
}
