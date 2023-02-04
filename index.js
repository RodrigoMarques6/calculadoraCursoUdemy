document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM está funcionando perfeitamente.')
})

function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        
        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            })
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
            // "slice (0, -1)" foi utilizado para apagar o último caractere.
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida')
                    return
                }
                this.display.value = conta;

            } catch (e) {
                alert('Conta inválida')
                return
            }
        },


        cliqueBotoes() {
            document.addEventListener('click', function (e) {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            }.bind(this));
            // Explicação de "bind(this) é a seguinte: O 'this' utilizado do 'btnParaDisplay' estava pegando o addEventListener e não a calculadora em si. Adicionamos o '.bind' para que ele pegue o this correto, isto é, da calculadora. Poderia ser utilizada uma arrow function também na parte do addEventListener, daí o 'this' nunca modificaria a que se refere."
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
// Método para iniciar a calculadora (método escrito na função "criaCalculadora")
// Usamos a seguinte regra: Tudo que for atributo/variável dentro da calculadora, vai ficar na parte de cima;
// O que for de método, ficará na parte de baixo da calculadora.


// Refazer a parte do clear, a partir do min 18