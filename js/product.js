

function checkInput(){
    var productname = document.OrderForm.productname;
    var productcolor = document.OrderForm.productcolor;
    var quantity = document.OrderForm.quantity;
    var shipto= document.OrderForm.shipto;
    var nameoncc= document.OrderForm.nameoncc;
    var address = document.OrderForm.address;
    var ccno = document.OrderForm.ccno;
    var ccdate  = document.OrderForm.ccdate;
    var cvv = document.OrderForm.cvv;
    var alertText = "Missing the following in order form:";
    var ready = false;
    if (productname.length === 0 || productname.trim.value === ""){
        alertText= alertText + "\nproduct name";
        ready = false;
    }
    if (productname.productcolor === 0 || productcolor.trim.value === ""){
        alertText= alertText + "\nproduct color";
        ready = false;
    }
    if (!(parseInt(quantity.value) > 0)){
        alertText= alertText + "\nquantity to order";
        ready = false;
    }
    if (shipto.length === 0 || shipto.trim.value === ""){
        alertText= alertText + "\nship to name";
        ready = false;
    }
    if (nameoncc.length === 0 || nameoncc.trim.value === ""){
        alertText= alertText + "\nname on cc";
        ready = false;
    }
    if (address.length === 0 || address.tri.value === ""){
        alertText= alertText + "\nshipping address";
        ready = false;
    }
    if (ccno.length === 0 || ccno.trim.value === ""){
        alertText= alertText + "\ncredit card number";
        ready = false;
    }
    if (ccdate.length === 0 || ccdate.trim === ""){
        alertText= alertText + "\ncredit card expiration date";
        ready = false;
    }
    if (cvv.length === 0 || cvv.trim === ""){
        alertText= alertText + "\ncredit card cvv";
        ready = false;
    }
    if(ready === false){
        alert(alertText);
        return false;
    }
    return true;
}

function changeMainImage(e){
    document.getElementById("main-image").src = "";
    document.getElementById("main-image").src = "../images/"+e.id+".jpg";
}

function addZoom(target){

    var container= document.getElementById(target);
    var imagesrc = container.currentStyle || window.getComputedStyle(container, false);
    imagesrc = imagesrc.backgroundImage.slice(4, -1).replace(/"/g, "");
    var image = new Image();

    image.src = imagesrc;
    image.onload=function(){
        var imageWidth = image.naturalWidth;
        var imageHeight = image.naturalHeight;
        var ratio = imageHeight/imageWidth;
        var percentage = ratio * 100 + '%';

        container.onmousemove = function(e){
            var boxWidth = container.clientWidth;
            var rect = e.target.getBoundingClientRect();
            var xPos = e.clientX - rect.left;
            var yPos = e.clientY - rect.top;
            var xPercent = xPos / (boxWidth / 100) + "%";
            var yPercent = yPos/ ((boxWidth * ratio) / 100) + "%";

            Object.assign(container.style, {
                backgroundPosition: xPercent + ' ' + yPercent,
                backgroundSize: imageWidth + 'px'
            });
        };

        container.onmouseleave = function(e){
            Object.assign(container.style, {
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            });
        };
    }

};

window.addEventListener("load", function(){
    addZoom("main-image");
});

