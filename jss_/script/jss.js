
async function getData() 
{
    let btn = document.getElementById("show");
    btn.style.display = "none";
    let cardDiv = document.getElementById("cardDiv");
    //console.log(cardDiv);
    //cardDiv.style.visibility = 'visible';
    let response = await fetch(`https://ankitkotnalaqait.github.io/dummydata/data.json`);
    let myJson = await response.json();
    //console.log(myJson);
    for(let i in myJson){
        //console.log(i);
        let cardJS = document.createElement("div");
        cardJS.className= "cardJS";
        
        if(myJson[i]['gender'] == 'Male'){
            let imgJS = document.createElement("IMG");
            imgJS.className= "imgJS";
            imgJS.setAttribute("src", "./image/avi.png")
            cardJS.appendChild(imgJS);
        }
        else{
            let imgJS = document.createElement("IMG");
            imgJS.className= "imgJS";
            imgJS.setAttribute("src", "./image/aviw.png")
            cardJS.appendChild(imgJS);
        }
        let nameJS = document.createElement("p");
        nameJS.className="nameJS";
        nameJS.innerHTML = myJson[i]['first_name']+" "+myJson[i]['last_name'];
        cardJS.appendChild(nameJS);
        
        let mailJS = document.createElement("p");
        mailJS.className="mailJS";
        mailJS.innerHTML = myJson[i]['email'];
        cardJS.appendChild(mailJS);

        let genderJS = document.createElement("p");
        genderJS.className="genderJS";
        genderJS.innerHTML = myJson[i]['gender'];
        cardJS.appendChild(genderJS);

        //console.log(cardJS);
        let container = document.getElementById("data");
        container.appendChild(cardJS);
    }
}

