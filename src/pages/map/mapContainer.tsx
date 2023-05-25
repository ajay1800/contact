import { fetchMapData } from "../../services/maps";
import MapComponent from "./mapComponent";
import { useQuery } from "@tanstack/react-query";

const MapContainer = () => {
  // use react query
  const { data } = useQuery({
    queryKey: ["maps"],
    queryFn: fetchMapData,
  });

  return <MapComponent mapData={data} />;
};

export default MapContainer;
