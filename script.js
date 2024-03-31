function calcularMedia(nota1, nota2) {
  return (nota1 + nota2) / 2;
}


function verificarSucesso(media) {
  if (media >= 7) {
      return "Sucesso! O aluno foi aprovado.";
  } else {
      return "Infelizmente, o aluno não atendeu aos critérios de aprovação.";
  }
}

let estudantes = [
  { nome: "João", nota1: 8.5, nota2: 7.0 },
  { nome: "Maria", nota1: 6.0, nota2: 7.5 },
  { nome: "Pedro", nota1: 7.5, nota2: 5.5 },
  { nome: "Ana", nota1: 3, nota2: 6.5 },
  { nome: "Carlos", nota1: 9.0, nota2: 9.0 }
];


for (let i = 0; i < estudantes.length; i++) {
  let estudante = estudantes[i];
  let nome = estudante.nome;
  let nota1 = estudante.nota1;
  let nota2 = estudante.nota2;
  
  let media = calcularMedia(nota1, nota2);
  let mensagem = `${nome}: Média das notas: ${media.toFixed(2)}. ${verificarSucesso(media)}`;
  
  alert(mensagem);
}
