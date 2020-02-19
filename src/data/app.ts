import Basemap from 'esri/Basemap';
import GeoJSONLayer from 'esri/layers/GeoJSONLayer';
import TileLayer from 'esri/layers/TileLayer';
import ArcGISMap from 'esri/Map';

const basemap = new Basemap({
  baseLayers: [
    new TileLayer({
      url: 'https://ge.ch/sitgags2/rest/services/RASTER/ORTHOPHOTOS_2018/MapServer',
    }),
  ],
});

const geojsonUrl = 'https://ge.ch/sitgags1/rest/services/VECTOR/SITG_OPENDATA_02/MapServer/4702/query?where=1=1&f=geojson';

const geojsonLayer = new GeoJSONLayer({
  url: geojsonUrl,
});

export const map = new ArcGISMap({
  basemap: basemap,
  layers: [geojsonLayer],
});
