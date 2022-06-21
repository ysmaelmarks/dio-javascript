import {ContaBancaria} from "./script.js";

export class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "poupanca";
}
}