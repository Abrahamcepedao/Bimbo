'use client'

//next
import { useRouter } from "next/navigation"

//components
import Button from "../reusable/buttons/Button"

const Aviso = () => {
    const { back } = useRouter()
    
    return (
        <div className="p-8">
            <div className="max-w-3xl m-auto text-justify">
                <p className="text">De conformidad con lo dispuesto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, declara Confederación USEM (“CONFEDERACIÓN DE LAS UNIONES SOCIALES DE EMPRESARIOS DE MÉXICO”, Asociación Civil), ser una asociación sin fines de lucro legalmente constituida de conformidad con las leyes mexicanas, con domicilio en Eugenia 13 - 402, Col. Nápoles, Benito Juárez, Ciudad de México, C.P. 03810. Manifestamos que la información que usted nos proporciona es tratada de forma estrictamente confidencial, por lo que, al proporcionar sus datos personales, tales como: nombre, correo electrónico, teléfono, ciudad, estado, país, empresa/institución y cargo, estos datos serán utilizados única y exclusivamente para los siguientes fines: permitir el acceso al Diagnóstico de Sostenibilidad y Congruencia e informar sobre actividades relacionadas con una “Gestión Empresarial centrada en la Persona”.</p>
                <p className="text">Para prevenir el acceso no autorizado a sus datos personales y con el fin de asegurar que la información sea utilizada para los fines establecidos en este aviso de privacidad, hemos establecido diversos procedimientos con la finalidad de evitar el uso o divulgación no autorizados de sus datos, permitiéndonos tratarlos debidamente.</p>
                <p className="text">Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos. Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta; que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa; así como oponerse al uso de sus datos personales para fines específicos. Estos derechos se conocen como derechos ARCO.</p>
                <p className="text">Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva dirigida a quien funja como Administrador al momento de la solicitud, y hacerlo mediante escrito con acuse de recibo en el domicilio mencionado.</p>
                <p className="text">Para conocer el procedimiento y requisitos para el ejercicio de los derechos ARCO, usted podrá llamar al siguiente número telefónico (55) 5669-4790; ponerse en contacto por medio de la dirección de correo electrónico concontacto.confederacion@usem.org o bien, ponerse en contacto con personal de nuestra Asociación, que dará trámite a las solicitudes para el ejercicio de estos derechos, y atenderá cualquier duda que pudiera tener respecto al tratamiento de su información.</p>
                <p className="text">Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.</p>
                <p className="text">Para revocar su consentimiento deberá presentar su solicitud respectiva dirigida a quien funja como Administrador al momento de la solicitud, y hacerlo mediante escrito con acuse de recibo en el domicilio de la Asociación. Para conocer el procedimiento y requisitos para la revocación del consentimiento, usted podrá llamar al siguiente número telefónico (55) 5543-0605; o bien ponerse en contacto con personal de nuestra Asociación, que dará trámite a las solicitudes para el ejercicio de estos derechos, y atenderá cualquier duda que pudiera tener respecto al tratamiento de su información.</p>
                <p className="text">Al entregar los datos personales que se señalan, implican el consentimiento para su uso y una constancia de conocimiento del presente aviso.</p>
                <p className="text">El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los servicios que ofrecemos; de nuestras prácticas de privacidad; o por otras causas.</p>
                <p className="text text-right mb-8">Última fecha de emisión: 22 de marzo de 2021.</p>
                <Button text='Regesar' variant="gradient" onClick={() => back()} />
            </div>
        </div>
    )
}

export default Aviso