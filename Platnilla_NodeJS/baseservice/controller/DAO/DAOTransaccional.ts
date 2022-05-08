export interface DAOTransaccional{
    create (obj: any): boolean;
    get(key: any): any;
    getAll():any[]
    update(obj: any): boolean;
}