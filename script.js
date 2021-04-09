class Clock {
    constructor(element) {
        this.element = element;
    }

    start() {
        setInterval(() => {
            this.update();
        }, 500);
    }

    update() {
        const parts = this.getTime();
        const minutes = parts.minute.toString().padStart(2, '0');
        const time = `${parts.hour}:${minutes}`;
        const ampm = parts.isAM ? 'AM' : 'PM';

        this.element.querySelector('.time').textContent = time;
        this.element.querySelector('.am-pm').textContent = ampm;

    }
    
    getTime() {
        const now = new Date();
        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(),
            isAM: now.getHours() < 12
        };
    }
}

const clock = document.querySelector('.clock');

const clockObj = new Clock(clock);

clockObj.update();