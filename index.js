const btnCadastra=document.querySelector('#botaoCadastra');


btnCadastra.addEventListener('click', function(event){
  event.preventDefault();

  //Pegando o formulario
  const form= document.querySelector('.formulario');

  //Pegando os valores dos inputs dentro do formulario atraves do atributo name=""
  let nome=form.nome.value;
  let idade=form.idade.value;
  let turma=form.turma.value;
  let turno=form.turno.value;
  let telefone=form.tel.value;


  //criando linha pelo js
  let alunoTr=document.createElement('tr');

  //criando coluna pelo js
  let nomeTd=document.createElement('td');
  let idadeTd=document.createElement('td');
  let turmaTd=document.createElement('td');
  let turnoTd=document.createElement('td');
  let telefoneTd=document.createElement('td');

  //passando para a tabela o valor capturado no input
  nomeTd.textContent=nome;
  //colocando um Id para futuramente verificar qual o textCont do momento
  nomeTd.id='nome';
  
  ////passando para a tabela o valor capturado no input
  idadeTd.textContent=idade;
  turmaTd.textContent=turma;
  turnoTd.textContent=turno;
  telefoneTd.textContent=telefone;

  //pegando todos os elementos da .tabela-alunos
  const tabelaAlunos=document.querySelector('.tabela-alunos');

  //pegando dentro da tabelaAlunos todos os id com #nome, no caso esse id foi o id criado na linha 31
  const nomeAlunos=tabelaAlunos.querySelectorAll('#nome');

  // criando uma variavel para verificar se sera possivel cadastrar ou não
  let confirma=true


  //aki percorro todos os #nome para pegar os valores ja cadastrados, e verificar se o valor q esta sendo passado no memento, é igual a algum valor ja exixtsente
  for(let i=0; i<nomeAlunos.length;i++){

      if(nomeTd.textContent===nomeAlunos[i].textContent){

        //aki pego o botao cadastra para modifica-lo caso o valor ja exista
        const cadastra=document.querySelector('#botaoCadastra');
        cadastra.classList.add('aluno-cadastrado');
        cadastra.textContent='Aluno ja Cadastrado';

        //pegando o input do campo de nome para mostrar que o nome já existe
        let input=document.querySelector("input[name='nome']");
        input.classList.add('aluno-cadastrado');

        //caso o valor exista a variavel de verificar muda de valor
        confirma=false;
      }       
    } 
    
    
  //aki verifico se confirma é verdadeiro, e se todos os outros elementos possuem valor diferente de vazio
  if(confirma && nomeTd.textContent!='' && idadeTd.textContent!='' && turmaTd.textContent!='' && turnoTd.textContent!='' && telefoneTd.textContent!=''){

    //caso a condição seja verdadeira crio dentro da linha as colunas
    alunoTr.append(nomeTd,idadeTd,turmaTd,turnoTd,telefoneTd);

    //aki pego um elemanto ja existente no html 
    const tabelaAlunos=document.querySelector('.tabela-alunos'); 
    //aki passo a linha criada no js direto para o html atraves da tabelaAlunos
    tabelaAlunos.appendChild(alunoTr);

    // aki acesso a função para remover a class criada no js para o input
    removeClassInput();
    
    //removendo estilização do campo nome
    let input=document.querySelector("input[name='nome']")
    input.classList.remove('aluno-cadastrado');

    
  }else{
    //aki acesso a função para adionar a class criada no js para o input
    adicionaClassInput()
    
  }


})


function removeClassInput(){
  //crio essa função para limpar o estilo feito no inputs caso tivesse algum dado sem preencher

  let inputs=document.querySelectorAll('.input');

  for(let i=0; i<inputs.length; i++){
    let input=inputs[i];
    input.classList.remove('input-vazio');

    //limpando os campos dos inputs
    input.value='';

  }


  // aki removo também o estilo feito no botão caso o usuario seja trocado de um que já exista para um que ainda não exista
  const cadastra=document.querySelector('#botaoCadastra');
  cadastra.classList.remove('aluno-cadastrado');
  cadastra.textContent='Cadastrar';

}

function adicionaClassInput(){
  //crio essa função para adicionar  estilo nos inputs caso algum deles esteja vazio
  let inputs=document.querySelectorAll('.input');

    for(let i=0; i<inputs.length; i++){
      let input=inputs[i];
    
       if(input.value===''){
        input.placeholder="Preencha esse dado"
        input.classList.add('input-vazio');
       
        
    }
  }

}

