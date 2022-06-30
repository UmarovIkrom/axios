'use strict';

const cardContainer = document.querySelector('.card-container');


axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
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
                <h2 class="card-title">
                    ${post.title}
                </h2>
                <div class="card-body">
                    ${post.body}
                </div>
            </div>
        </div>  
    `
)












// axios.get('https://jsonplaceholder.typicode.com/posts')
// .then(response => {
//     console.log("response", response);
// })
// .catch(function () {
    

// });
















































