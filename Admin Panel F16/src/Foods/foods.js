


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
