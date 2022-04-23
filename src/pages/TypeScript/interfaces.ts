interface rectCheck {
  readonly id: number;
  color?: string;
  size: {
    with: number;
    height: number;
  };
}

const checkRect: rectCheck = {
  id: 2,
  size: {
    with: 20,
    height: 40,
  },
};

const checkRect2: rectCheck = {
  id: 3,
  size: {
    with: 40,
    height: 50,
  },
  color: "red",
};

checkRect2.color = "black";

//methods of extends
const checkRect3 = {} as rectCheck;
//or
const checkRect4 = <rectCheck>{};
//or
interface RectTypeScriptArea extends rectCheck {
  checkTsArea: () => number;
}
const checkRect5: RectTypeScriptArea = {
  id: 2,
  size: {
    with: 40,
    height: 40,
  },
  color: "black",
  checkTsArea(): number {
    return this.size.width * this.size.height;
  },
};

//=================
interface tsClock {
  time: Date;
  setTime(date: Date): void;
}

class tsSetClock implements tsClock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date;
  }
}

//======
interface tsStyles {
  [key: string]: string;
}

const tsCssStyles: tsStyles = {
  border: "1px solid black",
  color: "#fff",
  fontSize: "16px",
};
