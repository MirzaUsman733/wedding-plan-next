import Image from 'next/image'
import React from 'react'
import img1 from '@/public/images/heart2.svg'
import img2 from '@/public/images/destinationOne.png'
import img3 from '@/public/images/destinationTwo.png'
import img4 from '@/public/images/destinationThree.png'
import img5 from '@/public/images/destinationFour.png'

export default function Destination() {
    return (
        <div>
            <div className="container-fluid text-center my-5 py-5">
                <h1 className="fw-bold">Plan Your Destination Wedding</h1>
                <p className="ponk my-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Image src={img1} alt="" height={50} />
            </div>
            <div className="container">
                <div className="row mx-3">
                    <div className="col position-sticky">
                        <Image src={img2} alt="" className="img-fluid" />
                        <div className="chan text-white">
                            <h3 className="abi">Argentina</h3>
                        </div>
                    </div>
                    <div className="col position-sticky">
                        <Image src={img3} alt="" className="img-fluid" />
                        <div className="chan text-white">
                            <h3 className="abi">Brazil</h3>
                        </div>
                    </div>
                    <div className="col position-sticky">
                        <Image src={img4} alt="" className="img-fluid" />
                        <div className="chan text-white">
                            <h3 className="abi">Colombia</h3>
                        </div>
                    </div>
                    <div className="col position-sticky">
                        <Image src={img5} alt="" className="img-fluid" />
                        <div className="chan text-white">
                            <h3 className="abi">Srilanka</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
