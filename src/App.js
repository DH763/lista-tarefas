import React, { Component } from "react";

class ListaTarefas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tituloTarefa: "", // Armazena o título da tarefa
      statusTarefa: "No Prazo", // Armazena o status selecionado
      listaTarefas: [], // Lista de tarefas cadastradas
    };
  }

  // Método para atualizar o título da tarefa
  handleTituloChange = (event) => {
    this.setState({ tituloTarefa: event.target.value });
  };

  // Método para atualizar o status da tarefa
  handleStatusChange = (event) => {
    this.setState({ statusTarefa: event.target.value });
  };

  // Método para adicionar uma nova tarefa à lista
  adicionarTarefa = () => {
    const { tituloTarefa, statusTarefa, listaTarefas } = this.state;
    if (tituloTarefa.trim() !== "") {
      const novaTarefa = { titulo: tituloTarefa, status: statusTarefa };
      this.setState({
        listaTarefas: [...listaTarefas, novaTarefa],
        tituloTarefa: "", // Limpa o campo de título
        statusTarefa: "No Prazo", // Reseta o status para o padrão
      });
    }
  };

  render() {
    const { tituloTarefa, statusTarefa, listaTarefas } = this.state;

    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "white", backgroundColor: "#333", padding: "20px", borderRadius: "10px" }}>
        <h2>Lista de Tarefas</h2>
        <div style={{ marginBottom: "20px" }}>
          <div>
            <label>Título da Tarefa: </label>
            <input
              type="text"
              value={tituloTarefa}
              onChange={this.handleTituloChange}
              style={{ marginRight: "10px", padding: "5px" }}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <label>Status da Tarefa: </label>
            <select
              value={statusTarefa}
              onChange={this.handleStatusChange}
              style={{ padding: "5px" }}
            >
              <option value="No Prazo">No Prazo</option>
              <option value="Atrasada">Atrasada</option>
              <option value="Próximo ao Prazo">Próximo ao Prazo</option>
            </select>
          </div>
          <button
            onClick={this.adicionarTarefa}
            style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
          >
            Adicionar Tarefa
          </button>
        </div>
        <h4>Tarefas Cadastradas</h4>
        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
          {listaTarefas.map((tarefa, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              • <strong>Título:</strong> {tarefa.titulo}, <strong>Status:</strong> {tarefa.status}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListaTarefas;