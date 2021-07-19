function productsData(name,brand,price,image){

    this.name = name;

    this.brand = brand;

    this.price = price;

    this.image = image;

}

const product1 = new productsData("shoe","puma","123","https://content.jdmagicbox.com/comp/lucknow/y6/0522px522.x522.120229202644.t6y6/catalogue/nike-store-hazratganj-lucknow-shoe-dealers-9gb1v.jpg?clr=333333")
const product2 = new productsData("trousers","Peter England","230","https://image.shutterstock.com/image-vector/mens-brown-trousers-front-back-260nw-1019716225.jpg")
const product3 = new productsData("shirt","Raymond","256","https://image.shutterstock.com/image-vector/keep-creative-thinking-modern-typography-260nw-1811775076.jpg")
const product4 = new productsData("umbrella","nike","113","https://image.shutterstock.com/image-illustration/umbrella-isolated-on-white-background-260nw-1923397004.jpg")
const product5 = new productsData("chair","Nerolac","423","https://image.shutterstock.com/image-photo/wooden-comfortable-chair-isolated-on-260nw-521053675.jpg")
const product6 = new productsData("watch","Rolex","1123","https://image.shutterstock.com/image-photo/wrist-watch-260nw-110861000.jpg")
const product7 = new productsData("Headphone","JBL","923","https://image.shutterstock.com/image-photo/selective-focus-black-grey-headphone-260nw-1914735256.jpg")
const product8 = new productsData("fliplfops","Relaxo","23","https://image.shutterstock.com/image-photo/pairs-white-sandals-isolated-on-260nw-1916583674.jpg")
const product9 = new productsData("Mobile","Motorola","4000","https://image.shutterstock.com/image-photo/mobile-smart-phone-on-white-260nw-1311685394.jpg")
const product10 = new productsData("Laptop","Dell","34123","https://image.shutterstock.com/image-photo/bangkokthailand-march-142016-dell-logo-260nw-391104334.jpg")
const product11 = new productsData("Television","Sony","10123","https://image.shutterstock.com/image-photo/moscow-russia-june-28-2019-260nw-1438759418.jpg")
const product12 = new productsData("Air conditioner","Panasonic","5123","https://image.shutterstock.com/image-vector/white-air-condition-isolated-on-260nw-758762737.jpg")
const product13 = new productsData("shoe","Nike","146","https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/464e8d65-3a82-472a-aa2c-de53b2dfe7f2/wearallday-shoe-XpS7nX.png")
const product14 = new productsData("trousers","AD &AV","250","https://content.moss.co.uk/images/extralarge/966556201_01.jpg")
const product15 = new productsData("watch","POLO Hunter","3400","https://images-na.ssl-images-amazon.com/images/I/81JrioPehYL._UX342_.jpg")
const product16 = new productsData("Mobile","Apple","99856","https://image.shutterstock.com/image-photo/riga-latvia-november-28-2019-260nw-1580692162.jpg")
const product17 = new productsData("Laptop","HP","43123","https://image.shutterstock.com/image-photo/moscow-russia-june-28-2019-260nw-1438759418.jpg")
const product18 = new productsData("Television","Samsung","10123","https://image.shutterstock.com/image-photo/poznan-pol-feb-04-2020-260nw-1792426252.jpg")
const product19 = new productsData("Refrigerator","Whirlpool","8123","https://5.imimg.com/data5/BR/EQ/MY-47795804/samsung-double-door-refrigerator-500x500.jpg")


const products = [product1,product2,product3,product4,product5,product6,product7,product8,product9,product10,product11,product12,product13,product14,product15,product16,product17,product18,product19];

localStorage.setItem("fakestore",JSON.stringify(products));

function showProducts(p){

    let products = p;
                    
    var data_div = document.getElementById("data");

    data_div.innerHTML = null;

    products.forEach(function(el){

        var div = document.createElement("div");

        var img = document.createElement("img");

        img.src = el.image;

        var p_name = document.createElement("p");

        p_name.innerHTML = el.name

        var p_brand = document.createElement("p");

        p_brand.innerHTML = el.brand

        var p_price = document.createElement("p");

        p_price.innerHTML = "Rs." + el.price;

        let btn = document.createElement("button");
    
        btn.textContent = "Add to Cart";
        
        btn.style.align = "center";
        
        btn.addEventListener("click",function(){
        
            addToCart(el);
        
        })    

        div.style.border = "solid black";

        img.style.width = "357px";
    
        img.style.height = "280px";
    
        div.style.textAlign = "center";

        div.append(img,p_name,p_brand,p_price,btn);

        data_div.append(div);

    });
}

showProducts(JSON.parse(localStorage.getItem("fakestore")));

function HtoL(){

    let productsData = JSON.parse(localStorage.getItem("fakestore"));

    productsData = productsData.sort(function(a,b){

        return b.price - a.price;

    });

    showProducts(productsData);

}

function LtoH(){

    let productsData = JSON.parse(localStorage.getItem("fakestore"));

    productsData = productsData.sort(function(a,b){

        return a.price - b.price;

    });

    showProducts(productsData);

}

function addToCart(obj){

    let arr;

    arr = localStorage.getItem("visited");

    if(arr == null){
        
        arr = [];

        arr.push(obj);
        
        alert("Item added to cart successfully");
        
    }else{
        
        arr = JSON.parse(localStorage.getItem("visited"));
        
        var flag = 0;
        
        for(let i=0; i<arr.length;i++){
            
            if(arr[i].name == obj.name){
                
                flag = 1;
                
                break;
                
            }
            
        }
        
        if(flag == 0){
            
            arr.push(obj);
            
            alert("Item added to cart successfully");
            
        }
        if(flag == 1){
            
            alert("Item already present in cart");
            
        }
    }
 
    localStorage.setItem("visited",JSON.stringify(arr));

}