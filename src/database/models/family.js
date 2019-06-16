import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const familySchema = new Schema({});

const Family = mongoose.model('user', familySchema);

export default Family;
