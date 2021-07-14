import React, { useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import { IAppStore } from './appStore';

interface IApp {
    appStore?: IAppStore;
}

const App = inject('appStore')(observer(({ appStore }: IApp) => {
    if (!appStore) {
        return null;
    }
    const { albums, comments, error, getData, loading, photos, posts, todos, users } = appStore;
    useEffect(
        () => getData(),
        [],
    );

    return (
        <div>
            <h1>JSONPlaceholders</h1>
            {!loading && error && (
                <p>Произошла ошибка: {error}</p>
            )}

            {!loading && !error && (
                <div className="main">
                    <div>Posts - {posts.length}</div>
                    <div>Comments - {comments.length}</div>
                    <div>Albums - {albums.length}</div>
                    <div>Photos - {photos.length}</div>
                    <div>Todos - {todos.length}</div>
                    <div>Users - {users.length}</div>
                </div>
            )}
        </div>
    );
}));

export default App;
