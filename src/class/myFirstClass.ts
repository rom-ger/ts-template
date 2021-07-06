import { JSONPlaceholder } from '../actions/jsonplaceholderActions';
import { IComment } from '../interfaces/IComment';
import { IPost } from '../interfaces/IPost';

interface IGetApi {
    posts: IPost[];
    comments: IComment[];
}

interface IMyFirstClass {
    getApi: () => Promise<IGetApi>;
}

class MyFirstClass implements IMyFirstClass {
    constructor() {
    }

    getApi = async () => {
        let res: IGetApi = {
            posts: [],
            comments: [],
        };

        await Promise.all([
            JSONPlaceholder.getPosts()
                .then(posts => res.posts = posts),
            JSONPlaceholder.getComments()
                .then(comments => res.comments = comments),
            // JSONPlaceholder.getAlbums(),
            // JSONPlaceholder.getPhotos(),
            // JSONPlaceholder.getTodos(),
            // JSONPlaceholder.getUsers(),
        ]);

        return res;
    }
}

export { MyFirstClass };
