class Arciv extends Trchyun{
    constructor(tesak,tever,chanch, ktuc,gishatich){
        super(tesak,tever,chanch, ktuc)
        this.gishatich = gishatich;
    }

    trnel(){
        super.trnel();
        console.log(this.tesak + " Fly is too high !!!!!");
    }
}