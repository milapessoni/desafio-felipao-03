class heroi {
    constructor (nomeHeroi, idade, classe){
        this.nomeHeroi = nomeHeroi;
        this.idade = idade;
        this.classe= classe;
    } 
    
    atacar(){
        let ataque;

        switch(this.classe){
            case 'mago':
                ataque = "usou magia";
                break;
            case 'guerreiro':
                ataque = "usou espada";
                break;
            case 'monge':
                ataque = "usou artes marciais";
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            }

         
            console.log(`O ${this.classe} atacou com ${ataque}`);
        
    }
}

const heroiMago = new heroi('Alexstrasza', 10000000, 'maga');heroiMago.atacar();
const heroiGuerreiro = new heroi('Arhtas Menethil', 100000, 'guerreiro');
heroiGuerreiro.atacar();
const heroiMonge = new heroi('Shaohao', 40, 'monge');heroiMonge.atacar();
const heroiNinja = new heroi('Xalatath', 20, 'ninja');heroiNinja.atacar();





