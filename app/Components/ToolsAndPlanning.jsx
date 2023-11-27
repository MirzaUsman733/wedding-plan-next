import Image from 'next/image'
import React from 'react'
import heart from '@/public/images/heart2.svg'
import img1 from '@/public/images/image 12.png'
import img2 from '@/public/images/image 13.png'
import img3 from '@/public/images/imageMiss.png'
import img4 from '@/public/images/image 15.png'
import img5 from '@/public/images/image 16.png'
import img6 from '@/public/images/image 17.png'
import img7 from '@/public/images/WeddingSupllier.png'
import img8 from '@/public/images/WeddingSupllier1.png'
import img9 from '@/public/images/WeddingSupllier2.png'

export default function ToolsAndPlanning() {
    return (
        <div>
            <div className="container justify-content-center pnk text-center ">
                <h1 className="ze fw-bold text-black opacity-75 mb-5">Tools That Make Wedding Planning a Piece of Cake</h1>
                <h3 className="mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                <Image className="mt-5" src={heart} alt="heart2" />
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                            <Image src={img1} alt="Image12" className="img-fluid" />
                            <h3>Checklist</h3>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                            <Image src={img2} alt="Image13" className="img-fluid" />
                            <h3>Guestlist</h3>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                            <Image src={img3} alt="Image14" className="img-fluid" />
                            <h3>Seat Chart</h3>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                            <Image src={img4} alt="Image15" className="img-fluid" />
                            <h3>Budget</h3>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                            <Image src={img5} alt="Image16" className="img-fluid" />
                            <h3>Supplier</h3>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                            <Image src={img6} alt="Image17" className="img-fluid" />
                            <h3>Website</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container justify-content-center text-center mt-5 pt-5">
                <h1 className="fw-bold">Feature Wedding Suppliers In London</h1>
                <p className="ponk py-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Image src={heart} height="50px" alt="Heart2" />
            </div>
            <div className="container justify-content-center my-5">
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4 my-3 my-3">
                        <div className="pic">
                            <Image src={img7} alt="WeddingSupllier" className="img-fluid" />
                            <h3 className="px-2 pt-3 fw-bold">Title</h3>
                            <p className="px-2 pb-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry is standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 my-3 my-3">
                        <div className="pic">
                            <Image src={img8} alt="WeddingSupllier" className="img-fluid" />
                            <h3 className="px-2 pt-3 fw-bold">Title</h3>
                            <p className="px-2 pb-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry is standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4 my-3 my-3">
                        <div className="pic">
                            <Image src={img9} alt="WeddingSupllier" className="img-fluid" />
                            <h3 className="px-2 pt-3 fw-bold">Title</h3>
                            <p className="px-2 pb-3">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry is standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
