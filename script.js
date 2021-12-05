

function trocaLinguagensBrasil() 
{
    var bandeira = document.getElementById("iconLinguagem");
    bandeira.setAttribute("src", "images/brasil.png");
    var troca = document.getElementById("troca")
    troca.setAttribute("onclick", "trocaLinguagensUsa()");

    document.getElementById("titulo-Portfolio").innerHTML = "Portfólio"

    document.getElementById("nav-home").innerHTML = "Home"
    document.getElementById("nav-about").innerHTML = "Sobre"
    document.getElementById("nav-skills").innerHTML = "Experiência"
    document.getElementById("nav-contact").innerHTML = "Contato"

    document.getElementById("text-1").innerHTML = "Desenvolvedor de software"

    document.getElementById("title-sobre").innerHTML = "Sobre"

    document.getElementById("sobre-text1").innerHTML = "Olá, tudo bem com você ?"
    document.getElementById("sobre-text2").innerHTML = "Tenho 21 anos, estou cursando Bacharelado em Sistema da Informação pela Universidade Unilasalle-RJ. Tenho conhecimento em linguagens de programação C#.NET, SQL Server, JQuery, Javascript e Angular.  ?"

    document.getElementById("title-experiencia").innerHTML = "Experiência Profissional"

    document.getElementById("text-experiencia1").innerHTML = "Trabalhei como jovem aprendiz na Deloitte durante 2 anos, auxiliava no suporte interno, na configuração e manutenção de computadores."
    document.getElementById("text-experiencia2").innerHTML = "Trabalho com Desenvolvedor de software, utilizando as linguagens de programação C#.NET, SQL Server, JQuery, Javascript e Angular."

    document.getElementById("title-contato1").innerHTML = "Contato"
    document.getElementById("title-contato2").innerHTML = "Entre em Contato"
    document.getElementById("text-contato2").innerHTML = "Aguardo por uma mensagem sua. Você pode entrar em contato através do formulário."
    document.getElementById("text-contato3").innerHTML = "Nome:"
    document.getElementById("text-contato4").innerHTML = "Mande uma Mensagem"

    document.getElementById("form-nome").setAttribute("placeholder", "Nome:")
    document.getElementById("form-email").setAttribute("placeholder", "Email:")
    document.getElementById("form-assunto").setAttribute("placeholder", "Assunto:")
    document.getElementById("form-mensagem").setAttribute("placeholder", "Mensagem:")
    document.getElementById("form-botao").innerHTML = "Enviar"

}

function trocaLinguagensUsa() 
{
    var bandeira = document.getElementById("iconLinguagem")
    bandeira.setAttribute("src", "images/united-states.png");
    var troca = document.getElementById("troca")
    troca.setAttribute("onclick", "trocaLinguagensBrasil()");

    document.getElementById("titulo-Portfolio").innerHTML = "Portfolio"

    document.getElementById("nav-home").innerHTML = "Home"
    document.getElementById("nav-about").innerHTML = "About"
    document.getElementById("nav-skills").innerHTML = "Experience"
    document.getElementById("nav-contact").innerHTML = "Contact"

    document.getElementById("text-1").innerHTML = "Software developer"

    document.getElementById("title-sobre").innerHTML = "About"
    
    document.getElementById("sobre-text1").innerHTML = "Hello Are you okay ?"
    document.getElementById("sobre-text2").innerHTML = "I'm 21 years old, I'm studying a Bachelor's Degree in Information Systems at Unilasalle-RJ University. I have knowledge in C#.NET, SQL Server, JQuery, Javascript and Angular programming languages."
    
    document.getElementById("title-experiencia").innerHTML = "Professional experience"

    document.getElementById("text-experiencia1").innerHTML = "I worked as a young apprentice at Deloitte for 2 years, helping with internal support, configuration and maintenance of computers."
    document.getElementById("text-experiencia2").innerHTML = "I work as a software developer, using the programming languages ​​C#.NET, SQL Server, JQuery, Javascript and Angular."

    document.getElementById("title-contato1").innerHTML = "Contact"
    document.getElementById("title-contato2").innerHTML = "Contact Me"
    document.getElementById("text-contato2").innerHTML = "I'm waiting for a message from you. You can contact us through the form."
    document.getElementById("text-contato3").innerHTML = "Name:"
    document.getElementById("text-contato4").innerHTML = "Send a message"


    document.getElementById("form-nome").setAttribute("placeholder", "Name:")
    document.getElementById("form-email").setAttribute("placeholder", "Email:")
    document.getElementById("form-assunto").setAttribute("placeholder", "Subject:")
    document.getElementById("form-mensagem").setAttribute("placeholder", "Message:")
    document.getElementById("form-botao").innerHTML = "To Send"

}

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// Troca de Linguagem da pagina



// Função para disparar um alerta para enviar mensagem. // Mexer futuramente

function Enviar() {

    var nome = document.getElementsByClassName("fullname");
    var email = document.getElementsByClassName("email-input");
    var assunto = document.getElementsByClassName("subject");
    var mensagem = document.getElementsByClassName("message");

    if (nome.value != null || email.value != null || assunto.value != null || mensagem.value != null) {
        alert('Sua mensagem foi enviada com sucesso, obrigado!');
    }
}
//Pré loading

var i = setInterval(function () {
    
    clearInterval(i);

    document.getElementById("content").style.display = "block";
    document.getElementById("loading").style.display = "none";

}, 2500);




