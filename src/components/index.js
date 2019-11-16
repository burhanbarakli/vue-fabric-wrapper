import Vue from "vue";
import FabricCanvas from "./FabricCanvas.vue";
import FabricCircle from "./FabricCircle.vue";
import FabricEllipse from "./FabricEllipse.vue";
import FabricGrid from "./FabricGrid.vue";
import FabricGroup from "./FabricGroup.vue";
import FabricImageFromURL from "./FabricImageFromURL.vue";
import FabricLine from "./FabricLine.vue";
import FabricPath from "./FabricPath.vue";
import FabricPolygon from "./FabricPolygon.vue";
import FabricPolyline from "./FabricLine.vue";
import FabricRectangle from "./FabricRectangle.vue";
import FabricText from "./FabricText.vue";
import FabricTriangle from "./FabricTriangle.vue";

const VueFabricWrapper = {
  FabricCanvas,
  FabricCircle,
  FabricEllipse,
  FabricGrid,
  FabricGroup,
  FabricImageFromURL,
  FabricLine,
  FabricPath,
  FabricPolygon,
  FabricPolyline,
  FabricRectangle,
  FabricText,
  FabricTriangle
};

Object.keys(VueFabricWrapper).forEach(name => {
  Vue.component(name, VueFabricWrapper[name]);
});

export default VueFabricWrapper;
export {
  FabricCanvas,
  FabricCircle,
  FabricEllipse,
  FabricGrid,
  FabricGroup,
  FabricImageFromURL,
  FabricLine,
  FabricPath,
  FabricPolygon,
  FabricPolyline,
  FabricRectangle,
  FabricText,
  FabricTriangle
};
