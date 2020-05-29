var linkk=window.location.pathname;
var btnContainer = document.getElementById("fluid-web-nav");
console.log(linkk);

var index=document.getElementById("indexnav");
var aboutnav=document.getElementById("aboutnav");
var projectsnav=document.getElementById("projectsnav");
var infusionnav=document.getElementById("infusionnav");
var newsnav=document.getElementById("newsnav");
if(linkk==""|| linkk=="/index.html")
{
  index.setAttribute("class", "button current");
}
else if(linkk=="/about.html")
{
  aboutnav.setAttribute("class", "button current");
}
else if(linkk=="/projects.html")
{
  projectsnav.setAttribute("class", "button current");
}
else if(linkk=="/infusion.html")
{
  infusionnav.setAttribute("class","button current");
}
else
{
  newsnav.setAttribute("class","button current");
}
