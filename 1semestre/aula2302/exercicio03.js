class Bicicleta {
    // Atributos
    modelo = 'Aro 24';
    marca = 'GTS';
    cor = 'Azul';
    velocidadeMaxima = 30.9;

    // Construtor para inicializar os atributos
    constructor(modelo, marca, cor, velocidadeMaxima) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.setVelocidadeMaxima(velocidadeMaxima); // Usa setter para validar
    }

    // Métodos
    mover() {
        console.log('A bicicleta está se movendo');
    }

    mostra() {
        console.log(`A bicicleta é: ${this.modelo} ${this.marca} ${this.cor} ${this.velocidadeMaxima} km/h`);
    }

    // Setter com validação
    setVelocidadeMaxima(velocidade) {
        if (velocidade > 35) {
            console.log('Erro: velocidade máxima não pode ser superior a 35 km/h.');
        } else {
            this.velocidadeMaxima = velocidade;
        }
    }

    // Getter
    getVelocidadeMaxima() {
        return this.velocidadeMaxima;
    }
}

// Criar um objeto
const minhaBike = new Bicicleta('Mountain Bike', 'Caloi', 'Vermelha', 30);
minhaBike.mostra(); // A bicicleta é: Mountain Bike Caloi Vermelha 30 km/h

minhaBike.setVelocidadeMaxima(40); // Erro: velocidade máxima não pode ser superior a 35 km/h.
console.log(minhaBike.getVelocidadeMaxima()); // Continua 30