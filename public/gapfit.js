var gapfit;
function sendData(data){
    gapfit=JSON.parse(data);
    // console.log("gapfit:",gapfit)
    display(gapfit)
}


function display(gapfit){
    document.getElementById("right").innerHTML=""
    gapfit.map((elem)=>{
    
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
    gapfit.sort(function(a,b){
        // console.log(a,b)
            return Number(a.price[0].slice(1)) - Number(b.price[0].slice(1))
        })
    }else if(value=="high"){
    gapfit.sort(function(a,b){
            return Number(b.price[0].slice(1)) - Number(a.price[0].slice(1))
            })

        }
    
    display(gapfit)   
}



function  single({_id}){
    
    console.log(_id)
    window.location.href=`https://gap-project.herokuapp.com/home/gapfit/view_product/${_id}`
}