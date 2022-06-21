import {ContaUniversitaria} from "./contau.js";
import {ContaCorrente} from "./contac.js";
import {ContaPoupanca} from "./contap.js";

const minhaConta = new ContaUniversitaria('1', '12345');
const minhaConta2 = new ContaUniversitaria('2', '6789');

minhaConta.depositar(100);
minhaConta2.depositar(1000);

console.log(minhaConta.saldo);
console.log(minhaConta2.saldo);