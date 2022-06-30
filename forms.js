'use strict';

const fNameInput = document.querySelector('.fristname-input');
const emailInput = document.querySelector('.email-input');
const titleInput = document.querySelector('.title-input');
const bodyInput =  document.querySelector('.textarea');
const btnSubmit = document.querySelector('.btn-submit');
let currentTab;

const myFunction = value => {
    currentTab = value;

    if(value === "posts") {
        fNameInput.style.display = 'none';
        emailInput.style.display = 'none';
    } else if (value === "comments") {
        fNameInput.style.display = 'block';
        titleInput.style.display = 'none';
        emailInput.style.display = 'block';
        
    } else if (value === "albums") {
        fNameInput.style.display = 'none';
        emailInput.style.display = 'none';
        titleInput.style.display = 'none';
        bodyInput.style.display = 'block';
    }else if (value === "default"){
        fNameInput.style.display = 'block';
        emailInput.style.display = 'block';
        titleInput.style.display = 'block';
        bodyInput.style.display = 'block';
    } else {
        alert('Error!')
    }
};

btnSubmit.addEventListener('click', function(e) {
    let url = "https://jsonplaceholder.typicode.com";
    let params;

    if(currentTab === "posts"){
        url = `${url}/posts`;
        params = {
            title: titleInput.value,
            body: bodyInput.value,
            userId: 1
        }
    } else if (currentTab === "comments") {
        url = `${url}/comments`;
        params = {
            name: fNameInput.value,
            email: emailInput.value,
            body: bodyInput.value,
            id: 1
        }

    } else if (currentTab === "albums") {
        url = `${url}/albums`;
        params = {
            body: bodyInput.value,
            id: 1
        }
    } else{
        console.log("not found");
    }

    onSubmit(url, params);
});

const onSubmit = (url, params) => {
    if(!url || !params) {
        return;
    }

    btnSubmit.disabled = true;

    axios.post(url, params).then(response => {
        btnSubmit.disabled = false;
        
        if(response.data){
            console.log("post response", response);

            loadList();
        }

    }).catch(e => {
        btnSubmit.disabled = false; 
    });
};
 

const loadList = () => {
    let url = "https://jsonplaceholder.typicode.com";
    
    if(currentTab == "posts"){
        url = `${url}/posts`;
    } else if (currentTab === "comments") {
        url = `${url}/comments`;
    } else if (currentTab === "albums") {
        url = `${url}/albums`;
    } else{
        console.log("not found");
    }

    axios.get(url).then(response => {
        console.log("response", response);
    })

}

