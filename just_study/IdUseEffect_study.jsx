import React, { useEffect, useRef, useState } from 'react';

function App() {
    const idRef = useRef('');
    const pwRef = useRef('');

    const [id, setId] = useState('');

    // 화면이 렌더링 될때 어떤 작업을 하고 싶다.
    useEffect(() => {
        idRef.current.focus();
    }, []);

    useEffect(() => {
        if (id.length >= 10) {
            return pwRef.current.focus();
        }
    }, [id]);

    return (
        <>
            <div>
                아이디 :
                <input
                    type="text"
                    ref={idRef}
                    value={id}
                    onChange={(event) => {
                        setId(event.target.value);
                        console.log('id 입니다', id);
                    }}
                />
            </div>
            <div>
                비밀번호 : <input type="password" ref={pwRef} />
            </div>
        </>
    );
}

export default App;
