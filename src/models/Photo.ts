interface IPhototDTO {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

interface IPhoto {
    id?: number;
    albumId?: number;
    title: string;
}

class Photo implements IPhoto {
    id?: number;
    albumId?: number;
    title: string;

    constructor(dto: IPhototDTO) {
        this.id = dto.id || undefined;
        this.albumId = dto.albumId || undefined;
        this.title = dto.title || 'Без названия';
    }
}

export { IPhototDTO, IPhoto, Photo };

