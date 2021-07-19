var data_div = document.getElementById("data");

function appendProducts(el){
    
    var div = document.createElement("div");
    
    let img = document.createElement("img");
   
    img.src = el.image;

    let p_name = document.createElement("p");
   
    p_name.innerHTML = el.name;

    let p_brand = document.createElement("p");
    
    p_brand.innerHTML = el.brand;
    
    let p_price = document.createElement("p");
    
    p_price.innerHTML = "Rs. " + el.price;

    div.append(img,p_name,p_brand,p_price);
    
    data_div.append(div);

}

function showCart() {
    let data = JSON.parse(localStorage.getItem("visited"))
    
    data.forEach(function(el){
        
        appendProducts(el);
        
    });
}

showCart();

function totalPrice(el){
    
    let data = JSON.parse(localStorage.getItem("visited"))

    var money = document.getElementById("priceCart");

    var totalPrice = 0;

    data.forEach(function(el){

        totalPrice += Number(el.price);

    });

    if(el == 30){

        totalPrice = Math.ceil(totalPrice * 0.7);

        money.innerHTML ="Total Price : " + totalPrice;
    
    }

    money.innerHTML ="Total Price : " + totalPrice;

}


function PromoCode(){

    var coupon_code = document.getElementById("coupon").value;

    if(coupon_code === "masai30"){

        totalPrice(30);

    }

}

totalPrice();