import { IInput } from "../interfaces/types";
import org_options from "./org_options";
import company_size from '@/utils/constants/company_size'
import sectors from "./sectors";

const form_inputs: IInput[] = [
    { name: "name", label: "Nombre", placeholder: "Nombre", required: true, variant: "outlined", colSpan: "", type: "text", value: "" },
    { name: "lastname", label: "Apellido", placeholder: "Apellido", required: true, variant: "outlined", colSpan: "", type: "text", value: "" },
    { name: "phone", label: "Teléfono", placeholder: "Teléfono", required: true, variant: "outlined", colSpan: "cols-span-1 sm:col-span-2", type: "text", value: "" },
    { name: 'mail', label: 'Correo electrónico', placeholder: 'Correo electrónico', required: true, variant: 'outlined', colSpan: '', type: 'email', value: '' },
    { name: 'confirm_mail', label: 'Confirmar correo electrónico', placeholder: 'Confirmar correo electrónico', required: true, variant: 'outlined', colSpan: '', type: 'email', value: '' },
    { name: 'company', label: 'Empresa / Institución', placeholder: 'Empresa / Institución', required: true, variant: 'outlined', colSpan: 'cols-span-1 sm:col-span-2', type: 'text', value: '' },
    { name: 'position', label: 'Cargo', placeholder: 'Cargo', required: false, variant: 'outlined', colSpan: 'cols-span-1 sm:col-span-2', type: 'text', value: '' },
    { name: 'company_size', label: 'Tamaño de empresa', placeholder: 'Tamaño', required: true, variant: 'outlined', colSpan: '', type: 'select', options: company_size, value: '' },
    { name: 'sector', label: 'Sector de empresa', placeholder: 'Sector', required: true, variant: 'outlined', colSpan: '', type: 'select', options: sectors, value: '' },
    { name: 'sector_label', label: 'Especifica el sector', placeholder: 'Sector', required: true, variant: 'outlined', colSpan: 'cols-span-1 sm:col-span-2', type: 'text', value: '' },
    { name: 'org', label: 'Organismo empresarial al que pertenece', placeholder: '', required: false, variant: 'outlined', colSpan: 'cols-span-1 sm:col-span-2', type: 'check', value: [], options: org_options },
    { name: 'estate', label: 'Estado', placeholder: 'Estado', required: true, variant: 'outlined', colSpan: '', type: 'select', value: '', options: [] },
    { name: 'city', label: 'Ciudad', placeholder: 'Ciudad', required: true, variant: 'outlined', colSpan: '', type: 'select', value: '', options: [] },
]

export default form_inputs;