import Image from 'next/image'
import React from 'react'
import img1 from '@/public/images/heart2.svg'
import img2 from '@/public/images/main1.png'
import img3 from '@/public/images/main1a.png'
import img4 from '@/public/images/main1b.png'
import img5 from '@/public/images/main1c.png'
import img6 from '@/public/images/arrow.svg'
import img7 from '@/public/images/main2.png'
import img8 from '@/public/images/main2a.png'
import img9 from '@/public/images/main2b.png'
import img10 from '@/public/images/main2c.png'
import img11 from '@/public/images/main3.png'
import img12 from '@/public/images/main3a.png'
import img13 from '@/public/images/main3b.png'
import img14 from '@/public/images/main3c.png'
export default function RealWedding() {
    return (
        <div>
            <div className="container justify-content-center text-center my-5 pt-5">
                <h2 className="fw-bold">Real Weddings</h2>
                <p className="ponk fs-5 py-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <Image src={img1} height={50} alt="Heart2" className="my-4" />
            </div>
            <div className="container">
                <div className="container mx-auto">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4 text-center my-3">
                            <div >
                                <Image src={img2} width={400} height={350} alt="" />
                                <div className="my-1">
                                    <Image src={img3} width={124} height={165} alt="" className="img-fluid" />
                                    <Image src={img4} width={124} height={165} alt="" className="img-fluid" />
                                    <Image src={img5} width={124} height={165} alt="" className="img-fluid" />
                                    <div className="container">
                                        <div className="pic row" style={{height: 110, width: 380}}>
                                            <div className="col-12 col-sm-6 col-lg-6">
                                                <h3 className="fw-bold">Raj & Kumari</h3>
                                                <p >Columbo, Srilanka</p>
                                            </div>
                                            <div className="col-12 col-sm-6 col-lg-6 d-flex justify-content-end align-items-center">
                                                <Image src={img6} alt=""  />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 my-3">
                            <div >
                                <Image src={img7} width={379} height={350} alt="" />
                                <div className="my-1">
                                    <Image src={img8} alt="" width={124} height={165} className="img-fluid" />
                                    <Image src={img9} alt="" width={124} height={165} className="img-fluid" />
                                    <Image src={img10} alt="" width={124} height={165} className="img-fluid" />
                                    <div className="container">
                                        <div className="pic row" style={{height: 110, width: 380}}>
                                            <div className="col-12 col-sm-6 col-lg-6">
                                                <h3 className="fw-bold d-inline-block">Raj & Kumari</h3>
                                                <p className="d-inline-block">Columbo, Srilanka</p>
                                            </div>
                                            <div className="col-12 col-sm-6 col-lg-6 d-flex justify-content-end align-items-center">
                                                <Image src={img6} alt=""  />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4 my-3 align-items-center">
                            <div >
                                <Image src={img11} width={379} height={350} alt="" />
                                <div className="my-1">
                                    <Image src={img12} width={124} height={165} alt="" className="img-fluid" />
                                    <Image src={img13} width={124} height={165} alt="" className="img-fluid" />
                                    <Image src={img14} width={124} height={165} alt="" className="img-fluid" />
                                    <div className="container">
                                        <div className="pic row" style={{ height: 110, width: 370 }}>
                                            <div className="col-12 col-sm-6 col-lg-6">
                                                <h3 className="fw-bold d-inline-block">Raj & Kumari</h3>
                                                <p className="d-inline-block">Columbo, Srilanka</p>
                                            </div>
                                            <div className="col-12 col-sm-6 col-lg-6 d-flex justify-content-end align-items-center">
                                                <Image src={img6} alt=""  />
                                            </div>
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
