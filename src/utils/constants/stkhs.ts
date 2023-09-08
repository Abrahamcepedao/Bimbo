import { IStkh } from '../interfaces/types';

const stkhs: IStkh[] = [
    { id: 'CB', name: 'Colaboradores', questions: [
        { id: 'CB_1', label: 'Sueldo', question: 'El sueldo que otorgo a los colaboradores de mi empresa es:', answers: [
            { id: '1', answer: 'El salario mínimo', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1, bienDentro: -1, bienFuera: -1 } },
            { id: '2', answer: 'Entre 1 y 2.5 veces el salario mínimo', values: { subsidiaridad: 1, solidaridad: 0, dignidad: 1, destino: 0 } },
            { id: '3', answer: 'Más de 2.5 veves el salario mínimo y hasta la media de la industria con evidencia empírica', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'El más competitivo de la industria con evidencia empírica', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 1 } },
            { id: '5', answer: 'El más competitivo del mercado con evidencia empírica', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 2, bienFuera: 2 } }]
        },
        { id: 'CB_2', label: 'Prestaciones', question: 'El paquete de prestaciones y beneficios que otorgo a los colaboradores de mi empresa es:', answers: [
            { id: '1', answer: 'Las prestaciones son menores a las de Ley debido a los esquemas de contratación', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1, bienDentro: -1, bienFuera: -1 } },
            { id: '2', answer: 'Las prestaciones son las establecidas por la Ley', values: { subsidiaridad: 1, solidaridad: 0, dignidad: 1, destino: 0 } },
            { id: '3', answer: 'Las prestaciones son superiores a las de la Ley e inferiores al estándar de la industria', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Las prestaciones son superiores a la Ley dentro del estándar de la industria, con algunos beneficios adicionales para los colaboradores', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 1 } },
            { id: '5', answer: 'Las prestaciones son superiores a la Ley y en general al mercado, con beneficios únicos y personalizados para los colaboradores', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 2, bienFuera: 2 } }]
        },
        { id: 'CB_3', label: 'Información', question: 'La comunicación a mis colaboradores es:', answers: [
            { id: '1', answer: 'Los asuntos importantes de la organización se quedan en la alta dirección, no se comunican a ningún miembro de la organización', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1, bienDentro: -1, bienFuera: -1 } },
            { id: '2', answer: 'Los temas importantes se comunican eventualmente con algunos miembros de la organización, a criterio discrecional de la alta dirección', values: { subsidiaridad: 1, solidaridad: 0, dignidad: 1, destino: 0 } },
            { id: '3', answer: 'Los temas importantes se comunican sólo a nivel directivo / gerencial bajo circunstancias específicas', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Los temas importantes se tocan periódicamente con todos los miembros de la organización', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 1 } },
            { id: '5', answer: 'Existe un plan anual de comunicación para eventos o situaciones importantes. Cuando sucede algo fuera del plan se comunica inmediatamente a toda la organización. Participamos en organizaciones para mejorar los contenidos y las formas de comunicar', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 2, bienFuera: 2 } }]
        }
    ]},
    { id: 'AC', name: 'Accionistas', questions: [
        { id: 'AC_1', label: 'Retorno al capital', question: 'El retorno al capital de mi empresa es:', answers: [
            { id: '1', answer: 'La rentabilidad de la empresa es competitiva y certeramente superior al tipo de interés de inversiones financieras sin riesgo', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1, bienDentro: 1, bienFuera: 1 } },
            { id: '2', answer: 'La empresa está en punto de equilibrio', values: { subsidiaridad: 0, solidaridad: 0, dignidad: 0, destino: 0, bienDentro: 0, bienFuera: 0 } },
            { id: '3', answer: 'El retorno es por debajo de una inversión sin riesgo', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1, bienDentro: -1, bienFuera: -1 }},
            { id: '4', answer: 'Se consigue un retorno competitivo', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1, bienDentro: 1, bienFuera: 1 } },
            { id: '5', answer: 'Se consigue un retorno sobresaliente', values: { subsidiaridad: 2, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 2, bienFuera: 2 } }]
        },
        { id: 'AC_2', label: 'Reinversión', question: 'Otorgamos a los accionistas un justo equilibrio entre el crecimiento de su dinero dentro de la empresa y la liquidez otrogada por los dividendos', answers: [
            { id: '1', answer: 'Consistentemente se da 100% de dividendo o de reinversión', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1, bienDentro: 1, bienFuera: 1 } },
            { id: '2', answer: 'Se reinvierte de más o se paga en exceso dividendos', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1, bienDentro: 1, bienFuera: 1 } },
            { id: '3', answer: 'La reinversión tiene tiene sus variaciones sin lograr equilibrio', values: { subsidiaridad: 0, solidaridad: 0, dignidad: 0, destino: 0, bienDentro: 0, bienFuera: 0 }},
            { id: '4', answer: 'Ocasionalmente se decreta un equilibrio', values: { subsidiaridad: 0, solidaridad: 0, dignidad: 0, destino: 0, bienDentro: 0, bienFuera: 0 } },
            { id: '5', answer: 'Consistentemente se tiene un óptimo equilibrio entre dividendos y reinversión', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1, bienDentro: 1, bienFuera: 1 } }]
        },
        { id: 'AC_3', label: 'Sostenibilidad', question: 'Contamos con una robusta estrategia de negocio y tenemos identificados y cubiertos todos los posibles riesgos a los que la empresa se puede someter', answers: [
            { id: '1', answer: 'La empresa está expuesta a un alto riesgo de fracasar por varios motivos', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1, bienDentro: -1, bienFuera: -1 } },
            { id: '2', answer: 'La empresa tiene algunos riesgos de fracaso no cubiertos', values: { subsidiaridad: 0, solidaridad: 0, dignidad: 0, destino: 0, bienDentro: 0, bienFuera: 0 } },
            { id: '3', answer: 'La empresa presenta riesgos de fracasos', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1, bienDentro: 1, bienFuera: 1 }},
            { id: '4', answer: 'Empresa fuerte con algunos riesgos moderados', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1, bienDentro: 1, bienFuera: 1 } },
            { id: '5', answer: 'Es una empresa robusta y gestionada institucionalmente', values: { subsidiaridad: 2, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 2, bienFuera: 2 } }]
        }
    ]},
    { id: 'PV', name: 'Proveedores', questions: [
        { id: 'PV_1', label: 'Comprar a precio competitivo', question: 'Negociando lo mejor para la empresa, compramos a precios competitivos, si bien justos', answers: [
            { id: '1', answer: 'Abusamos de nuestro poder de mercado y vendemos tan caro como el mercado aguante', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1, bienDentro: -1, bienFuera: -1 } },
            { id: '2', answer: 'Buscamos vender caro sin contar con referencias', values: { subsidiaridad: 1, solidaridad: 0, dignidad: 1, destino: 0 } },
            { id: '3', answer: 'Tendemos a escuchar al mercado para no ser los más caros', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Constantemente comparamos nuestros precios y nos aseguramos de ser competitivos', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 1 } }]
            //{ id: '5', answer: 'Resp5', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 2, bienFuera: 2 } }]
        },
        { id: 'PV_2', label: 'Condiciones de pago competitivas', question: 'Pagamos en condiciones y plazos exigentes pero razonables y de mercado', answers: [
            { id: '1', answer: 'Abusamos de nuestro poder de mercado e imponemos las condiciones de crédito que más nos favorecen', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1, bienDentro: -1, bienFuera: -1 } },
            { id: '2', answer: 'Buscamos condiciones de crédito favorables a nosotros sin contar con referencias', values: { subsidiaridad: 1, solidaridad: 0, dignidad: 1, destino: 0 } },
            { id: '3', answer: 'Tendemos a escuchar al mercado para no tener malas condiciones de crédito', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Constantemente comparamos nuestras condiciones de crédito y nos aseguramos de ser competitivos', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 1 } }]
            //{ id: '5', answer: 'Resp5', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 2, bienFuera: 2 } }]
        },
        { id: 'PV_3', label: 'Buen trato y comunicación abierta', question: 'Damos buen trato a todos los proveedores y propiciamos una comunicación abierta en todo momento', answers: [
            { id: '1', answer: 'El trato a nuestros clientes es opaco, poco agradable y la comunicación escasa', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1, bienDentro: -1, bienFuera: -1 } },
            { id: '2', answer: 'Hay honestidad con los clientes pero el trato y la comunicación no son buenos', values: { subsidiaridad: 1, solidaridad: 0, dignidad: 1, destino: 0 } },
            { id: '3', answer: 'Hay honestidad y buen trato pero la comunicación no es fluida', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Nuestras relaciones con clientes son honestas, cordiales y existe una comunicación amplia', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 1 } }]
            //{ id: '5', answer: 'Resp5', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 2, bienFuera: 2 } }]
        }
    ]}
]

/* 

*/

export default stkhs