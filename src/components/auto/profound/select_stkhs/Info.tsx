const points: string[] = [
    'Ahora ya cuentas con un primer acercamiento sobre la relación que tiene la empresa con todos sus stakeholder.',
    'Con esto te habrás dado cuenta de aquellas áreas de oportunidad donde podrías iniciar un plan de trabajo para avanzar en un camino de la responsabilidad social empresaria centrada en la persona.',
    'El siguiente paso es produndizar en el análisis de aquellos stakeholders que, de acuerdo a la estrategia y a las prioridades de la empresa, resulten más relevantes y con los que quisieras iniciar a trabajar.',
    'Para ello a continuación selecciona al menos 3 stakeholder y comenzarás una nueva batería de preguntas relacionales con cada uno de los seleccionados, referentes prácticas que implican un mayor grado de madurez en la gestión de la RSE de la organización.',
]

const Info = () => {
    return (
        <div className="mb-8 text-justify">
            {points.map((point: string, i) => (
                <p className="text" key={i}>{point}</p>
            ))}
        </div>
    )
}

export default Info