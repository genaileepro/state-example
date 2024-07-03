import React, { useCallback, useState } from 'react';
import Box1 from './components/Box1';
import Box2 from './components/Box2';
import Box3 from './components/Box3';

function App() {
    console.log('App 컴포넌트가 렌더링 되었습니다!');
    const [count, setcount] = useState(0);

    // 1증가
    const onPlusButtonClickHandler = () => {
        setcount(count + 1);
    };

    // 1감소
    const onMinusButtonClickHandler = () => {
        setcount(count - 1);
    };

    // count를 초기화 해주는 함수
    const initCount = useCallback(() => {
        console.log(`${count}에서 0으로 변경되었습니다.`);
        setcount(0);
    }, [count]);

    return (
        <>
            <h3>카운트 예제입니다!</h3>
            <p>현재 카운트 : {count}</p>
            <button onClick={onPlusButtonClickHandler}>+</button>
            <button onClick={onMinusButtonClickHandler}>-</button>
            <div style={{ display: 'flex' }}>
                <Box1 initCount={initCount} />
                <Box2 />
                <Box3 />
            </div>
        </>
    );
}

export default App;
