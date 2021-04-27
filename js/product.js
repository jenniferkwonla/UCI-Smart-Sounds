function sendOrder(){
    if(checkInput()){
        let br='%0D%0A';
        let name=document.getElementById("shipto").value;
        let phone =document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let address = document.getElementById("address").value;
        let shippingmethod= document.getElementById("shipmethod").value;
        let productname = document.getElementById("productname").value;
        let quantity = document.getElementById("quantity").value;
        let color=document.getElementById("color").value;
        let body="PURCHASE ORDER" + br + br +
            "Ship to: " + name + br + "Phone: " + phone + br + "Email: " + email + br +
            "Address: " + address + br + "Ship method: " + shippingmethod + br +
            "Product: " + productname + br + "Quantity: " + quantity + br+ "Color: " + color;
        let val = "location.href='mailto:order@smartsounds.com?subject=Confirmation&body="+body+"'";
        let val2 = "location.href='mailto:ordercheck@smartsounds.com?subject=Confirmation&body="+body+"'";

        document.getElementById("submit").setAttribute("onclick", val);
        document.getElementById("order-form").setAttribute("action", "confirmation.html");
        //window.location.href="confirmation.html";
        return val;
    }
}
document.getElementById("submit").addEventListener("click", function() {

    sendOrder();

});
function checkInput(){
    var productname = document.getElementById("productname").value;
    var productcolor = document.getElementById("color").value;
    var quantity = document.getElementById("quantity").value;
    var shipto= document.getElementById("shipto").value;
    var email= document.getElementById("email").value;
    var phone= document.getElementById("phone").value;
    var nameoncc= document.getElementById("nameoncc").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zipcode = document.getElementById("zipcode").value;
    var ccno = document.getElementById("ccno").value;
    var ccdate  = document.getElementById("ccdate").value;
    var cvv = document.getElementById("cvv").value;
    var alertText = "Missing the following in order form:\n";
    var ready = true;
    if (productname === undefined || productname.length === 0 || productname.trim.value === ""){
        alertText= alertText + "\nproduct name";
        ready = false;
    }
    if (productcolor === undefined || productcolor === 0 || productcolor.trim.value === ""){
        alertText= alertText + "\nproduct color";
        ready = false;
    }
    if (quantity === undefined || (parseInt(quantity.value) < 1)){
        alertText= alertText + "\nquantity";
        ready = false;
    }
    if (shipto === undefined || shipto.length === 0 || shipto.trim.value === ""){
        alertText= alertText + "\nship to name";
        ready = false;
    }
    if (phone === undefined || phone.length < 1 || phone.length > 12| phone.trim.value === ""){
        alertText= alertText + "\nphone number";
        ready = false;
        document.getElementById("phone").value="";
    }
    else{
        if (phone.length <12 && phone.length >=1){
            ready=false;
            alertText = alertText + "\nphone number is short";
            document.getElementById("phone").value="";
        }
        else{
            var temp = phone.split("-");
            if (temp.length != 3){
                ready = false;
                alertText= alertText + "\nphone number is in wrong format";
                document.getElementById("phone").value="";
            }
            else if(temp[0].length != 3 || temp[1].length != 3 || temp[2].length != 4){
                ready = false;
                alertText= alertText + "\nphone number is in wrong format";
                document.getElementById("phone").value="";
            }
            else{
                var num = temp.map(function(t) {
                    if (isNaN(parseInt(t))){
                        ready = false;
                        alertText= alertText + "\nphone number is in wrong format";
                        document.getElementById("phone").value="";
                    }
                });
            }
        }
    }
    if (email === undefined || email.length === 0 || email.trim.value === ""){
        alertText= alertText + "\nemail";
        ready = false;
    }
    else{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var check = re.test(String(email).toLowerCase());
        if(check === false){
            alertText= alertText + "\nemail is wrong format";
            ready = false;
            document.getElementById("email").value="";
        }
    }
    if (nameoncc === undefined || nameoncc.length === 0 || nameoncc.trim.value === ""){
        alertText= alertText + "\nname on cc";
        ready = false;
    }
    if (address === undefined || address.length === 0 || address.trim.value === ""){
        alertText= alertText + "\nshipping address";
        ready = false;
    }
    if (city === undefined || city.length === 0 || city.trim.value === ""){
        alertText= alertText + "\ncity";
        ready = false;
    }
    if (state === undefined || state.length === 0 || state.trim.value === ""){
        alertText= alertText + "\nstate";
        ready = false;
    }
    if (zipcode === undefined || zipcode.length === 0 || zipcode.trim.value === ""){
        alertText= alertText + "\nzipcode";
        ready = false;
    }
    if (ccno === undefined || ccno.length === 0 || ccno.trim.value === ""){
        alertText= alertText + "\ncredit card number";
        ready = false;
    }
    else{
        // Check visa: begins with a 4, length of 13 or 16
        if(ccno.charAt(0) === '4'){
            if (ccno.length !== 13 || ccno.length !== 16) {
                alertText = alertText + "\ncredit card number is invalid";
                ready = false;
                document.getElementById("ccno").value="";
            }
        }
        // Check amex: begins with a 3, followed by a 4 or 7, length of 15
        if(ccno.charAt(0) === '3'){
            if (ccno.charAt(1) !== '4' || (ccno.charAt(1) !== '7')){
                alertText = alertText + "\ncredit card number is invalid";
                ready = false;
                document.getElementById("ccno").value="";
            }
            else{
                if(ccno.length !== 15){
                    alertText = alertText + "\ncredit card number is invalid";
                    ready = false;
                    document.getElementById("ccno").value="";
                }
            }
        }
        // Check discover: begins with a 6, length of 16
        if(ccno.charAt(0) === '6'){
            if(ccno.length !== 16){
                alertText = alertText + "\ncredit card number is invalid";
                ready = false;
                document.getElementById("ccno").value="";
            }
        }
    }
    if (ccdate === undefined || ccdate.length === 0 || ccdate.trim === ""){
        alertText= alertText + "\ncredit card expiration date";
        ready = false;
    }
    else{
        var date = ccdate.split("/");
        var month = date[0];
        var year = date[1];
        if(parseInt(month) > 12 || parseInt(month) === 0){
            alertText= alertText + "\ncredit card expiration month is wrong";
            ready=false;
            document.getElementById("ccdate").value="";
        }
        if(year.length >= 1 && year.length <= 3){
            alertText= alertText + "\ncredit card expiration year is wrong";
            ready=false;
            document.getElementById("ccdate").value="";
        }
        if (isNaN(parseInt(month)) || isNaN(parseInt(year)) ){
            alertText= alertText + "\ncredit card expiration date is wrong";
            ready=false;
            document.getElementById("ccdate").value="";
        }
    }
    if (cvv === undefined || cvv.length > 3 || cvv.length < 1|| cvv.trim === ""){
        alertText= alertText + "\ncredit card cvv";
        ready = false;
        document.getElementById("ccdate").value="";
    }
    if(ready === false){
        alert(alertText + "\n\nFill out the missing fields to send order.");
        return false;
    }

    return true;
}

function changeMainImage(e){
    document.getElementById("main-image").src = "";
    document.getElementById("main-image").src = "../images/"+e.id+".jpg";
    var color = e.id.split("-");
    var color = color.slice(1);
    var cap_color = color.map (c=> c.charAt(0).toUpperCase() + c.substr(1));
    document.getElementById("color-on-view").innerHTML="Selected color: " + cap_color.join(" ");;
}


