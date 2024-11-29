let musica;

function preload (){
  musica = loadSound(*fundo.mp3*)
}



cost avança = document.querySelectorAll(".proximo");
avança.ForEach(button => {
    button.addEventlistener('click', function(){
      const atual = document.querySelector('.activo');
      const proximoPasso = 'passa-'+ this.getAttri('data-proximo');
      atual.classList.remove('ativo');
    })
})