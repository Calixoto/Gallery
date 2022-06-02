import { createContext, ReactNode, useState } from "react";

interface ContextProps {
  children?: ReactNode;
}

type DataProps = {
  valueId: string;
  setValueId: (value: string) => void;
};

export const getID = createContext({} as DataProps);

export function GetIDProvider({ children }: ContextProps) {
  const [valueId, setValueId] = useState("");
  const provider = {
    valueId,
    setValueId,
  };
  return <getID.Provider value={provider}>{children}</getID.Provider>;
}
