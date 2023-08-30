var submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", function(event){
    var fNameValue = document.getElementById("firstName").value
    var lNameValue = document.getElementById("lastName").value
    nameValidation(fNameValue, lNameValue)
})

function nameValidation(fname, lname) {
    if (fname == "" || lname == "") {
        alert("salah satu ada yang kosong")
    } else {
        alert("berhasil")
    }
}

var showedIndex = 1

setInterval(function(){
    plusIndex(1)
}, 2000)

function plusIndex(index) {
    showImage(showedIndex += index)
}

function showImage(index) {
    var imgList = document.getElementsByClassName("autoSlide")
    var i;
    if (index > imgList.length) {showedIndex = 1}
    if (index < 1) { showedIndex = imgList.length}

    for(i=0; i < imgList.length; i++) {
        imgList[i].style.display = "none"
    }
    imgList[showedIndex -1].style.display = "block"
}