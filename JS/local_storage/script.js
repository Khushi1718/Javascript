const input=window.document.getElementById("input");
const button=document.getElementById("button");
const user_name=document.getElementById("user-name");
button.addEventListener("click",()=>{
      const name=input.value
      localStorage.setItem("value",name)
    //   const storage_name=localStorage.getItem("value")
    //   user_name.innerHTML=storage_name
    //OR TO DO THE SAME TASK AS WE KNOW WE ARE GETTING NAME WHEN WE RELOAD THE WINDOW
    location.reload();
      
    
})
window.addEventListener("load",()=>{
    const value=localStorage.getItem("value")
    user_name.innerText=value

})
