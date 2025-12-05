import './style.css'

const jsDateAnnouncement = new Date(818031600000);
const currentDate = new Date();
const diff = jsDateAnnouncement - currentDate;
const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
const diffInDays = Math.round(diff / 86400000);
const diffInYear = Math.round(diffInDays / 365);

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello World!</h1>
    <p>JavaScript was announced ${formatter.format(diffInDays, 'days')}.</p>
    <p>It has been ${formatter.format(diffInYear, 'year')} years since its announcement.</p>
  </div>
`

setupCounter(document.querySelector('#counter'))
