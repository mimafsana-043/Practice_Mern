import bookingIcon from '../../assets/bookingIcon.png';
import Servive from "../../assets/service.png";
import Banner from "./Banner/Banner";
import Brands from './Brannds/Brands';
import Extra from './Extra/Extra';
import Reveiws from './Reveiws/Reveiws';

const reviewsData = fetch('/reviews.json').then(res => res.json());

const Home = () => {
    return (
        <div className='mt-10'>
            <Banner className=""></Banner>
            {/* How it works */}
            <div className='mt-20'>
                <p className='text-2xl text-[#03373D]  font-bold mb-6'>How it works</p>

                <div className='grid grid-cols-2 md:grid-cols-4 gap-5 justify-content '>
                    <div className='w-72 h-60 bg-cyan-50 shadow-2xl p-5 rounded-xl'>
                        <img src={bookingIcon} alt="Booking Icon" />
                        <h3 className='font-bold mb-2 text-xl text-[#03373D]'>Booking Pick & Drop</h3>
                        <p>From personal packages to<br></br> business
                            shipments — we deliver<br></br> on time, every time.</p>
                    </div>

                    <div className='w-72 h-60 bg-cyan-50 shadow-2xl p-5 rounded-xl'>
                        <img src={bookingIcon} alt="Booking Icon" />
                        <h3 className='font-bold mb-2 text-xl text-[#03373D]'>Booking Pick & Drop</h3>
                        <p>From personal packages to<br></br> business
                            shipments — we deliver<br></br> on time, every time.</p>
                    </div>

                    <div className='w-72 h-60 bg-cyan-50 shadow-2xl p-5 rounded-xl'>
                        <img src={bookingIcon} alt="Booking Icon" />
                        <h3 className='font-bold mb-2 text-xl text-[#03373D]'>Booking Pick & Drop</h3>
                        <p>From personal packages to<br></br> business
                            shipments — we deliver<br></br> on time, every time.</p>
                    </div>


                    <div className='w-72 h-60 bg-cyan-50 shadow-2xl p-5 rounded-xl'>
                        <img src={bookingIcon} alt="Booking Icon" />
                        <h3 className='font-bold mb-2 text-xl text-[#03373D]'>Booking Pick & Drop</h3>
                        <p>From personal packages to<br></br> business
                            shipments — we deliver<br></br> on time, every time.</p>
                    </div>
                </div>
            </div>

            {/* Our Services */}

            <div className='mt-30 w-full h-[850px] bg-[#03373D] rounded-2xl'>
                <p className='text-3xl text-white  font-bold pt-20 text-center'>Our Services</p>
                <p className='text-[12px] text-white opacity-40 text-center p-7'>
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to<br></br> business shipments — we deliver on time, every time.
                </p>
                <div className='grid grid-cols-3 gap-5 justify-content '>
                    <div className="card bg-base-100 w-[360px] shadow-sm m-5 rounded-xl hover:shadow-lg hover:bg-amber-400 transition-shadow duration-300">
                        <figure className="px-10 pt-10 ">
                            <img src={Servive} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Express  & Standard<br></br> Delivery</h2>
                            <p className='text-[11px] text-black opacity-70'>We deliver parcels within 24–72 hours in Dhaka,<br></br> Chittagong, Sylhet, Khulna, and Rajshahi.<br></br> Express delivery available in Dhaka within 4–6<br></br> hours from pick-up to drop-off.</p>
                            
                        </div>
                    </div>

                    <div className="card bg-base-100 w-[360px] shadow-sm m-5 rounded-xl hover:shadow-lg hover:bg-amber-400 transition-shadow duration-300">
                        <figure className="px-10 pt-10 ">
                            <img src={Servive} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Express  & Standard<br></br> Delivery</h2>
                            <p className='text-[11px] text-black opacity-70'>We deliver parcels within 24–72 hours in Dhaka,<br></br> Chittagong, Sylhet, Khulna, and Rajshahi.<br></br> Express delivery available in Dhaka within 4–6<br></br> hours from pick-up to drop-off.</p>
                            
                        </div>
                    </div>

                    <div className="card bg-base-100 w-[360px] shadow-sm m-5 rounded-xl hover:shadow-lg hover:bg-amber-400 transition-shadow duration-300">
                        <figure className="px-10 pt-10 ">
                            <img src={Servive} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Express  & Standard<br></br> Delivery</h2>
                            <p className='text-[11px] text-black opacity-70'>We deliver parcels within 24–72 hours in Dhaka,<br></br> Chittagong, Sylhet, Khulna, and Rajshahi.<br></br> Express delivery available in Dhaka within 4–6<br></br> hours from pick-up to drop-off.</p>
                            
                        </div>
                    </div>

                    <div className="card bg-base-100 w-[360px] shadow-sm m-5 rounded-xl hover:shadow-lg hover:bg-amber-400 transition-shadow duration-300">
                        <figure className="px-10 pt-10 ">
                            <img src={Servive} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Express  & Standard<br></br> Delivery</h2>
                            <p className='text-[11px] text-black opacity-70'>We deliver parcels within 24–72 hours in Dhaka,<br></br> Chittagong, Sylhet, Khulna, and Rajshahi.<br></br> Express delivery available in Dhaka within 4–6<br></br> hours from pick-up to drop-off.</p>
                            
                        </div>
                    </div>

                    <div className="card bg-base-100 w-[360px] shadow-sm m-5 rounded-xl hover:shadow-lg hover:bg-amber-400 transition-shadow duration-300">
                        <figure className="px-10 pt-10 ">
                            <img src={Servive} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Express  & Standard<br></br> Delivery</h2>
                            <p className='text-[11px] text-black opacity-70'>We deliver parcels within 24–72 hours in Dhaka,<br></br> Chittagong, Sylhet, Khulna, and Rajshahi.<br></br> Express delivery available in Dhaka within 4–6<br></br> hours from pick-up to drop-off.</p>
                            
                        </div>
                    </div>

                    <div className="card bg-base-100 w-[360px] shadow-sm m-5 rounded-xl hover:shadow-lg hover:bg-amber-400 transition-shadow duration-300">
                        <figure className="px-10 pt-10 ">
                            <img src={Servive} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Express  & Standard<br></br> Delivery</h2>
                            <p className='text-[11px] text-black opacity-70'>We deliver parcels within 24–72 hours in Dhaka,<br></br> Chittagong, Sylhet, Khulna, and Rajshahi.<br></br> Express delivery available in Dhaka within 4–6<br></br> hours from pick-up to drop-off.</p>
                            
                        </div>
                    </div>
                </div>
            </div>

            <Brands></Brands>

            <Extra></Extra>

            <Reveiws reviewsData={reviewsData}></Reveiws>

        </div>
    );
};

export default Home;