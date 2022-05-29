// let num = 1;

// function logNum() {
//     num = 4;
//     console.log(num);
// }
// console.log(num);
// num = 2;
// console.log(num);
// logNum();

// function createCounter() {
//     let counter = 0;

//     function myFunction() {
//         counter = counter + 1;
//         return counter;
//     }
//     return myFunction;
// }
// const increment = createCounter();
// const c1 = increment(),
//       c2 = increment(),
//       c3 = increment();

//       console.log(c1, c2, c3);

// function lol() {
//     let msg = 'Hello';
//     return msg;
// }
// console.log(lol());

// function pow (x, y) {
//     if (y === 1) {
//         return x;
//     } else {
//         return x * pow(x, y - 1); 
//     } 
// }

// console.log(pow(2, 1));
// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 4)); 

let students = {
    js: [{
        name: 'Jhon',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

function getTotalProgresByIteration(data) {
    let total = 0,
        people = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            people += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for(let subCourse of Object.values(course)) {
                people +=subCourse.length;
                
                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }
    return total / people;
}
console.log(getTotalProgresByIteration(students));

function getTotalProgresByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgresByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total;
    }
}
const result = getTotalProgresByRecursion(students);

console.log(result[0]/result[1]);