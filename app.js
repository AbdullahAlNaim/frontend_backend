const getter = document.querySelector('#post');
const info = document.querySelector('#info')
const baseUrl = 'http:/localhost:3000';

getter.addEventListener('click', getInfo);

async function getInfo(e) {
    e.preventDefault()
    const res = await fetch(baseUrl,
        {
            method: 'POST',
        }
    )
    console.log(res);

}