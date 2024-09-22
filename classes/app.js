const student = {
    fullName : "Abhinav anand",
    marks : 84.4,
    printMarks : function(){
        console.log("Marks = ", this.marks);
    }
};

class toyotaCar{
    start (){
        console.log("start")
    }
    stop (){
        console.log("stop")
    }
    setBrand(brand){
        this.brand = brand;
    }
}

// super keyword

class Parent {
    constructor(name){
        this.species = "homo sapiens";
       this.name =name;
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
}

class engineer extends Parent{
    constructor(name){
        super(name);
    }
    
    work(){
       super.eat();
        console.log("it also do some work ");
    }
}

let fortuner = new toyotaCar();
fortuner.setBrand("fortuner");
let lexus = new toyotaCar();
lexus.setBrand("lexus");

// super keyword
let engObj = new engineer("Abhinav");
