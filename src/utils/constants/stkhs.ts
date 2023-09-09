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
        },
        { id: 'CB_4', label: 'Reconocimiento', question: 'Reconozco el trabajo realizado por todos los colaboradores', answers: [
            { id: '1', answer: 'En la organización no se fomenta el reconocimiento al trabajo de los colaboradores', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1 } },
            { id: '2', answer: 'El reconocimiento a los colaboradores se brinda de manea informal por parte de los jefes inmediatos', values: { subsidiaridad: 1, solidaridad: 0, dignidad: 1, destino: 0 } },
            { id: '3', answer: 'Se procura reconocer a los colaboradores en eventos ocasionales', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Existe un programa de reconocimiento formal pero no es aplicado rigurosamente', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2 } },
            { id: '5', answer: 'Existe un programa de reconocimiento, el cual se aplica de manera formal a través de todos los líderes y se difunde entre todos los colaboradores', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2 } }]
        },
        { id: 'CB_5', label: 'Condiciones físicas de trabajo dignas', question: 'Las condiciones de trabajo de mi empresa son seguras, ergonómicas y promueven un buen ambiente para los colaboradores', answers: [
            { id: '1', answer: 'Las instalaciones o las condiciones de trabajo no constituyen un tema central dentro de las prioridades de la organización', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1 } },
            { id: '2', answer: 'Las condiciones de trabajo son las mínimas indispensables para lograr los resultados de la empresa', values: { subsidiaridad: 1, solidaridad: 0, dignidad: 1, destino: 0 } },
            { id: '3', answer: 'Las condiciones de trabajo de áreas críticas para los resultados de la empresa son ergonómicas y seguras para los colaboradores', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Las condiciones de trabajo eventualmente son revisadas y en algunas áreas se consideran aspectos ergonómicos, de limpieza o seguridad para los colaboradores ', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2 } },
            { id: '5', answer: 'Las condiciones de trabajo son una prioridad para toda la empresa por lo que se consideran aspectos ergonómicos, de limpieza y seguridad para que los colaboradores se desempeñen en un ambiente de trabajo adecuado', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2 } }]
        },
        { id: 'CB_6', label: 'Buen ambiente', question: 'El ambiente de trabajo que promuevo en mi empresa es psicológicamente sano para trabajar y propicio que las personas específicamente se lo pasen bien', answers: [
            { id: '1', answer: 'El ambiente de trabajo no constituye un factor importante dentro de la organización', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1 } },
            { id: '2', answer: 'El ambiente laboral se considera un tema de los líderes de área por lo que no existen planes o programas generales destinados a mejorarlo', values: { subsidiaridad: 1, solidaridad: 0, dignidad: 1, destino: 0 } },
            { id: '3', answer: 'En áreas críticas se llevan a cabo algunas acciones destinadas a promover un mejor clima laboral', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Eventualmente se realizan acciones encaminadas a promover un ambiente adecuado para trabajar en toda la empresa', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2 } },
            { id: '5', answer: 'El ambiente de trabajo es muy importante por lo que se promueve el respeto, la tolerancia y la armonía, para que éste sea psicológicamente sano para trabajar', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2 } }]
        },
        { id: 'CB_7', label: 'Equilibrio de vida', question: 'En mi empresa procuro la calidad de vida a través de programas que ayudan a un balance de vida y trabajo', answers: [
            { id: '1', answer: 'En mi empresa no contamos con programas encaminados a mejorar el balance vida-trabajo', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1 } },
            { id: '2', answer: 'Los líderes de las áreas son los responsables de mantener el equilibrio de vida-trabajo de sus equipos', values: { subsidiaridad: 1, solidaridad: 0, dignidad: 1, destino: 0 } },
            { id: '3', answer: 'Se cuenta con pocos programas destinados a mejorar la calidad de vida de los colaboradores y estos se aplican sólo cuando las condiciones de la organización lo permiten', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Se cuenta con algunos programas destinados a mejorar la calidad de vida de los colaboradores y estos casi siempre son aplicados', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2 } },
            { id: '5', answer: 'La calidad de vida de mis colaboradores es considerado como un tema prioritario, por lo que se cuenta con programas específicos que lo fomentan y estos son rigurosamente aplicados', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2 } }]
        },
        { id: 'CB_8', label: 'Formación y capacitación', question: 'En mi empresa se brinda la capacitación necesaria para el buen desempeño y desarrollo de los colaboradores', answers: [
            { id: '1', answer: 'No existen planes ni programas de capacitación al no ser un tema relevante en la estrategia de la organización', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1 } },
            { id: '2', answer: 'La capacitación se da únicamente a posiciones con personal a su cargo y ellos son responsables de su difusión', values: { subsidiaridad: 1, solidaridad: 0, dignidad: 1, destino: 0 } },
            { id: '3', answer: 'Se procura brindar capacitación ante nuevos requerimientos o cambios en los procesos que llevan a cabo los colaboradores', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'La capacitación se considera un tema importante pero no se cuenta con planes y programas formales ', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2 } },
            { id: '5', answer: 'En mi empresa la capacitación es formal y obligatoria para todos los niveles, con lo cual promuevo el desarrollo de todos los integrantes', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2 } }]
        },
        { id: 'CB_9', label: 'Estabilidad', question: 'En mi empresa hago lo necesario para que mis colaboradores  cuentan con un trabajo seguro y estable', answers: [
            { id: '1', answer: 'Consideramos que es un riesgo para el desempeño que los colaboradores sientan que su trabajo es seguro o estable', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1 } },
            { id: '2', answer: 'No consideramos importante que los colaboradores se sientan estables o que su trabajo esta asegurado', values: { subsidiaridad: 0, solidaridad: 0, dignidad: 0, destino: 0 } },
            { id: '3', answer: 'Considero que mis acciones hacen que mis colaboradores sientan que su trabajo es seguro y estable', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Considero que mis colaboradores se sienten seguros y estables porque procuro enviar mensajes que lo refuerzan', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 } },
            { id: '5', answer: 'Los colaboradores de mi organización se sienten laboralmente estables y seguros porque frecuentemente tengo un acercamiento con ellos para comunicárselos', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 } }]
        },
        { id: 'CB_10', label: 'Oportunidades de crecimiento', question: 'En mi empresa promuevo las oportunidades de desarrollo para todos los colaboradores', answers: [
            { id: '1', answer: 'En mi empresa no consideramos que el crecimiento del personal sea un tema importante', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1 } },
            { id: '2', answer: 'No se cuenta con programas y planes de desarrollo para el personal y el crecimiento se da de manera esporádica', values: { subsidiaridad: 0, solidaridad: 0, dignidad: 0, destino: 0 } },
            { id: '3', answer: 'Cuando consideramos que un colaborador es talentoso procuramos desarrollarlo', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'En mi empresa procuramos que todos los colaboradores encuentren un desarrollo profesional en su trabajo', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 } },
            { id: '5', answer: 'En mi empresa existen planes y programas de desarrollo encaminados a identificar el talento y promover el aprendizaje y desarrollo de los colaboradores', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 } }]
        },
        { id: 'CB_11', label: 'Compartir un propósito trascendente', question: 'Me aseguro que se difunda la filosofía y los valores que le dan un sustento a su razón de ser', answers: [
            { id: '1', answer: 'La filosofía y valores no consideramos que sean temas importantes para una organización', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1 } },
            { id: '2', answer: 'No contamos con una filosofía y valores definidos para una empresa', values: { subsidiaridad: 0, solidaridad: 0, dignidad: 0, destino: 0 } },
            { id: '3', answer: 'Promovemos algunos valores entre los colaboradores, los cuales consideramos importantes por los diferentes momentos que atraviesa la organización', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Ocasionalmente se difunde la filosofía y valores de la organización en eventos importantes en donde se reúne a los colaboradores', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 } },
            { id: '5', answer: 'En mi empresa se difunde su filosofía y valores como parte fundamental en la integración de nuevos colaboradores, se trabaja conforme a éstos y se refuerzan a través de planes de comunicación durante el año', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 } }]
        },
        { id: 'Múltiplo entre el que más gana y el que menos', label: 'Múltiplo entre el que más gana y el que menos', question: 'En mi empresa procuro que la brecha salarial sea menor entre las posiciones operativas y gerenciales', answers: [
            { id: '1', answer: 'La compensación no sigue una estructura o modelo por lo que no considera la brecha salarial como un tema importante al establecer los salarios', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1 } },
            { id: '2', answer: 'No se considera la brecha salarial como un tema importante pero se cuenta con un modelo interno para el establecimiento de los salarios', values: { subsidiaridad: 0, solidaridad: 0, dignidad: 0, destino: 0 } },
            { id: '3', answer: 'Existe un esquema de compensación que busca un equilibrio entre responsabilidades y sueldos, pero no se asegura la disminución de la brecha salarial', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Existe un esquema de compensación que busca un equilibrio entre responsabilidades y sueldos, además de asegurar la disminución de la brecha salarial', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 } },
            { id: '5', answer: 'Existe un esquema de compensación que busca un equilibrio entre responsabilidades y sueldos, además de asegurar la disminución de la brecha salarial y se revisa periódicamente', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 } }]
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
        },
        { id: 'AC_4', 'label': 'Información', question: 'Informamos suficiente y oportunamente a los accionistas de todos los hechos y cifras relevantes de la sociedad', answers: [
            { id: '1', answer: 'Se da información malintencionada', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1 } },
            { id: '2', answer: 'Se dainformación equivocada', values: { subsidiaridad: 0, solidaridad: 0, dignidad: 0, destino: 0 } },
            { id: '3', answer: 'No se da información', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Información correcta y oportuna', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 } },
            { id: '5', answer: 'Información y análisis sobresaliente', values: { subsidiaridad: 2, solidaridad: 2, dignidad: 2, destino: 2 } }]
        },
        { id: 'AC_5', label: 'Afinidad de los accionistas', question: 'En general, los principios y convicciones de los accionistas relevantes de la sociedad son los mismos que los de los que aquí colaboramos', answers: [
            { id: '1', answer: 'Los demás accionistas son personas sin principios', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1 } },
            { id: '2', answer: 'Discrepamos en algunas cosas con los demás accionistas', values: { subsidiaridad: 0, solidaridad: 0, dignidad: 0, destino: 0 } },
            { id: '3', answer: 'Los accionistas presentan rasgos de afinidad con los que colaboran aquí', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Compartimos la forma de ser de la mayor parte de los accionistas', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 } },
            { id: '5', answer: 'Todos los demás accionistas son personas íntegras y muy respetadas', values: { subsidiaridad: 2, solidaridad: 2, dignidad: 2, destino: 2 } }]
        },
        { id: 'AC_6', label: 'Orgullo', question: 'A través del cumplimiento de nuestro propósito y de nuestro modelo de gestión, damos motivos para que los accionistas se sientan orgullosos, más alla de la generación de valor económico', answers: [
            { id: '1', answer: 'La cultura de la empresa y sus actividades son contrarias a nuestros principios', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1 } },
            { id: '2', answer: 'Discrepamos en algunas cosas con la empresa', values: { subsidiaridad: 0, solidaridad: 0, dignidad: 0, destino: 0 } },
            { id: '3', answer: 'Resp3...', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'En general coincidimos con la cultura y forma de actuar de la empresa', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 } },
            { id: '5', answer: 'La cultura de la empresa, sus actividades y principios nos hacen estar orgullosos', values: { subsidiaridad: 2, solidaridad: 2, dignidad: 2, destino: 2 } }]
        }
    ]},
    { id: 'PV', name: 'Proveedores', questions: [
        { id: 'PV_1', label: 'Comprar a precio competitivo', question: 'Negociando lo mejor para la empresa, compramos a precios competitivos, si bien justos', answers: [
            { id: '1', answer: 'Abusamos de nuestro poder de mercado y vendemos tan caro como el mercado aguante', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1, bienDentro: -1, bienFuera: -1 } },
            { id: '2', answer: 'Buscamos vender caro sin contar con referencias', values: { subsidiaridad: 1, solidaridad: 0, dignidad: 1, destino: 0 } },
            { id: '3', answer: 'Tendemos a escuchar al mercado para no ser los más caros', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Constantemente comparamos nuestros precios y nos aseguramos de ser competitivos', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 1 } },
            { id: '5', answer: 'Resp5', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 2, bienFuera: 2 } }]
        },
        { id: 'PV_2', label: 'Condiciones de pago competitivas', question: 'Pagamos en condiciones y plazos exigentes pero razonables y de mercado', answers: [
            { id: '1', answer: 'Abusamos de nuestro poder de mercado e imponemos las condiciones de crédito que más nos favorecen', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1, bienDentro: -1, bienFuera: -1 } },
            { id: '2', answer: 'Buscamos condiciones de crédito favorables a nosotros sin contar con referencias', values: { subsidiaridad: 1, solidaridad: 0, dignidad: 1, destino: 0 } },
            { id: '3', answer: 'Tendemos a escuchar al mercado para no tener malas condiciones de crédito', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Constantemente comparamos nuestras condiciones de crédito y nos aseguramos de ser competitivos', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 1 } },
            { id: '5', answer: 'Resp5', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 2, bienFuera: 2 } }]
        },
        { id: 'PV_3', label: 'Buen trato y comunicación abierta', question: 'Damos buen trato a todos los proveedores y propiciamos una comunicación abierta en todo momento', answers: [
            { id: '1', answer: 'El trato a nuestros clientes es opaco, poco agradable y la comunicación escasa', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1, bienDentro: -1, bienFuera: -1 } },
            { id: '2', answer: 'Hay honestidad con los clientes pero el trato y la comunicación no son buenos', values: { subsidiaridad: 1, solidaridad: 0, dignidad: 1, destino: 0 } },
            { id: '3', answer: 'Hay honestidad y buen trato pero la comunicación no es fluida', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Nuestras relaciones con clientes son honestas, cordiales y existe una comunicación amplia', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 1 } },
            { id: '5', answer: 'Resp5', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2, bienDentro: 2, bienFuera: 2 } }]
        },
        { id: 'PV_4', label: 'Honestidad y respeto de los acuerdos y compromisos', question: 'Sin excepción, honramos nuestra palabra y respetamos todo lo que ofrecemos y acordamos con nuestros proveedores', answers: [
            { id: '1', answer: 'No respetamos los acuerdos en general ni somos cumplidos en los compromisos', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1 } },
            { id: '2', answer: 'Somos parcialmente respetuosos de los acuerdos y los compromisos', values: { subsidiaridad: 1, solidaridad: 0, dignidad: 1, destino: 0 } },
            { id: '3', answer: 'Cumplimos todos los acuerdos pero no siempre acertamos en los compromisos', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Respetamos cabalmente los acuerdos y cumplimos rigurosamente los compromisos contraidos', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2 } },
            { id: '5', answer: 'Resp5', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2 } }]
        },
        { id: 'PV_5', label: 'Responsabilidad con sus grupos de interés y afinidad con nuestros principios', question: 'En general, nos aseguramos que las personas que conforman nuestros proveedores sean afines a nosotros, relacionándose con sus grupos de interés de forma similar a la nuestra y compartiendo nuestros principios', answers: [
            { id: '1', answer: 'No nos importa el comportamiento de nuestros clientes con sus grupos de interés ni su afinidad con nosotros', values: { subsidiaridad: -1, solidaridad: -1, dignidad: -1, destino: -1 } },
            { id: '2', answer: 'Preferimos clientes que cuiden sus grupos de interés y que sean afines en principios pero no hacemos nada por ello', values: { subsidiaridad: 1, solidaridad: 0, dignidad: 1, destino: 0 } },
            { id: '3', answer: 'Conocemos el grado de cuidado de nuestros clientes por sus grupos de interes y afinidad con nuestros valores pero no hacemos nada con ello', values: { subsidiaridad: 1, solidaridad: 1, dignidad: 1, destino: 1 }},
            { id: '4', answer: 'Investigamos a nuestros clientes y en la medida de lo posible seleccionamos a aquellos quienes cuiden su trato con sus grupos de interés y tengamos afinidad en principios', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2 } },
            { id: '5', answer: 'Resp5', values: { subsidiaridad: 1, solidaridad: 2, dignidad: 2, destino: 2 } }]
        }
    ]}
]


/* 


*/


export default stkhs