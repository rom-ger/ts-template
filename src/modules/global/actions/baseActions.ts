interface IBaseActions {
    baseUrl: string;
    getAction: <T>(url: string) => Promise<T>;
    postAction: <P extends BodyInit, R>(url: string, body: P) => Promise<R>;
}

class BaseActions implements IBaseActions {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    getAction<T>(url: string, mocks?: T): Promise<T> {
        if (mocks) {
            return Promise.resolve(mocks);
        }
        return fetch(`${this.baseUrl}${url}`) // ?_start=0&_limit=5
            .then(response => response.json());
    }

    postAction<P extends BodyInit, R>(url: string, body: P): Promise<R> {
        return fetch(`${this.baseUrl}${url}`, {
            body,
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain;charset=UTF-8',
            },
        })
            .then(response => response.json());
    }
}

export { BaseActions };
