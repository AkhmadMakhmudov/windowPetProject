import { postRequest } from './service/service';
import checkNumInputs from './checkNumInputs.js';

const formValidate = (state) => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');

    checkNumInputs('input[name=\'user_phone\']');

    const message = {
        loading: 'loading',
        success: 'success',
        failed: 'failed'
    };

    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.append(statusMessage);
            statusMessage.textContent = message.loading;

            const formData = new FormData(item);

            if(item.getAttribute('data-calc') === 'end') {
                for(let key in state) {
                    formData.append(key, state[key]);
                }
            }
            // const jsonFormData = JSON.stringify(Object.fromEntries(formData.entries()));

            postRequest('./assets/server.php', formData)
                .then(data => {
                    console.log(data);
                    statusMessage.textContent = message.success;
                })
                .catch(error => {
                    console.log(error);
                    statusMessage.textContent = message.failed;
                })
                .finally(() => {
                    item.reset();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });


};

export default formValidate;