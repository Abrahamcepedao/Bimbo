import { ResponsiveBar } from '@nivo/bar'

interface Props {
    data: any[]
}

const MyResponsiveBar = ({ data }: Props) => (
    <ResponsiveBar
        data={data}
        keys={[ 'value' ]}
        indexBy="dimension"
        margin={{ top: 30, right: 0, bottom: 40, left: 0 }}
        padding={0.1}
        valueScale={{ type: 'linear' }}
        colors={({ id, data }) => `rgba(${data[`${id}Color`]}, 0.4)`}
        borderColor={{ from: 'color', modifiers: [ [ 'brighter', 2 ] ] }}
        borderWidth={2}
        axisRight={null}
        enableGridX={false}
        enableGridY={false}
        axisLeft={null}
        axisBottom={null}
        borderRadius={50}
        enableLabel={false}
        axisTop={null}
        isInteractive={false}
        layers={[ 'grid', 'bars', 'axes', 'markers', 'legends',
            (props) => (
                <g key="custom-labels">
                    {props.bars.map((bar) => (
                        <text key={bar.index} x={bar.x + bar.width / 2} y={bar.y - 12} textAnchor="middle" dominantBaseline="middle" fontSize={18} fontWeight={900} fill="#f5f5f5">{bar.data.value ? bar.data.value.toFixed(0) : bar.data.value}</text>
                    ))}
                </g>
            ),
        ]}
    />
)

export default MyResponsiveBar