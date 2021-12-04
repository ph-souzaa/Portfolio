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

}, 2000);


