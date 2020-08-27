import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

function PostForm() {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        password: ''
    }); 

    const updateForm = (e) => {
        e.preventDefault(); 
        setFormData({...formData, [e.target.name]: e.target.value}); 
    }

    const onSubmit = (e) => {
        e.preventDefault(); 
        if (formData.password === "hackgteeny") {
            fetch('https://blogsite-api-hackgteeny.herokuapp.com/posts', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            });
        }

        setFormData({
            title: '',
            body: '',
            password: ''
        }); 
    } 

    return (
        <div className="d-flex justify-content-center">
            <div className="w-75 mt-2">
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" placeholder="Enter post title" required 
                            onChange={e => updateForm(e)} value={formData.title}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Body</Form.Label>
                        <Form.Control as="textarea" rows="3" name="body" placeholder="Enter post body" required
                            onChange={e => updateForm(e)} value={formData.body}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter admin password" name="password" required
                            onChange={e => updateForm(e)} value={formData.password}/>
                    </Form.Group>

                    <Button variant="primary" onClick={onSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default PostForm;