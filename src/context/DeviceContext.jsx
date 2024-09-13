import {createContext, useEffect, useState} from "react";

export const DeviceContext = createContext({
	isMobile: false,
	setIsMobile: null,
});

export const DeviceProvider = ({children}) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 768);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	
	
	return <DeviceContext.Provider value={
		{
			isMobile,
		}
	}>
		{children}
	</DeviceContext.Provider>
}