/**
 * for api api-ninja
 * firstname -kanad, lastname-biswas
 * email- "kanad.biswas99@gmail.com"
 * password - AMjqPaaXb6p73%x
 */
const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const api_key = `o+umyrnahc64oFqowr0TzA==9ZFZ7FzRdCH5IiAu`;

const option = {
    method:"GET",
    headers:{
        "X-Api-Key": api_key,
    },
}

 const getjock = async()=>{
    try {
        jokeEl.innerText = "Updateing ..."
        btnEl.disabled = true;
        btnEl.innerText = "Loading ..."
        const res = await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1", option);
        const data = await res.json();
        jokeEl.innerText = data[0].joke ;
        btnEl.disabled = false;
        btnEl.innerText = "tell me a joke"

    } catch (error) {
        jokeEl.innerText ="some error occurred,Please try after some time";
        btnEl.disabled = false;
        btnEl.innerText = "tell me a joke"
        console.log(error)
    }

    
}

btnEl.addEventListener('click', getjock)