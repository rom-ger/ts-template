interface IGeo {
    lat: string;
    lng: string;
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface IUserDTO {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phone: string;
    website: string;
    company: ICompany;
}

interface IUser {
    id?: number;
    email: string;
    company: ICompany;
}

class User implements IUser {
    id?: number;
    email: string;
    company: ICompany;

    constructor(dto: IUserDTO) {
        this.id = dto.id || undefined;
        this.email = dto.email || 'no email';
        this.company = dto.company || undefined;
    }
}

export { User, IUserDTO, IUser, ICompany, IAddress, IGeo };
