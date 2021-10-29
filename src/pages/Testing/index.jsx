import moment from 'moment';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './testing.scss';
import { Scrollbars } from 'react-custom-scrollbars';
import { Tag } from 'antd';

const Testing = ({ arrTheater }) => {

    console.log(arrTheater)
    const [valueLstCumRap, setValueLstCumRap] = useState(0);
    const [valueDsPhim, setValueDsPhim] = useState(0);


    const { logo, lstCumRap, maHeThongRap, mahom, tenHeThongRap } = arrTheater?.[valueLstCumRap] || {};
    const { danhSachPhim, diaChi, hinhAnh, maCumRap, tenCumRap } = lstCumRap?.[valueDsPhim] || {};


    return (
        <section className="bg-bgColorMain" >
            <div className="container mx-auto ">

                <div className="grid grid-cols-12 ">

                    <div className="col-start-2 py-5 ">
                        {arrTheater?.map((theater, index) => (
                            <div className={`flex justify-center flex-wrap p-2 transition duration-150 ease-in-out 
                            ${index === valueLstCumRap && `border-r-2 border-green-500`}`}>
                                <img src={theater?.logo} alt="logo"
                                    className="object-cover w-12s h-12 rounded-full"
                                    onClick={() => setValueLstCumRap(index)}
                                />
                            </div>

                        ))}
                    </div>

                    <div className="col-start-3 col-span-4 ml-5 overflow-y-auto h-96">
                        <Scrollbars>
                            {lstCumRap?.map((station, index) => {
                                return (

                                    <div className={`flex flex-nowrap p-1 opacity-50 ${index === valueDsPhim && 'opacity-100'}`} key={index}
                                        onClick={() => setValueDsPhim(index)}
                                    >
                                        <img src={station.hinhAnh} alt={index} className="mr-5 object-cover w-12 h-12" />

                                        <div className="text-left">
                                            <h6 className="text-md text-white font-semibold 
                                            hover:text-green-500 transition duration-150 ease-in-out ">
                                                {station.tenCumRap}
                                            </h6>
                                            <p className=" text-sm text-yellow-300">
                                                {station.diaChi.substr(0, 40)}...
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </Scrollbars>
                    </div>

                    <div className="col-span-4 ml-5 overflow-y-auto h-96" >
                        <Scrollbars>
                            {danhSachPhim?.map((movie, index) => {
                                return (
                                    <div key={index} className="grid grid-cols-4" >
                                        <div className="col-span-1 my-1 mx-auto">
                                            <img
                                                src={movie.hinhAnh} alt="hinh-movie"
                                                onError={e => (e.target.src = "https://picsum.photos/64/80")}
                                                className="object-cover w-16 h-20 mr-5"
                                            />
                                        </div>
                                        <div className="text-left col-span-3">
                                            <h1 className="text-white text-lg 
                                            hover:text-green-500 transition duration-150 ease-in-out">
                                                {movie.tenPhim}
                                            </h1>
                                            <div className="flex flex-wrap">
                                                {movie.lstLichChieuTheoPhim?.slice(0, 8).map((schedule, index) => {
                                                    return <NavLink to="/" className="text-md font-semibold text-indigo-300 m-1 hover:text-purple-800
                                                    bg-gray-600 p-1 rounded-lg hover:bg-green-500 transition duration-150 ease-in-out
                                                    ">
                                                        {moment(schedule.ngayChieuGioChieu).format('h:mm')}
                                                    </NavLink>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </Scrollbars>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Testing;