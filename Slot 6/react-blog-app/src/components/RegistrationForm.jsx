import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
    // Quản lý state cho form
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    // Quản lý state cho các lỗi validation
    const [errors, setErrors] = useState({});

    // Hook để điều hướng
    const navigate = useNavigate();

    // Hàm thực hiện validation
    const validate = () => {
        const newErrors = {};
        const { username, email, password, confirmPassword } = formData;

        // 1. Validate Username (Không được để trống)
        if (!username.trim()) {
            newErrors.username = 'Username không được để trống';
        }

        // 2. Validate Email (Không được để trống và đúng định dạng)
        if (!email.trim()) {
            newErrors.email = 'Email không được để trống';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Email không đúng định dạng';
        }

        // 3. Validate Password (>= 6 kí tự, có hoa, thường, số, kí tự đặc biệt)
        if (!password) {
            newErrors.password = 'Password không được để trống';
        } else if (password.length < 6) {
            newErrors.password = 'Password phải từ 6 kí tự trở lên';
        } else if (!/(?=.*[a-z])/.test(password)) {
            newErrors.password = 'Password phải chứa ít nhất một chữ cái thường';
        } else if (!/(?=.*[A-Z])/.test(password)) {
            newErrors.password = 'Password phải chứa ít nhất một chữ cái hoa';
        } else if (!/(?=.*\d)/.test(password)) {
            newErrors.password = 'Password phải chứa ít nhất một chữ số';
        } else if (!/(?=.*[!@#$%^&*()_+={}[\]:;"'<>,.?/\\|`~-])/.test(password)) {
            newErrors.password = 'Password phải chứa ít nhất một kí tự đặc biệt';
        }

        // 4. Validate Confirm Password (Khớp với password)
        if (!confirmPassword) {
            newErrors.confirmPassword = 'Confirm Password không được để trống';
        } else if (confirmPassword !== password) {
            newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
        }

        setErrors(newErrors);

        // Nếu object newErrors trống nghĩa là không có lỗi
        return Object.keys(newErrors).length === 0;
    };

    // Cập nhật state khi người dùng gõ
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Xóa lỗi của field tương ứng khi người dùng bắt đầu nhập lại
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            });
        }
    };

    // Xử lý khi submit form
    const handleSubmit = (e) => {
        e.preventDefault(); // Ngăn hành vi reload trang mặc định

        if (validate()) {
            // Form hợp lệ -> có thể call API đăng ký ở đây
            console.log('Đăng ký thành công với dữ liệu:', formData);

            // Chuyển hướng đến trang blog home
            navigate('/blog');
        }
    };

    // Xử lý khi bấm nút Cancel
    const handleCancel = () => {
        // Quay lại trang trước đó hoặc trang chủ
        navigate(-1);
    };

    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={6}>
                    <div className="border p-4 rounded shadow-sm">
                        <h2 className="text-center mb-4">Đăng Ký Tài Khoản</h2>
                        <Form onSubmit={handleSubmit} noValidate>

                            {/* Trường Username */}
                            <Form.Group className="mb-3" controlId="formUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Nhập username"
                                    name="username"
                                    value={formData.username}
                                    onChange={handleChange}
                                    isInvalid={!!errors.username} // Hiển thị viền đỏ nếu có lỗi
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.username}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Trường Email */}
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Nhập email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Trường Password */}
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Nhập mật khẩu"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Trường Confirm Password */}
                            <Form.Group className="mb-4" controlId="formConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Xác nhận mật khẩu"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    isInvalid={!!errors.confirmPassword}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.confirmPassword}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Các nút bấm */}
                            <div className="d-flex gap-2">
                                <Button variant="primary" type="submit" className="w-50">
                                    Register
                                </Button>
                                <Button variant="secondary" type="button" onClick={handleCancel} className="w-50">
                                    Cancel
                                </Button>
                            </div>

                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default RegistrationForm;
