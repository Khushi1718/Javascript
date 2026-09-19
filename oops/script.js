function createpencil(name,price,color){
    this.name = name ;
    this.price = price;
    this.color= color;
    // this.write =()=>{
    //     let h1 = document.createElement('h1')
    //     h1.textContent="hii";
    //     let body = document.querySelector("body")
    //     body.append(h1);
    // }
}
createpencil.prototype.write = function(text){
    console.log(this);
    let h2 = document.createElement("h2");
    h2.textContent= text;
    h2.style.color = this.color;
    console.log(h2);
    document.body.append(h2);
};
let pencil1 = new createpencil("natraj",10,"black");
let pencil2 = new createpencil("apsra",20,"white");
pencil1.write();
// ager tumhra constructor function kpi field apne prototype p add kerle to us constructor k sab new instances 
// means object per voh field add hoajti  
createpencil.prototype.company ="Apsraa";

class Pencil{
    constructor(name,com,price,color){
        this.name=name;
        this.com=com;
        this.price=price;
        this.color= color;

    }
    write(text){
        let h = document.createElement("h1");
        h.textContent= text;
        h.style.color=this.color;
        document.body.append(h);
    }
}
let pen1= new Pencil("natraj","Nat",13,"red");
pen1.write("hello jii")

//extends 