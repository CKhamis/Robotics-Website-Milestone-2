var Name;

Name = 'Costi Khamis';
var ProfileIcon = "../Pictures/Dasboard/No-Profile-Pic.png";
var Category = "Web";

document.getElementById("WM").innerHTML = Name;
document.getElementById("UserName2").innerHTML = Name;
document.getElementById("ProfilePic").src= ProfileIcon;
document.getElementById("ProfilePic2").src= ProfileIcon;
if(Category == "Web"){
    document.getElementById("CategoryIcon").src= "../Pictures/Subcategories/WEB.png";
}