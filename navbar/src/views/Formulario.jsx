import React from 'react';
import { Input, Form, Label, FormGroup } from 'reactstrap';

const Formulario = () => {
    return (
        <div>
            <Form>
                <FormGroup>
                    <Label for="name">
                        Your Name:
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Bob Smith"
                        type="text"
                    />
                </FormGroup>
            </Form>
        </div>
    );
};

export default Formulario;
