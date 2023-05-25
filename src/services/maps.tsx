// handle api for map data
export async function fetchMapData() {
  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  return response.json();
}
