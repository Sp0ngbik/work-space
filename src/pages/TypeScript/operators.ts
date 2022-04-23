interface TsChild {
  age: number;
  name: string;
}

type TsChildKeys = keyof TsChild; //name | age

// let tsKey: TsChildKeys = "name";
let tsKey: TsChildKeys = "name";
// or
// tsKey = "age";

console.log(tsKey);

type tsUser = {
  _id: number;
  name: string;
  email: string;
  createAt: Date;
};

type tsUserKeys1 = Exclude<keyof tsUser, "_id" | "name">; //exclude fields
type tsUserKeys2 = Pick<tsUser, "email" | "createAt">; //take fields
