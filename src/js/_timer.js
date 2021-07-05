class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timerId = null;
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }

  refs() {
    return {
      title: document.querySelector('[data-value="title"]'),
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  start() {
    this.timerId = setInterval(() => {
      const dateNow = Date.now();
      const time = this.targetDate - dateNow;
      const { title, days, hours, mins, secs } = this.refs();

      if (this.targetDate < dateNow) {
        title.textContent = 'Новый Год уже прошел';
        clearInterval(this.timerId);
        return;
      }

      days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      hours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      mins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));

      if (
        days.textContent === '00' &&
        hours.textContent === '00' &&
        mins.textContent === '00' &&
        secs.textContent === '00'
      ) {
        title.textContent = 'С Новый Годом! ';
        clearInterval(this.timerId);
        return;
      }
    }, 1000);
  }
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),
  // targetDate: new Date('22:10:00 July 5, 2021'),
});

//
//
//
//
//
//
//
//
//
//
//
//
