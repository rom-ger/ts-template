interface IBaseActions {
    baseUrl: string;
    getAction: <T>(url: string) => Promise<T>;
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
}

export { BaseActions };
