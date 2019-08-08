import React from 'react'
import { Form, Grid, Message } from 'semantic-ui-react';

export default function Contact() {
    return(
        <div>
            <div className="textTitle">Contact</div>
            <br />
            <Grid columns={16} centered>
                <Grid.Column width={10}>
                    <Form className="form">
                        <Form.Group widths='equal' success>
                            <Form.Input fluid label='First name' placeholder='First name' required />
                            <Form.Input fluid label='Last name' placeholder='Last name' />
                        </Form.Group> 
                        <Form.Input     fluid label='Email'     placeholder='Email'     required />
                        <Form.Input     fluid label='Subject'   placeholder='Subject'   required />
                        <Form.TextArea  fluid label='Message'   placeholder='Message'   required />
                        <Grid centered>
                            <Grid.Row>
                                <Form.Button color="linkedin">Submit</Form.Button>
                            </Grid.Row>
                        </Grid>
                        <Message success header="Message Received" content="Thank you!" />
                    </Form>
                </Grid.Column>
            </Grid>
        </div>
    )
}