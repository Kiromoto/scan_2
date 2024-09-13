import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import {DeviceProvider} from "./context/DeviceContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<DeviceProvider>
			<AuthProvider>
				<BrowserRouter>
					<App/>
				</BrowserRouter>
			</AuthProvider>
		</DeviceProvider>
	</React.StrictMode>
);
