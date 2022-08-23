class person {
    //data members or properties stats or atributes
    adharNo;
    fullName;
    height;
    //constructor
    //methodes or action or behaviour
    constructor(adharNo, fullName, height) { //adarno=234567, fullname='virajranpise;', height=6
        this.adharNo = adharNo;
        this.fullNam = fullName;
        this.height = height;
    } //methodes or action or behavious
    logDetail() {
        console.log(`Details are:${this.adharNo} ${this.fullNam} ${this.height}`)
        //logic
    }
}
let personViraj = new person("12345", "viraj", 6);
personViraj.logDetail();
let personDutta = new person("17845", "dutta", 5);
personDutta.logDetail()
let personAmruta = new person("87767845", "Amru", 5);
personAmruta.logDetail()