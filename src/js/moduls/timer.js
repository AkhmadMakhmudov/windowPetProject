
const timer = (id, deadline) => {
    const getZero = (num) => {
        if(num<=9) {
            return '0' + num;
        }else{
            return num;
        }
    };

    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - new Date(),
            seconds = Math.round((t / 1000) % 60),
            minutes = Math.round((t / 1000 / 60) % 60),
            hours = Math.round((t / (1000 * 60 * 60)) % 24),
            days = Math.round((t / (1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        };
    };

    const setClock = (selector, endTime) => {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timerId = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endTime);

            days.textContent = getZero(t.days);
            hours.textContent = getZero(t.hours);
            minutes.textContent = getZero(t.minutes);
            seconds.textContent = getZero(t.seconds);

            if(t.total <= 0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';

                clearInterval(timerId);
            }
        }
    };

    setClock(id, deadline);
};

export default timer;