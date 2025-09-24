import {useData} from "./useData";

export interface Store {
  id: number;
  name: string;
  image_background: string;
}

export const useStores = () => useData<Store>("/stores");


