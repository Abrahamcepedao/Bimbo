import mongoose from "mongoose";

import { ITable } from "@/utils/interfaces/types";

export interface Results extends mongoose.Document {
    id: string;
    mail: string;
    type: string;
    company_size: string;
    sector: string;
    createdAt: number;
    results: ITable;
}

const resultsSchema = new mongoose.Schema<Results>({
    id: {
        type: String,
        required: false,
    },
    mail: {
        type: String,
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
    company_size: {
        type: String,
        required: false,
    },
    sector: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Number,
        required: false,
    },
    results: {
        type: Object,
        required: false,
    },
}, { collection: 'results' });

export default mongoose.models.Results || mongoose.model<Results>('Results', resultsSchema);