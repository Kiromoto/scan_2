import {useContext} from 'react';
import {DeviceContext} from "../context/DeviceContext";

export function useDeviceType() {
	return useContext(DeviceContext);
}