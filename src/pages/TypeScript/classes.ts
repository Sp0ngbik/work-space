class tsClass {
  itemClass: string;
  constructor(itemClass: string) {
    this.itemClass = itemClass;
  }

  info(name: string) {
    return `[${name}]: item class callesd ${this.itemClass}`;
  }
}

class anotherClassTs {
  readonly numbers: number = 2;
  constructor(readonly model: string) {}
}
//====

class tsWoods {
  public tree: string = "";
  public park: string = "England";
  private zone: string = "";
}

class engWoods extends tsWoods {
  public setTree(tree: string) {
    this.tree = tree;
  }
}

const writerWood = new engWoods();
writerWood.setTree("Oak");
console.log(writerWood.park);
console.log(writerWood.tree);

//=====
//You can make it with abstract classes
// abstract class TsComponents {
//   abstract render(): void;
//   abstract info(): string;
// }
class TsComponents {
  render(): void {}
  info(): string {
    return;
  }
}

class CheckComponent extends TsComponents {
  render(): void {
    console.log("component on render");
  }
  info(): string {
    return "this is info";
  }
}

const tsComp = new CheckComponent();
tsComp.render();
console.log(tsComp.info());
