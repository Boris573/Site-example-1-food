require('es6-promise').polyfill();

import tabs from './modules/tabs';
import modal from './modules/modal';
import cards from './modules/cards';
import slider from './modules/slider';
import timer from './modules/timer';
import calc from './modules/calc';
import forms from './modules/forms';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function () {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 999999);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'

    });
    modal('[data-modal]', '.modal', modalTimerId);
    cards();
    timer('.timer', '2020-12-31');
    calc();
    forms('form', modalTimerId);
});