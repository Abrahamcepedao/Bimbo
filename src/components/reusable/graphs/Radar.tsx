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
            <p style={{color: data.data[1].color, fontWeight: 'bold'}}>{data.data[1].id}: {data.data[1].value}</p>
        </div>
    );
};


const Radar = ({ data }: Props) => {

    const getPercentage = (id: string) => {
        const result = data.find((item) => item.dimension === id)
        if (result) {
            if (result.resultado > result.promedio) {
              // Calculate the percentage of increment
              const percentage = ((result.resultado - result.promedio) / result.promedio) * 100;
              return Number(percentage.toFixed(0));
            } else if (result.resultado < result.promedio) {
              // Calculate the percentage of decrease
              const percentage = ((result.promedio - result.resultado) / result.promedio) * 100;
              return Number(percentage.toFixed(0)) * -1;
            } 
        }
        return 0
    }

    const LabelComponent = ({ id, x, y, anchor }: GridLabelProps) => {
      let percentage = getPercentage(id)
      return (
        <g transform={`translate(${x}, ${y})`}>
            <g transform={`translate(${anchor === 'end' ? -80 : anchor === 'middle' ? -40 : 0}, -20)`}>
                <text style={{fill: '#f5f5f5', fontSize: 14, fontWeight: 'bold'}}>{id.length > 15 ? id.substring(0,13) + '...' : id}</text>
                <text
                    y={24}
                    style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        fill: percentage > 0 ? '#4fd078' : percentage < 0 ? '#d3193e' : '#ffc107',
                    }}
                >
                    {percentage > 0 ? '+' : ''}{percentage}%
                </text>
            </g>
        </g>
      )
    }

  return (
      <ResponsiveRadar
          theme={theme}
          data={data}
          keys={[ 'resultado', 'promedio' ]}
          indexBy="dimension"
          valueFormat=">-.2f"
          margin={{ top: 100, right: 80, bottom: 100, left: 80 }}
          borderColor={{ from: 'color' }}
          gridLabelOffset={66}
          dotSize={8}
          dotColor={{ theme: 'background' }}
          dotBorderWidth={2}
          colors={[ '#4fd078', '#139E9F' ]}
          motionConfig="wobbly"
          gridLevels={0}
          curve="cardinalClosed"
          sliceTooltip={(slice) => <CustomTooltip data={slice} />}
          gridLabel={LabelComponent}
      />
    )
}
export default Radar