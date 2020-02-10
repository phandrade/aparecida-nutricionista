var tabela = document.querySelector("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event){
    var tr = event.target.parentNode;
    tr.classList.add("fadeOut");
    
    setTimeout(function () {
        event.target.parentNode.remove();
    }, 500);
});