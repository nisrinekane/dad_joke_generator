async function search() {
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        }
    });
    let dadJoke = await response.json();
    makeCard(dadJoke)
};


function makeCard(data) {
    let res = document.createElement('div');
    res.innerHTML =`<p>${data.joke}</p>`
    res.classList.add('card');
    let body = document.getElementById('body');
    body.appendChild(res); 
}




