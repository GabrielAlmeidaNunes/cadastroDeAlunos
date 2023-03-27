
const btnCadastra=document.querySelector('#botaoCadastra');


btnCadastra.addEventListener('click', function(event){
  event.preventDefault();

  const form= document.querySelector('.formulario');
  let aluno=pegaInformacaoFormulario(form);

  let alunoTr=criaTr(aluno);


})

function pegaInformacaoFormulario(form){

  let aluno={
   nome:form.nome.value,
   idade:form.idade.value,
   turma:form.turma.value,
   turno:form.turno.value,
   telefone:form.tel.value,
   
  }

  return aluno;

}


function criaTr(aluno){

  let alunoTr=document.createElement('tr');
  alunoTr.classList.add('linha')

  let nomeTd=criaTd(aluno.nome,'info-nome');
  nomeTd.id='nome';
  let nome=nomeTd.textContent;


  let idadeTd=criaTd(aluno.idade,'info-idade');
  let turmaTd=criaTd(aluno.turma,'info-turma');
  let turnoTd=criaTd(aluno.turno,'info-turno');
  let telefoneTd=criaTd(aluno.telefone,'info-telefone');

  alunoTr.append(nomeTd,idadeTd,turmaTd,turnoTd,telefoneTd);

  verificaECriaAluno(alunoTr,nomeTd,idadeTd,turmaTd,turnoTd,telefoneTd);

  criaTdBotao(alunoTr,nome);

}

function criaTd(dado,classe){
  let td=document.createElement('td');
  td.textContent=dado;
  td.classList=classe;
  return td;
}

function criaTdBotao(alunoLinha,nome){

  let td=document.createElement('td');
  let botao=document.createElement('button');
  botao.type='buton';
  botao.textContent='🗑️';
  botao.classList.add('info-botao');

  td.append(botao);
  alunoLinha.append(td);

  removeAluno(botao,nome);
  
}

function verificaECriaAluno(alunoTr,nome,idade,turma,turno,telefone){
      
    const tabelaAlunos=document.querySelector('.tabela-alunos');
    const nomeAlunos=tabelaAlunos.querySelectorAll('#nome');
     
     let confirma=true
  
     for(let i=0; i<nomeAlunos.length;i++){
  
         if(nome.textContent===nomeAlunos[i].textContent){
  
           const cadastra=document.querySelector('#botaoCadastra');
           cadastra.classList.add('aluno-cadastrado');
           cadastra.textContent='Aluno ja Cadastrado';
  
           let input=document.querySelector("input[name='nome']");
           input.classList.add('aluno-cadastrado');
           confirma=false;
         }       
       }  

     
     if(confirma && nome.textContent!='' && idade.textContent!='' && turma.textContent!='' && turno.textContent!='' && telefone.textContent!=''){

       alunoTr.append(nome,idade,turma,turno,telefone);
  
       const tabelaAlunos=document.querySelector('.tabela-alunos'); 
     
       tabelaAlunos.appendChild(alunoTr);
      
       removeClassInput();
       
       let input=document.querySelector("input[name='nome']")
       input.classList.remove('aluno-cadastrado');
      
     }else{
       
       adicionaClassInput();
      
      }
}

function removeClassInput(){

  let inputs=document.querySelectorAll('.input');

  for(let i=0; i<inputs.length; i++){
    let input=inputs[i];
    input.classList.remove('input-vazio');
    
    input.value='';

  }

  const cadastra=document.querySelector('#botaoCadastra');
  cadastra.classList.remove('aluno-cadastrado');
  cadastra.textContent='Cadastrar';

}

function adicionaClassInput(){
  
  let inputs=document.querySelectorAll('.input');

    for(let i=0; i<inputs.length; i++){
      let input=inputs[i];
    
       if(input.value===''){
        input.placeholder="Preencha esse dado"
        input.classList.add('input-vazio');     
    }
  }

}
