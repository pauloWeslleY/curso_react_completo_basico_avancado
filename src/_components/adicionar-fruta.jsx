import { useState } from "react";

export function AdicionaFruta() {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);

  function adicionarFruta(event) {
    event.preventDefault();

    const fruta = {
      id: new Date(),
      nome,
      quantidade,
    };

    alert("event", event);
    console.log(fruta);
  }

  return (
    <form onSubmit={adicionarFruta}>
      <input
        type="text"
        required
        value={nome}
        placeholder="Fruta"
        onChange={(event) => setNome(event.target.value)}
      />
      <input
        type="number"
        required
        value={quantidade}
        placeholder="Quantidade"
        onChange={(event) => setQuantidade(event.target.value)}
      />

      <button type="submit" role="button">
        Adicionar
      </button>
    </form>
  );
}
