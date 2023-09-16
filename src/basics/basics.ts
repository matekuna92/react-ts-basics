let age:number = 20;
age = '25';
let username: string;
username = 'Mark';
let isLearner: boolean;
isLearner = true;

let hobbies: string[];
hobbies = ['Walking', 'Swimming'];

// let person: any;    // can defined any type
/*person = {
    name: 'Matt',
    age: 32
}*/

/*let anotherPerson = {
    isEmployee: true
}*/

// object type definition. will give error, if we defined person below with different typed fields
let person: {
    name: string,
    age: number
}

person = {
    name: 'Matt',
    age: 32
}

// can defined object typed arrays
let people: {
    name: string,
    age: number
}[];

// typescript tries to assign correct type even if types are not defined
let course = 'React course';
course = 123;

// union types
let reactCourse: string | number = 'React Redux tutorial';
reactCourse = 123;  // now it's allowed

type Device = {
    name: string,
    price: number,
    desc: string
}

let onlineDevices: Device[];

// functions and types
const add = (a: number, b: number) => {
    return a + b;
}

// void type, returns undefined
const printValue = (value: any) => {
    console.log(value);
}

// generics - general functions should use any, but this means that typescript wont check any type in the array
// using generics solves this problem
const insertAtBeginning = (array: any[], value: any) => {
    const newArray = [value, ...array]
    return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1);
updatedArray[0].split('');     // no typescript error, it doesnt know if the first element is string or not, but will throw a runtime error

// now typescript checks the arguments types, then the function will return the same type
const insertToArrayBeginning = <T>(array: T[], value: T) => {
    const newArray = [value, ...array]
    return newArray;
}

const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');






