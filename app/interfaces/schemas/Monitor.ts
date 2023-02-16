export default interface Monitor {
    _id: number;
    type: 1|2|3;
    name: string;
    host: string;
    maintenance: boolean;
}