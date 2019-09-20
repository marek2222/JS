class Animal {
	constructor(name, age) {
			this.name = name;
			this.age = age;
			this.type = "animal";
			console.log(this.name);
	}
	eat() {			console.log(this.name + " je");	}
	sleep() {			console.log(this.name + " śpi");	}
	print() {			console.log('Nazwa: '+this.name
		+';  Wiek: '+this.age+';  typ: '+this.type);	}
}
const zwierze = new Animal("Zwierze", 2);
zwierze.eat();
zwierze.sleep();
zwierze.print();

class Ptak extends Animal {
	constructor(name, wiek) {
			super(name, wiek);
			this.type = "ptak";
	}
	eat() {	console.log(this.name + " - właśnie je");		}
	fly() {	 console.log("Mogę latać");				}
}
const ptak = new Ptak("Bocian", 3);
ptak.eat();
ptak.sleep();
ptak.print();
ptak.fly();

