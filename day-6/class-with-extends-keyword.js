class Tee {
	suger = 0;
    milk = 0;
    tee=0;
   
   	makeTee(suger, milk, tee){
		this.suger = suger;
		this.milk = milk;
        this.tee = tee;
	}

	showResult(){
		if(this.suger >= 2)
			alert("Tee is sweet")
        else
			alert("Tee is not sweet")
	}
}

class LemonMilkTee extends Tee {
    lemon= 0
   putLemon(howManyLemon){
		this.lemon = howManyLemon;
	}
}

const tee1 = new Tee()
tee1.makeTee(1,1,1)
tee1.showResult()