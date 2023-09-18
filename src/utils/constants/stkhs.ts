import { IStkh } from '../interfaces/types';

const stkhs: IStkh[] = [
    { id: 'AI', name: 'Socios y Accionistas', questions: [
        { id: 'AI_1', dim: 'etica', question: '¿Los dueños o accionistas participan en la definición de los principios y valores de la empresa, y en la evaluación de cómo se viven?', answers: [ 
            {id: '5', value: 5, answer: 'Están involucrados en todo el proceso y dan seguimiento a la evaluación de cómo se viven en la empresa.' }, 
            {id: '4', value: 4, answer: 'Se involucran en su definición y los aprueban.' }, 
            {id: '3', value: 3, answer: 'Unicamente los aprueban.' }, 
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
        { id: 'AI_3', dim: 'etica', question: '¿Existe y tiene vida un código de conducta/ética, acorde a los valores y principios de la empresa, que guie y comprometa la actuación de los accionistas y regule la relación entre dueños y el manejo de la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Tenemos un código muy claro y completo y es ampliamente difundido.' }, 
            {id: '4', value: 4, answer: 'Si hay un código e integra temas respecto a la actuación de accionistas, pero no es conocido por los colaboradores.' }, 
            {id: '3', value: 3, answer: 'Existe un código pero no se incluye nada respecto a la actuación de los accionistas.' }, 
            {id: '2', value: 2, answer: 'Sí pero el código no está acorde a los valores y principios de la empresa. ' }, 
            {id: '1', value: 1, answer: 'La empresa no tiene código de conducta/ética.' } 
        ]},
        { id: 'AI_4', dim: 'etica', question: '¿Existe un mecanismo de solución de conflictos relativos a la vivencia de los valores y principios entre la dirección general y el accionista?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'AI_5', dim: 'etica', question: '¿Tienen los accionistas acceso a la información del negocio de manera regular, oportuna y suficiente que asegure la confianza en la actuación integral de la dirección?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'AI_6', dim: 'etica', question: '¿El consejo de administración participa y aprueba  la planeación estratégica de la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'AI_7', dim: 'etica', question: '¿Se cuenta con un mecanismo periódico de revisión y solución de posibles conflictos de interés de accionistas?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'AI_8', dim: 'etica', question: '¿La congruencia e impacto con que se viven los principios y valores de la empresa son motivo de orgullo para los accionistas e inversionistas?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'AI_', dim: 'etica', question: 'A través del cumplimiento de nuestro propósito y de nuestro modelo de gestión, damos motivos para que los accionistas se sientan orgullosos, más allá de la generación de valor económico', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'AI_10', dim: 'calidad', question: '¿La Empresa cuenta con una estrategia de vinculación aentre los Accionistas e inversionistas y los grupos relacionados de la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Si hay una estrategia integral.' }, 
            {id: '4', value: 4, answer: 'Existe una estrategia pero no con todos los stakeholders.' }, 
            {id: '3', value: 3, answer: 'Hay algunas iniciativas pero falta mayor seguimiento.' }, 
            {id: '2', value: 2, answer: 'Se han hecho algunos esfuerzos pero no se han logrado concretar.' }, 
            {id: '1', value: 1, answer: 'No existe dicha estrategia' } 
        ]},
        { id: 'AI_11', dim: 'calidad', question: '¿Se tiene establecido un programa de diálogo permanente con Accionistas e inversionistas para involucrarlos y comprometerlos en el proceso de RSE?', answers: [ 
            {id: '5', value: 5, answer: 'Los accionistas están involucrados en todo lo relativo a RSE.' }, 
            {id: '4', value: 4, answer: 'Los accionistas se involucran intermitentemente, falta más diálogo.' }, 
            {id: '3', value: 3, answer: 'Existe un proceso con iniciativas en materia de RSE pero los accionistas no se involucran.' }, 
            {id: '2', value: 2, answer: 'Hay interés en la RSE pero no se cuenta con un proceso al respecto.' }, 
            {id: '1', value: 1, answer: 'No tenemos un proceso de RSE.' } 
        ]},
        { id: 'AI_12', dim: 'calidad', question: '¿Existe un programa de Evaluación del impacto en la calidad de vida de sus grupos relacionados y se informa a los accionistas e inversionistas?', answers: [ 
            {id: '5', value: 5, answer: 'Se cuenta con un programa formal y los accionistas están informados de sus resultados.' }, 
            {id: '4', value: 4, answer: 'Se ha establecido un programa aunque su implementación no es sistemática.' }, 
            {id: '3', value: 3, answer: 'Los accionistas no están informados de las acciones que se realizan al respecto.' }, 
            {id: '2', value: 2, answer: 'Existen algunas iniciativas informales y ocasionales al respecto.' }, 
            {id: '1', value: 1, answer: 'No se tiene nada parecido.' } 
        ]},
        { id: 'AI_13', dim: 'calidad', question: 'Contamos con una robusta estrategia de negocio y tenemos identificados y cubiertos todos los posibles riesgos a los que la sociedad se puede someter', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'AI_14', dim: 'riqueza', question: '¿Existen programas/eventos, en la empresa, que involucren la formación/concientización de los accionistas e inversionistas respecto de la responsabilidad de reducir la desigualdad?', answers: [ 
            {id: '5', value: 5, answer: 'La reducción de la desigualdad es prioritario para la empresa y hay un programa formal y en ejecución.' }, 
            {id: '4', value: 4, answer: 'Los accionistas están interesados en el tema y se trabajan iniciativas al respecto.' }, 
            {id: '3', value: 3, answer: 'Existen algunas iniciativas aisladas pero no han dado resultados.' }, 
            {id: '2', value: 2, answer: 'Se tiene conciencia del tema pero no hay ninguna iniciativa al respecto.' }, 
            {id: '1', value: 1, answer: 'El tema de la desigualdad no es relevante para la empresa.' } 
        ]},
        { id: 'AI_15', dim: 'riqueza', question: '¿Cuentan con programas de Inducción a los objetivos económicos, sociales, ambientales y de gobierno?', answers: [ 
            {id: '5', value: 5, answer: 'Si, se imparte la inducción al ingresar a la empresa y se revisa/actualiza y difunden modificaciones de forma periódica y a todo el personal.' }, 
            {id: '4', value: 4, answer: 'Se procura comunicar los objetivos de la empresa pero no a todos los niveles.' }, 
            {id: '3', value: 3, answer: 'Existe una inducción para nuevos colaboradores pero no se actualiza la información con el tiempo.' }, 
            {id: '2', value: 2, answer: 'Los objetivos se conocen de manera informal.' }, 
            {id: '1', value: 1, answer: 'No se comunican los objetivos de la empresa.' } 
        ]},
        { id: 'AI_16', dim: 'riqueza', question: '¿Existe una política de reparto de dividendos que  retribuya a los inversionistas según lo acordado parte del valor económico agregado?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'AI_17', dim: 'riqueza', question: '¿Se realizan reuniones periódicas para informar a los inversionistas de la marcha y resultados de la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'AI_18', dim: 'riqueza', question: '¿La situación económica, los estados financieros de la organización son informados a los Accionistas e inversionistas de manera adecuada y periódica?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'AI_19', dim: 'riqueza', question: '¿Se asegura que eno exista información privilegiada que beneficie a unos accionistas e inversionistas con menoscabo de los intereses de otros, o incluso de la propia empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'AI_20', dim: 'riqueza', question: '¿Se desarrollan Planes de inversión de innovación y/o de rentabilidad?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'AI_21', dim: 'riqueza', question: 'La rentabilidad de la empresa es competitiva y certeramente superior al tipo de interés de inversiones financieras sin riesgo', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
    ]},
    { id: 'CB', name: 'Colaboradores', questions: [
        { id: 'CB_1', dim: 'etica', question: 'La misión, visión, valores y el código de ética de la organización son difundidos a todo el personal a través de charlas, inducción de nuevas contrataciones, estrategias y planes de comunicación?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' }
        ]},
        { id: 'CB_2', dim: 'etica', question: '¿Los directivos y colaboradores comparten y viven  los valores, el código de ética y conducta en sus actividades, sobre todo ante dilemas, situaciones conflictivas?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_3', dim: 'etica', question: '¿La empresa cuenta con una política que vela por la promoción el respeto de los derechos humanos universales en la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_4', dim: 'etica', question: '¿La dirección aplica mecanismos de información, planeación, avance, resultados y retroalimentación, hacia y desde los colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_5', dim: 'etica', question: '¿La organización cuenta con mecanismos concretos para medir la congruencia entre el decir y hacer del grupo ejecutivo?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_6', dim: 'etica', question: '¿La empresa respeta la libertad de credo de sus colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_7', dim: 'etica', question: '¿La organización forma a sus colaboradores en los valores de la empresa para ayudar a vivirlos en el trabajo?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_8', dim: 'etica', question: 'La empresa motiva a través de la formación y la coherencia entre los valores y principios éticos de la misma y promueve la actitud positiva y proactiva individual de todos sus colaboradores.', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_9', dim: 'etica', question: '¿El principio de respeto a la "dignidad de la persona" es comprendido y ampliamente promovido y vivido en la organización?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_10', dim: 'etica', question: '¿Los colaboradores participan en la planeación estratégica de la empresa, incluyendo los aspectos relacionados con su dimensión trascendente?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_11', dim: 'etica', question: '¿Se brindan estímulos para vivir los valores institucionales en la emepresa?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_12', dim: 'etica', question: '¿Se realiza un censo sobre la calidad de vida para los colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_13', dim: 'etica', question: '¿Sientes que la empresa le da importancia a la vida familiar y te ayuda a ser un mejor padre o madre en tu casa?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_14', dim: 'etica', question: 'La comunicación a mis colaboradores', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_15', dim: 'etica', question: 'En mi empresa se brinda la capacitación necesaria para el buen desempeño y desarrollo de los colaboradores', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_16', dim: 'etica', question: 'Me aseguro que se difunda la filosofía y los valores que le dan un sustento a su razón de ser', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_17', dim: 'calidad', question: '¿Existen programas/eventos, que permitan a su organización estar al tanto y cumplir con la legislación laboral y los cambios que en ésta se presenten?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_18', dim: 'calidad', question: '¿Existe un Sistema de Evaluación del Potencial de desarrollo y plan de vida y carrera de los colaboradores que propicie el auto crecimiento?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_19', dim: 'calidad', question: '¿Tiene la empresa una política de selección y contratación con procesos claros y transparentes?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_20', dim: 'calidad', question: '¿Cuenta la empresa con una política de no discriminación, definida formalmente al interior de la organización, e incluyente de todo tipo de personas?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_21', dim: 'calidad', question: '¿La empresa cuenta con un sistema evaluación y reconocimiento del desempeño de sus colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_22', dim: 'calidad', question: '¿Cuentan con mecanismos que permitan incentivar la participación y la productividad de los colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_23', dim: 'calidad', question: '¿Cuenta la empresa con políticas que promueven el respeto a la dignidad e integridad de las personas?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_24', dim: 'calidad', question: '¿La empresa tiene programas de apoyo a la maternidad/paternidad y al cuidado de los hijos de los colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_25', dim: 'calidad', question: '¿Cuentan con esquemas (como un buzón de sugerencias) que promuevan la participación de sus colaboradores en la gestión de la empresa, y reconoce las iniciativas de los mismos?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_26', dim: 'calidad', question: '¿La empresa cuenta con espacios y mecanismos de diálogo transparentes entre administración y colaboradores en lo particular, y con la representación sindical, en su caso?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_27', dim: 'calidad', question: '¿La empresa procura la calidad de vida de sus colaboradores a través de programas que ayuden al balance de la vida laboral con la vida e integración familiar?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_28', dim: 'calidad', question: '¿La empresa realiza estudios  de ambiente  laboral (anónimo), y se promueve un clima laboral positivo??', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_29', dim: 'calidad', question: 'Las condiciones de trabajo de mi empresa son seguras, ergonómicas y promueven un buen ambiente para los colaboradores', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_30', dim: 'calidad', question: 'En mi empresa hago lo necesario para que mis colaboradores  cuentan con un trabajo seguro y estable', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_31', dim: 'riqueza', question: '¿La dirección desarrolla programas para formar en economía, finanzas personanles y familiares a las personas que integran la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_32', dim: 'riqueza', question: '¿La empresa posee una política integral, justa y transparente de remuneraciones que mejora año a año?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_33', dim: 'riqueza', question: '¿La empresa cuenta con un sistema de bonos por cumplimiento de metas/productividad/participación de utilidades?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_34', dim: 'riqueza', question: '¿Cuenta la empresa con un sistema de beneficios al personal más allá de lo legal que sea aplicado con justicia y equidad para todos y no discriminatorio?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_35', dim: 'riqueza', question: '¿Existe algún tablero de control y seguimiento con indicadores sobre el avance en la satisfacción de las necesidades de sus colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_36', dim: 'riqueza', question: '¿Se lleva a cabo una auditoría en asuntos laborales revisando los temas legales y las prácticas y lineamientos señalados por los accionistas? remuneraciones, inclusión, capacitación, promociones, trabajo en equipos, delegación, participación, etc.', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_37', dim: 'riqueza', question: '¿Existe un plan de formación de patrimonio para los colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_38', dim: 'riqueza', question: '¿Existe un plan de participación en el capital para los colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_39', dim: 'riqueza', question: '¿Existe un sistema de contabilidad por stakeholders sobre el Estado de Distribución de Riqueza generado por la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_40', dim: 'riqueza', question: '¿Existe un semáforo del bienestar de los colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_41', dim: 'riqueza', question: '¿Existe una política de compensación extraordinaria ligada a resultados para los colaboradores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_42', dim: 'riqueza', question: 'El sueldo que otorgo a los colaboradores de mi empresa es:', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_43', dim: 'riqueza', question: 'El paquete de prestaciones y beneficios que otorgo a los colaboradores de mi empresa es:', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CB_44', dim: 'riqueza', question: 'En mi empresa procuro que la brecha salarial sea menor entre las posiciones operativas y gerenciales', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
    ]},
    { id: 'PV', name: 'Provedores', questions: [
        { id: 'PV_1', dim: 'etica', question: '¿La organización cuenta con un programa para difundir los valores y principios de la organización en la cadena de proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_2', dim: 'etica', question: 'En general, nos aseguramos que las personas que conforman nuestros proveedores sean afines a nosotros, relacionándose con sus grupos de interés de forma similar a la nuestra y compartiendo nuestros principios y valoes', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_3', dim: 'etica', question: '¿Se generan condiciones de competenca leal, transparente y de respeto, sin importar el poder económico o presencia de mercado de cada uno de los proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_4', dim: 'etica', question: '¿Cuenta la empresa con instrumentos que aseguran el respeto de la propiedad intelectual de los proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_5', dim: 'etica', question: '¿Existen programas de trabajo con proveedores para el mejoramiento mutuo y la congruencia con sus principios y códigos de conducta?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_6', dim: 'etica', question: '¿Existe  un plan de innovación y productividad de mediano plazo para proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_7', dim: 'etica', question: '¿Se realizan evaluaciones comparativas de las ofertas de proveedores para elegir y transparentar las decisiones de compra?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_8', dim: 'calidad', question: '¿Cuenta la empresa con mecanismos, transparentes y legales que le permitan conocer las prácticas laborales de sus proveedores', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_9', dim: 'calidad', question: '¿Existen reglas sobre las atenciones o regalos que los colaboradores pueden aceptar de los proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_10', dim: 'calidad', question: '¿La empresa cuenta con reglas precisas y documentadas para el trato respetuoso con sus proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_11', dim: 'calidad', question: '¿Se tienen establecidos mecanismos precisos para la conciliación de diferendos con sus proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_12', dim: 'calidad', question: '¿Existen programas o estrategias que incentiven las buenas prácticas laborales entre sus proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_13', dim: 'calidad', question: '¿Cuenta la empresa con procesos claros y transparentes para la selección, contratación y evaluación de proveedores', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_14', dim: 'calidad', question: '¿Se rechaza la posibilidad de trabajar con proveedores que tengan  malas prácticas laborales o ambientales?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_15', dim: 'calidad', question: '¿Se aplica una encuesta anual (anónima) a provedores, respecto a la relación comercial con la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_16', dim: 'riqueza', question: '¿Cuenta a empresa con políticas de negociación justa y equilibrada con sus proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_17', dim: 'riqueza', question: '¿La empresa posee y cumple una política de pago a sus proveedores, con indicadores, que obligue al respeto de lo pactado y les permita su sustentabilidad económica en el tiempo?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_18', dim: 'riqueza', question: '¿Cuenta la empresa con programas y/o eventos que involucren el desarrollo de sus proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_19', dim: 'riqueza', question: '¿Privilegia la empresala contratación de proveedores locales con el fin de contribuir al desarrollo de la misma comunidad?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_20', dim: 'riqueza', question: '¿Se desarrollan sistemáticamente acciones proactivas y recurrentes para detectar las necesidades de sus proveedores y contribuir a su desarrollo?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_21', dim: 'riqueza', question: '¿Existen mecanismos que le permitan a la empresa conocer Óomo es evaluada por sus proveedores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_22', dim: 'riqueza', question: 'Pagamos en condiciones y plazos exigentes pero razonables y de mercado', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'PV_23', dim: 'riqueza', question: 'Sin excepción, honramos nuestra palabra y respetamos todo lo que ofrecemos y acordamos con nuestros proveedores', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
    ]},
    { id: 'CL', name: 'Clientes', questions: [
        { id: 'CL_1', dim: 'etica', question: '¿Están los productos y/o servicios ligados en su imagen y presentación a los principios y valores de la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_2', dim: 'etica', question: '¿Proporciona la empresa de manera transparente la información necesaria sobre sus productos y/o servicios?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_3', dim: 'etica', question: '¿Cuenta con sistemas frecuentes de información y retroalimentación hacia este grupo?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_4', dim: 'etica', question: '¿Se tiene presente la dignidad de la persona en todas las actividades de venta, publicidad y promoción?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_5', dim: 'etica', question: '¿La empresa cumple con lo prometido en sus productos, en calidad, servicio, cantidad y oportunidad?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_6', dim: 'etica', question: '¿Se llevan a cabo contratos de garantía, con los lineamientos que señala la Ley de protección al consumidor, señalando los alcances y limitaciones e indemnizaciones, procedimientos para quejas, etc , a los que puede tener acceso los clientes?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_7', dim: 'etica', question: '¿La empresa cuenta con una política de ventas que sanciona/impide el uso de pagos indebidos o beneficios implícitos para concretar ventas?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_8', dim: 'etica', question: '¿Capacita la empresa a su personal en la importancia de la ética en la relación y el servicio a clientes?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_9', dim: 'etica', question: 'Damos buen trato a todos los clientes y propiciamos una comunicación abierta en todo momento', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_10', dim: 'etica', question: 'Sin excepción, honramos nuestra palabra y respetamos todo lo que ofrecemos y acordamos con nuestros clientes', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_11', dim: 'etica', question: 'En general, buscamos que las personas que conforman nuestros clientes sean afines a nosotros, relacionándose con sus grupos de interés de forma similar a la nuestra y compartiendo nuestros principios', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_12', dim: 'calidad', question: '¿Proporciona la empresa de manera veraz, transparente y completa la información sobre sus productos y/o servicios?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_13', dim: 'calidad', question: '¿La empresa utiliza insumos que cumplen las normas de calidad obligatorias en la fabricación de sus productos y/o servicios?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_14', dim: 'calidad', question: '¿La empresa facilita la información necesaria sobre seguridad y salubridad de los productos y sobre instrucciones de uso adecuado?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_15', dim: 'calidad', question: '¿Cuenta la empresa con políticas precisas para el trato respetuoso con sus clientes, consumidores y distribuidores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_16', dim: 'calidad', question: '¿Cuenta la empresa con políticas sobre reparación, indemnización y/o canje en caso de productos o servicios defectuosos?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_17', dim: 'calidad', question: '¿La empresa cuenta con normas de etiquetado de acuerdo a la normatividad vigente?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_18', dim: 'calidad', question: '¿Se tiene contratado algún seguro de daños o responsabilidad civil en lo referente a sus productos?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_19', dim: 'calidad', question: '¿Cuentan con mecanismos permanentes para la evaluación de la satisfacción de sus clientes, consumidores y distribuidores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_20', dim: 'calidad', question: '¿Cuenta la empresa con una política de atención a clientes, incluyendo encuestas de satisfacción y manejo de quejas y reclamaciones?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_21', dim: 'riqueza', question: '¿Cuenta la empresa con políticas de negociación justa con sus distribuidores que consideren el beneficio al cliente final?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_22', dim: 'riqueza', question: '¿Existen programas y/o eventos en la empresa que involucren el desarrollo empresarial de sus distribuidores y clientes?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_23', dim: 'riqueza', question: '¿Implementan planes de venta justos, transparentes y veraces para sus productos y servicios?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_24', dim: 'riqueza', question: '¿La empresa realiza sistemáticamente estudios de mercado para tomar en cuenta las necesidades de diferentes sectores para diseñar y diversificar sus productos y servicios?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_25', dim: 'riqueza', question: '¿Existe un mecanismo que le permita a la empresa conocer la satisfacción de sus Distribuidores Clientes y Consumidores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_26', dim: 'riqueza', question: '¿Cuenta la empresa con políticas que eviten prácticas monopólicas en perjucio de los consumidores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_27', dim: 'riqueza', question: 'Vendemos siempre a los precios que optimicen el valor tanto a los clientes como a nosotros, no haciendo uso nunca de poder de mercado abusivo', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_28', dim: 'riqueza', question: '¿Ofrecemos a nuestros clientes condiciones  competitivas de pago?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CL_29', dim: 'riqueza', question: 'Nos aseguramos de que nuestros clientes siempre obtengan utilidad económica de lo que nos compran, es decir, que el valor que nuestros productos y servicios siempre sea mayor al precio que pagan por ellos', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
    ]},
    { id: 'GO', name: 'Gobiernos', questions: [
       { id: 'GO_1', dim: 'etica', question: '¿Cuenta la empresa con una política clara para  el respeto y cumplimiento de la normativa legal vigente (auditoría lega)?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GO_2', dim: 'etica', question: 'La empresa se somete a todas las leyes vigentes y participa en la promoción y mejora de sus reglamentos y aplicación', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GO_3', dim: 'etica', question: '¿Existe una política clara y aplicada de no participación en actos de corrupción?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GO_4', dim: 'etica', question: '¿Participa la empresa en programas de gobierno para el desarrollo y bieestar social de las comunidades cercanas a su ubicacion?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GO_5', dim: 'etica', question: 'La empresa colabora con las autoridades en todo aquello que es de su competencia para contribuir al bienestar de la sociedad?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GO_6', dim: 'calidad', question: '¿Tiene la empresa programas de comunicación interna y externa para fomentar la conciencia y participación cívica y social?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GO_7', dim: 'calidad', question: '¿Participan los directivos activamente en organismos intermedios?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GO_8', dim: 'calidad', question: '¿Propica la empresa la participación de los colaboradores en Comités de organismos intermedios', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GO_9', dim: 'calidad', question: '¿La empresa evalúa la efectividad e impacto de su participación político/social?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GO_10', dim: 'calidad', question: 'La empresa fomenta en todos los estamentos que puede, la participación cívica y social', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GO_11', dim: 'riqueza', question: '¿Existen programas y/o eventos en la empresa que permitan a todos sus grupos involucrados concientizarse de la importancia de cumplir con sus obligaciones fiscales?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GO_12', dim: 'riqueza', question: '¿Cuenta la empresa con una política que impida y sancione la evasión fiscal?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GO_13', dim: 'riqueza', question: '¿Se cuenta con una política anticorrupción que prohíba expresamente la compra de voluntades con la finalidad de conseguir ventajas, servicios, contratos, autorizaciones, permisos, etc.?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GO_14', dim: 'riqueza', question: '¿Cuenta la empresa con un informe periódico sobre conflictos legales?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GO_15', dim: 'riqueza', question: 'La empresa paga puntualmente los impuestos que le corresponden, argumentando en los foros adecuados los que considera injustos pero no evadiéndolos por esa causa', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
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
        { id: 'CO_9', dim: 'calidad', question: '¿Evalúa la eempresa el impacto de su participación social y gremial?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_10', dim: 'calidad', question: '¿Existe un informe específico, con indicadores de impacto, de las causas sociales y gremiales apoyadas por la empresa?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_11', dim: 'calidad', question: 'Nos aseguramos que el  talento adecuado llegue a cada puesto de trabajo, eliminando por completo cualquier barrera que pueda dificultar o impedir el acceso a dichos puestos a personas de grupos minoritarios o en condiciones de desventaja', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
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
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
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
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CO_19', dim: 'riqueza', question: 'De manera proactiva, estudiamos las debilidades de nuestra comunidad e invertimos recursos y tiempo de las personas en impactar positivamente en ellas', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
    ]},
    { id: 'CP', name: 'Competencia', questions: [
        { id: 'CP_1', dim: 'etica', question: '¿Cuenta la empresa cuenta con una política clara que rechaza y sanciona la piratería, contrabando, evasión fiscal, falsificación y adulteración de marcas y productos en toda su cadena de negocios?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CP_2', dim: 'etica', question: '¿Fomenta la empresa el respeto al marco legal en el desarrollo de sus productos y su sector en beneficio de los consumidores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CP_3', dim: 'etica', question: '¿Se prohíbe en la empresa el descredito de competidores y el comportamiento desleal?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CP_4', dim: 'etica', question: '¿Rechazan acuerdos comerciales de precio y/o territorios para “explotar al mercado” en detrimento de los consumidores? (Prácticas monopólicas)', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CP_5', dim: 'etica', question: '¿La empresa promueve en conjunto con sus competidores la participación en proyectos de desarrollo social comunitario?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CP_6', dim: 'etica', question: 'En la empresa competimos únicamente a base de ganarnos la preferencia de los clientes por ser quienes mejor servimos a sus intereses legítimos y no por cualquier otro método inmoral, desleal o ilegal para desacreditar a un competidor', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CP_7', dim: 'calidad', question: '¿Tiene la empresa establecidos mecanismos de acercamiento sanos con sus competidores y las autoridades para evitar prácticas monopólicas?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CP_8', dim: 'calidad', question: '¿Cuenta la empresa con estudios comparativos de sus prácticas laborales, respecto a sus competidores?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CP_9', dim: 'calidad', question: '¿La empresa participa en gremios profesionales y sectoriales relacionados?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CP_10', dim: 'calidad', question: '¿Existe un mecanismo que permita conocer cómo los evalúa su competencia?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CP_11', dim: 'riqueza', question: '¿Existen programas/eventos, en la empresa, que involucren el desarrollo de una legal y sana competencia?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CP_12', dim: 'riqueza', question: '¿Tiene y aplica la empresa una política de competencia justa?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CP_13', dim: 'riqueza', question: 'Comprendemos la necesidad de que un sector productivo negocie sus intereses justos de forma colectiva y en esa medida participamos en los órganos que para ello existen y ayudamos en las legítimas negociaciones para defender los intereses de todos', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'CP_14', dim: 'riqueza', question: 'Limitamos las negociaciones con competidores a los acuerdos sectoriales, rechazando cualquier otro tipo de trato que genere poder de mercado en perjuicio de los clientes', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
    ]},
    { id: 'GF', name: 'Generaciones Futuras', questions: [
       { id: 'GF_1', dim: 'etica', question: '¿Desarrolla la empresa programas de formación para el respeto y cuidado de la casa común (medio ambiente) en la elaboración, distribución y uso de sus productos?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_2', dim: 'etica', question: '¿Se conoce y respeta el marco legal relativo al impacto ambiental de sus productos y/o servicios?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_3', dim: 'etica', question: '¿La empresa tiene un programa de reducción de su impacto ambiental negativo?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_4', dim: 'etica', question: '¿Cuenta con programas de investigación y rediseño para dismunir el impacto ambiental y el consumo de energía?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_5', dim: 'calidad', question: 'Trabajamos para optimizar los procesos para generar los menos residuos posibles, de los residuos indispensables, maximizar los que sean reciclables y de los no reciclables, disponer por los medios óptimos de resguardo por un agente especializado', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_6', dim: 'calidad', question: '¿Participa la empresa en programas comunitarios locales y regionales de mejora del medio ambiente?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_7', dim: 'calidad', question: '¿Incorporan en sus políticas y prácticas el reconocimiento del impacto negativo de sus operaciones en las generaciones futuras y se ocupa de reducirlo?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_8', dim: 'calidad', question: '¿Existen programas de eficiencia energética y economía circular?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_9', dim: 'calidad', question: '¿En la empresa se utilizan energías renovables?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_10', dim: 'calidad', question: 'En la empresa hacemos lo necesario para que se consuma la menos energía posible,  para que la consumamos contamine muy poco o nada e idealmente devolvera a la red en alguna forma:', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_11', dim: 'calidad', question: 'En la empresa se hace lo necesario para consumir la menos agua posible, evitando también su contaminación con nuestras operaciónes', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_12', dim: 'calidad', question: 'Se propone la empresa emitir los mínimos posibles (o nulos) contaminantes al aire', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_13', dim: 'calidad', question: 'La empresa en la medida de lo posible mantiene e incrementa los espacios verdes de su entorno', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_14', dim: 'riqueza', question: '¿La organización cuenta con políticas que apoyen la investigación y el desarrollo como un factor para mejorar su competitividad?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_15', dim: 'riqueza', question: '¿Desarrolla la empresa programas que difundan la importancia de la conservación del medio ambiente?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_16', dim: 'riqueza', question: '¿Diseñan procesos, productos y servicios amables con el medio ambiente?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_17', dim: 'riqueza', question: '¿Cuentan con un programa de inversión para  mejorar su grado de reuso y reciclaje?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_18', dim: 'riqueza', question: '¿Cuentan con una política o programa de retribución al medio ambiente por las afectaciones generadas a partir de su actividad?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
        { id: 'GF_19', dim: 'riqueza', question: '¿Realiza una auditoría ambiental externa?', answers: [ 
            {id: '5', value: 5, answer: 'Superior5' }, 
            {id: '4', value: 4, answer: 'Superior4' }, 
            {id: '3', value: 3, answer: 'Superior3' }, 
            {id: '2', value: 2, answer: 'Promedio' }, 
            {id: '1', value: 1, answer: 'Inferior' } 
        ]},
    ]},
]

/* 


*/

export default stkhs