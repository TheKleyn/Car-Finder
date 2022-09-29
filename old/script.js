const carArray = [
    {
        brand: 'Mazda',
        model: '3',
        trim: 'base',
        year: 2022,
        drive: ['FWD', 'AWD'],
        LKA: true,
        laneCenter: false,
        handsFree: false,
        style: 'sedan',
        zeroSixty: 7.5 
    },
    {
        brand: 'Ford',
        model: 'Mustang Mach E',
        trim: 'base',
        year: 2022,
        drive: ['FWD', 'AWD'],
        LKA: true,
        laneCenter: true,
        handsFree: true,
        style: 'SUV',
        zeroSixty: 3.7 
    },
    {
        brand: 'KIA',
        model: 'Forte',
        trim: 'GT',
        year: 2022,
        drive: ['FWD'],
        LKA: true,
        laneCenter: true,
        handsFree: false,
        style: 'sedan',
        zeroSixty: 6.4 
    },
]


const userCar = [
    {
        brand: undefined,
        model: undefined,
        trim: undefined,
        year: 2022,
        drive: undefined,
        LKA: true,
        laneCenter: true,
        handsFree: undefined,
        style: 'SUV',
        zeroSixty: undefined 
    }
]
/*
const findCar = (userCar, carArray) => {
    return carArray.filter(obj => {
        return obj.laneCenter.every(feature => {
            return userCar.includes(feature) === true;

        })
    })
};

const findCar = (userCar, carArray) => {
    filteredArray = [];
    carArray.Object.forEach(element => {
        if ((element.key.value === userCar.key.value) || (userCar.key.value === undefined)) {
            filteredArray.push(carArray.Object)
        }
    });
} */

//console.log((Object.values(carArray[1])));
//console.log((Object.values(userCar)));


//(Object.values(carArray) === Object.values(userCar)) || (Object.values(userCar) === undefined))

/*var newArray = carArray.filter(
    price <= 1000 & 
    sqft >= 500 & 
    num_of_beds >=2 & 
    num_of_baths >= 2.5 );*/

var newCarArray = carArray.filter(
   
    style = 'SUV'
    );

console.log(newCarArray);


const result = carArray.filter(x => userCar.some(y => (x.Object.values(carArray) === y.Object.values(userCar)) || (y.Object.values(userCar) === undefined)));
console.log('result test below')
console.log(result);

const condensedCarFilter = (userCar, carArray) => {
    return carArray.filter(obj => {
        return obj.values.every(feature => {
            return ((userCar.values.includes(feature) === true) || (userCar.values.includes(feature) === undefined));
        })
    })
};

let contensedTest = condensedCarFilter(userCar, carArray);
console.log(condensedTest);

const findCar = (userCar, carArray) => {
    filteredArray = [];
        for (x =0; x < carArray.length; x++) {
        if ((Object.values(carArray[x]) === Object.values(userCar)) || (Object.values(userCar) === undefined)) {
            filteredArray.push(carArray[x])
            console.log(Object.values(carArray[x]));
        
        }
    }
    console.log(filteredArray);
};


findCar(userCar, carArray);

const testCompare = (userCar, carArray) => {
    if ((Object.values(carArray) === Object.values(userCar)) || (Object.values(userCar) === undefined)) {
        console.log('its a match')
    } else {
        console.log('not a match')
    }
};

testCompare(userCar, carArray[1]);






const obj = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}


for (const [key, value] of Object.entries(userCar[0])) {
    console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
  }
  

let filteredCar = findCar(userCar, carArray);
console.log(filteredCar);

const excludeSideEffects = (userUnwantedSideEffects, medArray) => {
    return medArray.filter(obj => {
        return obj.sideEffects.every(effects => {
            return userUnwantedSideEffects.includes(effects) === false;
        })
    })
};

const testNone = (word) => {
    if ('apple' === undefined) {
        console.log(true)
    } else {
        console.log(false)
    }
}

//testNone('apple');