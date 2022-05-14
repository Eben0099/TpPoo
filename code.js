
class Aliment{
    constructor(nom,ve1,ve2,ve3){
        this.nom = nom
        this.ve1 = ve1
        this.ve2= ve2
        this.ve3 = ve3
        this.valeur=ve3+ve2+ve1
    }
}

class Plate {
     
    constructor (Aliment,type){
        this.Aliment=Aliment
        this.type = type

    }
    toString(){
        alert("je suis un plat constitué de "+this.Aliment.nom+" et je suis un "+this.type);
        alert("ma valeur energetique est de "+this.Aliment.valeur+ "kcal")
    }
    
}
let banane = new Aliment("Banane",125,452,145);
let ban = new Plate(banane,"Complement")
ban.toString();