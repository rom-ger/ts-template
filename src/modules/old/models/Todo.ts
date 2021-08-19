interface ITodoDTO {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface ITodo {
    id?: number;
    userId?: number;
    title: string;
}

class Todo implements ITodo {
    id?: number;
    userId?: number;
    title: string;

    constructor(dto: ITodoDTO) {
        this.id = dto.id || undefined;
        this.userId = dto.userId || undefined;
        this.title = dto.title || 'Без названия';
    }
}

export { ITodoDTO, ITodo, Todo };
