
const Legend = () => {
    return (
        <div className="max-w-md m-auto flex justify-center items-center py-4">
            <div className="legend_item mr-4">
               <div className="circle circle_1"></div>
               <p className="text">Resultado</p>
            </div>
            <div className="legend_item mr-4">
               <div className="circle circle_2"></div>
               <p className="text">Promedio</p>
            </div>
            <div className="legend_item">
               <div className="circle circle_3"></div>
               <p className="text">Ideal</p>
            </div>
        </div>
    )
}

export default Legend