import { openModal } from "./modal";

const images = () => {
    const imgPopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImg = document.createElement('img');

    imgPopup.classList.add('popup');

    imgPopup.style.display = 'none';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.justifyContent = 'center';


    workSection.addEventListener('click', (e) => {
        const target = e.target;

        e.preventDefault();

        if (target && target.classList.contains('preview')) {
            openModal(imgPopup, 'flex');
            workSection.append(imgPopup);
            imgPopup.append(bigImg);
            const path = target.parentNode.getAttribute('href');

            bigImg.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
            document.body.classList.remove('modal-open');
            imgPopup.remove();
        }
    });
};

export default images;