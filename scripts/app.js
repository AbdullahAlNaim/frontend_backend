const form = document.querySelector('#firstform');

const stuff = document.querySelector('#stuff');
form.addEventListener('click', (e) => {
    //e.preventDefault();
    console.log(stuff.innerHTML);
    //return stuff.innerHTML;
})





// async function crypto() {
//     const response = await fetch('https://restcountries.com/v3.1/all')
//     const btc = await response.json();
//     console.log(btc);
// }

// //crypto();

// //
// //fetch post request
// let link = 'http://localhost:3000/';

// async function postData(url = '', data = {}) {
//     const response = await fetch(url, {
//         method: 'POST',
//         mode: 'cors',
//         headers: {
//             "Content-Type": 'application/json',
//         },
//         body: JSON.stringify(data)
//     });
//     return response.json();
// }

// let result = postData(link, { 'info': 'this is some data' })

// export default result;
// //crypto();