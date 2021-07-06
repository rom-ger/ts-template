interface ICommentDTO {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

interface IComment {
    id?: number;
    postId?: number;
    body: string;
}

class Comment implements IComment {
    id?: number;
    postId?: number;
    body: string;

    constructor(dto: ICommentDTO) {
        this.id = dto.id || undefined;
        this.postId = dto.postId || undefined;
        this.body = dto.body || 'Без названия';
    }
}

export { ICommentDTO, IComment, Comment };

