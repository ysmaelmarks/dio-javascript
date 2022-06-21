import {ContaBancaria} from "./script.js";

export class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "universitaria";
    }

    sacar(valor){
        if(valor > this._saldo && valor > 500){
            throw new Error('Conta universitaria nao pode sacar mais de 500');
        }
        super.sacar(valor);
}
}