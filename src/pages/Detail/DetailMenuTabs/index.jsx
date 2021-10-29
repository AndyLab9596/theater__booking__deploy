import moment from 'moment';
import React, { Fragment, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import ButtonCheckout from '../../../components/ButtonCheckout';
import rapChieu from '../../../assets/img/rapchieu.jpg'
import { CalendarFilled, ClockCircleFilled } from '@ant-design/icons';

const DetailMenuTabs = ({ singleMovieWithSchedule }) => {
    const { biDanh, dangChieu, danhGia, hot, maNhom, maPhim, hinhAnh, moTa, ngayKhoiChieu, sapChieu, tenPhim, trailer, heThongRapChieu } = singleMovieWithSchedule || {};


    const [valueLstCumRap, setValueLstCumRap] = useState(0);
    const [valueDsPhim, setValueDsPhim] = useState(0);

    const { logo, cumRapChieu, maHeThongRap, tenHeThongRap } = heThongRapChieu?.[valueLstCumRap] || {};
    const { lichChieuPhim, diaChi, maCumRap, tenCumRap } = cumRapChieu?.[valueDsPhim] || {};

    const showInfo = lichChieuPhim?.map((item) => {
        return item.ngayChieuGioChieu.slice(0, 10)
    })

    const notDuplicateShowInfo = [...new Set(showInfo)]


    const filterByDay = (date) => {
        const gioChieuRenDer = lichChieuPhim.filter(item => {
            if (item.ngayChieuGioChieu.slice(0, 10) === date) {
                return true
            }
            return false
        })
        return gioChieuRenDer;
    }

    return (
        <Fragment>
            <section className="bg-cover bg-no-repeat bg-center h-full backdrop-filter backdrop-blur-lg relative "
                style={{ backgroundImage: `url(${hinhAnh}), url(${`https://picsum.photos/255/367/`})` }}>
                <div className="fixed h-full w-full bg-bgColorDetail bg-opacity-80 filter blur-sm"></div>

                <div className="detail__content container mx-auto w-full px-1 pt-40 z-50 relative sm:transform sm:-translate-y-3.5">
                    <div className="px-10 sm:flex sm:flex-nowrap ">
                        <div className=" flex-shrink-0 mr-10">
                            <img src={hinhAnh}
                                alt="img"
                                onError={e => (e.target.src = "https://picsum.photos/255/367/")}
                                className="object-cover object-center w-64 h-80"
                            />
                        </div>
                        <div className=" text-left">
                            <h3 className="detail__title text-green-500 text-4xl font-bold">
                                {tenPhim}
                            </h3>
                            <p className="text-base text-white font-semibold">
                                {moTa}
                            </p>
                            <div className="flex text-greenText">
                                <p className="mr-10 text-base">
                                    <CalendarFilled className="transform -translate-y-1 mr-2" />
                                    {moment(ngayKhoiChieu).format("MMM Do YY")}
                                </p>
                                <p className="mr-10 text-base">
                                    <ClockCircleFilled className="transform -translate-y-1 mr-2" />
                                    120mn
                                </p>
                            </div>
                            <div className=" flex align-middle justify-start mb-5">
                                <div className="flex align-middle w-auto pr-5">
                                    <div className="align-baseline">
                                        <img className="object-cover w-full object-center leading-7 mt-1"
                                            src="http://pixner.net/boleto/demo/assets/images/movie/tomato.png"
                                            alt="tomato" />
                                    </div>
                                    <span className="pl-2 text-black font-bold text-lg self-center leading-7">{danhGia * 10}%</span>
                                </div>
                                <div className="flex align-middle w-auto pr-5">
                                    <div className="align-baseline">
                                        <img className="object-cover w-full object-center leading-7 mt-1"
                                            src="http://pixner.net/boleto/demo/assets/images/movie/cake.png" alt="tomato" />
                                    </div>
                                    <span className="pl-2 text-black font-bold text-lg self-center leading-7">{danhGia * 10}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-14 bg-bgColorMain" >

                <div className="container mx-auto w-full px-1">
                    <div className="px-10 mb-5">
                        <div className="flex justify-center align-middle">
                            <div className="list__header text-left">
                                <h2 className="text-4xl text-white leading-10 uppercase mb-5">SCHEDULE LIST</h2>
                                <p className="text-base text-white leading-7">Be sure not to miss these Movies today</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 ">

                        <div className="col-start-3 py-5 ">
                            {heThongRapChieu?.map((theater, index) => (
                                <div className={`flex justify-center flex-wrap p-2 transition duration-150 ease-in-out opacity-30
                            ${index === valueLstCumRap && `opacity-100`}`}>
                                    <img src={theater?.logo} alt="logo"
                                        className="object-cover w-12 h-12 rounded-full cursor-pointer"
                                        onClick={() => setValueLstCumRap(index)}
                                    />

                                </div>

                            ))}
                        </div>

                        <div className="col-start-4 col-span-4 ml-5 overflow-y-auto h-72">
                            <Scrollbars>
                                {cumRapChieu?.map((station, index) => {
                                    return (

                                        <div className={`cursor-pointer flex flex-nowrap p-1 opacity-50 
                                    ${index === valueDsPhim && 'opacity-100'}`} key={index}
                                            onClick={() => setValueDsPhim(index)}
                                        >
                                            {/* <img src={station.hinhAnh} alt={index} className="mr-5 object-cover w-12 h-12" /> */}
                                            <img src={rapChieu} alt={index} className="mr-5 object-cover w-12 h-12" />

                                            <div className="text-left">
                                                <h6 className="text-md text-white font-semibold 
                                            hover:text-green-500 transition duration-150 ease-in-out ">
                                                    {station.tenCumRap}
                                                </h6>
                                                <p className=" text-sm text-yellow-300">
                                                    {station.diaChi}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Scrollbars>
                        </div>

                        <div className="col-span-4 ml-5 overflow-y-auto h-96" >
                            <Scrollbars>
                                {notDuplicateShowInfo?.map((date) => {
                                    return (
                                        <Fragment key={date}>
                                            <p className="text-lg text-left text-pink-500 mb-0">
                                                {moment(date).format('dddd - MMM Do YY')}
                                            </p>

                                            <div className="flex flex-wrap">
                                                {filterByDay(date).map(schedule => {
                                                    return <Fragment key={schedule.maLichChieu}>
                                                        <ButtonCheckout schedule={schedule} />
                                                    </Fragment>
                                                })}
                                            </div>
                                        </Fragment>
                                    )
                                })}

                            </Scrollbars>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>

    );
};

export default DetailMenuTabs;

