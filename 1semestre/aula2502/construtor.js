class Estudante{
        nome;
        #ra;
        #cpf;
        #saldo;
        
     construtor(nome, ra, cpf){
        this.nome = nome;
        this.#ra = ra;
        this.#cpf = cpf;
        this.#saldo = saldo
    }
}

const Mariana = new Estudante('Mariana de Sousa',3333332,34534534556);
console.log(Mariana);