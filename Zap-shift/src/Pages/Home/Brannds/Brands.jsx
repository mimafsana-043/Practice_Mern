import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazon from '../../../assets/brands/amazon.png';
import amazon_vector from '../../../assets/brands/amazon_vector.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
import start_people from '../../../assets/brands/start_people.png';



const Brands = () => {
    return (
        <div className='py-12'>
            <p className='text-3xl font-bold text-[#03373D] text-center p-6'>We've helped thousands of sales team</p>
            <Swiper
                modules={[Autoplay, Navigation]}
                slidesPerView={5}
                spaceBetween={20}
                grabCursor={true}
                loop={true}
                navigation={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                <SwiperSlide><div className='rounded-lg bg-cyan-50 p-8 text-center font-semibold'><img src={amazon} alt="Amazon" className='h-8 mx-auto' /></div></SwiperSlide>
                <SwiperSlide><div className='rounded-lg bg-cyan-50 p-8 text-center font-semibold'><img src={casio} alt="Casio" className='h-8 mx-auto' /></div></SwiperSlide>
                <SwiperSlide><div className='rounded-lg bg-cyan-50 p-8 text-center font-semibold'><img src={randstad} alt="Randstad" className='h-8 mx-auto' /></div></SwiperSlide>
                <SwiperSlide><div className='rounded-lg bg-cyan-50 p-8 text-center font-semibold'><img src={star} alt="Star" className='h-8 mx-auto' /></div></SwiperSlide>
                <SwiperSlide><div className='rounded-lg bg-cyan-50 p-8 text-center font-semibold'><img src={start_people} alt="Start People" className='h-8 mx-auto' /></div></SwiperSlide>
                <SwiperSlide><div className='rounded-lg bg-cyan-50 p-8 text-center font-semibold'><img src={amazon_vector} alt="Amazon Vector" className='h-8 mx-auto' /></div></SwiperSlide>
                <SwiperSlide><div className='rounded-lg bg-cyan-50 p-8 text-center font-semibold'><img src={moonstar} alt="Moonstar" className='h-8 mx-auto' /></div></SwiperSlide>
                <SwiperSlide><div className='rounded-lg bg-cyan-50 p-8 text-center font-semibold'><img src={randstad} alt="Randstad" className='h-8 mx-auto' /></div></SwiperSlide>
                <SwiperSlide><div className='rounded-lg bg-cyan-50 p-8 text-center font-semibold'><img src={star} alt="Star" className='h-8 mx-auto' /></div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Brands;