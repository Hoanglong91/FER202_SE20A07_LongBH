//Pizza components hiển thị thông tin về một loại pizza cụ thể, bao gồm id, name, price, description, imageUrl, originalPrice, salePrice, discount, và rating. Nó sử dụng các thành phần của React Bootstrap để tạo giao diện đẹp mắt và dễ sử dụng. 
// hiển thị thông tin của pizza trong cùng 1 card
// Sử dụng React Bootstrap để tạo giao diện đẹp mắt
//css cho card để hiển thị thông tin của pizza gồm có nền sáng, chữ màu tối và căn giữa
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function Pizza({ pizza }) {
    return (
        <Card style={{ width: '18rem' }} className="mx-auto my-3">
            <Card.Img variant="top" src={pizza.imageUrl} />
            <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>{pizza.description}</Card.Text>
                <Button variant="secondary">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default Pizza;