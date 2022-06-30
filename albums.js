'use strict';

const cardContainer = document.querySelector('.card-container');


axios.get("https://jsonplaceholder.typicode.com/albums").then(response => {
    if(response.data.length === 0) {
        cardContainer.insertAdjacentHTML('afterbegin', ` <div>Albums are empty </div>`);
    } else {
        response.data.map(post => cardContainer.insertAdjacentHTML('afterbegin', returnCard(post)));
    } 
});


const returnCard = (post) => (
    `
    <div class="cards">
        <div class="cards">
            <div class="card">
                <h2 class="card-title">
                    ${post.title}
                </h2>
            </div>
        </div> 
    </div>  
`
)

