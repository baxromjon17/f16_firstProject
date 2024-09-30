


let form = document.querySelector(".form");




form.addEventListener("submit", (e) =>{
  e.preventDefault();
  let inp = document.querySelector("input").value

  if (inp == ""){
    alert("Please write information in the input 😅")
  }else{
    let formData = new FormData(form);
    let data = Object.fromEntries(formData)
    
    
  
  
    fetch("https://66e5ad0f5cc7f9b6273e0ca9.mockapi.io/f16",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify(data),
    })
    .then(url => url.json())
    .then(data => console.log(data))
    
  
  
    alert("Your product has been added 😀");
    e.target.reset();
  }

})



 async function createFoodTodo(){
  let response = await fetch("https://66e5ad0f5cc7f9b6273e0ca9.mockapi.io/f16")

  .then(res => res.json())
  .then(data => {
    let todoRoot = document.querySelector(".main_container");

      data.map((item)=>{
        todoRoot.innerHTML +=`
        
        <div class="to_do">
        <h1>${item.id}</h1>
        <h1>${item.name}</h1>
        <h3>${item.price}$</h3>
        <img src="${item.img}">
        <button style="border-radius: 15px; background-color: red; color: white; border: none; padding: 8px 13px;">Delete</button>
        <button style="border-radius: 15px; background-color: yellow; border: none; padding: 8px 13px;" onclick="updateTodo(${item.id})">Update</button>
    </div>
`
      })

  })
  
  console.log(data);

}

createFoodTodo()

function updateTodo(id){
  console.log(id);

  let update = document.querySelector(".update");
  update.classList.add("active");

  update.addEventListener("submit", (e)=>{
    e.preventDefault();
  })
}





function backMenu(){
  let update = document.querySelector(".update")
  update.classList.remove("active")
}


