var navList = document.getElementsByClassName("nav");
for (var i = 0; i<navList.length i++) {
	navList[i].addEventListener("click", function(){this.style.backgroundColor = "#FFFDF6";});
}