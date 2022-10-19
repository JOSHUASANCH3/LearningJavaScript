let form = document.getElementById("form");
let inputNumber = document.getElementById("input");//aqui es donde obtiene los datos
let msg = document.getElementById("msg");
let data = {};
let posts = document.getElementById("posts");//aqui es donde imprime los datos
let input = inputNumber.toString();

form.addEventListener("submit", (e) => {//método adjunta un controlador de eventos a un elemento sin sobrescribir los controladores de eventos existentes. 
    e.preventDefault();
    console.log("button clicked");
    formValidation();
});

let formValidation = () => {
    if (input.value === "") {
        msg.innerHTML = "Debe agregar un numero";
        console.log("Error");
    } else {
        console.log("Success");
        msg.innerHTML = "";
        getData();
    }
};

let getData = () => {
    data["Number"] = input.value;
    console.log(data);
    createPosts();
};

let createPosts = () => {
    posts.innerHTML += `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onClick="editPost(this)" class="fas fa-edit"></i>
            <i onClick="deletePost(this)" class="fas fa-trash-alt"></i> 
        </span>
    </div>
    `;
    input.value = "";
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}