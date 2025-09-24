import type { Store } from "../hooks/useStores";
import {useStores} from "../hooks/useStores";
import {CustomList } from "./reusableComponents/CustomList";

interface Props {
  onSelectStore: (store: Store | null) => void;
  selectedStore: Store | null;
}

export const StoreList = ({ onSelectStore, selectedStore }: Props) => {
  return (
    <CustomList
      onSelectItem={onSelectStore}
      selectedItem={selectedStore}
      title="Stores"
      useDataHook={useStores}
    />
  );
};

