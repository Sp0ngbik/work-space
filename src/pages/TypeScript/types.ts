const typeString: string = "hello";
const typeNumber: number = 1;
const typeBool: boolean = true;
const typeArrayNumber: number[] = [1, 2, 3, 4, 5];
const typeArrayAny: [number, string] = [1, "hello"];
let typeAny: any = 2;
typeAny = "hello";

//void - func return's nothing
function nameCaller(name: string): void {
  console.log(name);
}

nameCaller("Vlad");

//Never means never done
// function infiniteFunc(message:string):never{
//     throw new Error(message)
// }

//types
type tsTypeString = string;
const tsTypeCheck: tsTypeString = "Vlad";

//both types
type bothTsTypes = number | string;
const tsTypes = 1;
const tsTypes2 = 'Vlad'

type someMoreTsTypes = null|string|undefined