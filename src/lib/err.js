export class Err {
    constructor(code, message) {
        const e = new Error(message);
        e.code = code;
        return e;
    }
}
