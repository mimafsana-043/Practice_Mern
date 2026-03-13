import live_tracking from '../../../assets/live-tracking.png';
import safe_delivery from '../../../assets/safe-delivery.png';


const Extra = () => {
    return (
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
    );
};

export default Extra;