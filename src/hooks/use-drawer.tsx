import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type DrawerContextType = {
  isOpen: boolean;
  toggleDrawer: () => void;
};

const defaultDrawerContextValue: DrawerContextType = {
  isOpen: false,
  toggleDrawer: () => {},
};

const DrawerContext = createContext(defaultDrawerContextValue);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
};

export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  const toggleDrawer = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const value = {
    isOpen,
    toggleDrawer,
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (drawerRef.current && drawerRef.current.contains(event.target as Node)) {
      closeDrawer();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <DrawerContext.Provider value={value}>
      <div ref={drawerRef}>{children}</div>
    </DrawerContext.Provider>
  );
};
