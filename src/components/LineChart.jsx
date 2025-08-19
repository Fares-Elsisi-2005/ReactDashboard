import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../data/mockData";
import { tokens } from '../theme';
import { useTheme } from '@mui/material';
 import useMediaQuery from '@mui/material/useMediaQuery';


const LineChart = ({isDashboard = false}) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
         <ResponsiveLine /* or Line for fixed dimensions */
            data={data}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke:colors.gray[100]
                        }
                    },
                    legend: {
                        text: {
                            fill: colors.gray[100],
                            fontSize: isMobile ? 10 : 14,
                        }
                    },
                    ticks: {
                        line: {
                            stroke: colors.gray[100],
                            strokeWidth:1
                        },
                        text: {
                            fill: colors.gray[100],
                            fontSize: isMobile ? 3.5: 14,
                          
                        }
                    }

                },
                legends: {
                    text: {
                        fill: colors.gray[100],
                        
                    }
                },
                tooltip: {
                    container: {
                        color: colors.primary[500],
                    }
                }
                
            }}

        colors={isDashboard ? {datum:"color"} : {scheme:"nivo"}}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        curve="catmullRom"
        axisBottom={{ legend: isDashboard? undefined:'transportation', legendOffset: 36 ,  }}
        axisLeft={{ legend:  isDashboard? undefined: 'count', legendOffset: -40 ,tickValues:5 }}
        enableGridX={false}
        enableGridY={false}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 50,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
    />
    )
}




export default LineChart;