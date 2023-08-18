import React, { useState } from "react";

function CustomerInputTest(props) {
  const [customer, setCustomer] = useState({
    name: "",
    grade: "",
    age: "",
    signUpDate: "",
  });

  const [customerArray, setCustomerArray] = useState([]);

  const handleCustomerInfoChange = (e) => {
    const { name, value } = e.target;
    setCustomer({
      ...customer,
      [name]: value,
    });

    console.log(name + " 입력창에 변화가 발생" + "\n변화내용 :" + value);
  };

  const handleAddClick = () => {
    setCustomerArray([...customerArray, customer]);
    console.log(customerArray);
  };

  return (
    <div>
      <div>
        <h1>고객명 :{customer.name} </h1>
        <h1>등급 : {customer.grade} </h1>
        <h1>나이 : {customer.age} </h1>
        <h1>가입일자 : {customer.signUpDate} </h1>
        <input type="text" name="name" onChange={handleCustomerInfoChange} />
        <input type="text" name="grade" onChange={handleCustomerInfoChange} />
        <input type="text" name="age" onChange={handleCustomerInfoChange} />
        <input
          type="date"
          name="signUpDate"
          onChange={handleCustomerInfoChange}
        />
        <div>
          {" "}
          <button onClick={handleAddClick}>추가</button>
        </div>
      </div>
      <ul>
        <h3>고객명단</h3>
        {customerArray.map((customer) => {
          return (
            <div>
              <li> 고객명 : {customer.name}</li>
              <li> 등급 : {customer.grade}</li>
              <li> 나이 : {customer.age}</li>
              <li> 가입일자 : {customer.signUpDate}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default CustomerInputTest;
