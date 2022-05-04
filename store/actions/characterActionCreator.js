import { characterLoad } from "./characterActionType";

export const charactersLoader = (payLoad) => ({
  type: characterLoad,
  payLoad,
});
