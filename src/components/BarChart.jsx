import { useTheme } from "@emotion/react";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({isDashboard=false}) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    return (
        <ResponsiveBar
  data={data}
  keys={["hot dog", "burger", "kebab", "donut"]}
  indexBy="country"
  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
  padding={0.3}
  colors={{ scheme: "set1" }}
  axisBottom={{
    legend: isDashboard? undefined : "country",
    legendOffset: 32,
    legendPosition: "middle",
  }}
  axisLeft={{
    legend:isDashboard? undefined :  "food",
    legendOffset: -40,
    legendPosition: "middle",
  }}
  legends={[
    {
      dataFrom: "keys",
      anchor: "bottom-right",
      direction: "column",
      translateX: 120,
      itemsSpacing: 3,
      itemWidth: 100,
      itemHeight: 16,
    },
  ]}
  theme={{
    axis: {
      domain: { line: { stroke: colors.gray[100] } },
      legend: { text: { fill: colors.gray[100] } },
      ticks: {
        line: { stroke: colors.gray[100], strokeWidth: 1 },
        text: { fill: colors.gray[100] },
      },
    },
    legends: { text: { fill: colors.gray[100] } },
  }}
/>

    )
}

export default BarChart;