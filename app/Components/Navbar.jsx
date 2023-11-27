import Image from 'next/image'
import React from 'react'
import image1 from '../../public/images/logo.svg'
import Link from 'next/link'
export default function Navbar() {
    return (
        <div>
            <header style={{ maxWidth: '100vw' }}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary py-3">
                    <div className="container">
                        {/* <a className="navbar-brand ps-4" href="/"> */}
                        <Image src={image1} width={211} height={64} alt="" />
                        {/* //   style="height: 64px; width: 211px;"
                          </a> */}

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse ms-4 text-uppercase " id="navbarNav">
                            <ul className="navbar-nav">
                                {/* <li className="nav-item pt-1 pe-2">
                                  <Link className="fnt nav-link active" aria-current="page" href="/">Planning Tools</Link>
                              </li>  */}
                                <li className="nav-item pt-1 pe-2">
                                    <Link className="fnt nav-link active" href="/">Venues</Link>
                                </li>
                                <li className="nav-item pt-1 pe-2">
                                    <Link className="fnt nav-link active" href="/">Supplies</Link>
                                </li>
                                <li className="nav-item pt-1 pe-2">
                                    <Link className="fnt nav-link active" href="/">Dresses</Link>
                                </li>
                                <li className="nav-item pt-1 pe-2">
                                    <Link className="fnt nav-link active" href="/">Ideas</Link>
                                </li>
                                <li className="nav-item pt-1 pe-2">
                                    <Link className="fnt nav-link active" href="/">forums</Link>
                                </li>
                                <li className="nav-item pt-1 pe-2">
                                    <Link className="fnt nav-link active" href="/">Gift List</Link>
                                </li>
                                <li className="nav-item pt-1 pe-2">
                                    <Link className="fnt nav-link active" href="/">Stationary</Link>
                                </li>
                                <div className="collapse navbar-collapse justify-content-end text-end">
                                    <li className="nav-item">
                                        <button
                                            className="nav-link btn bg-danger bg-opacity-75 rounded-pill px-4 py-2 text-uppercase fs-5 ms-5 me-2 text-white"
                                            href="/">log in</button>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className="nav-link btn bg-danger bg-opacity-75 rounded-pill  px-4 py-2 text-uppercase fs-5 text-white"
                                            href="/">sign up</button>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}
