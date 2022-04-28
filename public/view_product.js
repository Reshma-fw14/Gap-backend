


// //<--------------function for product details display---------------->

var cartArray = [];


const addToBag = (elem) => {
    console.log("view_items", view_items)
    document.getElementById('removePopup').style.display = 'flex';

    document.getElementById('coImg').src =view_items.image[0];

    document.getElementById('coTitle').textContent = view_items.brand;

    document.getElementById('coPriceDiscounted').textContent = view_items.price[0];
    

    cartArray.push(view_items);
    console.log('cartArray', cartArray); 

    document.getElementById('cartQty').textContent = cartArray.length;

    //<--------------calculating the total cart value---------------->
    var total = 0;
    for(let t=0; t<cartArray.length ; t++){
            
        let p = cartArray[t].price;
        p = view_items.price[0].split("")
        p.shift();
        p = +p.join("")
        total += p 
    }
    document.getElementById('totalAmt').textContent = `Subtotal: ${'$'+(cartArray.length*total)}`;
}


// //<--------------function to remove popup---------------->
document.getElementById("crosS").onclick=()=>{
    document.getElementById('removePopup').style.display = 'none';
}

document.getElementById("keepShopBtn").onclick=()=>{
    window.location.href="/home/dresses"
}


// //<--------------go to chechout page---------------->
document.getElementById("coBtn").onclick=()=> {
    single(view_items)
    // console.log(view_items._id, view_items.brand);
}

function single({_id,brand}){
    console.log(_id,brand)
    window.location.href=`https://gap-project.herokuapp.com/checkout/?id=${_id}&brand=${brand}`;
}
// function single({_id}){
//     // console.log(_id)
//     window.location.href=`http://localhost:2020/home/checkout/${_id}`;
// }
// function single({_id}){
//     // console.log(_id)
//     window.location.href=`http://localhost:2020/home/gapfit/checkout/${_id}`;
// }



var view_items;
function sendData(data){
     view_items=JSON.parse(data)
    console.log(view_items)
    display(view_items)
}

function display(elem){
    // console.log(elem)
    document.getElementById("p_price").textContent=elem.brand;
    document.getElementById("title").textContent=elem.price[0];
    document.getElementById("append1").src=elem.image[0];
    document.getElementById("prod_color").textContent=` Selected Colour : ${elem.color[0]}`
    
    document.getElementById("append2").src=elem.image[3];
    document.getElementById("append3").src=elem.image[4];
    document.getElementById("append4").src=elem.image[5];

    document.getElementById("color-1").textContent=`Color-1 :    ${elem.color[0]}`;
    document.getElementById("color-2").textContent=`Color-2 :    ${elem.color[1]}`;
    document.getElementById("color-3").textContent=`Color-3 :    ${elem.color[2]}`;

    
        document.getElementById("color-1").addEventListener("click",()=>{
            // console.log(elem.color)
             document.getElementById("title").textContent=elem.price[0];
             document.getElementById("append1").src=elem.image[0];
             document.getElementById("prod_color").textContent=` Selected Colour : ${elem.color[0]}`
        })

        document.getElementById("color-2").addEventListener("click",()=>{
            document.getElementById("title").textContent=elem.price[1];
            document.getElementById("append1").src=elem.image[1];
            document.getElementById("prod_color").textContent=` Selected Colour : ${elem.color[1]}`;
       })

       document.getElementById("color-3").addEventListener("click",()=>{
           document.getElementById("title").textContent=elem.price[2];
           document.getElementById("append1").src=elem.image[2];
           document.getElementById("prod_color").textContent=` Selected Colour : ${elem.color[2]}`;
       })

}