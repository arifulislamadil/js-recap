function animalCount(miles){
    const animalDensityFirst10Miles =10;
    const animalDensitySecond10Miles =20;
    if(miles<=10){
        const count = miles*animalDensityFirst10Miles;
        return count;
    }else if(miles<=20){
       const first10=10*animalDensityFirst10Miles;
       const restMiles = miles - 10;
       const totalMiles = restMiles*20;
       const totalAnimals = first10+totalMiles;
       return totalAnimals
    }else if(miles<=30){
        const first10=10*animalDensityFirst10Miles;
        const second10=10*animalDensitySecond10Miles;
       const restMiles = miles - 20;
       const restAnimals = restMiles * 30;
       const totalAnimals = first10+second10+restAnimals;
       return totalAnimals;
    }
}
const animals=animalCount(21);
console.log(animals)