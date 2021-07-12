export interface IMyInterface {
    a: string;
    b: number;
    c: null;
    d: boolean;
    e: undefined;
    r?: any;
    t: (a: number) => string;
    k: (a: number) => void;
    w1: string[];
}

export interface IMyInterface2 {
    d?: IMyInterface;
}

export interface IMyInterface3 extends IMyInterface2 {
    c: number;
}
