import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const AddBooks = () => {
    return (
        <div className='bg-dark d-flex justify-content-center align-items-center' style={{ minHeight: "92vh" }}>
            <Form className='container p-4'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-white'>Book Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Book Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-white'>Author Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Author Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-white'>Discription</Form.Label>
                    <Form.Control type="text" placeholder="Enter Discription" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-white'>Image</Form.Label>
                    <Form.Control type="text" placeholder="Enter Image URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-white'>Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter Price" />
                </Form.Group>
                <Button variant="success">Success</Button>
            </Form>
            
        </div>
    );
}

export default AddBooks;
