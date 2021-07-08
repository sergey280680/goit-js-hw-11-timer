class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timerId = null;
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }

  refs() {
    // console.log(this.selector);
    return {
      title: document.querySelector(`${this.selector} [data-value="title"]`),
      titleUefa: document.querySelector(`${this.selector} [data-value="title-uefa"]`),
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
      const { titleUefa, title, days, hours, mins, secs } = this.refs();

      // console.log(this.targetDate);

      if (this.targetDate < dateNow) {
        title.textContent = 'Новый Год уже прошел';
        titleUefa.textContent = 'Матч закончился попедой Англии';
        clearInterval(this.timerId);
        return;
      }

      days.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      hours.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      mins.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      secs.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));

      // console.log(`${this.selector}`.value.textContent);
      if (
        days.textContent === '00' &&
        hours.textContent === '00' &&
        mins.textContent === '00' &&
        secs.textContent === '00'
      ) {
        title.textContent = 'С Новый Годом! ';
        titleUefa.textContent = 'Матч начался';
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

const countdownTimer1 = new CountdownTimer({
  selector: '#timer-2',
  targetDate: new Date('00:02:00 July 19, 2021'),
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
