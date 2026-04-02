import React, { createContext, useContext, useState, useCallback, useRef } from "react";

interface PreloaderContextType {
  isActive: boolean;
  showPreloader: (onComplete?: () => void) => void;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined);

export const PreloaderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const onCompleteRef = useRef<(() => void) | undefined>(undefined);

  const showPreloader = useCallback((onComplete?: () => void) => {
    onCompleteRef.current = onComplete;
    setIsActive(true);
    
    // O preloader dura 3 segundos exatos conforme pedido
    setTimeout(() => {
      setIsActive(false);
      if (onCompleteRef.current) {
        onCompleteRef.current();
        onCompleteRef.current = undefined;
      }
    }, 3000);
  }, []);

  return (
    <PreloaderContext.Provider value={{ isActive, showPreloader }}>
      {children}
    </PreloaderContext.Provider>
  );
};

export const usePreloader = () => {
  const context = useContext(PreloaderContext);
  if (!context) {
    throw new Error("usePreloader must be used within a PreloaderProvider");
  }
  return context;
};
