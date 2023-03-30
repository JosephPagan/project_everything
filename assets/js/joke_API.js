document.getElementById("genJoke").addEventListener('click', () => { generateJoke() });

console.log("dick")

function generateJoke () {
    const apiUrl = 'https://v2.jokeapi.dev/joke/Dark,Pun'
    // console.log(apiUrl);

    fetch(apiUrl)
        .then( (data) => data.json())
        .then( (joke) => {
            if (!joke.setup || !joke.delivery) {
                generateJoke()
            } else {
                document.querySelector('#setup').innerText = joke.setup
                document.querySelector('#jokeText').innerText = joke.delivery
            }
        })
}

