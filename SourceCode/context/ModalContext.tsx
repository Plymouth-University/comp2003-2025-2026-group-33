// context/ModalContext.tsx
"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  ReactNode,
} from "react";

export type ModalName = "login" | "signup" | "signup2" | undefined;

interface ModalContextValue {
  modalName: ModalName;
  setModalName: (name: ModalName) => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalName, setModalNameState] = useState<ModalName>(undefined);

  const setModalName = useCallback((name: ModalName) => {
    setModalNameState(name);
  }, []);

  return (
    <ModalContext.Provider value={{ modalName, setModalName }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModalContext(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error("useModalContext must be used inside a ModalProvider");
  }
  return ctx;
}
