export class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            throw new Error('Saldo insuficiente');
        }
        this._saldo -= valor;
    }

    depositar(valor){
        this._saldo += valor;
    }
}




