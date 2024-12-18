import { AdicionaFruta } from "./adicionar-fruta";
import { Fruta } from "./fruta";

export function ListaFrutas() {
  const frutas = [
    { id: 1, nome: "Abacaxi", quantidade: 5 },
    { id: 2, nome: "Maçã", quantidade: 12 },
  ];

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
