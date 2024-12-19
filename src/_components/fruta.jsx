import { useDispatch } from "react-redux";
import { actions } from "../store/actions/frutas.action";

export function Fruta({ fruta }) {
  const dispatch = useDispatch();

  function removerFruta() {
    dispatch(actions.remover(fruta));
  }

  return (
    <div className="fruta">
      <ul>
        <li>
          <strong>Fruta: </strong> {fruta.nome}
        </li>
        <li>
          <strong>Quantidade: </strong> {fruta.quantidade}
        </li>
      </ul>

      <button onClick={removerFruta}>&times;</button>
    </div>
  );
}
