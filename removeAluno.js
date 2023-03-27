function removeAluno(botao,nome){

  botao.addEventListener('click',function(){
    let paiDoBotao=botao.parentNode;
    let paiDoPaiDoBotao=paiDoBotao.parentNode;
   
  
    const confirma=confirm("Deseja realmente excluir esse/a aluno/a? \n" +
    nome);

      if(confirma){   
        paiDoPaiDoBotao.classList.add('fadeOut'); 

        setTimeout(function(){     
          paiDoPaiDoBotao.remove();
        },500)
        
      }else{
        alert("Exclusão cancelada");    
      }
      
      })
  
}

