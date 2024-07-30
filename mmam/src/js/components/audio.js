import { timeCodeData, timeStampTitle } from '../constants/timecodeData';

class Audio {
  constructor(audio) {
    this.audio = audio;
    this.minutesHTML = document.querySelector('.timer__minutes');
    this.secondsHTML = document.querySelector('.timer__seconds');
    this.currentMinutesHTML = document.querySelector('.timer__current-minutes');
    this.currentSecondsHTML = document.querySelector('.timer__current-seconds');
    this.timeStampTitle = document.querySelector('.timestamps__title');
    this.playBtn = document.querySelector('.dashboard__play-btn');
    this.dashboard = document.querySelector('.dashboard');
    this.dashboardPannel = document.querySelector('.dashboard__pannel');
    this.timeStampsArray = Array.from(document.querySelectorAll('.timestamp-item'));
    this.timeStampTitle.innerHTML = timeStampTitle;
    const { duration } = this.audio;
    this.duration = duration;
    this.isPlaying = false;
    this.minutes = 0;
    this.seconds = 0;
    this.currentMinutes = 0;
    this.currentSeconds = 0;
    this.interval = null;
    this.currentTime = this.audio.currentTime;
    this.setInitialTimer();
  }

  toggleEqualizer() {
    if (this.isPlaying) {
      this.dashboard.classList.add('isPlaying');
    } else {
      this.dashboard.classList.remove('isPlaying');
    }
  }

  setInitialTimer() {
    const duration = this.audio.duration - this.audio.currentTime;
    this.minutes = Math.floor(duration / 60);
    this.seconds = Math.floor(duration % 60);
    this.minutesHTML.innerHTML = `${this.minutes >= 10 ? this.minutes : `0${this.minutes}`}`;
    this.secondsHTML.innerHTML = `${this.seconds >= 10 ? this.seconds : `0${this.seconds}`}`;
    this.setDashboardStyles();
  }

  setCustomTimer() {
    this.currentMinutes = Math.floor(this.audio.currentTime / 60);
    this.currentSeconds = Math.floor(this.audio.currentTime % 60);
  }

  removeActiveTimestamp() {
    this.timeStampsArray.forEach((timestamp) => {
      if (timestamp.classList.contains('_active')) timestamp.classList.remove('_active');
    });
  }

  setActiveTimestamp() {
    this.timeStampsArray.forEach((timestamp, i) => {
      const { timecodeStart, timecodeFinish, title } = timeCodeData[i];
      if (this.audio.currentTime >= timecodeStart && this.audio.currentTime < timecodeFinish) {
        timestamp.classList.add('_active');
        this.timeStampTitle.innerHTML = title;
      } else {
        timestamp.classList.remove('_active');
      }
    });
  }

  setTimer() {
    this.interval = setInterval(() => {
      this.currentSeconds += 1;
      if (this.currentSeconds === 60) {
        this.currentSeconds = 0;
        this.currentMinutes += 1;
      }

      if (this.audio.currentTime >= this.audio.duration) {
        this.endAudio();
        return;
      }

      this.currentSecondsHTML.innerHTML = this.currentSeconds >= 10 ? this.currentSeconds : `0${this.currentSeconds}`;
      this.currentMinutesHTML.innerHTML = this.currentMinutes >= 10 ? this.currentMinutes : `0${this.currentMinutes}`;
      this.setDashboardStyles();
      this.setActiveTimestamp();
    }, 1000);
  }

  setDashboardStyles() {
    const value = (this.audio.currentTime / this.duration) * 100;
    this.dashboardPannel.style.background = `linear-gradient(to right, #3fcbff 0%, #3fcbff ${value}%, #65707b ${value}%, #65707b 100%)`;
    this.dashboardPannel.value = value;
  }

  playAudio() {
    this.isPlaying = true;
    clearInterval(this.interval);
    this.setTimer();
    this.audio.play();

    this.toggleEqualizer();
    this.setDashboardStyles();
  }

  stopAudio() {
    this.isPlaying = false;
    this.audio.pause();
    clearInterval(this.interval);
    this.toggleEqualizer();
  }

  endAudio() {
    this.currentSeconds = 0;
    this.currentMinutes = 0;
    this.currentSecondsHTML.innerHTML = '00';
    this.currentMinutesHTML.innerHTML = '00';
    this.isPlaying = false;
    this.audio.pause();
    clearInterval(this.interval);
    this.toggleEqualizer();

    this.currentTime = 0;
    this.audio.currentTime = 0;
    this.setDashboardStyles();
    this.removeActiveTimestamp();
    this.timeStampTitle.innerHTML = timeStampTitle;
  }

  init() {
    this.playBtn.addEventListener('click', () => {
      if (!this.isPlaying) {
        this.playAudio();
      } else {
        this.stopAudio();
      }
    });
    this.dashboardPannel.addEventListener('input', () => {
      const time = (this.dashboardPannel.value / 100) * this.audio.duration;
      this.audio.currentTime = time;
      this.currentTime = time;
      this.setCustomTimer();
      this.playAudio();
    });

    this.timeStampsArray.forEach((timeStamp) => {
      timeStamp.addEventListener('click', () => {
        const { time } = timeStamp.dataset;
        this.audio.currentTime = Number(time);
        this.setActiveTimestamp();
        this.setCustomTimer();
        this.playAudio();
      });
    });
  }
}

export default Audio;
