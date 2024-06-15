import {
  ICoordinate,
  IGovernorateMarker,
  IRegionCoordinates,
} from "../types/map";

const API_URL = import.meta.env.VITE_API_URL;

export interface IMapService {
  fetchMapCenter: () => Promise<ICoordinate>;
  fetchGovernoratesMarkers: () => Promise<IGovernorateMarker[]>;
  fetchRegionsCoordinates: () => Promise<IRegionCoordinates[]>;
}

export const MapService: IMapService = {
  fetchMapCenter: async () => {
    const response = await fetch(`${API_URL}/map/center`);
    const data = await response.json();
    return data;
  },
  fetchGovernoratesMarkers: async () => {
    const response = await fetch(`${API_URL}/map/governorates`);
    const data = await response.json();
    return data;
  },
  fetchRegionsCoordinates: async () => {
    const response = await fetch(`${API_URL}/map/regions`);
    const data = await response.json();
    return data;
  },
};
