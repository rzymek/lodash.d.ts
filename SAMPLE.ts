interface LoDashExplicitArrayWrapper<T>{
    head(): LoDashExplicitArrayWrapper<T>;
    value(): T;
}

interface LoDashImplicitArrayWrapper<T> {
    chain(): LoDashExplicitArrayWrapper<T>;
}

function _<T>(v: T[]): LoDashImplicitArrayWrapper<T>{
    return null;
}

interface TResult {
    a: number;
    b: string;
    c: boolean;
}

let array: TResult[];// = [1, 2, 3];

let x: TResult = _(array).chain().head().value()
