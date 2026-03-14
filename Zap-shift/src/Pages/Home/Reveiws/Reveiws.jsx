import { use } from "react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import customer_top from "../../../assets/customer-top.png";
import ReviewCard from "../ReviewCard/ReviewCard";


const Reveiws = ({ reviewsData }) => {
    const reviews = use(reviewsData);
    return (
        <div>
            <div className=" justify-center items-center">
                <img src={customer_top} alt="Customer" className="mt-20 mx-auto mb-5"/>
                <h1 className="text-4xl font-bold text-[#03373D] text-center ">What our customers are saying</h1>
                <p className="text-[14px]  text-black text-center pt-3 font-bold opacity-50">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce<br></br> pain, and strengthen your body with ease!</p>
            </div>
            <>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: '0',
                        depth: 200,
                        modifier: 1,
                        scale: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    className="mySwiper mt-14"
                >

                    {
                        reviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <ReviewCard review={review}></ReviewCard>
                            </SwiperSlide>
                        ))
                    }
                    
                </Swiper>
            </>
        </div>
    );
};

export default Reveiws;