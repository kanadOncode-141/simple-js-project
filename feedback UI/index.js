const ratingEl = document.querySelectorAll(".rating")

const btnEl = document.getElementById('btn');

const ratingContainerEl =document.getElementById('rating-container')

const containerEl = document.getElementById("container")

document.addEventListener('click',(event)=>{
    if(event.target.closest(".rating-container")){
        return;
    }
    else{
        removeActive();
    }
})

let selectedFeedback = "";
ratingEl.forEach((e)=>{
    e.addEventListener('click', (event)=>{
        selectedFeedback = event.target.innerText || event.target.parentNode.innerText;
        // console.log(selectedFeedback);
        removeActive();
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    })    
})


btnEl.addEventListener('click', ()=>{
    if(selectedFeedback !== ""){

        containerEl.innerHTML = `
            <strong> Thank you</strong>
            <br>
            <br>
            <strong> Feedback: ${selectedFeedback}</strong>
            <p>we will use you feedback to imporve our service</p>
            `
        // if(selectedFeedback = "Unhappy")
        // {
        //     containerEl.innerHTML = `
        //     <strong> Thank you</strong>
        //     <br>
        //     <br>
        //     <strong> Feedback: ${selectedFeedback}</strong>
        //     <p>Sorry for the inconvinece, we will improve our service</p>
        //     `
        // }
        // else if(selectedFeedback = "Neutral"){
        //     containerEl.innerHTML = `
        //     <strong> Thank you</strong>
        //     <br>
        //     <br>
        //     <strong> Feedback: ${selectedFeedback}</strong>
        //     <p>we will use you feedback to imporve our service</p>
        //     `
        // }
        // else{
        //     containerEl.innerHTML = `
        //     <strong> Thank you</strong>
        //     <br>
        //     <br>
        //     <strong> Feedback: ${selectedFeedback}</strong>
        //     <p>Thank you for your feedback</p>
        //     `
        // }

    }
})

const removeActive =()=>{
    ratingEl.forEach((el)=>{
        el.classList.remove("active");
    })
}
