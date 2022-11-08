import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ClipLoader } from 'react-spinners';
import { useFetch } from '../../api/useFetch';
import { eventsUrl, base, api } from '../../api/const';
import { Sanitized } from '../../components/general/sanitize';
import ShareSocial from '../../components/general/share-social';
import { BreadCrumbs } from '../../components/modules/breadcrumbs';
import { ImagePopupSimple } from '../../components/imageModal/imagePopupSimple';

const DetailGrants = () => {
  window.scroll(0, 0);
  const { id } = useParams();
  const { isLoading, response } = useFetch(api + `/grant/${id}/`);
  const { t, i18n } = useTranslation();

  const crumb = [t('traning'), '❯', t('allTraning'), '❯'];

  const [crumbs, setCrumbs] = useState(crumb);
  const crumbSet = () => {
    setCrumbs(crumb);
  };
  useEffect(() => {
    crumbSet();
  }, [i18n.language]);

  if (isLoading) {
    return (
      <div role="status" className="flex justify-center my-28 pb-24">
        <ClipLoader color="#1985A1" size={300} />
      </div>
    );
  }

  return (
    <div className="wrapper w-full font-inter relative mb-[63px] text-justify">
      {response && (
        <>
          {i18n.language === 'ky' && (
            <div className="wrapper">
              <div className="container mb-8 mt-16 md:mt-8">
                <BreadCrumbs crumbs={crumbs} title={response.title_ky} />
              </div>
              <div className="mb-8 relative">
                <div className="h-[212px] w-[47%] absolute top-[18px] z-0 left-[-100px] rounded bg-[#3070B633] bg-gradient-jashtar shadow-2xl xl:hidden"></div>
                <div className="max-w-[432px] h-auto mr-[72px] mb-2 z-100 overflow-hidden float-left sm:float-none sm:max-w-[432px] sm:m-auto relative 1xs:max-w-[320px] xl:mr-[32px]">
                  <ImagePopupSimple images={response.image} />
                </div>
                <p className="mb-4 font-semibold text-[20px] lg:text-[18px] 3md:text-[16px] sm:mt-2">
                  {response.title_ky}
                </p>
                <div className="flex flex-wrap mt-4 mb-1 md:max-w-[500px] justify-between 2md:text-[12px]">
                  {response.deadline && (
                    <div className="flex 1xs:mt-1 mr-1 w-[200px] 1md:w-[150px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="pl-1 flex items-center">
                        <span className="font-bold mr-0.5">
                          {t('deadline')}
                        </span>{' '}
                        {response.deadline.split('-').reverse().join('.')}
                      </p>
                    </div>
                  )}
                  {response.period && (
                    <div className="flex 1xs:mt-1 mr-1 w-[220px] 1md:w-[170px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        />
                      </svg>
                      <p className="pl-1 flex items-center">
                        <span className="font-bold mr-0.5">{t('when')}</span>{' '}
                        {response.period.split('-').reverse().join('.')}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap 2md:text-[12px] md:max-w-[500px] justify-between mb-4">
                  {response.grant_amount && (
                    <div className="flex 1xs:mt-1 mr-1 w-[200px] 1md:w-[150px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="pl-1 flex items-center">
                        <span className="font-bold mr-0.5">{t('grant')} </span>{' '}
                        {response.grant_amount}
                      </p>
                    </div>
                  )}
                  {response.place_ky && (
                    <div className="flex 1xs:mt-1 mr-1 w-[220px] 1md:w-[170px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                        />
                      </svg>
                      {i18n.language === 'ky' && (
                        <p className="ml-1 self-start flex items-center">
                          <span className="font-bold mr-0.5">
                            {t('where')}{' '}
                          </span>{' '}
                          {response.place_ky}
                        </p>
                      )}
                      {i18n.language === 'ru' && (
                        <p className="ml-1 flex items-center">
                          <span className="font-bol mr-0.5d">
                            {t('where')}{' '}
                          </span>{' '}
                          {response.place_ru}
                        </p>
                      )}
                      {i18n.language === 'en' && (
                        <p className="ml-1 self-start flex items-center">
                          <span className="font-bold mr-0.5">
                            {t('where')}{' '}
                          </span>{' '}
                          {response.place_en}
                        </p>
                      )}
                    </div>
                  )}
                </div>
                <Sanitized html={response.desc_ky} />
              </div>
            </div>
          )}
          {i18n.language === 'ru' && (
            <div className="wrapper">
              <div className="container mb-8 mt-16 md:mt-8">
                <BreadCrumbs crumbs={crumbs} title={response.title_ru} />
              </div>
              <div className="mb-8 relative">
                <div className="h-[212px] w-[47%] absolute top-[18px] z-0 left-[-100px] rounded bg-[#3070B633] bg-gradient-jashtar shadow-2xl xl:hidden"></div>
                <div className="max-w-[432px] h-auto mr-[72px] mb-2 z-100 overflow-hidden float-left sm:float-none sm:max-w-[432px] sm:m-auto relative 1xs:max-w-[320px] xl:mr-[32px]">
                  <ImagePopupSimple images={response.image} />
                </div>
                <p className="mb-4 font-semibold text-[20px] lg:text-[18px] 3md:text-[16px] sm:mt-2">
                  {response.title_ru}
                </p>
                <div className="flex flex-wrap mt-4 mb-1 md:max-w-[500px] justify-between 2md:text-[12px]">
                  {response.deadline && (
                    <div className="flex 1xs:mt-1 mr-1 w-[200px] 1md:w-[150px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="pl-1 flex items-center">
                        <span className="font-bold mr-0.5">
                          {t('deadline')}
                        </span>{' '}
                        {response.deadline.split('-').reverse().join('.')}
                      </p>
                    </div>
                  )}
                  {response.period && (
                    <div className="flex 1xs:mt-1 mr-1 w-[220px] 1md:w-[170px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        />
                      </svg>
                      <p className="pl-1 flex items-center">
                        <span className="font-bold mr-0.5">{t('when')}</span>{' '}
                        {response.period.split('-').reverse().join('.')}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap 2md:text-[12px] md:max-w-[500px] justify-between mb-4">
                  {response.grant_amount && (
                    <div className="flex 1xs:mt-1 mr-1 w-[200px] 1md:w-[150px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="pl-1 flex items-center">
                        <span className="font-bold mr-0.5">{t('grant')} </span>{' '}
                        {response.grant_amount}
                      </p>
                    </div>
                  )}
                  {response.place_ru && (
                    <div className="flex 1xs:mt-1 mr-1 w-[220px] 1md:w-[170px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                        />
                      </svg>
                      {i18n.language === 'ru' && (
                        <p className="ml-1 self-start flex items-center">
                          <span className="font-bold mr-0.5">
                            {t('where')}{' '}
                          </span>{' '}
                          {response.place_ky}
                        </p>
                      )}
                      {i18n.language === 'ru' && (
                        <p className="ml-1 flex items-center">
                          <span className="font-bol mr-0.5d">
                            {t('where')}{' '}
                          </span>{' '}
                          {response.place_ru}
                        </p>
                      )}
                      {i18n.language === 'en' && (
                        <p className="ml-1 self-start flex items-center">
                          <span className="font-bold mr-0.5">
                            {t('where')}{' '}
                          </span>{' '}
                          {response.place_en}
                        </p>
                      )}
                    </div>
                  )}
                </div>
                <Sanitized html={response.desc_ru} />
              </div>
            </div>
          )}
          {i18n.language === 'en' && (
            <div className="wrapper">
              <div className="container mb-8 mt-16 md:mt-8">
                <BreadCrumbs crumbs={crumbs} title={response.title_en} />
              </div>
              <div className="mb-8">
                <div className="max-w-[432px] h-auto mr-[72px] mb-2 z-10 overflow-hidden float-left sm:float-none sm:max-w-[432px] sm:m-auto 1xs:max-w-[320px] xl:mr-[32px]">
                  <ImagePopupSimple images={response.image} />
                </div>
                <p className="mb-4 font-semibold text-[20px] lg:text-[18px] 3md:text-[16px] sm:mt-2">
                  {response.title_en}
                </p>
                <div className="flex flex-wrap mt-4 mb-1 md:max-w-[500px] justify-between 2md:text-[12px]">
                  {response.deadline && (
                    <div className="flex 1xs:mt-1 mr-1 w-[200px] 1md:w-[150px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="pl-1 flex items-center">
                        <span className="font-bold mr-0.5">
                          {t('deadline')}
                        </span>{' '}
                        {response.deadline.split('-').reverse().join('.')}
                      </p>
                    </div>
                  )}
                  {response.period && (
                    <div className="flex 1xs:mt-1 mr-1 w-[220px] 1md:w-[170px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                        />
                      </svg>
                      <p className="pl-1 flex items-center">
                        <span className="font-bold mr-0.5">{t('when')}</span>{' '}
                        {response.period.split('-').reverse().join('.')}
                      </p>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap 2md:text-[12px] md:max-w-[500px] justify-between mb-4">
                  {response.grant_amount && (
                    <div className="flex 1xs:mt-1 mr-1 w-[200px] 1md:w-[150px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="pl-1 flex items-center">
                        <span className="font-bold mr-0.5">{t('grant')} </span>{' '}
                        {response.grant_amount}
                      </p>
                    </div>
                  )}
                  {response.place_ky && (
                    <div className="flex 1xs:mt-1 mr-1 w-[220px] 1md:w-[170px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
                        />
                      </svg>
                      {i18n.language === 'ky' && (
                        <p className="ml-1 self-start flex items-center">
                          <span className="font-bold mr-0.5">
                            {t('where')}{' '}
                          </span>{' '}
                          {response.place_ky}
                        </p>
                      )}
                      {i18n.language === 'ru' && (
                        <p className="ml-1 flex items-center">
                          <span className="font-bol mr-0.5d">
                            {t('where')}{' '}
                          </span>{' '}
                          {response.place_ru}
                        </p>
                      )}
                      {i18n.language === 'en' && (
                        <p className="ml-1 self-start flex items-center">
                          <span className="font-bold mr-0.5">
                            {t('where')}{' '}
                          </span>{' '}
                          {response.place_en}
                        </p>
                      )}
                    </div>
                  )}
                </div>
                <Sanitized html={response.desc_en} />
              </div>
            </div>
          )}
        </>
      )}
      <div className="block mb-8">
        <p className="mb-2">{t('share')}</p>
        <ShareSocial />
      </div>
    </div>
  );
};

export default DetailGrants;
