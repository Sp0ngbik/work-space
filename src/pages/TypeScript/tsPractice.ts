/// types
const numberTs: number = 2;
const stringTs: string = "2";
const tsArray: number[] = [1, 2, 3];
const anyArr: any[] = [1, 2, "3"];
const tuposeArr: [number, number, string] = [1, 2, "3"];
let bothTypes: number | string = 2;
bothTypes = "2";
// interfaces
interface tsInter {
  name: string;
  age: number;
}

const tsInternInfo: tsInter = {
  name: "vlad",
  age: 23,
};

interface tsInterWithScope {
  email: string;
  info: {
    living: string;
    age: number;
    region: number;
  };
}

const tsInternWithScopeInfo: tsInterWithScope = {
  email: "Sp0ngbik@gmail.com",
  info: {
    living: "Brest",
    age: 23,
    region: 1,
  },
};

tsInternWithScopeInfo.info.living = "Haurilova";

const checkTs1 = {} as tsInterWithScope;
const checkTs2 = <tsInterWithScope>{};

interface checkTs3 extends tsInterWithScope {
  age: () => number;
}

const internAge: checkTs3 = {
  email: "hello",
  info: {
    living: "Minsk",
    age: 23,
    region: 7,
  },
  age(): number {
    return this.age;
  },
};

interface tsClocks {
  clock: Date;
  setClock(date: Date): void;
}

class oneClocks implements tsClocks {
  clock: Date = new Date();
  setClock(date: Date): void {
    this.clock = date;
  }
}

interface styleSheetTs {
  [key: string]: string;
}

const stylesForBlockes: styleSheetTs = {
  border: "1px solid black",
  fontSize: "16px",
  dysplay: "flex",
};

//enums
enum socialTsMedia {
  vk,
  inst,
  face,
}

const vk = socialTsMedia[0];
const indexVk = socialTsMedia.vk;

enum socialWithDiscr {
  vk = "vk",
  inst = "inst",
  face = "face",
}

const discrVk = socialWithDiscr.vk;

//functions

interface funcInter {
  x: number | undefined;
  y: number | undefined;
}

function tsNumberCheck(x: number, y: number) {
  if (!x && !y) {
    return "nothing on enter";
  }
  if (x && !y) {
    return `x equal to ${x}; y is undefined`;
  }
  if (!x && y) {
    return `x is undefined; y equal to ${y}`;
  }
  if (y && x) {
    return `x is equal to ${x}; y is equal to ${y}`;
  }
}

console.log(tsNumberCheck(undefined, undefined));
console.log(tsNumberCheck(2, undefined));
console.log(tsNumberCheck(undefined, 3));
console.log(tsNumberCheck(4, 5));

//classes

class tsCheckVersion {
  version: string;
  constructor(version: string) {
    this.version = version;
  }
  versionInfo(app: string) {
    return `${app} version is ${this.version}`;
  }
}

class park {
  oak: string;
  corns: string;
}

class sidePark implements park {
  oak: "2";
  corns: "88";
}

class newPark extends park {
  setNewCountOak(oak: string) {
    this.oak = oak;
  }
}

const parkInEngland = new newPark();
parkInEngland.setNewCountOak("8");

class checkTsComponents {
  render(): void {}
  info(): string {
    return;
  }
}

class checkForCheck implements checkTsComponents {
  render(): void {
    "nothing is happens";
  }
  info(): string {
    return "rly nothing";
  }
}

const anotherCheckyCheck = new checkForCheck();
anotherCheckyCheck.render();
console.log(anotherCheckyCheck.info());

// guards

function checkTsStrip(x: number | string) {
  if (typeof x === "number") {
    return x.toFixed(2);
  } else {
    return x.trim();
  }
}

console.log(checkTsStrip(2));
console.log(checkTsStrip("solo"));

class tsCheckResponse {
  header: "header response";
  result: "result response";
}
class tsErrorResponse {
  header: "header not response";
  result: "result not response";
}

function checkTsDataOnResponse(result: tsCheckResponse | tsErrorResponse) {
  if (result instanceof tsCheckResponse) {
    return result.header + result.result;
  } else {
    return result.header + result.result;
  }
}

type tsButtonDifferences = "warning" | "success" | "danger";

function checkButtonValue(type: tsButtonDifferences) {
  //...
}

checkButtonValue("success");
checkButtonValue("warning");
checkButtonValue("danger");

//generics

const tsStringArra: Array<string> = ["hello", "vlad"];
const tsNumberArra: Array<number> = [1, 2, 3];

function reverseTsArrays<T>(array: T[]): T[] {
  return array.reverse();
}

reverseTsArrays(tsStringArra);
reverseTsArrays(tsNumberArra);

//operators

interface tsJuniorUser {
  name: string;
  counter: number;
  place: string;
  country: number;
}

type tsAllJuns = keyof tsJuniorUser;

const tsJunCheck: tsAllJuns = "name";
const tsSecJunCheck: tsAllJuns = "place";

type juniorTsUsers = {
  id: number;
  counter: number;
  ages: number;
  email: string;
};

type userTsMeta1 = Exclude<keyof juniorTsUsers, "id" | "counter">;
type userTsMeta2 = Pick<juniorTsUsers, "email" | "ages">;

console.log(tsJunCheck);
console.log(tsSecJunCheck);

interface tsInterLol {
  fisrtArg: string | number;
  secArg: string | boolean;
  thirdArg: null | undefined;
}

const bArr: tsInterLol = {
  fisrtArg: 2,
  secArg: true,
  thirdArg: null,
};
