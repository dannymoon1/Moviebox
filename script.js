
 document.addEventListener("DOMContentLoaded", function(){
 const sidebar = document.querySelector(".sidebar");
  const main = document.getElementById("main");
  const toggler = document.querySelector(".toggle-btn")
  const wraper = document.getElementById("wrapper-id");
 
  toggler.addEventListener("click", function(){
    sidebar.classList.toggle("work")
    wraper.classList.toggle("active")
  });
});

const togglebtnEl = document.querySelector(".toggle-btn-1");
const sidebarELO = document.getElementById("sidebar-1")

togglebtnEl.addEventListener("click", function (){
  sidebarELO.classList.toggle("menu-1")
})