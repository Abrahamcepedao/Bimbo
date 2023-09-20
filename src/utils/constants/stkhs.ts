import { IStkh } from '../interfaces/types';

const stkhs: IStkh[] = [
    { id: 'AI', name: 'Socios y Accionistas', questions: [
        { id: 'AI_1', dim: 'etica', question: '¿Los dueños o accionistas participan en la definición de los principios y valores de la empresa, y en la evaluación de cómo se viven?', answers: [ 
            {id: '5', value: 5, answer: 'Están involucrados en todo el proceso y dan seguimiento a la evaluación de cómo se viven en la empresa.' }, 
            {id: '4', value: 4, answer: 'Se involucran en su definición y los aprueban.' }, 
            {id: '3', value: 3, answer: 'Únicamente los aprueban.' }, 
            {id: '2', value: 2, answer: 'No participan en el proceso.' }, 
            {id: '1', value: 1, answer: 'La empresa no cuenta con principios y valores institucionales definidos' } 
        ]},
        { id: 'AI_2', dim: 'etica', question: '¿La Asamblea de accionistas ha entregado al consejo de administración o CEO el “Mandato de Accionistas” a mediano / largo plazo indicando expectativas y límites en los temas estratégicos clave?', answers: [ 
            {id: '5', value: 5, answer: 'Si se entrega, y hay un ejercicio de actualización anual y se evalúa.' }, 
            {id: '4', value: 4, answer: 'Si, pero no hay seguimiento consistente.' }, 
            {id: '3', value: 3, answer: 'Existe un “Mandato de Accionistas” de terra informal hacia la Dirección General.' }, 
            {id: '2', value: 2, answer: 'Existen Asamblea pero no hay nada como un Mandato de Accionistas.' }, 
            {id: '1', value: 1, answer: 'No tenemos formalmente Asamblea de accionistas, ni / o Consejo de Administración.' } 
        ]},
        { id: 'AI_3', dim: 'etica', question: '¿Existe y tiene vida un código de conducta/ética, acorde a los valores y principios de la empresa, que guíe y comprometa la actuación de los accionistas y regule la relación entre dueños y el manejo de la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Tenemos un código muy claro y completo y es ampliamente difundido.' }, 
            {id: '4', value: 4, answer: 'Si hay un código e integra temas respecto a la actuación de accionistas, pero no es conocido por los colaboradores.' }, 
            {id: '3', value: 3, answer: 'Existe un código pero no se incluye nada respecto a la actuación de los accionistas.' }, 
            {id: '2', value: 2, answer: 'Sí pero el código no está acorde a los valores y principios de la empresa. ' }, 
            {id: '1', value: 1, answer: 'La empresa no tiene código de conducta/ética.' } 
        ]},
        { id: 'AI_4', dim: 'etica', question: '¿Existe un mecanismo de solución de conflictos relativos a la vivencia de los valores y principios entre la dirección general y el accionista?', answers: [ 
            {id: '5', value: 5, answer: 'Hay un mecanismo claramente definido y se ejecuta cuando aplica.' }, 
            {id: '4', value: 4, answer: 'Existe el mecanismo pero en ocasiones no se respeta.' }, 
            {id: '3', value: 3, answer: 'No existe un mecanismo pero cuando hay conflictos se suben a los órganos de gobierno.' }, 
            {id: '2', value: 2, answer: 'No existe un mecanismo pero cuando hay conflictos se suben a los órganos de gobierno.' }, 
            {id: '1', value: 1, answer: 'Los conflictos al respecto son ignorados.' } 
        ]},
        /* { id: 'AI_5', dim: 'etica', question: '¿Tienen los accionistas acceso a la información del negocio de manera regular, oportuna y suficiente que asegure la confianza en la actuación integral de la dirección?', answers: [ 
            {id: '5', value: 5, answer: 'Están involucrados en todo el proceso y dan seguimiento a su ejecución.' }, 
            {id: '4', value: 4, answer: 'Se involucran en el proceso de planeación y la aprueban.' }, 
            {id: '3', value: 3, answer: 'Únicamente los aprueban.' }, 
            {id: '2', value: 2, answer: 'No participan en el proceso.' }, 
            {id: '1', value: 1, answer: 'La empresa no cuenta con una planeación formal.' } 
        ]}, */
        { id: 'AI_5', dim: 'etica', question: '¿El consejo de administración participa y aprueba  la planeación estratégica de la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Están involucrados en todo el proceso y dan seguimiento a su ejecución.' }, 
            {id: '4', value: 4, answer: 'Se involucran en el proceso de planeación y la aprueban.' }, 
            {id: '3', value: 3, answer: 'Únicamente los aprueban.' }, 
            {id: '2', value: 2, answer: 'No participan en el proceso.' }, 
            {id: '1', value: 1, answer: 'La empresa no cuenta con una planeación formal.' } 
        ]},
        { id: 'AI_6', dim: 'etica', question: '¿Se cuenta con un mecanismo periódico de revisión y solución de posibles conflictos de interés de accionistas?', answers: [ 
            {id: '5', value: 5, answer: 'Hay un mecanismo claramente definido y se ejecuta cuando aplica.' }, 
            {id: '4', value: 4, answer: 'Existe el mecanismo pero en ocasiones no se respeta.' }, 
            {id: '3', value: 3, answer: 'No existe un mecanismo pero cuando se dan estos conflictos se suben a los órganos de gobierno.' }, 
            {id: '2', value: 2, answer: 'En este tipo de conflictos, los accionistas tienen las de ganar.' }, 
            {id: '1', value: 1, answer: 'Los conflictos de interés son ignorados.' } 
        ]},
        /* { id: 'AI_8', dim: 'etica', question: '¿La congruencia e impacto con que se viven los principios y valores de la empresa son motivo de orgullo para los accionistas e inversionistas?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]}, */
        { id: 'AI_7', dim: 'etica', question: 'A través del cumplimiento de nuestro propósito y de nuestro modelo de gestión, damos motivos para que los accionistas se sientan orgullosos, más allá de la generación de valor económico', answers: [ 
            {id: '5', value: 5, answer: 'La cultura de la empresa, sus actividades y principios nos hacen estar orgullosos.' }, 
            {id: '4', value: 4, answer: 'En general coincidimos con la cultura y forma de actuar de la empresa.' }, 
            {id: '3', value: 3, answer: 'Hay discrepancia  en algunas cosas con la empresa.' }, 
            {id: '2', value: 2, answer: 'No comparten  la mayoría de los principios.' }, 
            {id: '1', value: 1, answer: 'La cultura de la empresa y sus actividades son contrarias a los principios de los accionistas.' } 
        ]},
        { id: 'AI_8', dim: 'calidad', question: '¿La Empresa cuenta con una estrategia de vinculación aentre los Accionistas e Inversionistas y los grupos relacionados de la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Si hay una estrategia integral.' }, 
            {id: '4', value: 4, answer: 'Existe una estrategia pero no con todos los stakeholders.' }, 
            {id: '3', value: 3, answer: 'Hay algunas iniciativas pero falta mayor seguimiento.' }, 
            {id: '2', value: 2, answer: 'Se han hecho algunos esfuerzos pero no se han logrado concretar.' }, 
            {id: '1', value: 1, answer: 'No existe dicha estrategia' } 
        ]},
        { id: 'AI_9', dim: 'calidad', question: '¿Se tiene establecido un programa de diálogo permanente con Accionistas e Inversionistas para involucrarlos y comprometerlos en el proceso de RSE?', answers: [ 
            {id: '5', value: 5, answer: 'Los accionistas están involucrados en todo lo relativo a RSE.' }, 
            {id: '4', value: 4, answer: 'Los accionistas se involucran intermitentemente, falta más diálogo.' }, 
            {id: '3', value: 3, answer: 'Existe un proceso con iniciativas en materia de RSE pero los accionistas no se involucran.' }, 
            {id: '2', value: 2, answer: 'Hay interés en la RSE pero no se cuenta con un proceso al respecto.' }, 
            {id: '1', value: 1, answer: 'No tenemos un proceso de RSE.' } 
        ]},
        { id: 'AI_10', dim: 'calidad', question: '¿Existe un programa de Evaluación del impacto en la calidad de vida de sus grupos relacionados y se informa a los accionistas e inversionistas?', answers: [ 
            {id: '5', value: 5, answer: 'Se cuenta con un programa formal y los accionistas están informados de sus resultados.' }, 
            {id: '4', value: 4, answer: 'Se ha establecido un programa aunque su implementación no es sistemática.' }, 
            {id: '3', value: 3, answer: 'Los accionistas no están informados de las acciones que se realizan al respecto.' }, 
            {id: '2', value: 2, answer: 'Existen algunas iniciativas informales y ocasionales al respecto.' }, 
            {id: '1', value: 1, answer: 'No se tiene nada parecido.' } 
        ]},
        { id: 'AI_11', dim: 'calidad', question: 'Contamos con una robusta estrategia de negocio y tenemos identificados y cubiertos todos los posibles riesgos a los que la sociedad se puede someter', answers: [ 
            {id: '5', value: 5, answer: 'Es una empresa robusta y gestionada institucionalmente.' }, 
            {id: '4', value: 4, answer: 'Empresa fuerte con algunos riesgos moderados.' }, 
            {id: '3', value: 3, answer: 'En la empresa se analizan los posibles riesgos y se toman medidas para estar cubiertos en algunos de ellos.' }, 
            {id: '2', value: 2, answer: 'La empresa tiene algunos riesgos de fracaso no cubiertos.' }, 
            {id: '1', value: 1, answer: 'La empresa está expuesta a un alto riesgo de fracasar por varios motivos.' } 
        ]},
        { id: 'AI_12', dim: 'riqueza', question: '¿Existen programas/eventos, en la empresa, que involucren la formación/concientización de los accionistas e inversionistas respecto de la responsabilidad de reducir la desigualdad?', answers: [ 
            {id: '5', value: 5, answer: 'La reducción de la desigualdad es prioritario para la empresa y hay un programa formal y en ejecución.' }, 
            {id: '4', value: 4, answer: 'Los accionistas están interesados en el tema y se trabajan iniciativas al respecto.' }, 
            {id: '3', value: 3, answer: 'Existen algunas iniciativas aisladas pero no han dado resultados.' }, 
            {id: '2', value: 2, answer: 'Se tiene conciencia del tema pero no hay ninguna iniciativa al respecto.' }, 
            {id: '1', value: 1, answer: 'El tema de la desigualdad no es relevante para la empresa.' } 
        ]},
        { id: 'AI_13', dim: 'riqueza', question: '¿Cuentan con programas de Inducción a los objetivos económicos, sociales, ambientales y de gobierno?', answers: [ 
            {id: '5', value: 5, answer: 'Si, se imparte la inducción al ingresar a la empresa y se revisa/actualiza y difunden modificaciones de forma periódica y a todo el personal.' }, 
            {id: '4', value: 4, answer: 'Se procura comunicar los objetivos de la empresa pero no a todos los niveles.' }, 
            {id: '3', value: 3, answer: 'Existe una inducción para nuevos colaboradores pero no se actualiza la información con el tiempo.' }, 
            {id: '2', value: 2, answer: 'Los objetivos se conocen de manera informal.' }, 
            {id: '1', value: 1, answer: 'No se comunican los objetivos de la empresa.' } 
        ]},
        { id: 'AI_14', dim: 'riqueza', question: '¿Existe una política de reparto de dividendos que  retribuya a los inversionistas según lo acordado parte del valor económico agregado?', answers: [ 
            {id: '5', value: 5, answer: 'Se tiene una política establecida, se respeta y se revisa periódicamente.' }, 
            {id: '4', value: 4, answer: 'Se cuenta con una política perro en ocasiones no se aplica.' }, 
            {id: '3', value: 3, answer: 'Los dividendos se reparten sin un criterio claro.' }, 
            {id: '2', value: 2, answer: 'No hay una política.' }, 
            {id: '1', value: 1, answer: 'No se reparten dividendos.' } 
        ]},
        { id: 'AI_15', dim: 'riqueza', question: '¿Se informa suficiente y oportunamente  a los inversionistas de la marcha y resultados de la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Se otorga información y análisis sobresaliente.' }, 
            {id: '4', value: 4, answer: 'Se brinda información correcta y oportuna.' }, 
            {id: '3', value: 3, answer: 'Se da información en ocasiones equivocada.' }, 
            {id: '2', value: 2, answer: 'No se da información.' }, 
            {id: '1', value: 1, answer: 'Se da información malintencionada.' } 
        ]},
        { id: 'AI_16', dim: 'riqueza', question: '¿La situación económica, los estados financieros de la organización son informados a los Accionistas e inversionistas de manera adecuada y periódica?', answers: [ 
            {id: '5', value: 5, answer: 'Se otorga información y análisis sobresaliente.' }, 
            {id: '4', value: 4, answer: 'Se brinda información correcta y oportuna.' }, 
            {id: '3', value: 3, answer: 'Se da información en ocasiones equivocada.' }, 
            {id: '2', value: 2, answer: 'No se da información.' }, 
            {id: '1', value: 1, answer: 'Se da información malintencionada.' } 
        ]},
        { id: 'AI_17', dim: 'riqueza', question: '¿Se asegura que no exista información privilegiada que beneficie a unos accionistas e inversionistas con menoscabo de los intereses de otros, o incluso de la propia empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Se asegura evitar estos casos, brindando a todos los accionistas la misma información.' }, 
            {id: '4', value: 4, answer: 'Se busca evitar con una política al respecto, pero que no siempre se respeta.' }, 
            {id: '3', value: 3, answer: 'Es raro, pero sí se llega a dar información privilegiada.' }, 
            {id: '2', value: 2, answer: 'Es común que sucedan casos de información privilegiada.' }, 
            {id: '1', value: 1, answer: 'No se brinda información a accionistas.' } 
        ]},
        { id: 'AI_18', dim: 'riqueza', question: '¿Se desarrollan Planes de inversión de innovación y/o de rentabilidad?', answers: [ 
            {id: '5', value: 5, answer: 'Los planes de innovación y rentabilidad son parte importante en la planeación y ejecución de la empresa.' }, 
            {id: '4', value: 4, answer: 'Ya desarrollamos estos planes pero su seguimiento se complica en ocasiones.' }, 
            {id: '3', value: 3, answer: 'Estamos comenzando este proceso.' }, 
            {id: '2', value: 2, answer: 'Ha habido algunas iniciativas pero no se han logrado concretar.' }, 
            {id: '1', value: 1, answer: 'No se tiene ningún plan al respecto.' } 
        ]},
        { id: 'AI_19', dim: 'riqueza', question: 'La rentabilidad de la empresa es competitiva y certeramente superior al tipo de interés de inversiones financieras sin riesgo', answers: [ 
            {id: '5', value: 5, answer: 'Se consigue un retorno sobresaliente.' }, 
            {id: '4', value: 4, answer: 'Se consigue un retorno competitivo.' }, 
            {id: '3', value: 3, answer: 'El retorno es por debajo de una inversión sin riesgo.' }, 
            {id: '2', value: 2, answer: 'La empresa está en punto de equilibrio.' }, 
            {id: '1', value: 1, answer: 'Se pierde dinero.' } 
        ]},
        { id: 'AI_20', dim: 'riqueza', question: 'Otorgamos a los accionistas un justo equilibrio entre el crecimiento de su dinero dentro de la empresa y la liquidez otorgada por los dividendos', answers: [ 
            {id: '5', value: 5, answer: 'Consistentemente se tiene un óptimo equilibrio entre dividendos y reinversión.' }, 
            {id: '4', value: 4, answer: 'Ocasionalmente se decreta un equilibrio.' }, 
            {id: '3', value: 3, answer: 'Se reinvierte de más o se paga en exceso dividendos.' }, 
            {id: '2', value: 2, answer: 'Consistentemente se da 100% de dividendo o de reinversión.' }, 
            {id: '1', value: 1, answer: 'No se dan dividendos.' } 
        ]},
    ]},
    { id: 'CB', name: 'Colaboradores', questions: [
        { id: 'CB_1', dim: 'etica', question: '¿La misión, visión, valores y el código de ética de la organización son difundidos a todo el personal a través de charlas, inducción de nuevas contrataciones, estrategias y planes de comunicación?', answers: [ 
            {id: '5', value: 5, answer: 'Existe un programa permanente de difusión  y retroalimentación.' }, 
            {id: '4', value: 4, answer: 'En algunas ocasiones se recuerdan / comunican a los colaboradores, pero no es sistemático.' }, 
            {id: '3', value: 3, answer: 'Solo se informan a los nuevos colaboradores.' }, 
            {id: '2', value: 2, answer: 'No se difunden, sólo los conoce la Dirección.' }, 
            {id: '1', value: 1, answer: 'No tenemos misión, visión, ni valores.' }
        ]},
        { id: 'CB_2', dim: 'etica', question: '¿Los directivos y colaboradores comparten y viven  los valores, el código de ética y conducta en sus actividades, sobre todo ante dilemas, situaciones conflictivas?', answers: [ 
            {id: '5', value: 5, answer: 'Se siente una comunión generalizada en el personal con los valores y su vivencia.' }, 
            {id: '4', value: 4, answer: 'En general la gente comparte los valores pero algunas veces no se aplican en situaciones del día a día.' }, 
            {id: '3', value: 3, answer: 'En general la gente comparte los valores pero algunas veces no se aplican en situaciones del día a día.' }, 
            {id: '2', value: 2, answer: 'Muchas personas parecen no compartir los valores y su conducta en ocasiones es contraria.' }, 
            {id: '1', value: 1, answer: 'No están claros ni difundidos cuales son los valores de la empresa.' } 
        ]},
        { id: 'CB_3', dim: 'etica', question: '¿La empresa cuenta con una política que vela por la promoción el respeto de los derechos humanos universales en la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Si hay una política y se aplica cotidianamente.' }, 
            {id: '4', value: 4, answer: 'Existe pero no se aplica.' }, 
            {id: '3', value: 3, answer: 'Hay algunas iniciativas pero no se difunden.' }, 
            {id: '2', value: 2, answer: 'No, aunque se han hecho algunas actividades de forma aislada.' }, 
            {id: '1', value: 1, answer: 'No, no es un tema de relevancia para la empresa.' } 
        ]},
        { id: 'CB_4', dim: 'etica', question: '¿La dirección aplica mecanismos de información, planeación, avance, resultados y retroalimentación, hacia y desde los colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Si, los mecanismos funcionan muy bien y el personal se es y se siente involucrado, generando mayor compromiso.' }, 
            {id: '4', value: 4, answer: 'Hay algunas iniciativas pero falta hacerlas sistemáticas.' }, 
            {id: '3', value: 3, answer: 'Los colaboradores son considerados, pero sus aportaciones realmente no tienen trascendencia.' }, 
            {id: '2', value: 2, answer: 'Sólo los directivos participan en este tipo de mecanismos.' }, 
            {id: '1', value: 1, answer: 'No, los colaboradores no son tomados en cuenta.' } 
        ]},
        { id: 'CB_5', dim: 'etica', question: '¿La organización cuenta con mecanismos concretos para medir la congruencia entre el decir y hacer del grupo ejecutivo?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_6', dim: 'etica', question: '¿La empresa respeta la libertad de credo de sus colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Si, no se discrimina a nadie por su religión e incluso se promueve que los colaboradores vivan su fe.' }, 
            {id: '4', value: 4, answer: 'Si, aunque en la práctica se evitan alusiones a temas religiosos.' }, 
            {id: '3', value: 3, answer: 'Los temas religiosos no son relevantes en la empresa.' }, 
            {id: '2', value: 2, answer: 'No, los colaboradores que son minoría en cuanto a su religión, sufren discrimanación.' }, 
            {id: '1', value: 1, answer: 'No, se prohíbe cualquier referencia confesional en la empresa.' } 
        ]},
        { id: 'CB_7', dim: 'etica', question: '¿La organización forma a sus colaboradores en los valores de la empresa para ayudar a vivirlos en el trabajo?', answers: [ 
            {id: '5', value: 5, answer: 'Es una práctica constante la formación en valores a todos los niveles de la organización, incluyendo acompañamiento para ponerlos en práctica.' }, 
            {id: '4', value: 4, answer: 'Es una preocupación real en la empresa y se procura la formación al respecto, pero falta seguimiento.' }, 
            {id: '3', value: 3, answer: 'Hay cursos pero en la práctica no se logra aterrizar los valores.' }, 
            {id: '2', value: 2, answer: 'Ha habido algún curso al respeto pero nada más.' }, 
            {id: '1', value: 1, answer: 'No hay formación en materia de valores.' } 
        ]},
        { id: 'CB_8', dim: 'etica', question: 'La empresa motiva a través de la formación y la coherencia entre los valores y principios éticos de la misma y promueve la actitud positiva y proactiva individual de todos sus colaboradores.', answers: [ 
            {id: '5', value: 5, answer: 'Se tiene un esquema bien estructurado, que se mejora año con año.' }, 
            {id: '4', value: 4, answer: 'Si lo promueve pero no de forma sistemática, no hay un esquema  formal.' }, 
            {id: '3', value: 3, answer: 'En ocasiones nada más, las iniciativas al respecto no son habituales.' }, 
            {id: '2', value: 2, answer: 'No lo hace, no hay formación al respecto.' }, 
            {id: '1', value: 1, answer: 'No hay preocupación por la actitud de los colaboradores y por la coherencia de su actuar.' } 
        ]},
        { id: 'CB_9', dim: 'etica', question: '¿El principio de respeto a la "dignidad de la persona" es comprendido y ampliamente promovido y vivido en la organización?', answers: [ 
            {id: '5', value: 5, answer: 'Es un principio clave para la empresa por los que se difunde y promueve de forma cotidiana.' }, 
            {id: '4', value: 4, answer: 'Existen acciones para su promoción y vivencia pero son aisladas.' }, 
            {id: '3', value: 3, answer: 'Se comprende la importancia del teorema pero faltan acciones de promoción.' }, 
            {id: '2', value: 2, answer: 'Es un tema que no se comprende del todo y no se hace algo al respecto.' }, 
            {id: '1', value: 1, answer: 'No es un principio que la empresa considere relevante.' } 
        ]},
        { id: 'CB_10', dim: 'etica', question: '¿Los colaboradores participan en la planeación estratégica de la empresa, incluyendo los aspectos relacionados con su dimensión trascendente?', answers: [ 
            {id: '5', value: 5, answer: 'Todos los colaboradores tienen participación en el proceso de planeación, incluida la dimensión trascendente, a través de esquemas definidos de participación.' }, 
            {id: '4', value: 4, answer: 'Sí, todos son incluidos  en equipos de trabajo en el proceso de planeación, aunque no se consideran aspectos de la dimensión trascendente.' }, 
            {id: '3', value: 3, answer: 'Todas las áreas de la empresa participan en la planeación.' }, 
            {id: '2', value: 2, answer: 'Algunos colaboradores son convocados a la planeación pero su voz no tiene mayor peso.' }, 
            {id: '1', value: 1, answer: 'No se considera a los colaboradores en este proceso, sólo participa la alta dirección.' } 
        ]},
        { id: 'CB_11', dim: 'etica', question: '¿Se brindan estímulos para vivir los valores institucionales en la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Si, se brinda la oportunidad a todo el personal mediante un programa de valores.' }, 
            {id: '4', value: 4, answer: 'Si, aunque sólo a niveles gerenciales.' }, 
            {id: '3', value: 3, answer: 'Los valores son importantes pero no tenemos presupuesto para estímulos.' }, 
            {id: '2', value: 2, answer: 'No, nunca se ha planteado una iniciativa así.' }, 
            {id: '1', value: 1, answer: 'No tenemos valores institucionales.' } 
        ]},
        { id: 'CB_12', dim: 'etica', question: '¿Se realiza un censo sobre la calidad de vida para los colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, desde hace tiempo se realiza, es importante para la empresa saber y procurar que los colaboradores mejoran su calidad de vida.' }, 
            {id: '4', value: 4, answer: 'Estamos iniciando con el proyecto, es un tema relevante.' }, 
            {id: '3', value: 3, answer: 'No, pero nos interesa saber que los colaboradores mejoran su calidad de vida.' }, 
            {id: '2', value: 2, answer: 'No se realiza ningún censo.' }, 
            {id: '1', value: 1, answer: 'El tema calidad de vida no es un tema de trabajo.' } 
        ]},
        { id: 'CB_13', dim: 'etica', question: '¿Sientes que la empresa le da importancia a la vida familiar y te ayuda a ser un mejor padre o madre en tu casa?', answers: [ 
            {id: '5', value: 5, answer: 'Es un aspecto muy importante para la empresa y promovemos cada año acciones que favorecen la vida familiar de todos los colaboradores.' }, 
            {id: '4', value: 4, answer: 'Valoramos la importancia de  la vida familiar de los colaboradores, es algo que se transmite en el trabajo.' }, 
            {id: '3', value: 3, answer: 'Han habido iniciativas aisladas pero no hay seguimiento.' }, 
            {id: '2', value: 2, answer: 'Es importante pero no tenemos acciones que promuevan este aspecto.' }, 
            {id: '1', value: 1, answer: 'No es una prioridad en la empresa.' } 
        ]},
        { id: 'CB_14', dim: 'etica', question: 'La comunicación a mis colaboradores:', answers: [ 
            {id: '5', value: 5, answer: 'Existe un plan anual de comunicación para eventos o situaciones importantes. Cuando sucede algo fuera del plan se comunica inmediatamente a toda la organización. Participamos en organizaciones para mejorar los contenidos y las formas de comunicar.' }, 
            {id: '4', value: 4, answer: 'Los temas importantes se tocan periódicamente con todos los miembros de la organización.' }, 
            {id: '3', value: 3, answer: 'Los temas importantes se comunican sólo a nivel directivo / gerencial bajo circunstancias específicas.' }, 
            {id: '2', value: 2, answer: 'Los temas importantes se comunican eventualmente con algunos miembros de la organización, a criterio discrecional de la alta dirección.' }, 
            {id: '1', value: 1, answer: 'Los asuntos importantes de la organización se quedan en la alta dirección, no se comunican a ningún miembro de la organización.' } 
        ]},
        { id: 'CB_15', dim: 'etica', question: 'En mi empresa se brinda la capacitación necesaria para el buen desempeño y desarrollo de los colaboradores', answers: [ 
            {id: '5', value: 5, answer: 'Sí, la capacitación es una parte integral de la cultura de la empresa, y se ofrece a todo el personal como parte de su desarrollo profesional.' }, 
            {id: '4', value: 4, answer: 'Sí, la empresa invierte en capacitación pero el presupuesto es limitado.' }, 
            {id: '3', value: 3, answer: 'Si hay capacitación en materia de la competencia técnica del colaborador pero no en materia de su desarrollo personal.' }, 
            {id: '2', value: 2, answer: 'La empresa brinda capacitación ocasionalmente, pero podría mejorar en términos de cobertura y enfoque.' }, 
            {id: '1', value: 1, answer: 'No, la empresa no ofrece capacitación para los colaboradores.' } 
        ]},
        { id: 'CB_16', dim: 'etica', question: 'Me aseguro que se difunda la filosofía y los valores que le dan un sustento a su razón de ser de la empresa.', answers: [ 
            {id: '5', value: 5, answer: 'En mi empresa se difunde su filosofía y valores como parte fundamental en la integración de nuevos colaboradores, se trabaja conforme a éstos y se refuerzan a través de planes de comunicación durante el año.' }, 
            {id: '4', value: 4, answer: 'Ocasionalmente se difunde la filosofía y valores de la organización en eventos importantes en donde se reúne a los colaboradores.' }, 
            {id: '3', value: 3, answer: 'Promovemos algunos valores entre los colaboradores, los cuales consideramos importantes por los diferentes momentos que atraviesa la organización.' }, 
            {id: '2', value: 2, answer: 'No contamos con una filosofía y valores definidos para una empresa.' }, 
            {id: '1', value: 1, answer: 'La filosofía y valores no consideramos que sean temas importantes para una organización.' } 
        ]},
        { id: 'CB_17', dim: 'calidad', question: '¿Existen programas/eventos, que permitan a su organización estar al tanto y cumplir con la legislación laboral y los cambios que en ésta se presenten?', answers: [ 
            {id: '5', value: 5, answer: 'Hay un mecanismo de capacitación y actualización permanente en estos temas para el personal, según sus responsabilidades.' }, 
            {id: '4', value: 4, answer: 'Se hacen algunos eventos sobre temas importantes, pero sólo de vez en cuando.' }, 
            {id: '3', value: 3, answer: 'Sólo algunos directivos están al tanto de esta información.' }, 
            {id: '2', value: 2, answer: 'No tenemos.' }, 
            {id: '1', value: 1, answer: 'Estos temas no son relevantes en la empresa.' } 
        ]},
        { id: 'CB_18', dim: 'calidad', question: '¿Existe un Sistema de Evaluación del Potencial de desarrollo y plan de vida y carrera de los colaboradores que propicie el auto crecimiento?', answers: [ 
            {id: '5', value: 5, answer: 'El sistema de desarrollo, plan de vida y carrera es bueno  y se instrumenta muy bien.' }, 
            {id: '4', value: 4, answer: 'Existe un sistema de desarrollo de carrera pero no se aplica siempre.' }, 
            {id: '3', value: 3, answer: 'No existe un sistema, aunque se busca privilegiar el mérito y el compromiso de la gente.' }, 
            {id: '2', value: 2, answer: 'El crecimiento en la empresa generalmente es discrecional.' }, 
            {id: '1', value: 1, answer: 'No, parece no ser un tema relevante en la empresa.' } 
        ]},
        { id: 'CB_19', dim: 'calidad', question: '¿Tiene la empresa una política de selección y contratación con procesos claros y transparentes?', answers: [ 
            {id: '5', value: 5, answer: 'Se tiene una política que funciona  muy bien y cada año se va mejorando.' }, 
            {id: '4', value: 4, answer: 'Se cuenta con una política clara y transparente pero en ocasiones no se aplica.' }, 
            {id: '3', value: 3, answer: 'Existe una política pero no es muy transparente.' }, 
            {id: '2', value: 2, answer: 'No, hay un proceso pero nadie sabe en qué consiste.' }, 
            {id: '1', value: 1, answer: 'No, las contrataciones suelen ser conocidos por los jefes.' } 
        ]},
        { id: 'CB_20', dim: 'calidad', question: '¿Cuenta la empresa con una política de no discriminación, definida formalmente al interior de la organización, e incluyente de todo tipo de personas?', answers: [ 
            {id: '5', value: 5, answer: 'Si hay una política de no discriminación, generalizada y aplicada en toda la empresa.' }, 
            {id: '4', value: 4, answer: 'Existe la política aunque no es del todo incluyente.' }, 
            {id: '3', value: 3, answer: 'Sí hay una política pero en la realidad no se aplica.' }, 
            {id: '2', value: 2, answer: 'No, aunque se ha habido algunas iniciativas de forma aislada.' }, 
            {id: '1', value: 1, answer: 'No, no es un tema de relevancia para la empresa.' } 
        ]},
        { id: 'CB_21', dim: 'calidad', question: '¿La empresa cuenta con un sistema evaluación y reconocimiento del desempeño de sus colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Se tiene un buen sistema para evaluar el desempeño, ligado incluso a reconocimiento personal, estímulos económicos y ascensos.' }, 
            {id: '4', value: 4, answer: 'Se realiza una evaluación de desempeño aunque no a todos los niveles de la organización.' }, 
            {id: '3', value: 3, answer: 'Ha habido algunas iniciativas para sistematizar la evaluación, pero no se han concretado.' }, 
            {id: '2', value: 2, answer: 'La evaluación que existe es empírica, no hay un método y se presta a la subjetividad.' }, 
            {id: '1', value: 1, answer: 'No hay evaluación del desempeño de los colaboradores.' } 
        ]},
        { id: 'CB_22', dim: 'calidad', question: '¿Cuentan con mecanismos que permitan incentivar la participación y la productividad de los colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Si y funciona muy bien, los colaboradores son muy participativos al interior de la empresa.' }, 
            {id: '4', value: 4, answer: 'Se tiene un mecanismo al respecto pero falta seguimiento y ejecución.' }, 
            {id: '3', value: 3, answer: 'Existen algunas prácticas aisladas.' }, 
            {id: '2', value: 2, answer: 'No se cuenta con mecanismos.' }, 
            {id: '1', value: 1, answer: 'No es un tema considerado relevante en la empresa.' } 
        ]},
        { id: 'CB_23', dim: 'calidad', question: '¿Cuenta la empresa con políticas que promueven el respeto a la dignidad e integridad de las personas?', answers: [ 
            {id: '5', value: 5, answer: 'Este tema es de la más alta prioridad en la empresa y hay una política clara.' }, 
            {id: '4', value: 4, answer: 'Existe una política pero en ocasiones no se sigue, hace falta seguimiento.' }, 
            {id: '3', value: 3, answer: 'No existe una política como tal aunque se considera un tema relevante y se hacen algunas acciones.' }, 
            {id: '2', value: 2, answer: 'Existen algunos lineamientos pero nadie los conoce y menos se practican.' }, 
            {id: '1', value: 1, answer: 'No es un tema relevante en la empresa.' } 
        ]},
        { id: 'CB_24', dim: 'calidad', question: '¿La empresa tiene programas de apoyo a la maternidad/paternidad y al cuidado de los hijos de los colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Hay un programa implementado, al considerarlo un tema relevante para los colaboradores.' }, 
            {id: '4', value: 4, answer: 'No hay un programa pero sí existen iniciativas al respecto.' }, 
            {id: '3', value: 3, answer: 'Se han implementado algunas iniciativas pero se pierden con el tiempo.' }, 
            {id: '2', value: 2, answer: 'No se tiene algún apoyo al respecto.' }, 
            {id: '1', value: 1, answer: 'No se considera un tema relevante.' } 
        ]},
        { id: 'CB_25', dim: 'calidad', question: '¿Cuentan con esquemas (como un buzón de sugerencias) que promuevan la participación de sus colaboradores en la gestión de la empresa, y reconoce las iniciativas de los mismos?', answers: [ 
            {id: '5', value: 5, answer: 'Sí existen diversos mecanismos de participación de los colaboradores, su voz es importante y tomada en cuenta.' }, 
            {id: '4', value: 4, answer: 'Sí existe un esquema de participación pero la percepción es que no pasa nada con lo que se propone por dicho medio.' }, 
            {id: '3', value: 3, answer: 'La participación de los colaboradores se limita a compartir sus ideas con su jefe.' }, 
            {id: '2', value: 2, answer: 'Cuando un colaborador tiene una idea, no tiene forma de comunicarla a la Dirección.' }, 
            {id: '1', value: 1, answer: 'No existen esquemas de participación.' } 
        ]},
        { id: 'CB_26', dim: 'calidad', question: '¿La empresa cuenta con espacios y mecanismos de diálogo transparentes entre administración y colaboradores en lo particular, y con la representación sindical, en su caso?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, todos los colaboradores son escuchados y tienen algo que aportar, los canales están abiertos.' }, 
            {id: '4', value: 4, answer: 'Si existen mecanismos, pero en la realidad no se usan mucho.' }, 
            {id: '3', value: 3, answer: 'No de manera formal, pero cuando hay algo relevante los jefes escuchan a los colaboradores.' }, 
            {id: '2', value: 2, answer: 'No hay ningún espacio ni mecanismo de diálogo, tal vez convendría abrirlo.' }, 
            {id: '1', value: 1, answer: 'No es necesario el diálogo cotidianamente.' } 
        ]},
        { id: 'CB_27', dim: 'calidad', question: '¿La empresa procura la calidad de vida de sus colaboradores a través de programas que ayuden al balance de la vida laboral con la vida e integración familiar?', answers: [ 
            {id: '5', value: 5, answer: 'Si, es parte del desarrollo personal del colaborador y tenemos esquemas para medir este equilibrio y promoverlo.' }, 
            {id: '4', value: 4, answer: 'Si se procura ya que se considera importante para los colaboradores un equilibrio en su vida, tenemos algunas acciones.' }, 
            {id: '3', value: 3, answer: 'Ha habido iniciativas aisladas al respecto.' }, 
            {id: '2', value: 2, answer: 'No hay ninguna acción al respecto pero sería positivo considerarlo.' }, 
            {id: '1', value: 1, answer: 'No, cada quien su vida.' } 
        ]},
        { id: 'CB_28', dim: 'calidad', question: '¿La empresa realiza estudios  de ambiente  laboral (anónimo), y se promueve un clima laboral positivo?', answers: [ 
            {id: '5', value: 5, answer: 'El ambiente de trabajo es muy importante por lo que se promueve el respeto, la tolerancia y la armonía, para que éste sea psicológicamente sano para trabajar.' }, 
            {id: '4', value: 4, answer: 'Eventualmente se realizan acciones encaminadas a promover un ambiente adecuado para trabajar en toda la empresa.' }, 
            {id: '3', value: 3, answer: 'En áreas críticas se llevan a cabo algunas acciones destinadas a promover un mejor clima laboral.' }, 
            {id: '2', value: 2, answer: 'El ambiente laboral se considera un tema de los líderes de área por lo que no existen planes o programas generales destinados a mejorarlo.' }, 
            {id: '1', value: 1, answer: 'El ambiente de trabajo no constituye un factor importante dentro de la organización.' } 
        ]},
        { id: 'CB_29', dim: 'calidad', question: 'Las condiciones de trabajo de mi empresa son seguras, ergonómicas y promueven un buen ambiente para los colaboradores', answers: [ 
            {id: '5', value: 5, answer: 'Las condiciones de trabajo son una prioridad para toda la empresa por lo que se consideran aspectos ergonómicos, de limpieza y seguridad para que los colaboradores se desempeñen en un ambiente de trabajo adecuado.' }, 
            {id: '4', value: 4, answer: 'Las condiciones de trabajo eventualmente son revisadas y en algunas áreas se consideran aspectos ergonómicos, de limpieza o seguridad para los colaboradores.' }, 
            {id: '3', value: 3, answer: 'Las condiciones de trabajo de áreas críticas para los resultados de la empresa son ergonómicas y seguras para los colaboradores.' }, 
            {id: '2', value: 2, answer: 'Las condiciones de trabajo son las mínimas indispensables para lograr los resultados de la empresa.' }, 
            {id: '1', value: 1, answer: 'Las instalaciones o las condiciones de trabajo no constituyen un tema central dentro de las prioridades de la organización.' } 
        ]},
        { id: 'CB_30', dim: 'calidad', question: 'En mi empresa hago lo necesario para que mis colaboradores  cuentan con un trabajo seguro y estable', answers: [ 
            {id: '5', value: 5, answer: 'Los colaboradores se sienten laboralmente estables y seguros porque frecuentemente tengo un acercamiento con ellos para comunicárselos.' }, 
            {id: '4', value: 4, answer: 'Considero que los colaboradores se sienten seguros y estables porque procuro enviar mensajes que lo refuerzan.' }, 
            {id: '3', value: 3, answer: 'Considero que mis acciones hacen que mis colaboradores sientan que su trabajo es seguro y estable.' }, 
            {id: '2', value: 2, answer: 'No consideramos importante que los colaboradores se sientan estables o que su trabajo está asegurado.' }, 
            {id: '1', value: 1, answer: 'Consideramos que es un riesgo para el desempeño que los colaboradores sientan que su trabajo es seguro o estable.' } 
        ]},
        { id: 'CB_31', dim: 'riqueza', question: '¿La dirección desarrolla programas para formar en economía, finanzas personanles y familiares a las personas que integran la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Estos temas forman parte  de la  capacitación que brinda la empresa.' }, 
            {id: '4', value: 4, answer: 'Es común hablar de estos temas pero no hay seguimiento.' }, 
            {id: '3', value: 3, answer: 'Se hacen algunos eventos sobre estos temas pero no se abren a todo el personal.' }, 
            {id: '2', value: 2, answer: 'No tenemos iniciativas al respecto, aunque una vez vino alguien a dar una plática.' }, 
            {id: '1', value: 1, answer: 'Estos temas no son relevantes en la empresa.' } 
        ]},
        { id: 'CB_32', dim: 'riqueza', question: '¿La empresa posee una política integral, justa y transparente de remuneraciones que mejora año a año?', answers: [ 
            {id: '5', value: 5, answer: 'Nuestra política está funcionando muy bien y cada año se va mejorando.' }, 
            {id: '4', value: 4, answer: 'Se cuenta con la política pero en ocasiones no se aplica.' }, 
            {id: '3', value: 3, answer: 'Existe una política pero no es tan justa y transparente.' }, 
            {id: '2', value: 2, answer: 'Los sueldos en la empresa son establecidos generalmente de forma  discrecional.' }, 
            {id: '1', value: 1, answer: 'No hay nada al respecto en la empresa.' } 
        ]},
        { id: 'CB_33', dim: 'riqueza', question: '¿La empresa cuenta con un sistema de bonos por cumplimiento de metas/productividad/participación de utilidades?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, el sistema es muy claro y se perfecciona periódicamente.' }, 
            {id: '4', value: 4, answer: 'Se tiene un sistema pero no está relacionado con las metas y la productividad.' }, 
            {id: '3', value: 3, answer: 'Hay lineamientos para otorgar bonos pero con frecuencia no se aplican.' }, 
            {id: '2', value: 2, answer: 'Se dan bonos de forma discrecional y no relacionadas con la productividad.' }, 
            {id: '1', value: 1, answer: 'No se dan bonos en la empresa.' } 
        ]},
        { id: 'CB_34', dim: 'riqueza', question: '¿Cuenta la empresa con un sistema de beneficios al personal más allá de lo legal que sea aplicado con justicia y equidad para todos y no discriminatorio?', answers: [ 
            {id: '5', value: 5, answer: 'Se cuenta con el mejor sistema de beneficios de la industria.' }, 
            {id: '4', value: 4, answer: 'Existe un sistema con beneficios que son el promedio de la industria.' }, 
            {id: '3', value: 3, answer: 'Existe un sistema de beneficios pero no se otorgan siempre, falta claridad.' }, 
            {id: '2', value: 2, answer: 'Existen pocos beneficios adicionales pero no son generales ni transparentes.' }, 
            {id: '1', value: 1, answer: 'No hay beneficios más allá de lo legal.' } 
        ]},
        { id: 'CB_35', dim: 'riqueza', question: '¿Existe algún tablero de control y seguimiento con indicadores sobre el avance en la satisfacción de las necesidades de sus colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Se tiene un sistema de indicadores sobre las necesidades del personal y se da seguimiento en el tiempo a sus avances.' }, 
            {id: '4', value: 4, answer: 'Existen algunas iniciativas que miden esto, pero no hay seguimiento.' }, 
            {id: '3', value: 3, answer: 'Se han llevado a cabo algunos proyectos piloto sobre el tema perro no se concretaron.' }, 
            {id: '2', value: 2, answer: 'No se miden las necesidades de los colaboradores.' }, 
            {id: '1', value: 1, answer: 'A los directivos no les interesan las necesidades de los colaboradores.' } 
        ]},
        { id: 'CB_36', dim: 'riqueza', question: '¿Se lleva a cabo una auditoría en asuntos laborales revisando los temas legales y las prácticas y lineamientos señalados por los accionistas? remuneraciones, inclusión, capacitación, promociones, trabajo en equipos, delegación, participación, etc.', answers: [ 
            {id: '5', value: 5, answer: 'Si, se realiza una auditoría legal anual y con seguimiento permanente.' }, 
            {id: '4', value: 4, answer: 'Los lineamientos de los accionistas son observados en la práctica pero hace falta seguimiento.' }, 
            {id: '3', value: 3, answer: 'No hay mayor observancia de los lineamientos establecidos por los accionistas.' }, 
            {id: '2', value: 2, answer: 'No se hace auditoría aunque se procura estar revisando temas legales.' }, 
            {id: '1', value: 1, answer: 'No hay nada al respecto.' } 
        ]},
        { id: 'CB_37', dim: 'riqueza', question: '¿Existe un plan de formación de patrimonio para los colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Si, la empresa promueve este aspecto de forma importante, mediante planes personalizados.' }, 
            {id: '4', value: 4, answer: 'No hay un plan, aunque hay algunas iniciativas al respecto.' }, 
            {id: '3', value: 3, answer: 'Existe un plan pero no se ha llevado a la práctica.' }, 
            {id: '2', value: 2, answer: 'Alguna vez se mencionó el tema al personal pero no ha avanzado nada.' }, 
            {id: '1', value: 1, answer: 'No hay nada al respecto en la empresa.' } 
        ]},
        { id: 'CB_38', dim: 'riqueza', question: '¿Existe un plan de participación en el capital para los colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Si, la empresa ya lo está implementando con un mecanismo ya aprobado por el Consejo.' }, 
            {id: '4', value: 4, answer: 'Se tiene previsto en el mediano plazo.' }, 
            {id: '3', value: 3, answer: 'No hay un plan, aunque se está comenzando a documentar la idea.' }, 
            {id: '2', value: 2, answer: 'Se ha comentado la posibilidad pero no se considera el momento oportuno.' }, 
            {id: '1', value: 1, answer: 'No, la empresa no quiere implementar algo así.' } 
        ]},
        { id: 'CB_39', dim: 'riqueza', question: '¿Existe un sistema de contabilidad por stakeholders sobre el Estado de Distribución de Riqueza generado por la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Si hay un sistema que revisa por stakeholder como se distribuye la riqueza y se procura un sano equilibrio, que permita el desarrollo de todos.' }, 
            {id: '4', value: 4, answer: 'Sólo se estudia el comportamiento de los stakeholders más relevantes en términos económicos.' }, 
            {id: '3', value: 3, answer: 'En la contabilidad no se desagregan los stakeholders para su análisis.' }, 
            {id: '2', value: 2, answer: 'No hay ningún análisis sobre el estado de distribución de la riqueza de la empresa.' }, 
            {id: '1', value: 1, answer: 'Un análisis como este se considera irrelevante.' } 
        ]},
        /* { id: 'CB_40', dim: 'riqueza', question: '¿Existe un semáforo del bienestar de los colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]}, */
        { id: 'CB_40', dim: 'riqueza', question: '¿Existe una política de compensación extraordinaria ligada a resultados para los colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Si, la política de compensación de resultados es parte de las prestaciones del colaborador y su plan de carrera.' }, 
            {id: '4', value: 4, answer: 'Si aunque son discrecionales, no hay un programa al respecto.' }, 
            {id: '3', value: 3, answer: 'En teoría hay compensaciones pero sólo se otorgaron una vez.' }, 
            {id: '2', value: 2, answer: 'No, no tenemos presupuesto para ello.' }, 
            {id: '1', value: 1, answer: 'No, es obligación del trabajo dar resultados.' } 
        ]},
        { id: 'CB_41', dim: 'riqueza', question: 'El sueldo que otorgo a los colaboradores de mi empresa es:', answers: [ 
            {id: '5', value: 5, answer: 'El más competitivo del mercado con evidencia empírica.' }, 
            {id: '4', value: 4, answer: 'El más competitivo de la industria con evidencia empírica.' }, 
            {id: '3', value: 3, answer: 'Más de 2.5 veces el salario mínimo y hasta la media de la industria con evidencia empírica.' }, 
            {id: '2', value: 2, answer: 'Entre 1 y 2.5 veces el salario mínimo.' }, 
            {id: '1', value: 1, answer: 'El salario mínimo.' } 
        ]},
        { id: 'CB_42', dim: 'riqueza', question: 'El paquete de prestaciones y beneficios que otorgo a los colaboradores de mi empresa es:', answers: [ 
            {id: '5', value: 5, answer: 'Las prestaciones son superiores a la Ley y en general al mercado, con beneficios únicos y personalizados para los colaboradores.' }, 
            {id: '4', value: 4, answer: 'Las prestaciones son superiores a la Ley dentro del estándar de la industria, con algunos beneficios adicionales para los colaboradores.' }, 
            {id: '3', value: 3, answer: 'Las prestaciones son superiores a las de la Ley e inferiores al estándar de la industria.' }, 
            {id: '2', value: 2, answer: 'Las prestaciones son las establecidas por la Ley.' }, 
            {id: '1', value: 1, answer: 'Las prestaciones son menores a las de Ley debido a los esquemas de contratación.' } 
        ]},
        { id: 'CB_43', dim: 'riqueza', question: 'En la  empresa se procura que la brecha salarial sea menor entre las posiciones operativas y gerenciales', answers: [ 
            {id: '5', value: 5, answer: 'Existe un esquema de compensación que asegura el equilibrio entre responsabilidades y sueldos, además de cerciorarse siempre que la brecha sea menor entre las posiciones operativas y gerenciales.' }, 
            {id: '4', value: 4, answer: 'Existe un esquema de compensación que busca un equilibrio entre responsabilidades y sueldos, además de procurar que la brecha sea menor entre las posiciones operativas y gerenciales.' }, 
            {id: '3', value: 3, answer: 'Existe un esquema de compensación que busca un equilibrio entre responsabilidades y sueldos, pero no se asegura la disminución de la brecha salarial.' }, 
            {id: '2', value: 2, answer: 'No se considera la brecha salarial como un tema importante pero se cuenta con un modelo interno para el establecimiento de los salarios.' }, 
            {id: '1', value: 1, answer: 'La compensación no sigue una estructura o modelo por lo que no considera la brecha salarial como un tema importante al establecer los salarios.' } 
        ]},
    ]},
    { id: 'PV', name: 'Provedores', questions: [
        { id: 'PV_1', dim: 'etica', question: '¿La organización cuenta con un programa para difundir los valores y principios de la organización en la cadena de proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Si, es parte de nuestro proceso de compra el dar a conocer nuestros valores.' }, 
            {id: '4', value: 4, answer: 'Si, a un nuevo proveedor se los exponemos en nuestra presentación institucional.' }, 
            {id: '3', value: 3, answer: 'No, aunque los proveedores pueden verlos en señalética de nuestras instalaciones y página web.' }, 
            {id: '2', value: 2, answer: 'No, son internos para los colaboradores de la empresa.' }, 
            {id: '1', value: 1, answer: 'No se cuenta con valores y principios definidos.' } 
        ]},
        { id: 'PV_2', dim: 'etica', question: 'En general, nos aseguramos que las personas que conforman nuestros proveedores sean afines a nosotros, relacionándose con sus grupos de interés de forma similar a la nuestra y compartiendo nuestros principios y valores:', answers: [ 
            {id: '5', value: 5, answer: 'Si, para la empresa es muy importante la afinidad con los proveedores, damos preferencia a aquellos con los que compartimos principios.' }, 
            {id: '4', value: 4, answer: 'Lo consideramos importante y la mayoría de nuestros proveedores son afines, no todos.' }, 
            {id: '3', value: 3, answer: 'Es importante pero no es lo fundamental para nosotros.' }, 
            {id: '2', value: 2, answer: 'Procuramos hacerlo pero lo más importante son los precios.' }, 
            {id: '1', value: 1, answer: 'No es relevante el perfil del cliente, sólo hacemos negocio.' } 
        ]},
        { id: 'PV_3', dim: 'etica', question: '¿Se generan condiciones de competenca leal, transparente y de respeto, sin importar el poder económico o presencia de mercado de cada uno de los proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Si, la empresa busca que todo el proceso de compra sea transparente y con respeto a todos los involucrados, sin importar su tamaño.' }, 
            {id: '4', value: 4, answer: 'Cada vez avanzamos más al respecto, pero todavía hay veces que no es sencillo ignorar el peso de algunos proveedores.' }, 
            {id: '3', value: 3, answer: 'Se ha intentado que estas condiciones se generen pero a veces el mercado nos gana.' }, 
            {id: '2', value: 2, answer: 'No, los proveedores más fuertes tienen siempre ventaja.' }, 
            {id: '1', value: 1, answer: 'No es un tema relevante para la empresa, mientras nos vendan a buen precio no importa su competencia.' } 
        ]},
        { id: 'PV_4', dim: 'etica', question: '¿Cuenta la empresa con instrumentos que aseguran el respeto de la propiedad intelectual de los proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'No, ese no es un tema propio de la empresa.' } 
        ]},
        { id: 'PV_5', dim: 'etica', question: '¿Existen programas de trabajo con proveedores para el mejoramiento mutuo y la congruencia con sus principios y códigos de conducta?', answers: [ 
            {id: '5', value: 5, answer: 'Si, y ha sido muy benéfico, siempre es mejor trabajar con empresas que entienden y comparten nuestros valores.' }, 
            {id: '4', value: 4, answer: 'Tenemos algunas iniciativas pero no se han consolidado en un programa.' }, 
            {id: '3', value: 3, answer: 'No, pero estamos iniciando un programa al respecto.' }, 
            {id: '2', value: 2, answer: 'Nunca se ha hecho nada al respecto pero sería buena idea.' }, 
            {id: '1', value: 1, answer: 'No es un tema que nos preocupe.' } 
        ]},
        { id: 'PV_6', dim: 'etica', question: '¿Existe  un plan de innovación y productividad de mediano plazo para proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Si, trabajamos juntos en proyectos de mediano plazo que nos beneficiarán a ambos.' }, 
            {id: '4', value: 4, answer: 'Si existe un plan, aunque no se ha consolidado y llevado a la práctica.' }, 
            {id: '3', value: 3, answer: 'Se ha intentado hacer un plan al respecto pero no se ha concretado.' }, 
            {id: '2', value: 2, answer: 'No tenemos un plan, pero sí ha habido iniciativas aisladas.' }, 
            {id: '1', value: 1, answer: 'No es un tema relevante para la empresa.' } 
        ]},
        { id: 'PV_7', dim: 'etica', question: '¿Se realizan evaluaciones comparativas de las ofertas de proveedores para elegir y transparentar las decisiones de compra?', answers: [ 
            {id: '5', value: 5, answer: 'Si, y ha resultado muy productivo y transparente, es parte de nuestro proceso cotidiano.' }, 
            {id: '4', value: 4, answer: 'Se han realizado algunas comparativas pero solo en proyectos importantes.' }, 
            {id: '3', value: 3, answer: 'No, pero pronto iniciaremos este proceso.' }, 
            {id: '2', value: 2, answer: 'No, al final el encargado de compras es quien toma la decisión con sus criterios.' }, 
            {id: '1', value: 1, answer: 'No, siempre hemos comprado igual y así seguiremos.' } 
        ]},
        { id: 'PV_8', dim: 'calidad', question: '¿Cuenta la empresa con mecanismos, transparentes y legales que le permitan conocer las prácticas laborales de sus proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, la empresa tiene un equipo interno dedicado a evaluar las prácticas laborales de los proveedores, y utiliza tecnología para hacerlo de manera eficiente.' }, 
            {id: '4', value: 4, answer: 'Se suele estudiar a los proveedores pero no se hace un seguimiento.' }, 
            {id: '3', value: 3, answer: 'No, pero ocasionalmente se hace una revisión.' }, 
            {id: '2', value: 2, answer: 'No, la empresa no tiene mecanismos específicos y confía en la legislación local para garantizar el cumplimiento.' }, 
            {id: '1', value: 1, answer: 'No, la empresa depende de la información proporcionada por ellos mismos.' } 
        ]},
        { id: 'PV_9', dim: 'calidad', question: '¿Existen reglas sobre las atenciones o regalos que los colaboradores pueden aceptar de los proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, la empresa tiene reglas claras y políticas establecidas con límites definidos y procesos de aprobación, con el objetivo de prevenir conflictos de interés o favores indebidos.' }, 
            {id: '4', value: 4, answer: 'Sí, la empresa tiene políticas de aceptación de regalos y atenciones de proveedores, pero estas políticas son flexibles y dependen de la situación.' }, 
            {id: '3', value: 3, answer: 'La empresa tiene pautas generales, pero no reglas específicas al respecto.' }, 
            {id: '2', value: 2, answer: 'No tiene pero sería conveniente desarrollar.' }, 
            {id: '1', value: 1, answer: 'No es algo que interese a la empresa.' } 
        ]},
        { id: 'PV_10', dim: 'calidad', question: '¿La empresa cuenta con reglas precisas y documentadas para el trato respetuoso con sus proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Si, todos los proveedores conocen nuestras reglas y saben que de nosotros pueden esperar respeto siempre.' }, 
            {id: '4', value: 4, answer: 'Tenemos reglas documentadas pero no siempre se siguen.' }, 
            {id: '3', value: 3, answer: 'Hay reglas aunque no están documentadas.' }, 
            {id: '2', value: 2, answer: 'No, pero procuramos el respeto mutuo.' }, 
            {id: '1', value: 1, answer: 'El trato con proveedores es respetuoso mientras cumplan con los tratos.' } 
        ]},
        { id: 'PV_11', dim: 'calidad', question: '¿Se tienen establecidos mecanismos precisos para la conciliación de diferendos con sus proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Si, el mecanismo es aceptado desde por los proveedores desde el inicio del proceso de compra.' }, 
            {id: '4', value: 4, answer: 'Si hay un mecanismo pero no se respeta como tal, cada situación se va resolviendo.' }, 
            {id: '3', value: 3, answer: 'Se ha realizado algún intento pero no se ha concretado.' }, 
            {id: '2', value: 2, answer: 'No tenemos, hasta ahora no hemos tenido diferendos.' }, 
            {id: '1', value: 1, answer: 'No es un tema que nos preocupe.' } 
        ]},
        { id: 'PV_12', dim: 'calidad', question: '¿Existen programas o estrategias que incentiven las buenas prácticas laborales entre sus proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' }
        ]},
        { id: 'PV_13', dim: 'calidad', question: '¿Cuenta la empresa con procesos claros y transparentes para la selección, contratación y evaluación de proveedores', answers: [ 
            {id: '5', value: 5, answer: 'Si, y ha resultado muy productivo y transparente, es parte de nuestro proceso cotidiano.' }, 
            {id: '4', value: 4, answer: 'Sólo tenemos claro el proceso para proyectos importantes.' }, 
            {id: '3', value: 3, answer: 'No, pero pronto iniciaremos este proceso.' }, 
            {id: '2', value: 2, answer: 'No, al final el encargado de compras es quien toma la decisión con sus criterios.' }, 
            {id: '1', value: 1, answer: 'No, siempre hemos comprado igual y así seguiremos.' } 
        ]},
        { id: 'PV_14', dim: 'calidad', question: '¿Se rechaza la posibilidad de trabajar con proveedores que tengan  malas prácticas laborales o ambientales?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, para nosotros es fundamental tener proveedores que compartan nuestros valores y eviten prácticas nocivas en cualquier ámbito.' }, 
            {id: '4', value: 4, answer: 'Alguna vez hemos rechazado a algún proveedor pero son casos extremos.' }, 
            {id: '3', value: 3, answer: 'Podríamos rechazar a alguno si observamos alguna práctica que no nos guste, pero no ha sucedido.' }, 
            {id: '2', value: 2, answer: 'Los temas internos de los proveedores no es nuestro asunto, a menos que nos afecte.' }, 
            {id: '1', value: 1, answer: 'Mientras nos surta a buen precio no es tema de la empresa.' } 
        ]},
        { id: 'PV_15', dim: 'calidad', question: '¿Se aplica una encuesta anual (anónima) a provedores, respecto a la relación comercial con la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Si, es un ejercicio útil que nos permite ser mejores clientes y generar relaciones de corto plazo.' }, 
            {id: '4', value: 4, answer: 'No hacemos una encuesta formal pero hemos recibido retroalimentación en varios casos y la tomamos en cuenta.' }, 
            {id: '3', value: 3, answer: 'Conocemos lo que piensan de nosotros por la comunicación que tenemos.' }, 
            {id: '2', value: 2, answer: 'No hemos hecho un ejercicio así pero tal vez valdría la pena considerarlo.' }, 
            {id: '1', value: 1, answer: 'No es de interés conocer la opinión de los proveedores.' } 
        ]},
        { id: 'PV_16', dim: 'riqueza', question: '¿Cuenta a empresa con políticas de negociación justa y equilibrada con sus proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, la empresa trabaja en colaboración con sus proveedores para desarrollar políticas de negociación que sean mutuamente beneficiosas y equitativas.' }, 
            {id: '4', value: 4, answer: 'Sí, la empresa tiene algunas políticas de negociación que buscan la equidad y la justicia en las relaciones con sus proveedores, pero en ocasiones no se sigue.' }, 
            {id: '3', value: 3, answer: 'No, pero hay algunos lineamientos que se deben seguir en el área de compras.' }, 
            {id: '2', value: 2, answer: 'No, la empresa no tiene políticas específicas de negociación con proveedores y se basa en acuerdos informales.' }, 
            {id: '1', value: 1, answer: 'No,depende de la experiencia individual de sus empleados en las relaciones con proveedores.' } 
        ]},
        { id: 'PV_17', dim: 'riqueza', question: '¿La empresa posee y cumple una política de pago a sus proveedores, con indicadores, que obligue al respeto de lo pactado y les permita su sustentabilidad económica en el tiempo?', answers: [ 
            {id: '5', value: 5, answer: 'Sí  y se asegura de cumplir puntualmente con los acuerdos establecidos. ' }, 
            {id: '4', value: 4, answer: 'Si la tiene pero no siempre se sigue.' }, 
            {id: '3', value: 3, answer: 'No, aunque siempre cumple con los acuerdos.' }, 
            {id: '2', value: 2, answer: 'No, pero generalmente cumple con los acuerdos establecidos.' }, 
            {id: '1', value: 1, answer: 'No, la empresa no tiene una política formal de pago a proveedores.' } 
        ]},
        { id: 'PV_18', dim: 'riqueza', question: '¿Cuenta la empresa con programas y/o eventos que involucren el desarrollo de sus proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Si, tenemos un programa anual, eventos y capacitaciones recurrentes, su desarrollo lo consideramos relevante, es un ganar-ganar.' }, 
            {id: '4', value: 4, answer: 'Es una práctica cotidiana el apoyar el desarrollo de nuestros proveedores, salvo situaciones particulares.' }, 
            {id: '3', value: 3, answer: 'Tenemos iniciativas aisladas que implementamos.' }, 
            {id: '2', value: 2, answer: 'No, aunque si hay algo que podemos hacer por ellos lo consideramos.' }, 
            {id: '1', value: 1, answer: 'No, el desarrollo es cosa de cada quien.' } 
        ]},
        { id: 'PV_19', dim: 'riqueza', question: '¿Privilegia la empresala contratación de proveedores locales con el fin de contribuir al desarrollo de la misma comunidad?', answers: [ 
            {id: '5', value: 5, answer: 'Si, incluso los capacitamos sobre nuestro modelo de negocio y necesidades y hemos encontrado grandes aliados.' }, 
            {id: '4', value: 4, answer: 'Se ha intentado pero muchas veces optamos por otros proveedores de más experiencia.' }, 
            {id: '3', value: 3, answer: 'Hemos hecho acercamientos pero en pocos casos hemos avanzado en el proceso.' }, 
            {id: '2', value: 2, answer: 'Nunca lo hemos incentivado, pero podría ser buena idea si cumplen las especificaciones que necesitamos.' }, 
            {id: '1', value: 1, answer: 'No, lo que importa es quien tenga el mejor precio.' } 
        ]},
        { id: 'PV_20', dim: 'riqueza', question: '¿Se desarrollan sistemáticamente acciones proactivas y recurrentes para detectar las necesidades de sus proveedores y contribuir a su desarrollo?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_21', dim: 'riqueza', question: '¿Existen mecanismos que le permitan a la empresa conocer Óomo es evaluada por sus proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, la opinión de todo stakeholder es importante para nosotros ya que nos interesa su desarrollo.' }, 
            {id: '4', value: 4, answer: 'Si, cada año se hace una encuesta, pero le falta darle seguimiento.' }, 
            {id: '3', value: 3, answer: 'Conocemos de forma empírica cómo nos perciben.' }, 
            {id: '2', value: 2, answer: 'No, aunque alguna vez se hizo una encuesta.' }, 
            {id: '1', value: 1, answer: 'No es un tema que nos preocupe.' } 
        ]},
        { id: 'PV_22', dim: 'riqueza', question: '¿Pagamos en condiciones y plazos exigentes pero razonables y de mercado?', answers: [ 
            {id: '5', value: 5, answer: 'Constantemente comparamos nuestras condiciones de crédito y nos aseguramos de ser competitivos.' }, 
            {id: '4', value: 4, answer: 'Tendemos a escuchar al mercado para no tener malas condiciones de crédito.' }, 
            {id: '3', value: 3, answer: 'Buscamos condiciones de crédito favorables a nosotros sin contar con referencias.' }, 
            {id: '2', value: 2, answer: 'Abusamos de nuestro poder de mercado e imponemos las condiciones de crédito que más nos favorecen.' }, 
            {id: '1', value: 1, answer: 'No es relevante para la empresa analizar cómo paga.' } 
        ]},
        { id: 'PV_23', dim: 'riqueza', question: 'Sin excepción, honramos nuestra palabra y respetamos todo lo que ofrecemos y acordamos con nuestros proveedores', answers: [ 
            {id: '5', value: 5, answer: 'Respetamos cabalmente los acuerdos y cumplimos rigurosamente los compromisos contraídos.' }, 
            {id: '4', value: 4, answer: 'Cumplimos todos los acuerdos pero no siempre acertamos en los compromisos.' }, 
            {id: '3', value: 3, answer: 'Cumplimos la mayoría de los acuerdos, pero en ocasiones no es posible.' }, 
            {id: '2', value: 2, answer: 'Somos parcialmente respetuosos de los acuerdos y los compromisos.' }, 
            {id: '1', value: 1, answer: 'No respetamos los acuerdos en general, ni somos cumplidos en los compromisos.' } 
        ]},
    ]},
    { id: 'CL', name: 'Clientes', questions: [
        { id: 'CL_1', dim: 'etica', question: '¿Están los productos y/o servicios ligados en su imagen y presentación a los principios y valores de la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Es muy importante mostrar esa congruencia, siempre lo consideramos al momento de diseñar la imagen.' }, 
            {id: '4', value: 4, answer: 'Generalmente si están ligados pero no lo haremos por norma.' }, 
            {id: '3', value: 3, answer: 'Procuramos que sí, pero hay excepciones.' }, 
            {id: '2', value: 2, answer: 'Algunos productos sí y otros no, no es algo que consideremos de fondo.' }, 
            {id: '1', value: 1, answer: 'No nos interesa que estén ligados.' } 
        ]},
        { id: 'CL_2', dim: 'etica', question: '¿Proporciona la empresa de manera transparente la información necesaria sobre sus productos y/o servicios?', answers: [ 
            {id: '5', value: 5, answer: 'Siempre lo hacemos, es parte de nuestro código de ética.' }, 
            {id: '4', value: 4, answer: 'La mayoría de las veces si lo hacemos, procuramos ser honestos con los clientes.' }, 
            {id: '3', value: 3, answer: 'Proporcionamos por norma solo la información que nos obliga la normativa.' }, 
            {id: '2', value: 2, answer: 'Hay información que conviene mejor omitir.' }, 
            {id: '1', value: 1, answer: 'A veces conviene manejar cierta información, aunque no sea del todo cierta.' } 
        ]},
        { id: 'CL_3', dim: 'etica', question: '¿Cuenta con sistemas frecuentes de información y retroalimentación hacia este grupo?', answers: [ 
            {id: '5', value: 5, answer: 'Tenemos un robusto sistema de información y retroalimentación, es un aspecto clave en nuestro negocio.' }, 
            {id: '4', value: 4, answer: 'Tenemos esquemas de información y retroalimentación, aunque nos falta dar seguimiento.' }, 
            {id: '3', value: 3, answer: 'Hemos realizado algunas iniciativas aisladas.' }, 
            {id: '2', value: 2, answer: 'No tenemos pero hemos pensado implementarlo.' }, 
            {id: '1', value: 1, answer: 'No es una prioridad nuestra.' } 
        ]},
        { id: 'CL_4', dim: 'etica', question: '¿Se tiene presente la dignidad de la persona en todas las actividades de venta, publicidad y promoción?', answers: [ 
            {id: '5', value: 5, answer: 'Siempre lo consideramos, debe ser el centro de nuestras campañas de marketing.' }, 
            {id: '4', value: 4, answer: 'Generalmente es considerado, aunque a veces se nos puede ir.' }, 
            {id: '3', value: 3, answer: 'En ocasiones se tiene presente, pero en muchas otras sólo vemos el beneficio de la promoción.' }, 
            {id: '2', value: 2, answer: 'No es algo que hasta ahora hayamos considerado en la publicidad.' }, 
            {id: '1', value: 1, answer: 'No es un principio que nos interese considerar en nuestras actividades.' } 
        ]},
        { id: 'CL_5', dim: 'etica', question: '¿La empresa cumple con lo prometido en sus productos, en calidad, servicio, cantidad y oportunidad?', answers: [ 
            {id: '5', value: 5, answer: 'Siempre cumplimos lo prometido, nuestros procesos son sistemáticos y nos permiten ser consistentes.' }, 
            {id: '4', value: 4, answer: 'Casi siempre cumplimos lo prometido.' }, 
            {id: '3', value: 3, answer: 'Algunas veces tenemos que incumplir las promesas por causas no directamente responsabilidad de nosotros.' }, 
            {id: '2', value: 2, answer: 'Con frecuencia tenemos fallos que no nos permiten cumplir lo prometido.' }, 
            {id: '1', value: 1, answer: 'Nunca cumplimos, tenemos que mejorar nuestros procesos y estándares.' } 
        ]},
        { id: 'CL_6', dim: 'etica', question: '¿Se llevan a cabo contratos de garantía, con los lineamientos que señala la Ley de protección al consumidor, señalando los alcances y limitaciones e indemnizaciones, procedimientos para quejas, etc., a los que puede tener acceso los clientes?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, es una práctica habitual que consideramos importante.' }, 
            {id: '4', value: 4, answer: 'Los hemos realizado en alguna ocasión pero no es habitual.' }, 
            {id: '3', value: 3, answer: 'Nunca los hemos llevado a cabo, pero valdría la pena considerarlo.' }, 
            {id: '2', value: 2, answer: 'No, serían una camisa de fuerza para nosotros.' }, 
            {id: '1', value: 1, answer: 'No lo consideramos relevante.' } 
        ]},
        { id: 'CL_7', dim: 'etica', question: '¿La empresa cuenta con una política de ventas que sanciona/impide el uso de pagos indebidos o beneficios implícitos para concretar ventas?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, está incluido en nuestro código de ética evitar casos como estos y lo hemos aterrizado en una política muy clara, la cual seguimos.' }, 
            {id: '4', value: 4, answer: 'No tenemos una política pero hemos tenido casos donde sancionamos a colaboradores por caer en estas prácticas.' }, 
            {id: '3', value: 3, answer: 'Aún no la tenemos pero estamos trabajando en ello, es importante prever.' }, 
            {id: '2', value: 2, answer: 'No, no hemos tenido casos de este tipo.' }, 
            {id: '1', value: 1, answer: 'No es un tema que preocupe a la empresa.' } 
        ]},
        { id: 'CL_8', dim: 'etica', question: '¿Capacita la empresa a su personal en la importancia de la ética en la relación y el servicio a clientes?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, el aspecto ético está contenido en todos nuestros programas de capacitación.' }, 
            {id: '4', value: 4, answer: 'Sí, aunque nos cuesta aterrizarlo en la práctica en situaciones complejas.' }, 
            {id: '3', value: 3, answer: 'No formalmente pero el aspecto ético en la relación con nuestros clientes es un valor entendido por todos.' }, 
            {id: '2', value: 2, answer: 'No, la capacitación que damos se centra en temas técnicos, no éticos.' }, 
            {id: '1', value: 1, answer: 'No es un tema relevante para nosotros.' } 
        ]},
        { id: 'CL_9', dim: 'etica', question: 'Damos buen trato a todos los clientes y propiciamos una comunicación abierta en todo momento', answers: [ 
            {id: '5', value: 5, answer: 'Nuestras relaciones con clientes son honestas, cordiales y existe una comunicación amplia.' }, 
            {id: '4', value: 4, answer: 'Hay honestidad y buen trato pero la comunicación no es fluida.' }, 
            {id: '3', value: 3, answer: 'Hay honestidad con los clientes pero el trato y la comunicación no son buenos.' }, 
            {id: '2', value: 2, answer: 'El trato a nuestros clientes es opaco, poco agradable y la comunicación escasa.' }, 
            {id: '1', value: 1, answer: 'El trato y comunicación con  nuestros clientes no es relevante para la empresa.' } 
        ]},
        { id: 'CL_10', dim: 'etica', question: 'Sin excepción, honramos nuestra palabra y respetamos todo lo que ofrecemos y acordamos con nuestros clientes', answers: [ 
            {id: '5', value: 5, answer: 'Respetamos siempre los acuerdos y cumplimos rigurosamente los compromisos contraídos.' }, 
            {id: '4', value: 4, answer: 'Cumplimos todos los acuerdos pero no siempre acertamos en los compromisos.' }, 
            {id: '3', value: 3, answer: 'Somos parcialmente respetuosos de los acuerdos y los compromisos.' }, 
            {id: '2', value: 2, answer: 'No siempre se puede cumplir la palabra, hay situaciones extraordinarias.' }, 
            {id: '1', value: 1, answer: 'No respetamos los acuerdos en general ni somos cumplidos en los compromisos.' } 
        ]},
        { id: 'CL_11', dim: 'etica', question: 'En general, buscamos que las personas que conforman nuestros clientes sean afines a nosotros, relacionándose con sus grupos de interés de forma similar a la nuestra y compartiendo nuestros principios', answers: [ 
            {id: '5', value: 5, answer: 'Investigamos a nuestros clientes y en la medida de lo posible seleccionamos a aquellos quienes cuiden su trato con sus grupos de interés y tengamos afinidad en principios.' }, 
            {id: '4', value: 4, answer: 'Preferimos clientes que sean afines en principios y que cuiden tener una buena relación con sus grupos de interés.' }, 
            {id: '3', value: 3, answer: 'Preferimos clientes que sean afines en principios pero no nos importan su relación con sus grupos de interés' }, 
            {id: '2', value: 2, answer: 'Conocemos el grado de cuidado de nuestros clientes por sus grupos de interés y afinidad con nuestros valores pero no hacemos nada con ello.' }, 
            {id: '1', value: 1, answer: 'No nos es relevante el comportamiento de nuestros clientes con sus grupos de interés ni su afinidad con nosotros.' } 
        ]},
        { id: 'CL_12', dim: 'calidad', question: '¿Proporciona la empresa de manera veraz, transparente y completa la información sobre sus productos y/o servicios?', answers: [ 
            {id: '5', value: 5, answer: 'Siempre lo hacemos, es parte de nuestro código de ética.' }, 
            {id: '4', value: 4, answer: 'La mayoría de las veces si lo hacemos, procuramos ser honestos con los clientes.' }, 
            {id: '3', value: 3, answer: 'Procuramos hacerlo, pero no somos tan consistentes como deberíamos.' }, 
            {id: '2', value: 2, answer: 'En realidad parte de la información de nuestros productos es más de marketing que veraz.' }, 
            {id: '1', value: 1, answer: 'Proporcionamos por norma solo la información que nos obliga la normativa.' } 
        ]},
        { id: 'CL_13', dim: 'calidad', question: '¿La empresa utiliza insumos que cumplen las normas de calidad obligatorias en la fabricación de sus productos y/o servicios?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, nuestros insumos cumplen las normas de calidad, si no lo hicieran, no los compraríamos.' }, 
            {id: '4', value: 4, answer: 'Sí, nuestros insumos cumplen las normas de calidad, si no lo hicieran, dudaríamos en comprarlos.' }, 
            {id: '3', value: 3, answer: 'Si, aunque en ocasiones compramos algún insumo de menor calidad si las condiciones son mejores.' }, 
            {id: '2', value: 2, answer: 'El precio es nuestra variable clave para comprar insumos.' }, 
            {id: '1', value: 1, answer: 'No es un tema que nos preocupe.' } 
        ]},
        { id: 'CL_14', dim: 'calidad', question: '¿La empresa facilita la información necesaria sobre seguridad y salubridad de los productos y sobre instrucciones de uso adecuado?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, tenemos manuales e instructivos muy completos y un sistema de atención al cliente.' }, 
            {id: '4', value: 4, answer: 'En materia de seguridad sí, pero no hemos entrado a lo referente a salubridad.' }, 
            {id: '3', value: 3, answer: 'Damos sólo cierta información básica sobre el uso de nuestros productos.' }, 
            {id: '2', value: 2, answer: 'No lo hacemos, pero hemos pensado que sería conveniente.' }, 
            {id: '1', value: 1, answer: 'No consideramos este tema como relevante.' } 
        ]},
        { id: 'CL_15', dim: 'calidad', question: '¿Cuenta la empresa con políticas precisas para el trato respetuoso con sus clientes, consumidores y distribuidores?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, siempre hay un trato respetuoso, son socios claves de nuestro negocio.' }, 
            {id: '4', value: 4, answer: 'No tenemos política, pero procuramos cuidar el trato respetuoso.' }, 
            {id: '3', value: 3, answer: 'Sí, pero más por conveniencia que por convicción.' }, 
            {id: '2', value: 2, answer: 'No, el respeto se gana y no tenemos porqué asegurarlo sin reserva.' }, 
            {id: '1', value: 1, answer: 'No es un tema al que hayamos prestado atención.' } 
        ]},
        { id: 'CL_16', dim: 'calidad', question: '¿Cuenta la empresa con políticas sobre reparación, indemnización y/o canje en caso de productos o servicios defectuosos?', answers: [ 
            {id: '5', value: 5, answer: 'Sí la política y procedimientos son muy claros y los seguimos con rigor, es un valor que damos al cliente.' }, 
            {id: '4', value: 4, answer: 'Tenemos una política al respecto pero en ocasiones se ha complicado su cumplimiento.' }, 
            {id: '3', value: 3, answer: 'Tenemos algunas prácticas al respecto pero no lo tenemos sistematizado por lo que la implementación es irregular.' }, 
            {id: '2', value: 2, answer: 'No tenemos políticas al respecto y a veces nos ha generado conflictos.' }, 
            {id: '1', value: 1, answer: 'No lo vemos como algo relevante.' } 
        ]},
        { id: 'CL_17', dim: 'calidad', question: '¿La empresa cuenta con normas de etiquetado de acuerdo a la normatividad vigente?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, cumplimos con la normatividad a cabalidad.' }, 
            {id: '4', value: 4, answer: 'No tenemos normas de etiquetado pero seguimos nuestros procedimientos internos.' }, 
            {id: '3', value: 3, answer: 'Estamos en proceso de iniciar con ello' }, 
            {id: '2', value: 2, answer: 'Nunca hemos contado con normas de etiquetado.' }, 
            {id: '1', value: 1, answer: 'No es un tema relevante.' } 
        ]},
        { id: 'CL_18', dim: 'calidad', question: '¿Se tiene contratado algún seguro de daños o responsabilidad civil en lo referente a sus productos?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, es importante tener previsiones como estas para hacer frente a nuestras responsabilidades. ' }, 
            {id: '4', value: 4, answer: 'No hemos contratado un seguro pero en algún caso que sea necesario enfrentar, seremos responsables.' }, 
            {id: '3', value: 3, answer: 'Nunca lo hemos planteado pero tal vez sea una buena idea.' }, 
            {id: '2', value: 2, answer: 'No tenemos presupuesto para algo así.' }, 
            {id: '1', value: 1, answer: 'No es un tema que consideremos relevante.' } 
        ]},
        /* { id: 'CL_19', dim: 'calidad', question: '¿Cuentan con mecanismos permanentes para la evaluación de la satisfacción de sus clientes, consumidores y distribuidores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]}, */
        { id: 'CL_19', dim: 'calidad', question: '¿Cuenta la empresa con una política de atención a clientes, incluyendo encuestas de satisfacción y manejo de quejas y reclamaciones?', answers: [ 
            {id: '5', value: 5, answer: 'Tenemos una política establecida, la satisfacción y atención de clientes es muy importante para la empresa.' }, 
            {id: '4', value: 4, answer: 'Sí, tenemos una política pero en ocasiones no se ha seguido.' }, 
            {id: '3', value: 3, answer: 'Se han realizado algunas acciones de atención y satisfacción del cliente pero no se ha dado continuidad.' }, 
            {id: '2', value: 2, answer: 'No tenemos iniciativas al respecto.' }, 
            {id: '1', value: 1, answer: 'No lo consideramos relevante.' } 
        ]},
        { id: 'CL_21', dim: 'riqueza', question: '¿Cuenta la empresa con políticas de negociación justa con sus distribuidores que consideren el beneficio al cliente final?', answers: [ 
            {id: '5', value: 5, answer: 'Contamos con una política sólida al respeto, la justicia es un valor importante y siempre la buscamos en las negociaciones.' }, 
            {id: '4', value: 4, answer: 'Generalmente trabajamos así.' }, 
            {id: '3', value: 3, answer: 'Buscamos negociaciones justas pero no siempre lo logramos.' }, 
            {id: '2', value: 2, answer: 'En las negociaciones solemos presionar para siempre obtener la mejor parte.' }, 
            {id: '1', value: 1, answer: 'No consideramos importante este aspecto.' } 
        ]},
        { id: 'CL_22', dim: 'riqueza', question: '¿Existen programas y/o eventos en la empresa que involucren el desarrollo empresarial de sus distribuidores y clientes?', answers: [ 
            {id: '5', value: 5, answer: 'Tenemos un programa formal al respecto, los distribuidores y clientes son socios estratégicos de la empresa y lo que podamos hacer por su desarrollo lo promovemos.' }, 
            {id: '4', value: 4, answer: 'Nos interesa este tema y solemos organizar eventos que promueven el desarrollo empresarial de distribuidores.' }, 
            {id: '3', value: 3, answer: 'Hemos realizado algunas iniciativas pero de forma esporádica.' }, 
            {id: '2', value: 2, answer: 'No tenemos iniciativas al respecto.' }, 
            {id: '1', value: 1, answer: 'A la empresa no le toca atender el desarrollo empresarial de distribuidores y clientes.' } 
        ]},
        { id: 'CL_23', dim: 'riqueza', question: '¿Implementan planes de venta justos, transparentes y veraces para sus productos y servicios?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, la justicia, transparencia y veracidad es muy importante, incluso está en nuestro código de ética.' }, 
            {id: '4', value: 4, answer: 'Lo procuramos, pero nos hace falta hacer más sistemático.' }, 
            {id: '3', value: 3, answer: 'Generalmente lo hacemos pero más por conveniencia que por convicción.' }, 
            {id: '2', value: 2, answer: 'En los planes de venta hay veces que no se puede ser del todo veraz o transparente.' }, 
            {id: '1', value: 1, answer: 'Mientras más vendamos, no importan los medios. ' } 
        ]},
        { id: 'CL_24', dim: 'riqueza', question: '¿La empresa realiza sistemáticamente estudios de mercado para tomar en cuenta las necesidades de diferentes sectores para diseñar y diversificar sus productos y servicios?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, es parte de nuestros procesos, un estudio anual y le damos puntual seguimiento.' }, 
            {id: '4', value: 4, answer: 'Lo hemos hecho ocasionalmente, falta establecerlo en nuestras prácticas recurrentes.' }, 
            {id: '3', value: 3, answer: 'Lo hacemos en la práctica, pero no hacemos un estudio de mercado como tal.' }, 
            {id: '2', value: 2, answer: 'Lo hemos pensado pero no tenemos presupuesto.' }, 
            {id: '1', value: 1, answer: 'Nunca lo hemos hecho, ni considerado.' } 
        ]},
        { id: 'CL_25', dim: 'riqueza', question: '¿Existe un mecanismo que le permita a la empresa conocer la satisfacción de sus Distribuidores Clientes y Consumidores?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, tenemos un mecanismo definido que implementamos permanentemente para medir la satisfacción de nuestros clientes.' }, 
            {id: '4', value: 4, answer: 'Tenemos algunas iniciativas sobre satisfacción de clientes pero no le damos seguimiento.' }, 
            {id: '3', value: 3, answer: 'Algunas vez iniciamos una iniciativa para ello pero la dejamos de hacer.' }, 
            {id: '2', value: 2, answer: 'No tenemos ningún mecanismo al respecto pero sería buena idea trabajarlo.' }, 
            {id: '1', value: 1, answer: 'No lo consideramos de especial relevancia.' } 
        ]},
        { id: 'CL_26', dim: 'riqueza', question: '¿Cuenta la empresa con políticas que eviten prácticas monopólicas en perjucio de los consumidores?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, estamos por la libre competencia y evitamos  en nuestras políticas cualquier práctica que atente contra ello.' }, 
            {id: '4', value: 4, answer: 'No tenemos política pero en la práctica evitamos prácticas monopólicas.' }, 
            {id: '3', value: 3, answer: 'Hemos tenido iniciativas al respecto pero no damos continuidad.' }, 
            {id: '2', value: 2, answer: 'No hemos trabajado iniciativas al respecto.' }, 
            {id: '1', value: 1, answer: 'No nos metemos con estos temas.' } 
        ]},
        { id: 'CL_27', dim: 'riqueza', question: 'Vendemos siempre a los precios que optimicen el valor tanto a los clientes como a nosotros, no haciendo uso nunca de poder de mercado abusivo', answers: [ 
            {id: '5', value: 5, answer: 'Constantemente comparamos nuestros precios y nos aseguramos de ser competitivos.' }, 
            {id: '4', value: 4, answer: 'Tendemos a escuchar al mercado para no ser los más caros.' }, 
            {id: '3', value: 3, answer: 'Buscamos vender caro sin contar con referencias.' }, 
            {id: '2', value: 2, answer: 'Abusamos de nuestro poder de mercado y vendemos tan caro como el mercado aguante.' }, 
            {id: '1', value: 1, answer: 'No es un tema relevante en la empresa. ' } 
        ]},
        { id: 'CL_28', dim: 'riqueza', question: '¿Ofrecemos a nuestros clientes condiciones competitivas de pago?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, nos interesa generar relaciones ganar-ganar y de largo plazo.' }, 
            {id: '4', value: 4, answer: 'Sí, hasta donde los costos nos lo permitan.' }, 
            {id: '3', value: 3, answer: 'Ofrecemos las condiciones promedio de la industria.' }, 
            {id: '2', value: 2, answer: 'No, procuramos condiciones lo más favorables para nosotros.' }, 
            {id: '1', value: 1, answer: 'No es un tema que consideremos relevante. ' } 
        ]},
        { id: 'CL_29', dim: 'riqueza', question: 'Nos aseguramos de que nuestros clientes siempre obtengan utilidad económica de lo que nos compran, es decir, que el valor que nuestros productos y servicios siempre sea mayor al precio que pagan por ellos', answers: [ 
            {id: '5', value: 5, answer: 'Controlamos y contrastamos que el valor percibido por el cliente sea muy superior al dinero pagado.' }, 
            {id: '4', value: 4, answer: 'Conscientes de la importancia del valor al cliente, mejoramos la propuesta solamente de forma reactiva.' }, 
            {id: '3', value: 3, answer: 'Damos el valor mínimo que acepte un cliente contra el dinero pagado.' }, 
            {id: '2', value: 2, answer: 'No nos importa el valor que damos con respecto al precio y nos enfocamos a minimizar costes sin importarnos el tema.' }, 
            {id: '1', value: 1, answer: 'No es un tema relevante en la empresa.' } 
        ]},
    ]},
    { id: 'GO', name: 'Gobiernos', questions: [
       { id: 'GO_1', dim: 'etica', question: '¿Cuenta la empresa con una política clara para  el respeto y cumplimiento de la normativa legal vigente (auditoría lega)?', answers: [ 
            {id: '5', value: 5, answer: 'Sí contamos con una política sobre el cumplimiento de la normatividad vigente.' }, 
            {id: '4', value: 4, answer: 'Hemos tomado algunas medidas al respecto pero no se han documentado en una política.' }, 
            {id: '3', value: 3, answer: 'Hemos realizado acciones esporádicas sobre el tema.' }, 
            {id: '2', value: 2, answer: 'No contamos con iniciativas al respecto.' }, 
            {id: '1', value: 1, answer: 'No lo consideramos un tema relevante.' } 
        ]},
        { id: 'GO_2', dim: 'etica', question: 'La empresa se somete a todas las leyes vigentes y participa en la promoción y mejora de sus reglamentos y aplicación', answers: [ 
            {id: '5', value: 5, answer: 'Respeto y cumplo la normativa legal por convicción y tengo establecidos políticas internas que la incluyan.' }, 
            {id: '4', value: 4, answer: 'Respeto y cumplo la normativa legal por convicción.' }, 
            {id: '3', value: 3, answer: 'Respeto y cumplo la normativa legal para no tener problemas.' }, 
            {id: '2', value: 2, answer: 'Respeto y cumplo la normativa legal cuando me conviene.' }, 
            {id: '1', value: 1, answer: 'No respeto ni cumplo la normativa legal.' } 
        ]},
        { id: 'GO_3', dim: 'etica', question: '¿Existe una política clara y aplicada de no participación en actos de corrupción?', answers: [ 
            {id: '5', value: 5, answer: 'Sí contamos con una política anticorrupción que emana de nuestro código de ética.' }, 
            {id: '4', value: 4, answer: 'Hemos tomado algunas medidas al respecto pero no se han documentado en una política.' }, 
            {id: '3', value: 3, answer: 'Hemos realizado acciones esporádicas sobre el tema.' }, 
            {id: '2', value: 2, answer: 'No contamos con iniciativas al respecto.' }, 
            {id: '1', value: 1, answer: 'No lo consideramos un tema relevante.' } 
        ]},
        /* { id: 'GO_4', dim: 'etica', question: '¿Participa la empresa en programas de gobierno para el desarrollo y bieestar social de las comunidades cercanas a su ubicacion?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]}, */
        { id: 'GO_5', dim: 'etica', question: 'La empresa colabora con las autoridades en todo aquello que es de su competencia para contribuir al bienestar de la sociedad?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, la empresa participa permanentemene  junto con las autoridades en diversos proyectos sociales.' }, 
            {id: '4', value: 4, answer: 'Sí, estamos iniciando un nuevo proyecto social junto con las autoridades.' }, 
            {id: '3', value: 3, answer: 'En alguna ocasión hemos hecho algo pero dejamos de participar.' }, 
            {id: '2', value: 2, answer: 'No hemos tenido ningún acercamiento pero podríamos hacerlo.' }, 
            {id: '1', value: 1, answer: 'No nos involucramos al respecto.' } 
        ]},
        { id: 'GO_6', dim: 'calidad', question: '¿Tiene la empresa programas de comunicación interna y externa para fomentar la conciencia y participación cívica y social?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, permanentemente comunicamos sobre la importancia de la participación cívica y social de todos en la empresa, lo promovemos.' }, 
            {id: '4', value: 4, answer: 'Sabemos que la participación cívica y social es importante, por ello la promovemos en algunos momentos de coyuntura.' }, 
            {id: '3', value: 3, answer: 'Hemos llevado a cabo iniciativas aisladas pero no han continuado.' }, 
            {id: '2', value: 2, answer: 'No hemos realizado acciones al respecto pero podría ser positivo.' }, 
            {id: '1', value: 1, answer: 'No nos preocupa la participación cívica y social.' } 
        ]},
        { id: 'GO_7', dim: 'calidad', question: '¿Participan los directivos activamente en organismos intermedios?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, nos interesa estar en todos los espacios posibles, es una manera de participar activamente con el gobierno y la sociedad.' }, 
            {id: '4', value: 4, answer: 'Sí, algunos directivos participan en organismos de este tipo.' }, 
            {id: '3', value: 3, answer: 'Alguna vez nos hemos involucrado pero dejamos de hacerlo.' }, 
            {id: '2', value: 2, answer: 'Nunca lo hemos hecho pero lo hemos considerado.' }, 
            {id: '1', value: 1, answer: 'No lo consideramos relevante.' } 
        ]},
        { id: 'GO_8', dim: 'calidad', question: '¿Propicia la empresa la participación de los colaboradores en Comités de organismos intermedios?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, nos interesa estar en todos los espacios posibles, es una manera de participar activamente con el gobierno y la sociedad.' }, 
            {id: '4', value: 4, answer: 'Sí, algunos directivos participan en organismos de este tipo.' }, 
            {id: '3', value: 3, answer: 'Alguna vez nos hemos involucrado pero dejamos de hacerlo.' }, 
            {id: '2', value: 2, answer: 'Nunca lo hemos hecho pero lo hemos considerado.' }, 
            {id: '1', value: 1, answer: 'No lo consideramos relevante.' } 
        ]},
        { id: 'GO_9', dim: 'calidad', question: '¿La empresa evalúa la efectividad e impacto de su participación político/social?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, se elabora un informe anual en el cual se evalúa el impacto de nuestra participación social.' }, 
            {id: '4', value: 4, answer: 'Hemos intentado medir el impacto pero no resulta sencillo y seguimos buscando la mejor forma de hacerlo.' }, 
            {id: '3', value: 3, answer: 'Tenemos algunas iniciativas de participación pero nunca hemos evaluado su impacto.' }, 
            {id: '2', value: 2, answer: 'No tenemos acciones de participación político/ social.' }, 
            {id: '1', value: 1, answer: 'No lo consideramos relevante.' } 
        ]},
        { id: 'GO_10', dim: 'calidad', question: 'La empresa fomenta en todos los estamentos que puede, la participación cívica y social', answers: [ 
            {id: '5', value: 5, answer: 'Fomento la participación cívica de manera sistematizada con boletines informativos, proponiendo servicio comunitario anual o semestral.' }, 
            {id: '4', value: 4, answer: 'Fomento la participación cívica de manera sistematizada con boletines informativos.' }, 
            {id: '3', value: 3, answer: 'Fomento la participación cívica de manera esporádica.' }, 
            {id: '2', value: 2, answer: 'Tengo interés en fomentar la participación cívica pero no he hecho nada al respecto.' }, 
            {id: '1', value: 1, answer: 'No tengo interés en fomentar la participación cívica.' } 
        ]},
        { id: 'GO_11', dim: 'riqueza', question: '¿Existen programas y/o eventos en la empresa que permitan a todos sus grupos involucrados concientizarse de la importancia de cumplir con sus obligaciones fiscales?', answers: [ 
            {id: '5', value: 5, answer: 'Contamos con un programa permanente para promover el cumplimiento fiscal dentro de nuestros stakeholders.' }, 
            {id: '4', value: 4, answer: 'Hemos tomado algunas medidas al respecto pero no se ha dado seguimiento.' }, 
            {id: '3', value: 3, answer: 'Hemos realizado acciones esporádicas sobre el tema.' }, 
            {id: '2', value: 2, answer: 'No contamos con iniciativas al respecto.' }, 
            {id: '1', value: 1, answer: 'No lo consideramos relevante.' } 
        ]},
        { id: 'GO_12', dim: 'riqueza', question: '¿Cuenta la empresa con una política que impida y sancione la evasión fiscal?', answers: [ 
            {id: '5', value: 5, answer: 'Contamos con una política sobre evasión fiscal y la cumplimos cabalmente.' }, 
            {id: '4', value: 4, answer: 'Hemos realizado algunas acciones al respecto pero no se ha dado seguimiento.' }, 
            {id: '3', value: 3, answer: 'Hemos realizado acciones esporádicas sobre el tema.' }, 
            {id: '2', value: 2, answer: 'No contamos con iniciativas al respecto.' }, 
            {id: '1', value: 1, answer: 'No lo consideramos relevante.' } 
        ]},
        { id: 'GO_13', dim: 'riqueza', question: '¿Se cuenta con una política anticorrupción que prohíba expresamente la compra de voluntades con la finalidad de conseguir ventajas, servicios, contratos, autorizaciones, permisos, etc.?', answers: [ 
            {id: '5', value: 5, answer: 'Sí contamos con una política anticorrupción que emana de nuestro código de ética.' }, 
            {id: '4', value: 4, answer: 'Hemos tomado algunas medidas al respecto pero no se han documentado en una política.' }, 
            {id: '3', value: 3, answer: 'Hemos realizado acciones esporádicas sobre el tema.' }, 
            {id: '2', value: 2, answer: 'No contamos con iniciativas al respecto.' }, 
            {id: '1', value: 1, answer: 'No lo consideramos un tema relevante.' } 
        ]},
        { id: 'GO_14', dim: 'riqueza', question: '¿Cuenta la empresa con un informe periódico sobre conflictos legales?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, realizamos un informe anual el cual es evaluado y se brinda seguimiento.' }, 
            {id: '4', value: 4, answer: 'No tenemos un informe como tal pero posibles conflictos legales es algo que se monitorea con frecuencia.' }, 
            {id: '3', value: 3, answer: 'Hemos realizado un informe alguna vez pero no se ha continuado.' }, 
            {id: '2', value: 2, answer: 'No contamos con iniciativas al respecto.' }, 
            {id: '1', value: 1, answer: 'No lo consideramos relevante.' } 
        ]},
        { id: 'GO_15', dim: 'riqueza', question: 'La empresa paga puntualmente los impuestos que le corresponden, argumentando en los foros adecuados los que considera injustos pero no evadiéndolos por esa causa', answers: [ 
            {id: '5', value: 5, answer: 'Tengo políticas que establecen el pago de impuestos sistemáticamente.' }, 
            {id: '4', value: 4, answer: 'Pago impuestos de manera regular y me pongo al corriente de lo que no he pagado.' }, 
            {id: '3', value: 3, answer: 'Pago impuestos de manera regular.' }, 
            {id: '2', value: 2, answer: 'Pago impuestos irregularmente.' }, 
            {id: '1', value: 1, answer: 'No pago impuestos debidamente.' } 
        ]},
    ]},
    { id: 'CO', name: 'Comunidad', questions: [
        { id: 'CO_1', dim: 'etica', question: '¿Se Incluye en la gestión empresarial el desarrollo de las familias de los colaboradores y la comunidad?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_2', dim: 'etica', question: '¿Se aplica un mecanismo frecuente de información y retroalimentación, hacia y desde estos grupos: familia, vecino,  poblados, consuimdores, etc.?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_3', dim: 'etica', question: '¿Se analiza el posible impacto social negativo de las decisiones y en su caso se asumen responsablemente las consecuencias?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_4', dim: 'etica', question: '¿Cuenta la empresa con un programa de voluntariado interno que promueva el desarrollo de sus miembros y de la comunidad cercana, fortaleciendo el tejido social?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_5', dim: 'etica', question: 'Se icentiva y promueve a proveedores de nuesta localidad a trabajar con la empresa, favoreciéndolos siempre y cuando consigan al menos las mismas condiciones que los de otras localidades', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_6', dim: 'calidad', question: '¿La empresa cuenta con mecanismos documentados que  promuevan y permitan la participación de sus colaboradores e inversión en proyectos de participación cívica, gremiales y sociales?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_7', dim: 'calidad', question: '¿La empresa participa en asociaciones del sector para promover agendas en función del Bien Común de la comunidad cercana o, en su caso, de la región?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_8', dim: 'calidad', question: '¿La empresa cuenta con una política de relación y cooperación con las OSC´s para colaborar en proyectos comunes?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_9', dim: 'calidad', question: '¿Evalúa la empresa el impacto de su participación social y gremial?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, se elabora un informe anual en el cual se evalúa el impacto de nuestra participación social.' }, 
            {id: '4', value: 4, answer: 'Hemos intentado medir el impacto pero no resulta sencillo y seguimos buscando la mejor forma de hacerlo.' }, 
            {id: '3', value: 3, answer: 'Tenemos algunas iniciativas de participación pero nunca hemos evaluado su impacto.' }, 
            {id: '2', value: 2, answer: 'No tenemos acciones de participación político/ social.' }, 
            {id: '1', value: 1, answer: 'No lo consideramos relevante.' } 
        ]},
        { id: 'CO_10', dim: 'calidad', question: '¿Existe un informe específico, con indicadores de impacto, de las causas sociales y gremiales apoyadas por la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_11', dim: 'calidad', question: 'Nos aseguramos que el  talento adecuado llegue a cada puesto de trabajo, eliminando por completo cualquier barrera que pueda dificultar o impedir el acceso a dichos puestos a personas de grupos minoritarios o en condiciones de desventaja', answers: [ 
            {id: '5', value: 5, answer: 'En el proceso de selección de las personas, una vez cumplido el perfil y capacidades, el color de su piel, apariencia física, preferencia religiosa o sexual NO influye institucionalmente en la decisión, hay una política cuyo cumplimiento se vigila formal y periódicamente y se difunde proactivamente en todos los medios empleados para el reclutamiento.' }, 
            {id: '4', value: 4, answer: 'En el proceso de selección de las personas, una vez cumplido el perfil y capacidades, el color de su piel, apariencia física, preferencia religiosa o sexual NO influye institucionalmente en la decisión y hay una política cuyo cumplimiento se vigila formal y periódicamente.' }, 
            {id: '3', value: 3, answer: 'En el proceso de selección de las personas, una vez cumplido el perfil y capacidades, el color de su piel, apariencia física, preferencia religiosa o sexual NO influye subjetivamente en la decisión aunque no se reconozca de manera formal.' }, 
            {id: '2', value: 2, answer: 'En el proceso de selección de las personas, una vez cumplido el perfil y capacidades, el color de su piel, apariencia física, preferencia religiosa o sexual influye subjetivamente en la decisión aunque no se reconozca de manera formal.' }, 
            {id: '1', value: 1, answer: 'En el proceso de selección de las personas, una vez cumplido el perfil y capacidades, el color de su piel, apariencia física, preferencia religiosa o sexual es determinante en la decisión y todo mundo sabe que no debe contratar personas que tienen ciertas características.' } 
        ]},
        { id: 'CO_12', dim: 'riqueza', question: '¿La organización cuenta con un censo que brinde información de las necesidades materiales y sociales de la(s) comunidad(es) en la(s) que está(n) insertos??', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_13', dim: 'riqueza', question: '¿Realiza la empresa sus actividades en condiciones y ambiente de trabajo que respete y mejore el entorno social y cultural de la comunidad?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_14', dim: 'riqueza', question: '¿La empresa implementa una política que contribuye al desarrollo de nuevas empresas y la mejora del ambiente empresarial en la comunidad?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_15', dim: 'riqueza', question: '¿Pone la empresa al servicio de la comunidad bienes propios?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, y se ejerce mediante un programa anual aprobado por el consejo de administración y en el que pueden participar todos los colaboradores que lo deseen.' }, 
            {id: '4', value: 4, answer: 'Sí hay un presupuesto anual para el servicio a la comunidad pero se ejerce sin planeación.' }, 
            {id: '3', value: 3, answer: 'Alguna vez se destinó algo de presupuesto pero fue una sola ocasión.' }, 
            {id: '2', value: 2, answer: 'No se ha hecho hasta ahora.' }, 
            {id: '1', value: 1, answer: 'No lo consideramos relevante.' } 
        ]},
        { id: 'CO_16', dim: 'riqueza', question: '¿Existe en la empresa un mecanismo que le permita conocer como la evalúa la comunidad?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_17', dim: 'riqueza', question: '¿Han realizado un censo del impacto social y cultural que se genera alrededor de su actividad?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_18', dim: 'riqueza', question: 'Privilegiamos en la medida de lo razonable, siempre contratar a personas de nuestra localidad', answers: [ 
            {id: '5', value: 5, answer: 'Para inversiones de crecimiento en la empresa o para nuevas inversiones en otros negocios, procuro hacerlo, en igualdad de circunstancias en cuanto a capacidades y disponibilidad, en la comunidad donde creció mi empresa para dar más empleo en ese lugar.' }, 
            {id: '4', value: 4, answer: 'Promuevo activamente las vacantes de mi empresa en la comunidad donde está inserta y procuro seleccionar en igualdad de circunstancias a quien está vinculado con la comunidad. La selección se hace en base a un protocolo plasmado en una política que promueve este comportamiento y se revisa formal y periódicamente.' }, 
            {id: '3', value: 3, answer: 'Promuevo activamente las vacantes de mi empresa en la comunidad donde está inserta y procuro seleccionar en igualdad de circunstancias a quien está vinculado con la comunidad, pero la selección al final se hace de manera discrecional.' }, 
            {id: '2', value: 2, answer: 'Una vez que se cumple el perfil y el interés de la persona, trato de seleccionar en igualdad de circunstancias a quien está vinculado con la comunidad donde está inserta la empresa.' }, 
            {id: '1', value: 1, answer: 'Contrato a cualquier persona que cumpla con el perfil que se postule para el puesto.' } 
        ]},
        { id: 'CO_19', dim: 'riqueza', question: 'De manera proactiva, estudiamos las debilidades de nuestra comunidad e invertimos recursos y tiempo de las personas en impactar positivamente en ellas', answers: [ 
            {id: '5', value: 5, answer: 'La empresa, a través de sus ejecutivos y colaboradores, es un actor clave en la resolución de los problemas de su comunidad inmediata y de la comunidad ampliada en el municipio, el estado y el país. Se promueve y facilita que los colaboradores dediquen cierto número de horas al mes para trabajar en proyectos que encabeza la empresa y/o en proyectos que encabezan otros (asociaciones, personas) y repercuten en el Bien Común y/o en otros proyectos que resuelven problemas que son del interés del colaborador, debidamente documentados y previamente aprobados. Esto está plasmado en una política a la que se le da seguimiento formal e institucional y se promueve ampliamente en la organización.' }, 
            {id: '4', value: 4, answer: 'La empresa a través del dueño o director y sus ejecutivos, colabora continuamente en proyectos para resolver problemas que afectan a toda la comunidad y/o facilita que sus ejecutivos colaboren directa y periódicamente en asociaciones que buscan resolver problemas de la industria a la que pertenece la empresa y/o de asociaciones que promueven proyectos de interés general para la comunidad cercana y ampliada (municipio / estado).' }, 
            {id: '3', value: 3, answer: 'La empresa a través del dueño o director, colabora continuamente en proyectos para resolver problemas que afectan a toda la comunidad y/o colabora directa y periódicamente en asociaciones que buscan resolver problemas de la industria a la que pertenece la empresa.' }, 
            {id: '2', value: 2, answer: 'La empresa a través del dueño o director, colabora esporádicamente en proyectos de la comunidad que resuelven problemas que afectan directamente a la empresa.' }, 
            {id: '1', value: 1, answer: 'En la empresa domina la idea de que la resolución de los problemas de la comunidad es responsabilidad del gobierno y/o de que el tiempo que se le paga a los trabajadores es propiedad exclusiva de la empresa y por tanto solo debe dedicarse a actividades productivas de la misma.' } 
        ]},
    ]},
    { id: 'CP', name: 'Competencia', questions: [
        { id: 'CP_1', dim: 'etica', question: '¿Cuenta la empresa cuenta con una política clara que rechaza y sanciona la piratería, contrabando, evasión fiscal, falsificación y adulteración de marcas y productos en toda su cadena de negocios?', answers: [ 
            {id: '5', value: 5, answer: 'Es un tema muy relevante, tenemos una política muy clara y la hacemos valer siempre.' }, 
            {id: '4', value: 4, answer: 'Tenemos una política pero hace falta monitorear su cumplimiento.' }, 
            {id: '3', value: 3, answer: 'Es un tema relevante en el cual hemos tomado algunas medidas.' }, 
            {id: '2', value: 2, answer: 'No tenemos una política pero rechazamos esas prácticas en lo general.' }, 
            {id: '1', value: 1, answer: 'No es un tema en el que tengamos una posición.' } 
        ]},
        { id: 'CP_2', dim: 'etica', question: '¿Fomenta la empresa el respeto al marco legal en el desarrollo de sus productos y su sector en beneficio de los consumidores?', answers: [ 
            {id: '5', value: 5, answer: 'El respeto al marco legal es fundamental y tomamos acciones al respecto, beneficiar al consumidor es una prioridad.' }, 
            {id: '4', value: 4, answer: 'Generalmente lo hacemos pero en ocasiones lo llegamos a pasar por alto.' }, 
            {id: '3', value: 3, answer: 'Si, pero no somos del todo consistentes en nuestras acciones.' }, 
            {id: '2', value: 2, answer: 'Buscamos respetar el marco legal, pero el beneficio del consumidor no puede estar en nuestro perjuicio.' }, 
            {id: '1', value: 1, answer: 'Lo más importante es incrementar nuestro negocio, a veces buscamos vacíos legales.' } 
        ]},
        { id: 'CP_3', dim: 'etica', question: '¿Se prohíbe en la empresa el descredito de competidores y el comportamiento desleal?', answers: [ 
            {id: '5', value: 5, answer: 'Hay una política clara al respecto, y se firma por todos los colaboradores al momento de ser contratados.' }, 
            {id: '4', value: 4, answer: 'Sí. Está prohibida cualquier acción al respecto, pero es de manera informal.' }, 
            {id: '3', value: 3, answer: 'En ocasiones se ha caído en acciones poco éticas y se ha sancionado.' }, 
            {id: '2', value: 2, answer: 'Se procura evitar pero no tenemos control de lo que hacen todos los colaboradores.' }, 
            {id: '1', value: 1, answer: 'No nos metemos en el tema.' } 
        ]},
        { id: 'CP_4', dim: 'etica', question: '¿Rechazan acuerdos comerciales de precio y/o territorios para “explotar al mercado” en detrimento de los consumidores? (Prácticas monopólicas)', answers: [ 
            {id: '5', value: 5, answer: 'Si, estos acuerdos no son aceptados en la empresa, cualquier práctica monopólica es evitada ya que privilegiamos el beneficio al consumidor.' }, 
            {id: '4', value: 4, answer: 'No tenemos una política formal pero evitamos este tipo de acuerdos comerciales.' }, 
            {id: '3', value: 3, answer: 'Lo rechazamos mientras no nos afecte especialmente.' }, 
            {id: '2', value: 2, answer: 'A veces resultan convenientes estos acuerdos y los hemos aceptado.' }, 
            {id: '1', value: 1, answer: 'Toda estrategia es válida.' } 
        ]},
        { id: 'CP_5', dim: 'etica', question: '¿La empresa promueve en conjunto con sus competidores la participación en proyectos de desarrollo social comunitario?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, cada año hacemos un programa sobre algunos proyectos que juntos trabajamos en la comunidad y lo evaluamos al concluir.' }, 
            {id: '4', value: 4, answer: 'Hemos realizado diversas acciones en conjunto pero nos falta dar seguimiento y evaluar.' }, 
            {id: '3', value: 3, answer: 'Alguna vez tuvimos un proyecto junto con uno de nuestros competidores pero no se repitió.' }, 
            {id: '2', value: 2, answer: 'Participamos en proyectos comunitarios pero por nuestra cuenta.' }, 
            {id: '1', value: 1, answer: 'No lo consideramos como algo que pudiéramos hacer.' } 
        ]},
        { id: 'CP_6', dim: 'etica', question: 'En la empresa competimos únicamente a base de ganarnos la preferencia de los clientes por ser quienes mejor servimos a sus intereses legítimos y no por cualquier otro método inmoral, desleal o ilegal para desacreditar a un competidor', answers: [ 
            {id: '5', value: 5, answer: 'Juego limpio siempre por convicción y todas mis estrategias de mercado son legales y transparentes.' }, 
            {id: '4', value: 4, answer: 'Juego limpio siempre por convicción.' }, 
            {id: '3', value: 3, answer: 'Juego limpio siempre para no tener problemas.' }, 
            {id: '2', value: 2, answer: 'Juego limpio sólo cuando me conviene.' }, 
            {id: '1', value: 1, answer: 'Juego sucio y hago trampa para ganar mayor parte en el mercado.' } 
        ]},
        { id: 'CP_7', dim: 'calidad', question: '¿Tiene la empresa establecidos mecanismos de acercamiento sanos con sus competidores y las autoridades para evitar prácticas monopólicas?', answers: [ 
            {id: '5', value: 5, answer: 'Si, tenemos acciones muy concretas con las que buscamos evitar estas prácticas, participamos en diálogos permanentes con autoridades y competidores al respecto.' }, 
            {id: '4', value: 4, answer: 'Tenemos algunos acercamientos con competidores al respecto y trabajamos con autoridades para evitar estas prácticas.' }, 
            {id: '3', value: 3, answer: 'Nunca nos hemos planteado este tipo de acciones, pero consideramos negativas cualquier práctica monopólica.' }, 
            {id: '2', value: 2, answer: 'No nos interesa acercarnos a los competidores.' }, 
            {id: '1', value: 1, answer: 'El negocio es lo primordial, mientras más participación en el mercado tengamos, mejor.' } 
        ]},
        { id: 'CP_8', dim: 'calidad', question: '¿Cuenta la empresa con estudios comparativos de sus prácticas laborales, respecto a sus competidores?', answers: [ 
            {id: '5', value: 5, answer: 'Sí revisamos nuestras prácticas laborales permanentemente con relación al estándar del sector, lo consideramos relevante.' }, 
            {id: '4', value: 4, answer: 'Procuramos hacerlo con frecuencia pero no lo hemos hecho sistemáticamente.' }, 
            {id: '3', value: 3, answer: 'Hemos hecho algún estudio pero no se dio seguimiento.' }, 
            {id: '2', value: 2, answer: 'No es un tema que hayamos trabajado pero puede ser una buena idea iniciar.' }, 
            {id: '1', value: 1, answer: 'No, cada quien a lo suyo y con sus modelos de negocio.' } 
        ]},
        { id: 'CP_9', dim: 'calidad', question: '¿La empresa participa en gremios profesionales y sectoriales relacionados?', answers: [ 
            {id: '5', value: 5, answer: 'Lo consideramos importante y procuramos que colaboradores de todos los niveles posibles participen en los espacios disponibles.' }, 
            {id: '4', value: 4, answer: 'Solemos participar pero sólo a nivel directivo.' }, 
            {id: '3', value: 3, answer: 'Algunas veces hemos participado pero se ha dejado.' }, 
            {id: '2', value: 2, answer: 'Creemos que sería útil pero nunca nos hemos involucrado.' }, 
            {id: '1', value: 1, answer: 'No nos interesa.' } 
        ]},
        { id: 'CP_10', dim: 'calidad', question: '¿Existe un mecanismo que permita conocer cómo los evalúa su competencia?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, es una evaluación periódica que consideramos importante para nuestro modelo de negocio.' }, 
            {id: '4', value: 4, answer: 'Sí, tenemos una encuesta que aplicamos, pero falta tomar acción sobre sus resultados.' }, 
            {id: '3', value: 3, answer: 'Alguna vez se realizó algo al respecto pero no se continuó.' }, 
            {id: '2', value: 2, answer: 'Lo hemos valorado pero no hemos implementado algo al respecto.' }, 
            {id: '1', value: 1, answer: 'No nos interesa ser evaluados por la competencia.' } 
        ]},
        { id: 'CP_11', dim: 'riqueza', question: '¿Existen programas/eventos, en la empresa, que involucren el desarrollo de una legal y sana competencia?', answers: [ 
            {id: '5', value: 5, answer: 'Sí tenemos un programa sólido que promueve una competencia leal y sana en el sector.' }, 
            {id: '4', value: 4, answer: 'Tenemos algunas acciones implementadas pero no les hemos dado seguimiento adecuado.' }, 
            {id: '3', value: 3, answer: 'Se han realizado algunas iniciativas al respecto pero han sido aisladas.' }, 
            {id: '2', value: 2, answer: 'Es un tema importante que deberíamos empezar a considerar.' }, 
            {id: '1', value: 1, answer: 'No, cada quien su negocio.' } 
        ]},
        { id: 'CP_12', dim: 'riqueza', question: '¿Tiene y aplica la empresa una política de competencia justa?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, es parte de nuestras políticas y la monitoreamos con frecuencia.' }, 
            {id: '4', value: 4, answer: 'No tenemos una política aunque procuramos impulsar la competencia justa.' }, 
            {id: '3', value: 3, answer: 'Si la tenemos pero en la práctica no la aplicamos.' }, 
            {id: '2', value: 2, answer: 'No hemos trabajado en ese tema.' }, 
            {id: '1', value: 1, answer: 'No lo consideramos un tema relevante.' } 
        ]},
        { id: 'CP_13', dim: 'riqueza', question: 'Comprendemos la necesidad de que un sector productivo negocie sus intereses justos de forma colectiva y en esa medida participamos en los órganos que para ello existen y ayudamos en las legítimas negociaciones para defender los intereses de todos.', answers: [ 
            {id: '5', value: 5, answer: 'Siempre participamos en los órganos que ayuden en las legítimas negociaciones para defender los intereses de todos, en el marco de un sector productivo para la obtención de intereses justos de forma colectiva y damos continuidad a los acuerdos.' }, 
            {id: '4', value: 4, answer: 'Participamos en los órganos que ayuden en las legítimas negociaciones para defender los intereses de todos, en el marco de un sector productivo para la obtención de intereses justos de forma colectiva, pero no damos seguimiento.' }, 
            {id: '3', value: 3, answer: 'Participamos ocasionalmente en los órganos que ayuden en las legítimas negociaciones para defender los intereses de todos, en el marco de un sector productivo para la obtención de intereses justos de forma colectiva.' }, 
            {id: '2', value: 2, answer: 'Alguna vez hemos participado en algunos órganos que ayuden en este tema, pero dejamos de hacerlo.' }, 
            {id: '1', value: 1, answer: 'No es un tema relevante para la empresa.' } 
        ]},
        { id: 'CP_14', dim: 'riqueza', question: 'Limitamos las negociaciones con competidores a los acuerdos sectoriales, rechazando cualquier otro tipo de trato que genere poder de mercado en perjuicio de los clientes', answers: [ 
            {id: '5', value: 5, answer: 'Rechazamos carteles, obedecemos las condiciones legales que marca el mercado y tenemos políticas que las incluye.' }, 
            {id: '4', value: 4, answer: 'Rechazamos carteles y obedecemos las condiciones legales que marca el mercado.' }, 
            {id: '3', value: 3, answer: 'Rechazamos cárteles por convicción.' }, 
            {id: '2', value: 2, answer: 'Rechazamos cárteles para no tener problemas.' }, 
            {id: '1', value: 1, answer: 'No unimos a cárteles ilegales.' } 
        ]},
    ]},
    { id: 'GF', name: 'Medioambiente', questions: [
       { id: 'GF_1', dim: 'etica', question: '¿Desarrolla la empresa programas de formación para el respeto y cuidado de la casa común (medio ambiente) en la elaboración, distribución y uso de sus productos?', answers: [ 
            {id: '5', value: 5, answer: 'Es muy importante para la empresa y tenemos un programa en operación que se actualiza anualmente.' }, 
            {id: '4', value: 4, answer: 'Si, tenemos un programa pero no funciona al 100%.' }, 
            {id: '3', value: 3, answer: 'Se han realizado algunas iniciativas pero no tienen continuidad.' }, 
            {id: '2', value: 2, answer: 'Por nuestro giro no generamos contaminación.' }, 
            {id: '1', value: 1, answer: 'El medio ambiente es un tema relevante para la empresa.' } 
        ]},
        { id: 'GF_2', dim: 'etica', question: '¿Se conoce y respeta el marco legal relativo al impacto ambiental de sus productos y/o servicios?', answers: [ 
            {id: '5', value: 5, answer: 'Conocemos la normativa y nos actualizamos al respecto, cada proceso del negocio la cumple, es muy importante.' }, 
            {id: '4', value: 4, answer: 'Procuramos respetar la normatividad en nuestras operaciones.' }, 
            {id: '3', value: 3, answer: 'Conocemos la normativa pero no se respeta en su totalidad.' }, 
            {id: '2', value: 2, answer: 'Sólo el abogado de la empresa conoce la normativa, hace falta difusión.' }, 
            {id: '1', value: 1, answer: 'No lo conocemos.' } 
        ]},
        { id: 'GF_3', dim: 'etica', question: '¿La empresa tiene un programa de reducción de su impacto ambiental negativo?', answers: [ 
            {id: '5', value: 5, answer: 'Si, contamos con un programa y lo evaluamos y actualizamos anualmente.' }, 
            {id: '4', value: 4, answer: 'Estamos implementando acciones pero falta mayor seguimiento.' }, 
            {id: '3', value: 3, answer: 'Se han implementado medidas aisladas.' }, 
            {id: '2', value: 2, answer: 'No tenemos un programa al respecto.' }, 
            {id: '1', value: 1, answer: 'No es un tema que sea relevante.' } 
        ]},
        { id: 'GF_4', dim: 'etica', question: '¿Cuenta con programas de investigación y rediseño para dismunir el impacto ambiental y el consumo de energía?', answers: [ 
            {id: '5', value: 5, answer: 'Si, contamos con un programa y lo evaluamos y actualizamos anualmente.' }, 
            {id: '4', value: 4, answer: 'Estamos implementando acciones pero falta mayor seguimiento y evaluación.' }, 
            {id: '3', value: 3, answer: 'Se han implementado medidas aisladas.' }, 
            {id: '2', value: 2, answer: 'No tenemos un programa al respecto.' }, 
            {id: '1', value: 1, answer: 'La energía no es un tema que sea relevante.' } 
        ]},
        { id: 'GF_5', dim: 'calidad', question: 'Trabajamos para optimizar los procesos para generar los menos residuos posibles, de los residuos indispensables, maximizar los que sean reciclables y de los no reciclables, disponer por los medios óptimos de resguardo por un agente especializado', answers: [ 
            {id: '5', value: 5, answer: 'Contamos con los procesos para optimizar los residuos, contamos con procesos de reciclaje y contamos con agentes especializados, además de acuerdo a procesos damos un seguimiento para la adecuada optimización de los residuos, reciclaje y lo hacemos de la mano de agentes especializados.' }, 
            {id: '4', value: 4, answer: 'Contamos con los procesos para optimizar los residuos, contamos con procesos de reciclaje y contamos con agentes especializados.' }, 
            {id: '3', value: 3, answer: 'Ocasionalmente optimizamos los residuos de acuerdo a residuos posibles, tenemos pocos procesos de reciclaje y no contamos con resguardos de agentes especializados.' }, 
            {id: '2', value: 2, answer: 'Optimizamos los residuos  y no contamos con procesos de reciclajes, ni  contamos con resguardos de agentes especializados.' }, 
            {id: '1', value: 1, answer: 'No contamos con procesos  para tener menos residuos posibles, no tenemos procesos de reciclaje y no contamos con resguardos de agentes especializados.' } 
        ]},
        { id: 'GF_6', dim: 'calidad', question: '¿Participa la empresa en programas comunitarios locales y regionales de mejora del medio ambiente?', answers: [ 
            {id: '5', value: 5, answer: 'Si, procuramos estar como empresa en diversos espacios en la materia y que todos los colaboradores posibles se involucren.' }, 
            {id: '4', value: 4, answer: 'Es común la participación pero no se involucra a todo el personal.' }, 
            {id: '3', value: 3, answer: 'En ocasiones algunos colaboradores han participado.' }, 
            {id: '2', value: 2, answer: 'No participamos pero nos interesaría hacerlo.' }, 
            {id: '1', value: 1, answer: 'No es un tema relevante para la empresa.' } 
        ]},
        { id: 'GF_7', dim: 'calidad', question: '¿Incorporan en sus políticas y prácticas el reconocimiento del impacto negativo de sus operaciones en las generaciones futuras y se ocupa de reducirlo?', answers: [ 
            {id: '5', value: 5, answer: 'Siempre consideramos este aspecto en nuestras operaciones, la empresa tiene clara conciencia de la importancia de considerar a las generaciones futuras.' }, 
            {id: '4', value: 4, answer: 'Procuramos medir el impacto de nuestras operaciones en el medio ambiente pero hacen falta acciones para reducirlo. ' }, 
            {id: '3', value: 3, answer: 'Estamos iniciando a estudiar el impacto de las operaciones, buscaremos implementar acciones para reducirlo.' }, 
            {id: '2', value: 2, answer: 'Es un tema importante pero nunca hemos estudiado ni considerado.' }, 
            {id: '1', value: 1, answer: 'No es un tema considerado relevante.' } 
        ]},
        { id: 'GF_8', dim: 'calidad', question: '¿Existen programas de eficiencia energética y economía circular?', answers: [ 
            {id: '5', value: 5, answer: 'Es un tema relevante y nuestro programa se ejecuta y evalúa permanentemente, siempre buscamos hacer más.' }, 
            {id: '4', value: 4, answer: 'No tenemos un programa aunque sí realizamos acciones en la materia cada año.' }, 
            {id: '3', value: 3, answer: 'Hemos hecho algunas iniciativas pero se han perdido con el tiempo.' }, 
            {id: '2', value: 2, answer: 'Sabemos que es un tema relevante pero no hemos trabajado al respecto.' }, 
            {id: '1', value: 1, answer: 'No es un tema de la empresa.' } 
        ]},
        { id: 'GF_9', dim: 'calidad', question: '¿En la empresa se utilizan energías renovables?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, es una prioridad para nosotros el contar con este tipo de energía en todo lo que sea posible.' }, 
            {id: '4', value: 4, answer: 'Si, en una parte de la energía consumida, pero no en la totalidad.' }, 
            {id: '3', value: 3, answer: 'Aún no , pero tenemos ya el plan para  invertir en infraestructura de este tipo en el corto plazo.' }, 
            {id: '2', value: 2, answer: 'Quisiéramos hacerlo pero no hay presupuesto.' }, 
            {id: '1', value: 1, answer: 'No, utilizamos la que es más económica.' } 
        ]},
        { id: 'GF_10', dim: 'calidad', question: 'En la empresa hacemos lo necesario para que se consuma la menos energía posible,  para que la consumamos contamine muy poco o nada e idealmente devolvera a la red en alguna forma:', answers: [ 
            {id: '5', value: 5, answer: 'En la empresa monitoreamos puntualmente la cantidad de energía que entra en nuestras instalaciones y en cada actividad, y se compara vs. la que se debiera consumir en cada caso según estándares establecidos. Tratamos toda la energía que utilizamos bajo estándares internacionales antes de que salga de nuestras instalaciones y reutilizamos gran parte de ella en nuestros procesos habituales.' }, 
            {id: '4', value: 4, answer: 'Tenemos un plan de energía que utilizamos bajo estándares internacionales antes de que salga de nuestras instalaciones y tenemos un plan de ahorro de energía.' }, 
            {id: '3', value: 3, answer: 'Monitoreamos puntualmente la cantidad de energía que entra en nuestras instalaciones y en cada proceso, y se compara vs. la que se debiera consumirse en cada caso según estándares establecidos. Tenemos un plan de ahorro de energía que ocasionalmente cotejamos contra gasto.' }, 
            {id: '2', value: 2, answer: 'En la empresa se usa toda la energía necesaria para nuestras actividades y la que no se trata de ahorrar.' }, 
            {id: '1', value: 1, answer: 'En la empresa se usa toda la energía necesaria para los procesos productivos y de servicios. No sabemos el balance de energía que entra y sale de nuestras instalaciones.' } 
        ]},
        { id: 'GF_11', dim: 'calidad', question: 'En la empresa se hace lo necesario para consumir la menos agua posible, evitando también su contaminación con nuestras operaciónes', answers: [ 
            {id: '5', value: 5, answer: 'Tratamos toda el agua que utilizamos bajo estándares internacionales antes de que salga de nuestras instalaciones y reutilizamos gran parte de ella en nuestros procesos habituales. Concientizamos permanentemente a nuestros colaboradores para que hagan un uso eficiente del agua dentro de nuestras instalaciones y en el resto de sus actividades personales y familiares. Invertimos en investigación con instituciones y colegas de la industria para eficientar los procesos / servicios que consumen agua.' }, 
            {id: '4', value: 4, answer: 'Tratamos toda el agua que utilizamos bajo estándares internacionales antes de que salga de nuestras instalaciones y reutilizamos gran parte de ella en nuestros procesos habituales. Concientizamos permanentemente a nuestros colaboradores para que hagan un uso eficiente del agua dentro de nuestras instalaciones y en el resto de sus actividades personales y familiares.' }, 
            {id: '3', value: 3, answer: 'Monitoreamos puntualmente la cantidad de agua que entra en nuestras instalaciones y en cada proceso, y se compara vs. la que se debiera consumir en cada caso según estándares establecidos. Reutilizamos gran parte del agua en nuestros procesos habituales.' }, 
            {id: '2', value: 2, answer: 'En la empresa se usa toda el agua necesaria para nuestras actividades y la que se desecha es tratada según las normas que establece la autoridad.' }, 
            {id: '1', value: 1, answer: 'En la empresa se usa toda el agua necesaria para los procesos productivos y de servicios. No sabemos el balance de agua que entra y sale de nuestras instalaciones.' } 
        ]},
        { id: 'GF_12', dim: 'calidad', question: 'Se propone la empresa emitir los mínimos posibles (o nulos) contaminantes al aire', answers: [ 
            {id: '5', value: 5, answer: 'Se siguen cabalmente los procesos para el cuidado del aire.' }, 
            {id: '4', value: 4, answer: 'Ocasionalmente se siguen los procesos para el cuidado del aire.' }, 
            {id: '3', value: 3, answer: 'Contamos con procesos para el cuidado del aire pero no los seguimos.' }, 
            {id: '2', value: 2, answer: 'Se han desarrollado algunos procesos para el cuidado del aire pero no se ha seguido ningún tipo de acción para el cuidado del aire.' }, 
            {id: '1', value: 1, answer: 'No contemplamos las emisiones de contaminantes del aire de ninguna forma, ni contamos con ningún proceso para el cuidado del aire.' } 
        ]},
        { id: 'GF_13', dim: 'calidad', question: 'La empresa en la medida de lo posible mantiene e incrementa los espacios verdes de su entorno', answers: [ 
            {id: '5', value: 5, answer: 'Se siguen procesos para el mantenimiento de los espacios verdes y se cuenta con plan que se lleva a cabo para el incremento de los espacios verdes.' }, 
            {id: '4', value: 4, answer: 'Ocasionalmente mantenemos los espacios verdes y contamos con un plan de incremento de los espacios verdes, al menos con aquellos que se encuentran a nuestro cargo.' }, 
            {id: '3', value: 3, answer: 'Contamos con procesos para el mantenimiento de los espacios verdes en nuestro entorno y ya se contempla al menos a la gente que se encuentra a nuestro cargo.' }, 
            {id: '2', value: 2, answer: 'Desarrollamos un plan para el mantenimiento de los espacios verdes en nuestro entorno y no contemplamos ni a la gente que se encuentra a nuestro cargo.' }, 
            {id: '1', value: 1, answer: 'No mantenemos de ninguna manera los espacios verdes, ni tenemos un plan de incremento de los espacios verdes.' } 
        ]},
        { id: 'GF_14', dim: 'riqueza', question: '¿La organización cuenta con políticas que apoyen la investigación y el desarrollo como un factor para mejorar su competitividad?', answers: [ 
            {id: '5', value: 5, answer: 'Es muy importante para la empresa y tenemos una política que incentiva la investigación y el desarrollo de productos.' }, 
            {id: '4', value: 4, answer: 'Si, tenemos investigación pero no hemos podido aterrizar en nuevos productos.' }, 
            {id: '3', value: 3, answer: 'Se han realizado algunas iniciativas pero no tienen continuidad.' }, 
            {id: '2', value: 2, answer: 'Nos gustaría pero no tenemos presupuesto.' }, 
            {id: '1', value: 1, answer: 'No es tema que la empresa esté considerando.' } 
        ]},
        { id: 'GF_15', dim: 'riqueza', question: '¿Desarrolla la empresa programas que difundan la importancia de la conservación del medio ambiente?', answers: [ 
            {id: '5', value: 5, answer: 'Si, procuramos una difusión permanente es un tema relevante para la empresa.' }, 
            {id: '4', value: 4, answer: 'Tenemos varias acciones al respecto pero le falta seguimiento.' }, 
            {id: '3', value: 3, answer: 'No como programa pero ha habido algunas iniciativas.' }, 
            {id: '2', value: 2, answer: 'No lo hemos hecho hasta ahora.' }, 
            {id: '1', value: 1, answer: 'No es un tema relevante.' } 
        ]},
        { id: 'GF_16', dim: 'riqueza', question: '¿Diseñan procesos, productos y servicios amables con el medio ambiente?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, es una prioridad para la empresa, en todos nuestros productos damos prioridad a los de menor impacto ambiental.' }, 
            {id: '4', value: 4, answer: 'Si consideramos este aspecto siempre, salvo alguna excepción por costo.' }, 
            {id: '3', value: 3, answer: 'Se procura considerar este aspecto en el diseño pero no es obligatorio.' }, 
            {id: '2', value: 2, answer: 'Algunos son amigables con el medio ambiente pero por casualidad, no es intención diseñarlos así.' }, 
            {id: '1', value: 1, answer: 'No es la prioridad, lo importante es incrementar ventas.' } 
        ]},
        { id: 'GF_17', dim: 'riqueza', question: '¿Cuentan con un programa de inversión para  mejorar su grado de reuso y reciclaje?', answers: [ 
            {id: '5', value: 5, answer: 'Sí, hay un presupuesto anual destinado para ello y evaluamos su impacto.' }, 
            {id: '4', value: 4, answer: 'Si tenemos algo de recurso destinado a esta labor pero nunca hemos medido cuál ha sido el beneficio.' }, 
            {id: '3', value: 3, answer: 'En alguna ocasión realizamos alguna iniciativa pero no se siguió realizando.' }, 
            {id: '2', value: 2, answer: 'Nos gustaría invertir en estos temas pero no tenemos presupuesto.' }, 
            {id: '1', value: 1, answer: 'No interesa a la empresa invertir en eso.' } 
        ]},
        { id: 'GF_18', dim: 'riqueza', question: '¿Cuentan con una política o programa de retribución al medio ambiente por las afectaciones generadas a partir de su actividad?', answers: [ 
            {id: '5', value: 5, answer: 'Si, es una política importante para la empresa, cada año realizamos algunas iniciativas y las evaluamos.' }, 
            {id: '4', value: 4, answer: 'Tenemos diversas acciones pero nos falta dar seguimiento.' }, 
            {id: '3', value: 3, answer: 'Ha habido alguna iniciativa al respecto pero ha sido aislada.' }, 
            {id: '2', value: 2, answer: 'Es un tema importante, hemos pensado hacer algo pero aún no iniciamos.' }, 
            {id: '1', value: 1, answer: 'No se tiene nada al respecto.' } 
        ]},
        { id: 'GF_19', dim: 'riqueza', question: '¿Realiza una auditoría ambiental externa?', answers: [ 
            {id: '5', value: 5, answer: 'Si, es un tema muy relevante para la empresa y se realiza anualmente.' }, 
            {id: '4', value: 4, answer: 'Se realizó una vez pero sin seguimiento.' }, 
            {id: '3', value: 3, answer: 'No se realiza auditoría pero ocasionalmente se ha realizado una revisión interna de nuestros procesos.' }, 
            {id: '2', value: 2, answer: 'No realizamos.' }, 
            {id: '1', value: 1, answer: 'No es un tema relevante para la empresa.' } 
        ]},
    ]},
]


export default stkhs