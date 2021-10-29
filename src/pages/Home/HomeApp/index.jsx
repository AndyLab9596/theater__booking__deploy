import React from 'react';
import './homeApp.scss';
const HomeApp = () => {
    return (
        <section id="app" className="py-8 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url("https://tix.vn/app/assets/img/icons/backapp.jpg")` }}>
            <div className="container mx-auto w-full p-5 ">
                <div className="grid grid-cols-12 ">
                    <div className="col-span-12 sm:col-span-6 text-white text-left flex  justify-center items-start flex-col">
                        <h3 className="text-4xl text-white">
                            APPLY APPLICATION HERE
                        </h3>
                        <p className="text-lg">
                            As the largest mobile platform in the country, we have the right services, the know-how and the expertise to make your buying transition to mobile simple, easy and painless.
                        </p>
                        <p className="py-3">
                            App version{" "}
                            <span>
                                <a
                                    href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    IOS
                                </a>
                            </span>{" "}
                            and{" "}
                            <span>
                                <a
                                    href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Android
                                </a>
                            </span>
                        </p>
                    </div>

                    <div className="col-span-12 sm:col-span-6 ">
                        <div className="p-0 relative">
                            <img src="http://pixner.net/boleto/demo/assets/images/apps/apps01.png" alt=""
                                className="w-full object-cover block" style={{ padding: '0 28%' }}
                            />

                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default HomeApp;