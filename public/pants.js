var pants;
function sendData(data){
    pants=JSON.parse(data);
    // console.log("pants:",pants)
    display(pants)
}


function display(pants){
    document.getElementById("right").innerHTML=""
    pants.map((elem)=>{
    
        const singlediv=document.createElement("div");
        singlediv.id="singlediv"
        singlediv.addEventListener("click",()=>{
            single(elem);
            console.log("elem:",elem)
        })

        const image=document.createElement("img");
        image.src=elem.image[0];

        const brand_name=document.createElement("h3");
        brand_name.textContent=elem.brand;

        const price=document.createElement("p");
        price.textContent=elem.price[0];

        singlediv.append(image,brand_name,price);
        document.getElementById("right").append(singlediv);
    })
}


function price(){
    var value = document.querySelector("#select").value;
    if(value=="low"){
    pants.sort(function(a,b){
        // console.log(a,b)
            return Number(a.price[0].slice(1)) - Number(b.price[0].slice(1))
        })
    }else if(value=="high"){
    pants.sort(function(a,b){
            return Number(b.price[0].slice(1)) - Number(a.price[0].slice(1))
            })

        }
    
    display(pants)   
}



    function  single({_id}){
        
       console.log(_id)
       window.location.href=`http://localhost:2020/home/view_product/${_id}`
    }