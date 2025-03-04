class Tarefa {
  constructor(id, descricao, vencimento, prioridade) {
    this.id = id;
    this.descricao = descricao;
    this.vencimento = new Date(vencimento);  // Converte para objeto Date
    this.prioridade = prioridade;
    this.concluida = false;
  }

  marcarConcluida() {
    this.concluida = true;
  }
}

const tarefas = [];

// Função para criar uma nova tarefa
function criarTarefa(descricao, vencimento, prioridade) {
  const id = tarefas.length + 1;
  const novaTarefa = new Tarefa(id, descricao, vencimento, prioridade);
  tarefas.push(novaTarefa);
  return novaTarefa;
}

// Função para marcar tarefa como concluída
function marcarTarefaComoConcluida(id) {
  const tarefa = tarefas.find(t => t.id === id);
  if (tarefa) {
    tarefa.marcarConcluida();
    return tarefa;
  } else {
    console.log("Tarefa não encontrada");
  }
}

// Função para filtrar tarefas por prioridade
function filtrarTarefasPorPrioridade(prioridade) {
  return tarefas.filter(t => t.prioridade === prioridade);
}

// Função para filtrar tarefas por vencimento
function filtrarTarefasPorVencimento(dataLimite) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const tarefasFiltradas = tarefas.filter(t => t.vencimento <= new Date(dataLimite));
      resolve(tarefasFiltradas);
    }, 1000); // Simula um atraso de 1 segundo
  });
}

// Função para listar todas as tarefas
function listarTarefas() {
  return tarefas;
}

// Testando a implementação
criarTarefa("Estudar JavaScript", "2025-03-05", 5);
criarTarefa("Comprar mantimentos", "2025-03-01", 3);
criarTarefa("Trabalhar no projeto", "2025-03-10", 4);

console.log("Todas as Tarefas:");
console.log(listarTarefas());

marcarTarefaComoConcluida(2);  // Marca a tarefa de ID 2 como concluída

console.log("\nTarefas com prioridade 5:");
console.log(filtrarTarefasPorPrioridade(5));

console.log("\nTarefas que vencem antes de 2025-03-10:");
filtrarTarefasPorVencimento("2025-03-10").then(tarefas => console.log(tarefas));
