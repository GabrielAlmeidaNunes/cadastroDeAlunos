let btnAdicionaLista=document.querySelector('.btn-lista');

btnAdicionaLista.addEventListener('click', function(){

  let xhr=new XMLHttpRequest();
  
  xhr.open("GET","https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

  xhr.addEventListener('load', function(){

    let resposta=xhr.responseText;

    let alunos=JSON.parse(resposta);
    console.log(alunos)

    alunos.forEach(function(aluno){

      criaTrAjax(aluno);

    
    })
  })

  xhr.send();
  
})

function criaTrAjax(aluno){
  let alunoTr=document.createElement('tr');
  alunoTr.classList.add('linha');
  
    let tdNome=criaTd(aluno.nome,'info-nome');
    let nome=tdNome.textContent;
    tdNome.id='nome';
   
    let tdPeso=criaTd(aluno.peso,'info-turma');
    let tdAltura=criaTd(aluno.altura,'info-turno');
    let tdGordura=criaTd(aluno.gordura,'info-telefone');
    let tdImc=criaTd(aluno.imc,'imc');

    alunoTr.append(tdNome,tdPeso,tdAltura,tdGordura,tdImc);
    verificaECriaAluno(alunoTr,tdNome,tdPeso,tdAltura,tdGordura,tdImc);

    criaTdBotao(alunoTr,nome);

}




