
const addForm = document.querySelector(".add");

addForm.addEventListener("submit" , e =>{

    e.preventDefault();

    console.log(e);

    const  todo = addForm.add.value.trim();
    console.log("hello todo");
    console.log(todo);
});
