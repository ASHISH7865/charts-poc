/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect, useState } from "react";
import { select, geoPath, geoMercator } from "d3";
import data from "../../custom.geo.json";

// Set user counts for India and USA
const userData = {
  "India": 100, // Set a higher user count for India
  "Austria": 80,    // Set a user count for USA
  "United States of America": 80,    // Set a user count for USA,
  "China": 50,
};

function GeoChartComponent() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  // Fixed width and height for the map
  const width = 1200; // Set your desired width
  const height = 800; // Set your desired height

  useEffect(() => {
    const svg = select(svgRef.current);

    const projection = geoMercator()
      .fitSize([width, height], selectedCountry || (data))
      .precision(100);

    const pathGenerator = geoPath().projection(projection);

    svg
      .selectAll(".country")
      .data(data.features)
      .join("path")
      .on("click", (_event : any, feature  :any) => {
        setSelectedCountry(selectedCountry === feature ? null : feature);
      })
      .attr("class", "country")
      .transition()
      .attr("d",( feature : any) => pathGenerator(feature) as string)
      .attr("fill", (feature: any) => {
        const countryName = feature.properties.name;
        if (userData[countryName as keyof typeof userData]) {
          return "#A85CF9"; 
        } else {
          return "#E2D8FF"; 
        }
      });

    svg
      .selectAll(".label")
      .data([selectedCountry], ( feature : any) => feature?.properties.name || "")
      .join("text")
      .attr("class", "label")
      .text(
        ( feature : any) =>
          feature &&
          feature.properties.name +
            ": " + userData[feature.properties.name as keyof typeof userData] + " users"
      )
      .attr("x", 10)
      .attr("y", 25);
  }, [selectedCountry]);

  return (
    <div style={{ marginBottom: "2rem" ,  gridColumn: "1/3"}}>
      <svg ref={svgRef} width={width} height={height}></svg>
    </div>
  );
}

export default GeoChartComponent;
