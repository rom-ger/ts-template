import React, { useState, useEffect } from 'react';
import { MyFirstClass } from './class/myFirstClass';
import { Comment } from './models/Comment';
import { Post } from './models/Post';
import { Album } from './models/Album';
import { Photo } from './models/Photo';
import { Todo } from './models/Todo';
import { User } from './models/User';

function App() {
    const [posts, setPosts] = useState<Post[] | []>([])
    const [comments, setComments] = useState<Comment[] | []>([])
    const [albums, setAlbums] = useState<Album[] | []>([])
    const [photos, setPhotos] = useState<Photo[] | []>([])
    const [todos, setTodos] = useState<Todo[] | []>([])
    const [users, setUsers] = useState<User[] | []>([])
    const [error, setError] = useState<string | null>(null)


    useEffect(
        () => {
            let a = new MyFirstClass();

            a.getApi()
                .then((res) => {
                    setPosts(res.posts)
                    setComments(res.comments)
                    setAlbums(res.albums)
                    setPhotos(res.photos)
                    setTodos(res.todos)
                    setUsers(res.users)
                })
                .catch((e) => {
                    setError(e.message)
                })
        },
        [],
    );

    return (
        <div>
            <h1>JSONPlaceholders</h1>
            {error ? (
                <p>Произошла ошибка: {error}</p>
            ) : (
                <div>
                    <div>Posts - {posts.length}</div>
                    <div>Comments - {comments.length}</div>
                    <div>Albums - {albums.length}</div>
                    <div>Photos - {photos.length}</div>
                    <div>Todos - {todos.length}</div>
                    <div>Users - {users.length}</div>
                </div>
            )}
        </div>
    )
};

export default App;
