// Map data
import { map } from './data/app';

// MapView
import MapView from 'esri/views/MapView';

/**
 * Initialize application
 */
new MapView({
  container: 'viewDiv',
  map,
});
