// hiển thị danh sách thông tin các loại pizza trong cùng 1 component PizzaList
//Sử dụng dữ liệu từ 1 mảng pizza trong pizzaData.js
//Gọi component Pizza để hiển thị thông tin của từng loại pizza trong mảng
import React from 'react';
import Pizza from './Pizza';
import pizzaData from '../data/pizzaData';
import { Card, Button} from 'react-bootstrap';
function PizzaList() {
    return (
        <div>
            {pizzaData.map((pizza) => (
                <Pizza key={pizza.id}  md = {4} className = "mb-4" pizza={pizza} />
            ))}
        </div>
    );
}