import mongoose from 'mongoose';

export interface User extends mongoose.Document {
    name: string,
    lastname: string,
    phone: string,
    mail: string,
    company: string,
    company_size: string,
    sector: string,
    position: string,
    org: string[],
    estate: string,
    city: string,
    createdAt: number,
    type: string,
}

const userSchema = new mongoose.Schema<User>({
    name: {
        type: String,
        required: false,
    },
    lastname: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    mail: {
        type: String,
        required: false,
    },
    company: {
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
    position: {
        type: String,
        required: false,
    },
    org: {
        type: [String],
        required: false,
    },
    estate: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Number,
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
}, { collection: 'users'});

export default mongoose.models.User || mongoose.model<User>('User', userSchema);