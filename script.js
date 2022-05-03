//easy
function exercise(check) {
    function outPrint(){
    return`Today's exercise: ${check}`;
    }
    return outPrint;
}

console.log(`//////Very Easy Section//////`)
let run = exercise('running');
console.log(run());
let swim = exercise(`swimming`);
console.log(swim());

//medium
function cutPizzaSlices(size){
    function pizzaOutput(share){
        slices=size/share;
   return `Each person gets ${slices} slices of pizza`;
    }
    return pizzaOutput;
}

console.log(`



//////Medium Section//////`)
var sharePizza=cutPizzaSlices(8);
console.log(sharePizza(2));
console.log(sharePizza(3));
//hard
let hardFunc=(function(){
    var pii={
        name:'mage',
        Ssn:`000-00-1037`};
    return function(){
      return `Name: ${pii.name} SSN:***-**-${pii.Ssn.slice(7)}`}; //
})();
console.log(`

//////Hard Section//////`)
console.log(hardFunc());


//very hard
class PersonCl{
    constructor(name,job,age){
        this.name=name;
        this.job=job;
        this.age=age;
        this.busy=false;
    }
    exercise(){
        console.log(`Is your ${this.name} Running? You better go catch them!`);
    }
    fetchJob(){
        console.log(`${this.name} is a ${this.job}.`);
    }
}
class ProgrammerCl extends PersonCl {
    constructor(name,job,age,languages){
        super(name,job,age);
       this.languages=languages || [];
        this.busy=true;
    }
    completeTask(){
        if(this.busy){
            this.busy=false;
            console.log(`${this.name} is no longer busy, please assign a new task!`);
        }else
        console.log(`${this.name} is busy, please try again later.`)
    }
    offerNewTask(){
        if(this.busy){
            console.log(`${this.name} is not busy, would love more responsibility.`);
        }else 
        console.log(`${this.name} is too busy to accept new assignments.`)
    }
    learnLanguage(language){
        this.languages.push(language);
        console.log(`${this.name} has learned a new language, ${language}!`);
    }
    listLanguage(){
        console.log(`${this.name} knows ${this.languages.toString()}.`);
    }
}
const aza = new ProgrammerCl ("Aza","Front End Developer",24,);
const luce = new ProgrammerCl ("Luce","Server Manager",25);


//////Very Hard Section//////`)
aza.exercise();
aza.fetchJob();
aza.completeTask();
aza.offerNewTask();
aza.learnLanguage("java");
aza.learnLanguage("c++");
aza.listLanguage();

console.log(``);
luce.exercise();
luce.fetchJob();
luce.completeTask();
luce.offerNewTask();
luce.learnLanguage("python");
luce.learnLanguage("ruby");
luce.listLanguage();