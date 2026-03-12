import bookingIcon from '../../assets/bookingIcon.png';
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
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
        </div>
    );
};

export default Home;