import { GridLabelProps, ResponsiveRadar } from '@nivo/radar'

//interfaces
interface Props {
    data: any[]
}

const theme = {
  axis: {
    ticks: {
      text: {
        fill: '#f5f5f5', // Custom text color for axis ticks
      },
    },
  },
}
const CustomTooltip = ({ data }: {data: any}) => {
    return (
        <div style={{ background: 'white', padding: '10px', borderRadius: 10 }}>
            <h3><b style={{color: '#02192B', fontSize: 20}}>{data.index}</b></h3>
            <p style={{color: data.data[0].color, fontWeight: 'bold'}}>{data.data[0].id}: {data.data[0].value}</p>
            <p style={{color: data.data[1].color, fontWeight: 'bold'}}>{data.data[1].id}: {data.data[1].value.toFixed(2)}</p>
            <p style={{color: data.data[2].color, fontWeight: 'bold'}}>{data.data[2].id}: {data.data[2].value.toFixed(2)}</p>
        </div>
    );
};


const Radar = ({ data }: Props) => {

    const getPercentage = (id: string) => {
      const result = data.find((item) => item.dimension === id);

      if (!result) {
        return { percentage: 0, status: 401 }; // User not found (status 401)
      }

      if (result.promedio === 0) {
        return { percentage: 0, status: 400 }; // Promedio is 0 (status 400)
      }

      if (result.resultado > result.promedio) {
        // Calculate the percentage of increment
        const percentage = ((result.resultado - result.promedio) / result.promedio) * 100;
        return { percentage: Number(percentage.toFixed(0)), status: 200 };
      } else if (result.resultado < result.promedio) {
        // Calculate the percentage of decrease
        const percentage = ((result.promedio - result.resultado) / result.promedio) * 100;
        return { percentage: Number(percentage.toFixed(0)) * -1, status: 200 };
      }

      return { percentage: 0, status: 200 }; // Default case (no change)
    };

    const LabelComponent = ({ id, x, y, anchor }: GridLabelProps) => {
      const { percentage, status } = getPercentage(id);
      return (
        <g transform={`translate(${x}, ${y})`}>
          <g transform={`translate(${anchor === 'end' ? -100 : anchor === 'middle' ? -40 : 0}, -20)`}>
            <text style={{ fill: '#f5f5f5', fontSize: 14, fontWeight: 'bold' }}>
              {id}
            </text>
            <text
              y={24}
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                fill: status !== 200 ? '#f7f70b' : percentage > 0 ? '#0fec0f' : percentage < 0 ? '#e61111' : '#f7f70b',
              }}
            >
              {status !== 200 ? '-' : percentage > 0 ? '+' + percentage + '%' : '' + percentage + '%'}
            </text>
          </g>
        </g>
      );
    };

  return (
      <ResponsiveRadar
          theme={theme}
          data={data}
          keys={[ 'resultado', 'promedio', 'ideal' ]}
          indexBy="dimension"
          valueFormat=">-.2f"
          margin={{ top: 100, right: 80, bottom: 100, left: 80 }}
          borderColor={{ from: 'color' }}
          gridLabelOffset={66}
          dotSize={8}
          dotColor={{ theme: 'background' }}
          dotBorderWidth={2}
          colors={[ '#15ea4a', '#15eaea', '#153fea' ]}
          blendMode="normal"
          motionConfig='default'
          gridLevels={0}
          curve="cardinalClosed"
          sliceTooltip={(slice) => <CustomTooltip data={slice} />}
          gridLabel={LabelComponent}
          animate={false}
      />
    )
}
export default Radar