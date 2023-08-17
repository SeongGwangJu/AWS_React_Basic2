import React, { useState } from 'react';
import TodoAddInput from '../../components/TodoAddInput/TodoAddInput';
import UsernameInput from '../../components/UsernameInput/UsernameInput';
import PasswordInput from '../../components/PasswordInput/PasswordInput';

function Main(props) {
    let todoInputValue = null;
    const [ todoContent, setTodoContent ] = useState(""); //초기값을 문자열로
    const [ todoContentArray, setTodoContentArray ] = useState([]); //초기값을 배열로. 함수나 객체도 가능하다
    const [ user, setUser ] = useState({
        username: "",
        password: ""
    });

    /* 앞에놈은 값을 저장하는 변수, 뒤엣놈은 상태값을 업데이트하는 함수, useState 괄호 안에는 초기 상태값을 지정
    즉, set'앞에놈'함수는 앞에의 상태값을 업데이트하고 랜더링함 
    값이 변함에 따라 ustState를 사용한 부분에만 재랜더링을 함 */

    /* 초기값을 객체로 저장하는 예시  
    const [user, setUser] = useState({
        name: 'John Doe',
        age: 25,
     }); 
    객체를 업데이트할때는 이전의 속성들을 유지하기 위해 전개 연산자 ... 를 사용
    setUser({ ...user, name: 'Jane Smith' });
    */

    const handleTodoInputChange = (e) => {
        todoInputValue = e.target.value;
    }

    const handleUserInfoChange = (e) => {
        const { name, value } = e.target;

        console.log(e.target)
        console.log(`name: ${name}, value: ${value}`);

        const userObj = {
            ...user,
            [name]: value
        }

        setUser(userObj);
    }

    const handleAddClick = () => {
        // const todoInput = document.querySelector(".todo-input"); 
        /* 리액트는 querySelector를 안쓰려고 사용하는 라이브러리임을 잊지 마세요 */
        

        // setTodoContent(todoInputValue);
        /*버튼이 클릭이 되면 todoContent 내용이 바뀌어야 하지만 
        랜더링은 한번만 하므로 setTodo를 안쓰면 화면이 변하질 않아요 
        그러니 set을 써서 상태를 변화시켜야 합니다. */
        // t_odoContentArray.push(todoInputValue);
        setTodoContentArray([...todoContentArray, todoInputValue]); 
        //스프레드문법 : Array는 복사하고, 뒤에거는 추가한다
        console.log(todoContentArray);
    }
    
    return (
            <div> 
                <div>
                    <h1>사용자이름: {user.username}</h1>
                    <h1>비밀번호: {user.password}</h1>
                    <UsernameInput onChange={handleUserInfoChange} />
                    <PasswordInput onChange={handleUserInfoChange}/>
                    <TodoAddInput onChange={handleTodoInputChange}/>

                    <button onClick={handleAddClick}>추가</button>
                </div>
                <ul>
                    {/* {!!todoContent && (<li>{todoContent}</li>) } */}
                    {todoContentArray.map(todoContent => {
                        return (<li>{todoContent}</li>);//array에 10개가 있으면 이거 10줄을 적은 셈
                    })}
                </ul>
            </div>
    );
}

export default Main;