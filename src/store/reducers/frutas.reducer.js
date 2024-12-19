import { FrutasActionsType } from "../../constants/frutas";

const INITIAL_STATE = {
  frutas: [
    { id: 1, nome: "Uva", quantidade: 20 },
    { id: 2, nome: "Maçã", quantidade: 5 },
  ],
};

function reducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FrutasActionsType.ADICIONAR:
      return {
        frutas: [...state.frutas, { ...action.payload }],
      };
    case FrutasActionsType.REMOVER:
      return {
        frutas: state.frutas.filter((fruta) => fruta.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export { reducers };
