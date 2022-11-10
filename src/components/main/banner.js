import React, { useEffect, useRef, useState } from 'react';
import {api, b, base, mainUrl, uri, url} from '../../api/const';
import { useFetch } from '../../api/useFetch';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../index.css';
import { ClipLoader } from 'react-spinners';
import { useTranslation } from 'react-i18next';
import pattern from '../../assets/image/Group.png';
import { Sanitized } from '../general/sanitize';

const Banner = () => {
  const swiperRef = useRef();
  const { isLoading, response } = useFetch(api + '/slider/');
  const { i18n } = useTranslation();

  if (isLoading) {
    return (
      <div role="status" className="flex justify-center my-28 pb-24">
        <ClipLoader color="#1985A1" size={300} />
      </div>
    );
  }

  return (
    <div className="relative">
      <Swiper
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        hashNavigation={{
          watchState: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        slidesPerView={1}
        navigation={{
          nextEl: '.banner-next',
          prevEl: '.banner-prev',
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {response &&
          response.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex flex-wrap w-full h-[481px] md:h-[450px] 3sm:h-[400px] xs:h-[400px] bg-arrow">
                <img
                  src={pattern}
                  alt=""
                  className="w-full h-[481px] object-cover bg-no-repeat absolute left-0 top-0 z-10"
                />
                <div
                  className="h-[481px] max-w-[900px] md:h-[1080px]
                  3xs:h-[1400px] overflow-hidden absolute right-0 top-0 3xs:top- 1sm:top-6 1xs:top-8 2xs:top-14 xs:top-16"
                >
                  <img
                    src={uri + item.background_image}
                    alt=""
                    className="w-[100%] h-auto bg-no-repeat"
                  />
                </div>
                <div
                  className="container max-w-[1236px] m-auto h-[481px] md:h-[350px] text-white bg-gradient-banner opacity-[100%] absolute top-0 left-0 right-0 flex
                items-center z-10 xl:max-w-[1090px] 2lg:max-w-[900px] lg:max-w-[800px] 2md:max-w-[700px] md:max-w-[600px]"
                >
                  {i18n.language === 'ky' && (
                    <div className="ml-[50px] items-center 2lg:ml-[40px] lg:ml-[30px] 2md:ml-[20px] md:ml-[15px] pr-3">
                      <p className="text-[30px] font-bold xl:text-[26px] lg:text-[24px] md:text-[20px] sm:text-[18px] 1xs:text-[16px]">
                        <Sanitized html={item.title_ky} />
                      </p>
                      <p className="mt-[26px] font-normal text-[24px] xl:text-[20px] md:text-[18px] sm:text-[16px] 1xs:text-[14px]">
                        <Sanitized html={item.subtitle_ky} />
                      </p>
                    </div>
                  )}
                  {i18n.language === 'ru' && (
                    <div className="ml-[50px] items-center 2lg:ml-[40px] lg:ml-[30px] 2md:ml-[20px] md:ml-[15px] pr-3">
                      <p className="text-[30px] font-bold xl:text-[26px] lg:text-[24px] md:text-[20px] sm:text-[18px] 1xs:text-[16px]">
                        <Sanitized html={item.title_ru} />
                      </p>
                      <p className="mt-[26px] font-normal text-[24px] xl:text-[20px] md:text-[18px] sm:text-[16px] 1xs:text-[14px]">
                        <Sanitized html={item.subtitle_ru} />
                      </p>
                    </div>
                  )}
                  {i18n.language === 'en' && (
                    <div className="ml-[50px] items-center 2lg:ml-[40px] lg:ml-[30px] 2md:ml-[20px] md:ml-[15px] pr-3">
                      <p className="text-[30px] font-bold xl:text-[26px] lg:text-[24px] md:text-[20px] sm:text-[18px] 1xs:text-[16px]">
                        <Sanitized html={item.title_en} />
                      </p>
                      <p className="mt-[26px] font-normal text-[24px] xl:text-[20px] md:text-[18px] sm:text-[16px] 1xs:text-[14px]">
                        <Sanitized html={item.subtitle_en} />
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div
        className="banner-prev absolute top-[220px] left-[20px] 1md:top-[360px] 1md:left-[150px]"
        onClick={() => swiperRef.current.slidePrev()}
      ></div>
      <div
        className="banner-next absolute top-[220px] right-[25px] 1md:top-[360px] 1md:right-[150px]"
        onClick={() => swiperRef.current.slideNext()}
      ></div>
    </div>
  );
};

export default Banner;
