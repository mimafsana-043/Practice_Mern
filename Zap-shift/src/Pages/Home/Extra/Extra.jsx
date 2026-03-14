import be_a_merchant_bg from "../../../assets/be-a-merchant-bg.png";
import live_tracking from '../../../assets/live-tracking.png';
import location_merchant from '../../../assets/location-merchant.png';
import safe_delivery from '../../../assets/safe-delivery.png';


const Extra = () => {
    return (
        <div>
            <div>
                <div className='w-full h-60 bg-cyan-50 shadow-2xl p-5 rounded-xl flex items-center justify-center mt-12 gap-2'>
                    <img src={live_tracking} alt="Live Tracking" className='h-40 mr-5' />
                    <div>
                        <h3 className='font-bold mb-2 text-xl text-[#03373D]'>Live Parcel Tracking</h3>
                        <p className='text-[12px] opacity-60'>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get<br></br> instant status updates for complete peace of mind.</p>
                    </div>

                </div>

                <div className='w-full h-60 bg-cyan-50 shadow-2xl p-5 rounded-xl flex items-center justify-center mt-12 gap-2'>
                    <img src={safe_delivery} alt="Safe Delivery" className='h-40 mr-5' />
                    <div>
                        <h3 className='font-bold mb-2 text-xl text-[#03373D]'>100% Safe Delivery</h3>
                        <p className='text-[12px] opacity-60'>Experience secure and reliable parcel delivery with our robust safety measures. Your packages are handled with care from pick-up to delivery, ensuring they arrive safely and intact.</p>
                    </div>

                </div>


                <div className='w-full h-60 bg-cyan-50 shadow-2xl p-5 rounded-xl flex items-center justify-center mt-12 gap-2'>
                    <img src={safe_delivery} alt="24/7 Call Center Support" className='h-40 mr-5' />
                    <div>
                        <h3 className='font-bold mb-2 text-xl text-[#03373D]'>24/7 Call Center Support</h3>
                        <p className='text-[12px] opacity-60'>Have questions or need assistance? Our dedicated call center is available 24/7 to provide you with prompt and helpful support throughout your shipping experience.</p>
                    </div>

                </div>
            </div>

            <div className='relative overflow-hidden bg-[#03373D] rounded-2xl mt-12 p-10 w-full h-96 flex '>
                <img src={be_a_merchant_bg} alt="be-a-merchant-bg" className='absolute left-0 top-0 h-full object-cover opacity-20 pointer-events-none' />
                <div className='relative z-10'>
                    <h3 className='font-bold mb-2 text-3xl text-white  pt-12 justify-end'>Merchant and Customer Satisfaction<br></br>  is Our First Priority</h3>
                    <p className='text-[12px]  mt-4 text-white opacity-70'>We offer the lowest delivery charge with the highest value<br></br> along with 100% safety of your product. Pathao courier delivers<br></br> your parcels in every corner of Bangladesh right on time.</p>
                    <div className='flex pt-10 '>
                        <button className='bg-[#CAEB66] border border-transparent text-[#03373D] font-bold py-3 px-6 rounded-full mt-6 mb-6 hover:bg-[#03373D] 
                        hover:text-[#CAEB66] hover:border-[#CAEB66] transition-colors duration-300 '>Become a Merchant</button>
                        <button className='bg-[#CAEB66] border border-transparent text-[#03373D] font-bold py-3 px-6 rounded-full m-6 hover:bg-[#03373D] 
                        hover:text-[#CAEB66] hover:border-[#CAEB66] transition-colors duration-300'>Earn with ZapShift Courier</button>
                    </div>
                </div>
                <div>
                    <img src={location_merchant} alt="Location Merchant" className='h-60 ml-20' />
                </div>

            </div>
        </div>



    );
};

export default Extra;