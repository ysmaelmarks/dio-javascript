import {ContaBancaria} from "./script.js";

export class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = "corrente";
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}