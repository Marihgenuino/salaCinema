class cinema {
    constructor(filme, numSala, idade) {
        this.filme = filme;
        this.numSala = numSala;
        this.idade = idade;
    }

    assistir() {
        let classificacao;

        switch (true) {
            case (this.idade <= 12):
                classificacao = "Está disponível para todos os públicos";
                break;

            case (this.idade > 14 && this.idade < 16):
                classificacao = "Contém violência";
                break;

            case (this.idade >= 16 && this.idade < 18):
                classificacao = "Contém cenas inapropriadas de conotação sexual";
                break;

            case (this.idade >= 18):
                classificacao = "Contém violência, drogas, sexo, tráfico e tudo que há de ruim";
                break;

            default:
                classificacao = "Ingressos indisponíveis no momento";
        }

        console.log(`O filme ${this.filme} da sala ${this.numSala}  ${classificacao}`);
    }
}

const filme1 = new cinema("Aventura Fantástica", 1, 10);
filme1.assistir();

const filme2 = new cinema("Loucuras em série", 2, 16);
filme2.assistir();

const filme3 = new cinema("Jogos Mortais", 3, 20);
filme3.assistir();
