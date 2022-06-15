import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

type Props = {
  children: ReactNode;
};

interface IDrawerContextData {
  isDrawerOpen: boolean;
  drawerOptions: IDrawerOptions[];
  toogleDrawerOpen: () => void;
  handleSetDrawerOptions: (newDrawerOptions: IDrawerOptions[]) => void;
}

interface IDrawerOptions {
  icon: string | ReactNode;
  path: string;
  label: string;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
  return useContext(DrawerContext);
};

export const DrawerProvider: React.FC<Props> = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);

  const toogleDrawerOpen = useCallback(() => {
    setIsDrawerOpen((prevState) => !prevState);
  }, []);

  const handleSetDrawerOptions = useCallback(
    (newDrawerOptions: IDrawerOptions[]) => {
      setDrawerOptions(newDrawerOptions);
    },
    []
  );

  return (
    <DrawerContext.Provider
      value={{
        isDrawerOpen,
        drawerOptions,
        toogleDrawerOpen,
        handleSetDrawerOptions,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
