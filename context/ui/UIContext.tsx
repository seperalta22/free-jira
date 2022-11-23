import { createContext } from 'react';

interface UIContextType {
	isSidebarOpen: boolean;
	setIsSidebarOpen: (value: boolean) => void;
}

export const UIContext = createContext<UIContextType>({
	isSidebarOpen: false,
	setIsSidebarOpen: () => {},
});
