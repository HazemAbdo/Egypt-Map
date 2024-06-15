export interface ICoordinate {
  lat: number;
  lng: number;
}

export interface IGovernorateMarker {
  governorate: string;
  coordinate: ICoordinate;
  infoWindowContent?: string;
}

export interface IRegionCoordinates {
  region: string;
  coordinates: ICoordinate[];
  color: string;
}
