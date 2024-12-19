import { useSelector } from "react-redux";
import { AdicionaFruta } from "./adicionar-fruta";
import { Fruta } from "./fruta";

export function ListaFrutas() {
  const frutas = useSelector((state) => state.frutas.frutas);

  return (
    <>
      <h1>Lista de Frutas</h1>

      <AdicionaFruta />

      {frutas.map((fruta) => {
        return <Fruta key={fruta.id} fruta={fruta} />;
      })}
    </>
  );
}
