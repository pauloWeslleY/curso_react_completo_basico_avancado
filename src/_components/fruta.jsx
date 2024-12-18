export function Fruta({ fruta }) {
  return (
    <div>
      <ul>
        <li>
          <strong>Fruta: </strong> {fruta.nome}
        </li>
        <li>
          <strong>Quantidade: </strong> {fruta.quantidade}
        </li>
      </ul>

      <button onClick={() => console.log("Remover fruta")}>Remover</button>
    </div>
  );
}
