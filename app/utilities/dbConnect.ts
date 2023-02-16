import { connect } from "mongoose";

export default () => {
    connect('mongodb://mongo:fIJioQhNauSRDOAbzBxJ@containers-us-west-16.railway.app:8060', { dbName: 'test' });
};