class CountdownTimer {
  constructor({ selector, targetDate, titleError, titleNow }) {
    this.timerId = null;
    this.selector = selector;
    this.targetDate = targetDate;
    this.titleError = titleError;
    this.titleNow = titleNow;
    this.start();
  }

  refs() {
    return {
      title: document.querySelector(`${this.selector} [data-value="title"]`),
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      mins: document.querySelector(`${this.selector} [data-value="mins"]`),
      secs: document.querySelector(`${this.selector} [data-value="secs"]`),
    };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  start() {
    this.timerId = setInterval(() => {
      const dateNow = Date.now();
      const time = this.targetDate - dateNow;
      const {title, days, hours, mins, secs } = this.refs();

      if (this.targetDate < dateNow) {
        if (this.timerId){
          title.textContent = this.titleError;
        clearInterval(this.timerId);
        return;
        }
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
        if (this.timerId){
          title.textContent = this.titleNow;
          clearInterval(this.timerId);
          return;
        }
      }
    }, 1000);
  }
}

const countdownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021'),
  titleError: 'Новый Год уже прошел',
  titleNow: 'С Новый Годом!'
  // targetDate: new Date('22:10:00 July 5, 2021'),
});

const countdownTimer1 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('22:00:00 July 11, 2021'),
  // targetDate: new Date('16:55:00 July 9, 2021'),
  titleError: 'Матч закончился победой Англии 5:0',
  titleNow: 'Матч начался'
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
