import {useFetch} from "../../api/useFetch";
import {ClipLoader} from "react-spinners";
import { BreadCrumb } from '../../components/general/breadcrumb';
import { Sanitized } from '../../components/general/sanitize';
import {useTranslation} from "react-i18next";
import {aboutUrl, api, base, councilUrl, uri} from "../../api/const";
import {useFetchData} from "../../api/useFetchData";

export const UniverPage = () => {
  const {t,i18n} = useTranslation()
    const { isLoading, response } = useFetch(api + '/head_description/');
    const { isLoad, result} = useFetchData(api + '/institute/');



  if (isLoading) {
    return (
        <div role="status" className='flex justify-center my-28 pb-24'>
          <ClipLoader
              color="#1985A1"
              size={300}
          />
        </div>
    )
  }

  return (
    <div className="relative">
      {response &&
        response
          .filter((i) => i.tab === 1)
          .map((item) => (
            <div
              className="w-full mb-[34px] object-cover bg-center"
              key={item.id}
              style={{ backgroundImage: `url(${uri}${item.background_image})` }}
            >
              <div className="w-full min-h-[481px] md:min-h-[581px] overflow-hidden relative z-0 pb-8 font-inter">
                <div className="absolute top-0 left-0 right-0 bg-gradient-ministry w-full min-h-[481px] md:min-h-[581px] z-0"></div>
                <div
                  className="container max-w-[1236px] m-auto min-h-[481px] text-white bg-gradient-banner opacity-[100%] absolute top-0 left-0 right-0 flex 2md:pt-24
                items-center z-10 xl:max-w-[1090px] 2lg:max-w-[900px] lg:max-w-[800px] 2md:max-w-[700px] md:max-w-[600px]"
                >
                  <div className="container max-w-[1196px] m-auto text-white text-base 3xs:text-[14px] font-normal">
                    <div className="wrapper text-white absolute top-0 left-4">
                      <BreadCrumb />
                    </div>

                    <p className="my-4 leading-[19.3px] relative z-10 text-justify mx-4 xs:my-0">
                      {i18n.language === 'ky' && (
                        <Sanitized html={item.title_ky} />
                      )}
                      {i18n.language === 'ru' && (
                        <Sanitized html={item.title_ru} />
                      )}
                      {i18n.language === 'en' && (
                        <Sanitized html={item.title_en} />
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      <div className="wrapper font-bold">{t('allUniver')}</div>
      <div className="wrapper pb-[32px] mt-[164px] 2sm:mr-4 w-full">
        {result &&
          result.results.map((item) => (
            <div key={item.id} className="flex flex-wrap w-full mb-4">
              <div className="shadow-enroll py-[10px] px-[30px] my-4 align-middle rounded-[12px] w-full cursor-pointer hover:shadow-2xl sm:px-[10px]">
                <div className="flex flex-wrap items-center xs:justify-center">
                  <div className="flex justify-center items-center pr-[10px] mr-[12px] w-auto h-[80px] overflow-hidden xs:pr-0 mb-1">
                    <img
                      src={uri + item.image}
                      alt="organization"
                      className="w-auto h-[100%] self-center"
                    />
                  </div>
                  {i18n.language === 'ky' && (
                    <span className="font-normal text-base 1sm:text-sm max-w-[1100px]">
                      {item.title_ky}
                    </span>
                  )}
                  {i18n.language === 'ru' && (
                    <p className="font-normal text-base 1sm:text-sm max-w-[1100px]">
                      {item.title_ru}
                    </p>
                  )}
                  {i18n.language === 'en' && (
                    <p className="font-normal text-base 1sm:text-sm max-w-[1100px]">
                      {item.title_en}
                    </p>
                  )}
                </div>
                <div className="1sm:text-sm">
                  <span className="font-normal font-semibold">
                    {t('location')}
                  </span>
                  {i18n.language === 'ky' && (
                    <span className="text-black 1sm:text-sm">
                      &nbsp;
                      {item.address_ky.length > 20
                        ? item.address_ky.slice(0, 20) + '...'
                        : item.address_ky}
                    </span>
                  )}
                  {i18n.language === 'ru' && (
                    <span className="text-black 1sm:text-sm">
                      &nbsp;
                      {item.address_ru.length > 20
                        ? item.address_ru.slice(0, 20) + '...'
                        : item.address_ru}
                    </span>
                  )}
                  {i18n.language === 'en' && (
                    <span className="text-black 1sm:text-sm">
                      &nbsp;
                      {item.address_en.length > 20
                        ? item.address_en.slice(0, 20) + '...'
                        : item.address_en}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap text-blue 1sm:text-sm">
                  <div className="mr-8" onClick={() => window.open(item.link)}>
                    {t('url')}
                  </div>
                  <div onClick={() => window.open(item.social_media)}>
                    {t('social')}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

