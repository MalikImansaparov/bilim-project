import React, { useState } from 'react';
import lang from '../../assets/image/main/lang-icon.png';
import { changeLanguage } from '../../i18next';
import { useTranslation } from 'react-i18next';

export const Language = () => {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const onChange = (lng) => {
    changeLanguage(lng);
    sessionStorage.setItem('lng', lng);
    toggleModal();
  };

  return (
    <div className="group relative mt-1">
      <button className="flex text-white relative" onClick={toggleModal}>
        <img src={lang} className="pt-2 mr-[7px] relative" alt="lang" />
        <span className="text-[15px] ">{t('lang')}</span>
      </button>
      {openModal && (
        <ul className="absolute z-10 cursor-pointer">
          <li
            className="btn-blue mt-[22px] 2lg:mt-[16px]"
            onClick={() => onChange('ky')}
          >
            <>Кыргызча</>
          </li>
          <li className="btn-blue" onClick={() => onChange('ru')}>
            <>Русский</>
          </li>
          <li className="btn-blue" onClick={() => onChange('en')}>
            <>English</>
          </li>
        </ul>
      )}
    </div>
  );
};
