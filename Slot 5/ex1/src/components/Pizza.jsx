import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import MyModal from './MyModal';
import './pizza.css';

function Pizza({ pizza }) {
    const [showModal, setShowModal] = useState(false);

    const handleOpen = () => setShowModal(true);
    const handleClose = () => setShowModal(false);
    return (
        <>
            <Card className="mx-auto my-3 shadow-sm">
                <Card.Img variant="top" src={pizza.imageUrl} className="pizza-image" />
                <Card.Body className="card-body">
                    <div className="pizza-info">
                        <Card.Title className="fw-bold">{pizza.name}</Card.Title>
                        <Card.Text className="text-muted small">{pizza.description}</Card.Text>
                    </div>
                    
                    {/* Nút bấm nằm riêng biệt ở ngoài div trên */}
                    <Button variant="secondary" className="button" onClick={handleOpen}>
                        View Details
                    </Button>
                </Card.Body>
            </Card>

            <MyModal show={showModal} onHide={handleClose} title={pizza.name}>
            <div className="text-center mb-3">
                <img
                    src={pizza.imageUrl}
                    alt={pizza.name}
                    className="img-fluid rounded"
                />
            </div>
            <p>{pizza.description}</p>
            <p>
                <strong>Price:</strong>{' '}
                {pizza.salePrice ? (
                    <>
                        <span className="text-decoration-line-through text-muted">
                            ${pizza.originalPrice.toFixed(2)}
                        </span>{' '}
                        <span className="text-danger fw-bold">
                            ${pizza.salePrice.toFixed(2)}
                        </span>
                    </>
                ) : (
                    <span className="fw-bold">${pizza.price.toFixed(2)}</span>
                )}
            </p>
            {pizza.tag && (
                <p>
                    <strong>Tag:</strong> {pizza.tag}
                </p>
            )}
        </MyModal>
        </>
    );
}

export default Pizza;