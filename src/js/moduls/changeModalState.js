import checkNumInputs from './checkNumInputs.js';

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#height');
    checkNumInputs('#width');

    function bindActionToElems(event, elements, property) {
        elements.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state[property] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[property] = 'cold' : state[property] = 'hot';
                            elements.forEach((box, j) => {
                                i === j ? box.checked = true : box.checked = false;
                            });
                        } else {
                            state[property] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[property] = item.value;
                        break;
                }
            });
        });
    }

    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;