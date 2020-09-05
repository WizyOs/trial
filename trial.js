class Wizard {
  constructor(power) {
    this.power = power; //privada: el atributo "power" debe ser solo leido por "battle"
  }
  
  static battle (wizardPackA, wizardPackB) {
        let weightA = 0;
        wizardPackA.forEach(wiz => {
            weightA += wiz.power;
        });
        let weightB = 0;
        wizardPackB.forEach(wiz => {
            weightB += wiz.power;
        });

        var diff = weightA - weightB;
        if(diff == 0) return 0;
        return diff / Math.abs(diff);
    }
}

var wizards = [];

for (i = 0; i < 9; i++) {
    wizards.push(new Wizard(10));
}

//Tip: Math.random() un numero aleatorio entre 0 (inclusivo), y 1 (exclusivo):

var impostor = new Wizard(Math.floor(Math.random() * 10));

wizards[Math.floor(Math.random() * 10)] = impostor;

// tu misión si decides aceptarla es
//detectar al impostor usando "battle"
//solo puedes usar "battle" 2 veces

//El reto comienza
var detectedImpostorIndex;

var wizardPackA // = your code
var wizardPackB // = your code

var res1 = Wizard.battle(wizardPackA, wizardPackB);

var wizardPackA2;
var wizardPackB2;

// tu codigo{


// tu codigo}

var res2 = Wizard.battle(wizardPackA2, wizardPackB2);

// tu codigo{


// tu codigo}

var allegedImpostor = wizards[detectedImpostorIndex];

if(allegedImpostor.power < 10){
    console.log("Felicidades encontraste al impostor!");
}else{
    console.log("Mejor suerte para la próxima");
}