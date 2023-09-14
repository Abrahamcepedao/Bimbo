import { IStkh } from '../interfaces/types';

const stkhs_short: IStkh[] = [
    { id: 'AI', name: 'Socios y Accionistas', questions: [
        { id: 'AI_1', dim: 'riqueza', question: '¿Los accionistas reciben un retorno acorde a la media de la industria?', answers: [ {id: '3', answer: 'Superior', value: 3 }, {id: '2', answer: 'Promedio', value: 2 }, {id: '1', answer: 'Inferior', value: 1 } ] },
        { id: 'AI_2', dim: 'etica', question: '¿Los accionistas tienen acceso oportuno a la información financiera y de gestión de la empresa?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] },
        { id: 'AI_3', dim: 'calidad', question: '¿Los accionistas están orgullosos de las prácticas de RSE centrada en la persona que han implementado en su empresa?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] }
    ]},
    { id: 'CB', name: 'Colaboradores', questions: [
        { id: 'CB_1', dim: 'riqueza', question: '¿Los colaboradores reciben una remuneración que corresponde al trabajo y valor agregado que generan?', answers: [ {id: '3', answer: 'Superior', value: 3 }, {id: '2', answer: 'Conforme a la ley', value: 2 }, {id: '1', answer: 'Inferior', value: 1 } ] },
        { id: 'CB_2', dim: 'etica', question: '¿Los colaboradores tienen acceso a información apropiada y suficiente acorde a su rol y responsabilidad para participar en la toma de decisiones?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] },
        { id: 'CB_3', dim: 'calidad', question: '¿Las políticas, prácticas y condiciones laborales de la empresa promueven la dignificación de los colaboradores y su desarrollo integral?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] }
    ]},
    { id: 'PV', name: 'Provedores', questions: [
        { id: 'PV_1', dim: 'riqueza', question: '¿Los términos que se establecen con proveedores son justos y se cumplen?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] },
        { id: 'PV_2', dim: 'etica', question: '¿La empresa proporciona a sus proveedores información veraz y suficiente para que tomen buenas decisiones de negocio?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] },
        { id: 'PV_3', dim: 'calidad', question: '¿Las políticas y prácticas de la empresa promueven el desarrollo integral de sus proveedores?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] }
    ]},
    { id: 'CL', name: 'Clientes', questions: [
        { id: 'CL_1', dim: 'riqueza', question: '¿Los clientes reciben un valor correspondiente al precio de los productos o servicios, en relación con su calidad, durabilidad y utilidad?', answers: [ {id: '3', answer: 'Superior', value: 3 }, {id: '2', answer: 'Equitativo', value: 2 }, {id: '1', answer: 'Inferior', value: 1 } ] },
        { id: 'CL_2', dim: 'etica', question: '¿Los clientes tienen acceso a información veraz y suficiente para tomar buenas decisiones de compra?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] },
        { id: 'CL_3', dim: 'calidad', question: '¿Los productos y/o servicios de la empresa mejoran la calidad de vida de sus clientes?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] }
    ]},
    { id: 'CO', name: 'Comunidad', questions: [
        { id: 'CO_1', dim: 'riqueza', question: '¿La empresa destina recursos significativos al desarrollo de la comunidad?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] },
        { id: 'CO_2', dim: 'etica', question: '¿La empresa fomenta en la comunidad la educación cívica y prácticas de “buen ciudadano”?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] },
        { id: 'CO_3', dim: 'calidad', question: '¿La empresa promueve la participación de los colaboradores en labores sociales, gremiales y comunitarias?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] }
    ]},
    { id: 'CP', name: 'Competencia', questions: [
        { id: 'CP_1', dim: 'riqueza', question: '¿La empresa cuenta con prácticas comerciales que permiten el desarrollo del mercado?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] },
        { id: 'CP_2', dim: 'etica', question: '¿La empresa realiza prácticas de sana competencia?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] },
        { id: 'CP_3', dim: 'calidad', question: '¿La empresa participa en organizaciones gremiales que contribuyan al desarrollo de la industria?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] }
    ]},
    { id: 'GF', name: 'Generaciones Futuras', questions: [
        { id: 'GF_1', dim: 'riqueza', question: '¿La empresa destina recursos significativos al cuidado de la “casa común” (el medio ambiente)?', answers: [ {id: '3', answer: 'Más allá de lo establecido en ley', value: 3 }, {id: '2', answer: 'Conforme a la ley', value: 2 }, {id: '1', answer: 'No contamos con programas de cuidado de la casa común', value: 1 } ] },
        { id: 'GF_2', dim: 'etica', question: '¿La empresa cuida los efectos de su actividad en el medio ambiente?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] },
        { id: 'GF_3', dim: 'calidad', question: '¿La empresa realiza acciones para la mejora del medio ambiente?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] }
    ]},
    { id: 'GO', name: 'Gobiernos', questions: [
        { id: 'GO_1', dim: 'riqueza', question: '¿La empresa cumple con el pago de impuestos en tiempo y forma?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] },
        { id: 'GO_2', dim: 'etica', question: '¿La empresa cumple con la presentación de sus declaraciones e informes a las autoridades de manera veraz, en tiempo y forma?', answers: [ {id: '3', answer: 'Siempre', value: 3 }, {id: '2', answer: 'Ocasionalmente', value: 2 }, {id: '1', answer: 'Rara vez', value: 1 } ] },
        { id: 'GO_3', dim: 'calidad', question: '¿La empresa se conduce como “ciudadano ejemplar” en sus obligaciones?', answers: [ {id: '3', answer: 'Más allá', value: 3 }, {id: '2', answer: 'Conforme a la ley', value: 2 }, {id: '1', answer: 'Con omisiones', value: 1 } ] }
    ]},
]

export default stkhs_short