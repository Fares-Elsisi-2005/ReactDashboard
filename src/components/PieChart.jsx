
import { ResponsivePie } from '@nivo/pie';
import { tokens } from '../theme';
import { useTheme } from '@mui/material';
import { mockPieData as data } from '../data/mockData';  

const PieChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <ResponsivePie /* or Pie for fixed dimensions */
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
                            fill: colors.gray[100]
                        }
                    },
                    ticks: {
                        line: {
                            stroke: colors.gray[100],
                            strokeWidth:1
                        },
                        text: {
                            fill:colors.gray[100]
                        }
                    }
                },
                legends: {
                    text: {
                        fill:colors.gray[100]
                    }
                }
            }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'category10' }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor= {colors.gray[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateY: 56,
                itemWidth: 60,
                itemHeight: 18,
                symbolShape: 'circle',
                symbolSpacing: 10
                 
                
            }
            ]}
             
    />
    )

}

export default PieChart;