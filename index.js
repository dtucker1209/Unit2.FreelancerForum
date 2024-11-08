const freelancers =[
    {name: "Alice", price: 30, occupation: "Writer"},
    {name: "Bob", price: 50, occupation: "Teacher"},
    {name: "Carol", price: 70, occupation: "Programmer"},
    {name: "Jim", price: 60, occupation:"Photographer"},
    {name: "Amanda", price: 40, occupation:"Translator"},
    {name: "Tony", price:40, occupation: "Tutor"},
    {name: "Taee", price: 60, occupation: "Fitness Trainer"},
    {name: "Gwen", price: 100, occupation: "Consultant"},
];
const initialArr = freelancers.slice(0,2); //initial array of names

const average =document.createElement("p")

//Getting the Mean
 function getavg (initialArr){
    const sum = freelancers.reduce((acc, current) => acc + current.price);
    return sum / freelancers.length;
 }
//setting interval of 15 seconds
setInterval(() => {
let random = freelancers[Math.floor(Math.random() * freelancers.length)];
const randomItem = freelancers[random];
freelancers.push(randomItem);
return initialArr
 }, 15000);

 // random Freelancer generator
 function addFreelancer(){
let random = freelancers[Math.floor(Math.random() * freelancers.length)];
const randomItem = freelancers[random];
freelancers.push(randomItem);
getavg()
 }


const body = document.querySelector("body");


const init = () => {
const section = document.createElement("section")
// section.style.display="flex";
// section.style.justifyContent = "space-evenly";  
// section.style.flexDirection ="row";  
// section.style.alignItems = "center";

// const div = document.createElement("h2");
// const h2 = document.createElement("label");
// h2.innerText = `Name`;
// const occ = document.createElement("occ");
// occ.innerText = `Occupation`;
// const cost = document.createElement("cost");
// cost.innerText =`Price`;
// h2.style.display="flex";
// h2.style.alignItems = "center";
// h2.style.flexDirection ="row";
// h2.style.justifyContent ="space-evenly";






for (let i =0; i < initialArr.length; i++) {
    const element = initialArr[i];
    const div = document.createElement("h3");
    div.style.display="flex";
    div.style.alignItems = "center";
    div.style.flexDirection ="row";
    div.style.justifyContent ="space-evenly";
    const h3 = document.createElement("h3");
    h3.innerText = element.name;
    const occupation = document.createElement("h3");
    occupation.innerText=element.occupation;
    const price = document.createElement("h3");
    price.innerText =element.price;
    
    
    
    
   
    

   

   
    
    // div.append(h2);
    // div.append(occ);
    // div.append(cost);
    div.append(h3);
    div.append(occupation);
    div.append(price);
    section.append(div);
}
average.innerText=`The Average starting price is ${getavg}`
body.append(average)
body.append(section)
}

init();


 


 // const avg = document.createElement("avg")
    // const sum = freelancers.price.reduce((acc , cur) => acc + cur, 0)
    // const mean = sum / initialArr.length
    // avg.innerText = `The Average starting price is ${mean}`
   

    // div.append(avg);
   