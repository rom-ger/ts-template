interface IAlbumDTO {
    userId: number;
    id: number;
    title: string;
}

interface IAlbum {
    id?: number;
    userId?: number;
    title: string;
}

class Album implements IAlbum {
    id?: number;
    userId?: number;
    title: string;

    constructor(dto: IAlbumDTO) {
        this.id = dto.id || undefined;
        this.userId = dto.userId || undefined;
        this.title = dto.title || 'Без названия';
    }
}

export { IAlbumDTO, IAlbum, Album };
