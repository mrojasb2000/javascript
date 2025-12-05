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
    <p>"String:", ${ Boolean("Ulises") }</p>
    <p>"1235:", ${ Boolean(1235)}</p>
    <p>"-1235:", ${ Boolean(-1235)}</p>
    <p>"Object:", ${ Boolean({text: "hi"})}</p>
    <p>"Array:", ${ Boolean(["apple", -1, false])}</p>
    <p>"Function:", ${ Boolean(function(){})}</p>
    <p>"Arrow function:", ${ Boolean(() => {})}</p>
    <p>"Empty string:", ${ Boolean("") }</p>
    <p>"0:", ${ Boolean(0)}</p>
    <p>"-0:", ${ Boolean(-0)}</p>
    <p>"null:", ${ Boolean(null)}</p>
    <p>"undefined:", ${ Boolean(undefined)}</p>
    <p>"NaN:", ${ Boolean(NaN)}</p>
  </div>
`
