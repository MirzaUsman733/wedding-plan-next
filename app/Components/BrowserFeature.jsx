import Image from 'next/image'
import React from 'react'
import photography from '@/public/images/photography.svg';
import florist from '@/public/images/florist.svg';
import music from '@/public/images/music.svg';
import dressing from '@/public/images/dressing.svg';

export default function BrowserFeature() {
    return (
        <div>
            <div className="container-fluid text-center pnk">
                <h1 className="mb-5">Browse featured categories</h1>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Image src={photography} alt="photography" />
                            <h2 className="mt-3">Photography</h2>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Image src={florist} alt="florist" />
                            <h2 className="mt-3">Florist</h2>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Image src={music} alt="music" />
                            <h2 className="mt-3">Music</h2> qq
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <Image src={dressing} alt="dressing" />
                            <h2 className="mt-3">Dressing</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
