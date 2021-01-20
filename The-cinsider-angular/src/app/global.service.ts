export class CompanyService{
    _id :any
    name: string
    status: string = 'ranking';
    change(id:any){
        this._id=id;
    }
    getId():any{
        return this._id;
    }
    searchName(name:any){
        this.name = name;
    }
    onSortBy(status: string){
        this.status = status;
    }
}