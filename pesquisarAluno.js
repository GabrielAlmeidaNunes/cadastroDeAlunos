let inputPesquisa=document.querySelector('#pesquisa');

inputPesquisa.addEventListener('input', function(){
  

  let alunos=document.querySelectorAll('.linha');
 
  if(this.value.length>0){
    
     alunos.forEach(function(aluno){

       let tdAluno=aluno.querySelector('.info-nome');
       
       let nomeAluno=tdAluno.textContent;

       let expressao = new RegExp(inputPesquisa.value,"i");

       if(!expressao.test(nomeAluno)){
         aluno.classList.add('invisivel');
       }else{
         aluno.classList.remove('invisivel');
       }
     })

  }else{
    alunos.forEach(function(aluno){
      aluno.classList.remove('invisivel');
    })
  }


})










