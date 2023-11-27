import Image from 'next/image'
import React from 'react'
import img1 from '@/public/images/heart2.svg'
import img2 from '@/public/images/avatar.png'
import img3 from '@/public/images/message.svg'
import img4 from '@/public/images/heart3.svg'

export default function WeddingInsurance() {
    return (
        <div>
            <div className="container my-5 text-center">
                <h3><b>Join The Conversation</b></h3>
                <p className="ponk my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Image src={img1} height={50} alt="" className="my-3" />
            </div>
            <div className="container">
                <div className="row mx-3">
                    <div className="col my-3 mx-4">
                        <div className="pic p-2 rounded z-1">
                            <h2>Wedding Insurance</h2>
                            <p>Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem psum has been the
                                industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled.</p>
                            <p className="ponk">Today at 12:12pm</p>
                            <div className="bg-danger d-flex align-items-center" style={{height: 'auto'}}>
                                <Image src={img2} alt="" className="px-3" />
                                <p className="text-white pt-3 px-3">John Doe</p>
                                <Image src={img3} alt="" />
                                <p className="text-white pt-3 px-3">22</p>
                                <Image src={img4} alt="" />
                                <p className="text-white pt-3 px-3">20</p>
                            </div>
                        </div>
                    </div>
                    <div className="col my-3 mx-4">
                        <div className="pic p-2 rounded z-1">
                            <h2>Wedding Insurance</h2>
                            <p>Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem psum has been the
                                industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled.</p>
                            <p className="ponk">Today at 12:12pm</p>
                            <div className="bg-danger d-flex align-items-center" style={{ height: 'auto' }}>
                                <Image src={img2} alt="" className="px-3" />
                                <p className="text-white pt-3 px-3">John Doe</p>
                                <Image src={img3} alt="" />
                                <p className="text-white pt-3 px-3">22</p>
                                <Image src={img4} alt="" />
                                <p className="text-white pt-3 px-3">20</p>
                            </div>
                        </div>
                    </div>
                    <div className="col my-3 mx-4">
                        <div className="pic p-2 rounded z-1">
                            <h2>Wedding Insurance</h2>
                            <p>Lorem Ipsum is simply dummy text of theprinting and typesetting industry. Lorem psum has been the
                                industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                scrambled.</p>
                            <p className="ponk">Today at 12:12pm</p>
                            <div className="bg-danger d-flex align-items-center" style={{ height: 'auto' }}>
                                <Image src={img2} alt="" className="px-3" />
                                <p className="text-white pt-3 px-3">John Doe</p>
                                <Image src={img3} alt="" />
                                <p className="text-white pt-3 px-3">22</p>
                                <Image src={img4} alt="" />
                                <p className="text-white pt-3 px-3">20</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
