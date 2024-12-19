import { FrutasActionsType } from "../../constants/frutas";

export const actions = {
  adicionar: (fruta) => ({
    type: FrutasActionsType.ADICIONAR,
    payload: fruta,
  }),
  remover: (fruta) => ({
    type: FrutasActionsType.REMOVER,
    payload: fruta,
  }),
};
