import { useFetch } from '../../api/useFetch';
import {base, mainUrl, newsUrl, uri, url} from '../../api/const';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Sanitized } from '../general/sanitize';
import {settings} from "../slider/settings";

export const News = () => {
    const { response } = useFetch(base + newsUrl + '/news/src/bilim/');
    const swiperRef = useRef();
    const { t, i18n } = useTranslation();

    return (
        <div className="container m-auto max-w-[1236px] pt-[62px] relative mb-[62px] z-10">
            <div className="flex wrapper justify-between">
                <p className="title ml-2">{t('news')}</p>
                <Link to="/news" className="all-view mr-2">
                    {t('all')}
                </Link>
            </div>
            <Swiper
                {...settings}
                hashNavigation={{
                    watchState: true,
                }}
                slidesPerView={3}
                loop={true}
                speed={400}
                navigation={{
                    nextEl: '.swiper-next',
                    prevEl: '.swiper-prev',
                }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                modules={[Pagination, Navigation]}
            >
                <div className="flex justify-center">
                    {response &&
                        response.results.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Link
                                    to={`news/${item.id}`}
                                    className="block w-[384px] h-[419px] m-auto shadow-lg rounded bg-white pb-4 mb-4 leading-5 cursor-pointer hover:shadow-2xl 3lg:w-[384px] xl:w-[340px] 1sm:w-[384px] xs:w-[300px]"
                                >
                                    <div className="mb-3 h-[247px] overflow-hidden rounded-t xl:w-[340px] 2lg:w-[340px] 1sm:w-full xs:w-[300px] xs:h-[230px] xs:mb-0 3lg:w-full 2lg:w-full">
                                        <img
                                            src={uri + item.preview_image}
                                            alt="cart-img"
                                            className="h-auto w-[100%] rounded-t"
                                        />
                                    </div>
                                    <div className="px-2.5">
                                        {i18n.language === 'ky' && (
                                            <>
                                                <p className="text-base mb-3 font-semibold w-[100%] h-[38px] text-black overflow-hidden leading-[19px]">
                                                    {item.title_ky.length > 60
                                                        ? item.title_ky.slice(0, 60) + '...'
                                                        : item.title_ky}
                                                </p>
                                                <p className="text-base font-normal w-[100%] h-[38px] grey overflow-hidden leading-[19px]">
                                                    <Sanitized html={item.desc_ky} />
                                                </p>
                                            </>
                                        )}
                                        {i18n.language === 'ru' && (
                                            <>
                                                <p className="text-base mb-3 font-semibold w-[324px] h-[38px] text-black overflow-hidden leading-[19px]">
                                                    {item.title_ru.length > 60
                                                        ? item.title_ru.slice(0, 60) + '...'
                                                        : item.title_ru}
                                                </p>
                                                <p className="text-base font-normal w-[324px] h-[38px] grey overflow-hidden leading-[19px]">
                                                    <Sanitized html={item.desc_ru} />
                                                </p>
                                            </>
                                        )}
                                        {i18n.language === 'en' && (
                                            <>
                                                <p className="text-base mb-3 font-semibold w-[324px] h-[38px] text-black overflow-hidden leading-[19px]">
                                                    {item.title_en.length > 60
                                                        ? item.title_en.slice(0, 60) + '...'
                                                        : item.title_en}
                                                </p>
                                                <p className="text-base font-normal w-[324px] h-[38px] grey overflow-hidden leading-[19px]">
                                                    <Sanitized html={item.desc_en} />
                                                </p>
                                            </>
                                        )}
                                        <div className="flex justify-between w-[100%] mt-4">
                                            <p className="text-sm font-medium text-grey">
                                                {item.news_date.split('-').reverse().join('-')}
                                            </p>
                                            <div className="text-blue underline cursor-pointer text-sm">
                                                {t('more')}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                </div>
            </Swiper>
            <div
                className="swiper-prev absolute top-[299px] left-[-10px] xl:left-[14px] 2lg:top-[335px] 2lg:left-[7px] 3xl:top-[310px] lg:left-[12px] 2md:left-[8px] 3md:left-[15%] sm:top-[310px] sm:left-[5%] 1sm:"
                onClick={() => swiperRef.current.slidePrev()}
            ></div>
            <div
                className="swiper-next absolute top-[299px] right-[-14px] xl:right-[11px] 2lg:top-[335px] 2lg:right-[7px] 3xl:top-[310px] lg:right-[10px] 2md:right-[8px] 3md:right-[15%] sm:top-[310px] sm:right-[5%]"
                onClick={() => swiperRef.current.slideNext()}
            ></div>
        </div>
    );
};