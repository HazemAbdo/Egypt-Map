import { Fragment, useEffect, useRef, useState } from "react";
import { MapService } from "../services/map";
import { IGovernorateMarker, IRegionCoordinates } from "../types/map";
const { AdvancedMarkerElement } = (await google.maps.importLibrary(
  "marker"
)) as google.maps.MarkerLibrary;
const { Map } = (await google.maps.importLibrary(
  "maps"
)) as google.maps.MapsLibrary;


const MapComponent = () => {
  const mapRef = useRef(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  const addRegions = (
    regionsCoordinates: IRegionCoordinates[],
    map: google.maps.Map
  ) => {
    for (const region of regionsCoordinates) {
      const infowindow = new google.maps.InfoWindow({
        content: `<div id="content">
      <div id="siteNotice">
      </div>
      <h1 id="firstHeading" class="firstHeading">${region.region} Region</h1>
      </div>`,
        ariaLabel: region.region,
      });
      const regionPolygon = new google.maps.Polygon({
        paths: region.coordinates,
        strokeColor: region.color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: region.color,
        fillOpacity: 0.35,
        clickable: true,
      });
      regionPolygon.addListener("click", (event: google.maps.MapMouseEvent) => {
        infowindow.setPosition(event.latLng);
        infowindow.open({
          map,
        });
      });
      regionPolygon.setMap(map);
    }
  };

  const addGovernorates = (
    governoratesCenters: IGovernorateMarker[],
    map: google.maps.Map
  ) => {
    for (const governorate of governoratesCenters) {
      const infowindow = new google.maps.InfoWindow({
        content: governorate.infoWindowContent,
        ariaLabel: governorate.governorate,
      });
      const marker = new AdvancedMarkerElement({
        map: map,
        position: governorate.coordinate,
        title: governorate.governorate,
        gmpClickable: true,
      });
      marker.addEventListener("gmp-click", () => {
        infowindow.open({
          anchor: marker,
          map,
        });
      });
    }
  };

  useEffect(() => {
    const initMap = async () => {
      setDataLoaded(false);
      Promise.all([
        MapService.fetchMapCenter(),
        MapService.fetchGovernoratesMarkers(),
        MapService.fetchRegionsCoordinates(),
      ]).then((data) => {
        const [mapCenter, governoratesCenters, regionsCoordinates] = data;
        setDataLoaded(true);
        if (mapRef.current) {
          const map = new Map(mapRef.current, {
            zoom: 6,
            center: mapCenter,
            mapId: "POLITICAL_MAP_ID",
          });
          map.setCenter(mapCenter);
          addGovernorates(governoratesCenters, map);
          addRegions(regionsCoordinates, map);
        }
      });
    };

    initMap();
  }, []);

  return (
    <Fragment>
      {dataLoaded ? (
        <div id="map" ref={mapRef}></div>
      ) : (
        <svg className="spinner" role="alert" aria-live="assertive">
          <circle cx="30" cy="30" r="20" className="circle" />
        </svg>
      )}
    </Fragment>
  );
};

export default MapComponent;
