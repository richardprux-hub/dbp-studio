// MENU MOBILE
// ========================================
const menu = document.querySelector('.menu');
const botaoMenu = document.querySelector('.menu-mobile');

console.log('Botão:', botaoMenu);
console.log('Menu:', menu);

if (botaoMenu && menu) {

    botaoMenu.addEventListener('click', function () {

        console.log('BOTÃO CLICADO');

        menu.classList.toggle('ativo');

        console.log('Classes do menu:', menu.className);

    });

}


// ========================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ========================================

const elementos = document.querySelectorAll(
    '.card, .depoimento, .sobre-texto, .contato-texto'
);

function mostrarElementos() {
    elementos.forEach(function(elemento) {
        const posicao = elemento.getBoundingClientRect().top;
        const alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) {
            elemento.classList.add('mostrar');
        }
    });
}

window.addEventListener('scroll', mostrarElementos);

mostrarElementos();


// ========================================
// BOTÃO VOLTAR AO TOPO
// ========================================

const voltarTopo = document.querySelector('#voltarTopo');

if (voltarTopo) {

    window.addEventListener('scroll', function() {

        if (window.scrollY > 500) {
            voltarTopo.classList.add('mostrar');
        } else {
            voltarTopo.classList.remove('mostrar');
        }

    });

    voltarTopo.addEventListener('click', function() {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}


// ========================================
// FORMULÁRIO DE CONTATO
// ========================================

const formulario = document.querySelector('#formulario');

if (formulario) {

    formulario.addEventListener('submit', function(event) {

        event.preventDefault();

        const nome = document.querySelector('#nome');
        const telefone = document.querySelector('#telefone');
        const email = document.querySelector('#email');
        const mensagem = document.querySelector('#mensagem');

        // Remove erros anteriores

        nome.classList.remove('erro');
        telefone.classList.remove('erro');
        mensagem.classList.remove('erro');


        // Verifica o nome

        if (nome.value.trim() === '') {

            nome.classList.add('erro');
            nome.focus();

            return;
        }


        // Verifica o telefone

        const numeroLimpo = telefone.value.replace(/\D/g, '');

        if (numeroLimpo.length < 10 || numeroLimpo.length > 11) {

            telefone.classList.add('erro');
            telefone.focus();

            return;
        }


        // Verifica a mensagem

        if (mensagem.value.trim() === '') {

            mensagem.classList.add('erro');
            mensagem.focus();

            return;
        }


        // Monta a mensagem para o WhatsApp

        const texto = `
Olá! Gostaria de agendar uma avaliação.

Nome: ${nome.value}

Telefone: ${telefone.value}

E-mail: ${email.value || 'Não informado'}

Mensagem:
${mensagem.value}
`;


        // Número do WhatsApp

        const numeroWhatsApp = '5551995591810';


        // Cria o link do WhatsApp

        const url =
            `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;


        // Altera o botão

        const botao = formulario.querySelector('button');

        botao.textContent = 'Abrindo WhatsApp...';
        botao.disabled = true;


        // Abre o WhatsApp

        window.open(url, '_blank');


        // Limpa o formulário

        formulario.reset();


        // Volta o botão ao normal

        setTimeout(function() {

            botao.textContent = 'Solicitar avaliação';
            botao.disabled = false;

        }, 2000);

    });

}

