class Caneta{
    cor = 'Azul' ;
    marca = 'Faber Castel' ;
    ponta = 'Grossa';
    qtdTinta = 5;
    tampa = false;

    //método têm parenteses
    escrever(){
        return 'Começou a escrever';
    }
   sublinar(valor){
    this.qtdTinta -= valor;//subtrai o valor da qtde tinta
    return 'Quantidade restante de tinta ' + this.qtdTinta;
   }
   //alternar o método sublinhar para não permitir subtrair a quantidade de tinta se o valor for maior que a quantidade estabelecida
}
const canetaGrossa = new Caneta();
console.log(canetaGrossa.escrever());
console.log(canetaGrossa.sublinar(6));