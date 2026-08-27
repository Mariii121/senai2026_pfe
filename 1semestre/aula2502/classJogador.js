class Jogador{//classe mãe
    #nome;
    #numero;
    constructor(nome, numero,){
        this.#nome = nome;
        this.#numero = numero;
        
    }
    treinar(){
        return '3 vezes na semana';
    }

}

//classe jogadorFutebol - filha
class jogadorFutebol extends Jogador{
    #peDominante;
    #totalGols;
    constructor(peDominante, totalGols, nome, numero ){
        this.#peDominante = peDominante;
        this.#totalGols = totalGols;
        super(nome,numero);
    }
    driblar(){
        return 'tomou uma caneta';
    }
    fazerGol(qtdGols){

    }
    getNumero(){
    return this.#numero;
    }
    getNome(){
        return this.#nome;
    }
}