// Hiển thị thông tin của từng người trong 1 danh sách gồm 10 người
//mỗi người có tên tuổi ra danh sách ul
import React from 'react';
function ListPerson() {
    const people = [
        { name: 'Alice', age: 25 },
        { name: 'Bob', age: 30 },
        { name: 'Charlie', age: 35 },
        { name: 'David', age: 40 },
        { name: 'Eve', age: 45 },
        { name: 'Frank', age: 20 },
        { name: 'Grace', age: 15 },
        { name: 'Henry', age: 60 },
        { name: 'Ivy', age: 65 },
        { name: 'Jack', age: 10 }
    ];

    return (
        <>
        <ul>
            {people.map((person, index) => (
                <li key={index}> {person.name}, {person.age} years old
                </li>
            ))}
        </ul>
        </>
        
    );
}

export default ListPerson;