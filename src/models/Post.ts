interface IPostDTO {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface IPost {
    id?: number;
    title: string;
    fullInfo: string;
}

class Post implements IPost {
    id?: number;
    title: string;

    constructor(dto: IPostDTO) {
        this.id = dto.id || undefined;
        this.title = dto.title || 'Без названия';
    }

    get fullInfo() {
        return `${this.id} - ${this.title}`;
    }
}

export {IPostDTO, IPost, Post};
