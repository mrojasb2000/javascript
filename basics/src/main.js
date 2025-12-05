import './style.css'

const jsDateAnnouncement = new Date(818031600000);
const currentDate = new Date();
const diff = jsDateAnnouncement - currentDate;
const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
const diffInDays = Math.round(diff / 86400000);
const diffInYear = Math.round(diffInDays / 365);

const checkValue = (value) => {
  if (!value || null) {
    throw new Error ("The value is invalid!, Try again.")
  }
}

const myArray = Array.from([1, 2, 3], x => x + x);
console.log(...myArray, 4);
console.log(myArray.push(5))
console.log(myArray.unshift(6))
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
    <p>"true:", ${ Boolean(true)}</p>
    <p>"false:", ${ Boolean(false)}</p>
    <p>"true:", ${ Boolean(true)}</p>
    <p>"false:", ${ Boolean(false)}</p>
    <p>"function(){}:", ${checkValue(function(){})}</p>
    <p>"undefined:", checkValue(undefined) -> Uncaught Error: The value is invalid!, Try again.</p>
    <p>"null:", checkValue(null) -> Uncaught Error: The value is invalid!, Try again.</p>
    <p>"Array.from([1, 2, 3], x => x + x): ${myArray}"</p>
    <p>"[...myArray, 4]: ${[...myArray, 4]}"</p>
    <p>"myArray.push(5), Appends new elements to the end of an array: ${myArray.push(5)}"</p>
    <p>"myArray.unshift(6), Inserts new elements at the start of an array: ${myArray.unshift(6)}"</p>
  `
