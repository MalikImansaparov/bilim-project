import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import search from '../../assets/image/main/search-icon.png';
import Social from './social';
import close from '../../assets/image/main/close.png';
import { useNavigate, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Language } from './Language';
import logo from '../../assets/header/Frame 5051.svg';
import burger from '../../assets/image/general/icons8-menu-48.png';
import closes from '../../assets/image/general/icons8-close-48.png';
import { asyncSearch } from '../../store/asyncAction';
import { useDispatch } from 'react-redux';

const Menu = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [openBurger, setOpenBurger] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  // const location = useLocation();
  // const searches = location.pathname === "/search"

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const handleChange = (val) => {
    navigate('/search');
    dispatch(asyncSearch(val));
  };

  const toggleMenu = () => {
    setOpenBurger(!openBurger);
  };

  //  useEffect(() => {
  //        if(searches){
  //            setOpenSearch(true)
  //            setOpenModal(false);
  //        } else {
  //            setOpenSearch(false)
  //            setOpenModal(true);
  //        }
  //     },[location])

  return (
    <div className="relative mb-0 w-full">
      {!openModal ? (
        <div className="bg-[#27376C] ">
          <div className="wrapper w-full h-[78px] text-white flex justify-between items-center font-inter cursor-pointer">
            <div
              className="hidden lg:block cursor-pointer"
              onClick={toggleMenu}
            >
              {openBurger ? (
                <img src={closes} alt="close" />
              ) : (
                <img src={burger} alt="open" />
              )}
            </div>
            <img src={logo} alt="kelechek" onClick={() => navigate('/')} />

            <div className="flex w-[40%] pt-2 justify-between lg:hidden">
              <div
                className="menu text-white"
                onClick={() => window.open('https://jashtar.info/')}
              >
                {t('about')}
              </div>
              <NavLink
                to="/university"
                className={({ isActive }) => (isActive ? 'hover menu' : 'menu')}
              >
                {t('univer')}
              </NavLink>
              <NavLink
                to="/college"
                className={({ isActive }) => (isActive ? 'hover menu' : 'menu')}
              >
                {t('college')}
              </NavLink>
              <NavLink
                to="/grants"
                className={({ isActive }) => (isActive ? 'hover menu' : 'menu')}
              >
                {t('grants')}
              </NavLink>
              <NavLink
                to="trainings"
                className={({ isActive }) => (isActive ? 'hover menu' : 'menu')}
              >
                {t('traning')}
              </NavLink>
            </div>
            <div className="flex justify-between w-[20%] pt-2 2lg:w-[10%] xl:w-[25%] lg:w-15%] 2md:w-[15%]  xs:w-[25%] 1sm:w-[20%] 2xs:w-[27%] 2xs:pr-2">
              <Language />
              <img
                src={search}
                alt="search"
                className="w-[20px] h-[20px] mt-1 cursor-pointer"
                onClick={toggleModal}
              />
              <div className="2lg:hidden">
                <Social />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[78px] bg-blueLight z-10">
          <div className="wrapper py-[22px] px-2">
            <input
              type="text"
              autoFocus={true}
              className="bg-blueLight border-none outline-none w-[98.5%] h-[24px] font-medium text-[15px] lg:w-[96.5%] 2md:w-[94.5%]"
              placeholder={t('search')}
              onKeyDown={(e) =>
                e.key === 'Enter' && handleChange(e.target.value)
              }
            />
            <img
              src={close}
              alt="close"
              className="py-2 cursor-pointer"
              onClick={toggleModal}
            />
          </div>
        </div>
      )}
      {openBurger && (
        <div className="w-full max-h-auto bg-blue">
          <div className="wrapper">
            <div className=" pb-1">
              <NavLink to="/" className="menu-list ml-8" onClick={toggleMenu}>
                {t('home')}
              </NavLink>
              <div
                className="menu-list ml-8"
                onClick={() => window.open('https://jashtar.info/')}
              >
                {t('about')}
              </div>
              <NavLink
                to="/news"
                className="menu-list  ml-8"
                onClick={toggleMenu}
              >
                {t('news')}
              </NavLink>
              <NavLink
                to="/events"
                className="menu-list ml-8"
                onClick={toggleMenu}
              >
                {t('events')}
              </NavLink>
              <NavLink
                to="/university"
                className="menu-list ml-8"
                onClick={toggleMenu}
              >
                {t('univer')}
              </NavLink>
              <NavLink
                to="/college"
                className="menu-list ml-8"
                onClick={toggleMenu}
              >
                {t('college')}
              </NavLink>
              <NavLink
                to="/grants"
                className="menu-list ml-8"
                onClick={toggleMenu}
              >
                {t('grants')}
              </NavLink>
              <NavLink
                to="trainings"
                className="menu-list menu-list ml-8"
                onClick={toggleMenu}
              >
                {t('traning')}
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
