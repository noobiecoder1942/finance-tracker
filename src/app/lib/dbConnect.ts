import mongoose from 'mongoose';

const uri = process.env.MONGODB_URI;

const connection = async () => {

    const connectionState = mongoose.connection.readyState;

    if (connectionState === 1) {
        console.log('Already connected');
        return;
    }

    if (connectionState === 2) {
        console.log('Reconnecting...');
        return;
    }

    try {
        mongoose.connect(uri!, {
            bufferCommands: true,
            dbName: process.env.DB_NAME,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Failed to connect to MongoDB', error);
        throw error;
    }
}

export default connection;