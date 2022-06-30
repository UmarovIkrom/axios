'use strict';

const cardContainer = document.querySelector('.card-container');


axios.get("https://jsonplaceholder.typicode.com/comments").then(response => {
    if(response.data.length === 0) {
        cardContainer.insertAdjacentHTML('afterbegin', ` <div>Posts are empty </div>`);
    } else {
        response.data.map(post => cardContainer.insertAdjacentHTML('afterbegin', returnCard(post)));
    } 
});


const returnCard = (post) => (
    `
    <div class="cards">
    <div class="card">
        <p class="name">
            ${post.name}
        </p>
        <p class="email">
            ${post.email}
        </p>
        <div class="card-body">
            ${post.body}
        </div>
    </div>
</div>  
`
)

