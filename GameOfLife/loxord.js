class Loxord extends Person{
    constructor(anun, azganun,superHeight){
        super(anun,azganun)
        this.superHeight = superHeight;
    }

    move(){
        console.log(this.anun + "is swimming");
        super.move();
    }

}