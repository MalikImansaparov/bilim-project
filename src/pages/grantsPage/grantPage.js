import React from "react";
import {ClipLoader} from "react-spinners";
import {useTranslation} from "react-i18next";
import { BreadCrumb } from '../../components/general/breadcrumb';
import {aboutUrl, api, base, mainUrl, uri} from "../../api/const";
import {useFetch} from "../../api/useFetch";
import ReactPaginate from "react-paginate";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useMatchMedia} from "../../hooks/useMatchMedia";

export const GrantPage = () => {
  const { isLoading} = useFetch(api + '/grant/');
  const {t, i18n} = useTranslation()
    const [response, setResponse] = useState([])
    const [pageCount, setpageCount] = useState(0);
    const {isMobile, isTablet, isDesctop} = useMatchMedia();
    const limit = 4

    const getData = async () => {
        const res = await fetch(
            `${api}/grant/`
        );
        const data = await res.json();
        setpageCount(Math.ceil(data.count / limit));
        setResponse(data.results);
    }

    useEffect(() => {
        getData()
    },[limit])

    const paginateData = async (count) => {
        const res = await fetch(
            `${api}/grant/?page=${count}`
        );
        const data = await res.json();
        return data;
    };

    const handlePageClick = async (data) => {
        if( data.selected > 0 ){
            let currentPage = data.selected + 1;
            const paginateServer = await paginateData(currentPage);
            setResponse(paginateServer);
        } else {
            const paginateServer = await paginateData(1);
            setResponse(paginateServer);
        }
    };

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
     <div className="h-auto font-inter">
       <div className="wrapper ">
         <BreadCrumb />
       </div>
       {response &&
         response.map((item) => (
           <div
             className=" max-w-[1236px] m-auto shadow-xl rounded px-8 py-8 bg-white"
             key={item.id}
           >
             {isMobile && (
               <div className="m-auto max-w-[331px] max-h-[231px] overflow-hidden">
                 <img
                   src={uri + item.image}
                   alt="values"
                   className="h-auto w-[100%] shadow-xl"
                 />
               </div>
             )}
             <div className="flex">
               {!isMobile && (
                 <div className="m-auto max-w-[231px] max-h-[131px] overflow-hidden 3xs:max-w-[180px] 3xs:max-h-[130px]">
                   <img
                     src={uri + item.image}
                     alt="values"
                     className="h-auto w-[100%] shadow-xl"
                   />
                 </div>
               )}
               <div className="ml-4 2sm:ml-2 max-w-[809px] 1xs:mt-1.5">
                 {i18n.language === 'ky' && (
                   <p className="text-lg font-normal 2md:text-sm ">
                     {item.title_ky}
                   </p>
                 )}
                 {i18n.language === 'ru' && (
                   <p className="text-lg font-normal 2md:text-sm ">
                     {item.title_ru}
                   </p>
                 )}
                 {i18n.language === 'en' && (
                   <p className="text-lg font-normal 2md:text-sm ">
                     {item.title_en}
                   </p>
                 )}
                 <div className="flex flex-wrap mt-4 mb-1 max-w-[700px] justify-between w-full 2md:text-[12px]">
                   {item.deadline && (
                     <div className="flex 1xs:mt-1 w-[200px 1md:w-[150px]">
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
                         {item.deadline.split('-').reverse().join('.')}
                       </p>
                     </div>
                   )}
                   {item.period && (
                     <div className="flex 1xs:mt-1 w-[300px] 1md:w-[200px]">
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
                         {item.period.split('-').reverse().join('.')}
                       </p>
                     </div>
                   )}
                 </div>

                 <div className="flex flex-wrap 2md:text-[12px] max-w-[700px] justify-between w-full mb-4">
                   {item.grant_amount && (
                     <div className="flex 1xs:mt-1 w-[200px] 1md:w-[150px]">
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
                         {item.grant_amount}
                       </p>
                     </div>
                   )}
                   {item.place_ky && (
                     <div className="flex flex-wrap 1xs:mt-1 w-[300px] 1md:w-[200px]">
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
                           {item.place_ky}
                         </p>
                       )}
                       {i18n.language === 'ru' && (
                         <p className="ml-1 flex items-center">
                           <span className="font-bol mr-0.5d">
                             {t('where')}{' '}
                           </span>{' '}
                           {item.place_ru}
                         </p>
                       )}
                       {i18n.language === 'en' && (
                         <p className="ml-1 self-start flex items-center">
                           <span className="font-bold mr-0.5">
                             {t('where')}{' '}
                           </span>{' '}
                           {item.place_en}
                         </p>
                       )}
                     </div>
                   )}
                 </div>
               </div>
             </div>
             <div className="flex justify-end max-w-[1086px] m-auto mt-2 1xs:mt-0">
               <Link
                 to={`${item.id}`}
                 className="py-[10px] px-[15px] flex items-center bg-blueLight"
               >
                 <span className="mr-[5px]">{t('more')}</span>
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
                     d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                   />
                 </svg>
               </Link>
             </div>
           </div>
         ))}
       <div className="paginate wrapper mt-8">
         {/*{response.results && response.results.length >= 4 && (*/}
         <ReactPaginate
           nextLabel="❯"
           onPageChange={handlePageClick}
           pageRangeDisplayed={3}
           marginPagesDisplayed={2}
           pageCount={pageCount}
           previousLabel="❮"
           pageClassName="page-item"
           pageLinkClassName="page-link"
           previousClassName="page-item"
           previousLinkClassName="page-link"
           nextClassName="page-item"
           nextLinkClassName="page-link"
           containerClassName="pagination"
           activeClassName="active"
           renderOnZeroPageCount={null}
         />
         {/*)}*/}
       </div>
     </div>
   );
};
