var menuIcon = document.querySelector(".menu-icon");
var Sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var list = document.querySelector(".list-container");

menuIcon.onclick= function(){
    Sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
    list.classList.toggle("large-list-container");
}