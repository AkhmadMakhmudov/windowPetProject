let id = null;

const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {

        const triggers = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = callScroll();

        function closeModal() {
            windows.forEach(item => {
                item.style.display = 'none';
            });
            document.body.style.overflow = '';
            document.body.style.marginRight = '0';
        }

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                closeModal();
                if (e.target) {
                    e.preventDefault();
                }

                openModal(modal, 'block', scroll);
            });
        });

        close.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                closeModal();
            }
        });
    }

    function callScroll() {
        const div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.append(div);
        const scrollWidth = div.offsetWidth - div.clientWidth;

        div.remove();

        return scrollWidth;
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    // showModalByTime('.popup', 6000);
};

export function openModal(selector, display, offset) {
    if (id) {
        clearTimeout(id);
    }
    selector.style.display = display;
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = offset+'px';
}

id = setTimeout(() => openModal(document.querySelector('.popup'), 'block'), 60000);

export default modals;