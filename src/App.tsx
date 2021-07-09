import React, { useState, useEffect } from 'react';
import { MyFirstClass, IGetApi } from './class/myFirstClass';

function App() {
    const [json, setJson] = useState<IGetApi | null>(null)

    useEffect(() => {
        let a = new MyFirstClass();

        a.getApi()
            .then((res) => {
                setJson(res)
            })
            .catch((e) => {
                throw new Error(e.message)
            })
    }, []);

    return (
        <div>
            TS Template
            {json && (
                <div>
                    <h1>JSONPlaceholders</h1>
                    {Object.keys(json)
                        .map(placeholder => (
                            <div key={placeholder}>
                                <h2>{placeholder}</h2>
                                <div>{JSON.stringify(json[placeholder as keyof IGetApi])}</div>
                            </div>
                        ))}
                </div>
            )}
        </div>
    )
};

export default App;
