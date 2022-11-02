import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {ClipLoader} from "react-spinners";

const SearchPage = () => {
    const {t, i18n} = useTranslation()
    const items = useSelector(state => state.search.data)

    if (!items) {
        return (
            <div role="status" className='flex justify-center my-28 pb-24'>
                <ClipLoader
                    color="#1985A1"
                    size={300}
                />
            </div>
        )
    }

    // if(items && items.docs.length === 0 || items.management.length === 0 || items.news.length === 0 ||
    // items.events.length === 0 || items.project.length === 0 || items.partner.length === 0){
    //     return (
    //         <div className="flex w-[1236px] m-auto shadow-md rounded px-8 my-8 bg-white">
    //             <p className="my-16 text-[20px]">{t('notFound')}</p>
    //         </div>
    //         )
    // }

    return (
        <div className="wrapper py-[62px] font-inter sm:py-[48px] xs:py-[24px]">
            {items &&
                    <div
                        className="flex max-w-[1236px] m-auto shadow-md rounded px-8 mb-8 bg-white 3xs:px-4 2xs:px-2"
                    >
                        <div className="ml-[32px] py-6 1xs:py-2 2xs:py-2">
                            <div className="max-w-[1100px] mb-4">
                                {items.docs && items.docs.length > 0 && <p className="font-semibold font-medium">{t('documents')}<span className="ml-1">({items.docs.length})</span></p>}
                                   { items.docs && items.docs.map((item, idx) => (
                                       <div key={idx} className="mb-4">
                                           {i18n.language === 'ky' &&
                                        <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                            {item.title_ky}
                                        </div>}
                                           {i18n.language === 'ru' &&
                                               <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                   {item.title_ru}
                                               </div>}
                                           {i18n.language === 'en' &&
                                               <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                   {item.title_en}
                                               </div>}
                                       </div>
                                    ))}
                                {items.management && items.management.length > 0 && <p className="font-semibold font-medium">{t('leadship')}<span className="ml-1">({items.management.length})</span></p>}
                                { items.management && items.management.map((item, idx) => (
                                    <div key={idx} className="mb-4">
                                        {i18n.language === 'ky' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.full_name_ky}
                                            </div>}
                                        {i18n.language === 'ru' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.full_name_ru}
                                            </div>}
                                        {i18n.language === 'en' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.full_name_en}
                                            </div>}
                                    </div>
                                ))}
                                {items.events && items.events.length > 0 && <p className="font-semibold font-medium">{t('events')}<span className="ml-1">({items.events.length})</span></p>}
                                { items.events &&  items.events.map((item, idx) => (
                                    <div key={idx} className="mb-4">
                                        {i18n.language === 'ky' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ky}
                                            </div>}
                                        {i18n.language === 'ru' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ru}
                                            </div>}
                                        {i18n.language === 'en' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_en}
                                            </div>}
                                    </div>
                                ))}
                                {items.news && items.news.length > 0 && <p className="font-semibold font-medium">{t('news')}<span className="ml-1">({items.news.length})</span></p>}
                                { items.news && items.news.map((item, idx) => (
                                    <div key={idx} className="mb-4">
                                        {i18n.language === 'ky' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ky}
                                            </div>}
                                        {i18n.language === 'ru' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ru}
                                            </div>}
                                        {i18n.language === 'en' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_en}
                                            </div>}
                                    </div>
                                ))}
                                {items.partner && items.partner.length > 0 && <p className="font-semibold font-medium">{t('partners')}<span className="ml-1">({items.partner.length})</span></p>}
                                { items.partner &&  items.partner.map((item, idx) => (
                                    <div key={idx} className="mb-4">
                                        {i18n.language === 'ky' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ky}
                                            </div>}
                                        {i18n.language === 'ru' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ru}
                                            </div>}
                                        {i18n.language === 'en' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_en}
                                            </div>}
                                    </div>
                                ))}
                                {items.project && items.project.length > 0 && <p className="font-semibold font-medium">{t('projects')}<span className="ml-1">({items.project.length})</span></p>}
                                { items.project &&  items.project.map((item, idx) => (
                                    <div key={idx} className="mb-4">
                                        {i18n.language === 'ky' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ky}
                                            </div>}
                                        {i18n.language === 'ru' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_ru}
                                            </div>}
                                        {i18n.language === 'en' &&
                                            <div onClick={() => window.location.replace(item.next)} className="text-[16px] my-4 mb-4 font-medium text-blue cursor-pointer">
                                                {item.title_en}
                                            </div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }
        </div>
    );
};

export default SearchPage;




