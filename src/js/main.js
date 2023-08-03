import './slider';
import modals from './moduls/modal';
import { openModal } from './moduls/modal';
import tabs from './moduls/tabs';
import formValidate from './moduls/forms';
import changeModalState from './moduls/changeModalState';
import timer from './moduls/timer';
import images from './moduls/images';

window.addEventListener('DOMContentLoaded', () => {

    let modalState = {
        form: 0,
    };

    // const deadline = '2023-8-11';
    const deadline = '2023-08-10 12:11:00';

    changeModalState(modalState);

    modals();

    tabs(
        {
            headerSelector: '.glazing_slider',
            tabSelector: '.glazing_block',
            contentSelector: '.glazing_content',
            activeClass: 'active'
        }
    );

    tabs(
        {
            tabSelector: '.no_click',
            headerSelector: '.decoration_slider',
            contentSelector: '.decoration_content > div > div',
            activeClass: 'after_click'
        }
    );

    tabs(
        {
            tabSelector: '.balcon_icons_img',
            headerSelector: '.balcon_icons ',
            contentSelector: '.big_img > img',
            activeClass: 'do_image_more',
            display: 'inline-block'
        }
    );

    formValidate(modalState);

    timer('.container1', deadline);

    images();
});