import IndexPage from "./Component/IndexPage";
import WeatherPage from "./Component/WeatherPage";

const Paths = {
  Index_Page: "/",
  Weather_Page: "/weather/:state",
};

export const Paths_Map = [
  {
    path: Paths.Index_Page,
    component: <IndexPage />,
  },
  {
    path: Paths.Weather_Page,
    component: <WeatherPage />,
  },
];
