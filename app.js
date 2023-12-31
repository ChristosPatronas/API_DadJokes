


const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');


const addNewJoke = async () => {
    const jokeText = await getDadJokes();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
};

const getDadJokes =  async () => {
    try{
        const config = { headers: { Accept: 'application/json' } };
        const res = await axios.get("https://icanhazdadjoke.com", config);
        //console.log(res.data.joke);
        return res.data.joke;
    }
    catch(e){
        return `Jokes aside, maybe the API left us!, ${e}`;
    }
   
   
};

button.addEventListener('click', addNewJoke);