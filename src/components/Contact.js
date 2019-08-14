import React from 'react'
import { Form, Grid, Message } from 'semantic-ui-react';

export default class Contact extends React.Component {
    constructor() {
        super()
        this.state={
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    render() {
        return(
            <div>
                <div className="textTitle">Contact</div>
                <br />
                <Grid columns={16} centered>
                    <Grid.Column width={10}>
                        <Form className="form" success={false}
                              action="https://formspree.io/abe@abetek.co" 
                              method="POST"
                              >
                            <Form.Group widths='equal'>
                                <Form.Input fluid required 
                                    label='First name' 
                                    placeholder='First name'
                                    name="firstName"
                                    onChange={this.handleChange}
                                    value={this.state.firstName}
                                    />
                                <Form.Input fluid required 
                                    label='Last name' 
                                    placeholder='Last name' 
                                    name="lastName"    
                                    onChange={this.handleChange}
                                    value={this.state.lastName}
                                    />
                            </Form.Group> 
                            <Form.Input fluid required 
                                label='Email'     
                                placeholder='email@example.com' 
                                name="email"
                                onChange={this.handleChange}
                                value={this.state.email}
                                />
                            <Form.Input fluid required 
                                label='Subject'   
                                placeholder='Subject' 
                                name="subject"
                                onChange={this.handleChange}
                                value={this.state.subject}
                                />
                            <Form.TextArea required 
                                label='Message'   
                                placeholder='Message' 
                                name='message'
                                onChange={this.handleChange}
                                value={this.state.message}
                                />
                              <input type="hidden" name="_subject" 
                                value={
                                  this.state.firstName + " "   +
                                  this.state.lastName  + " - " + 
                                  this.state.subject   + " (abetek.co)"} 
                                  />
                            <Grid centered>
                                <Grid.Row>
                                    <Form.Button color="linkedin">Submit</Form.Button>
                                </Grid.Row>
                            </Grid>
                            <Message success header="Message Received" content="Thank you!" />
                        </Form>
                    </Grid.Column>
                    <Grid.Row />
                    <Grid.Row />
                    <Grid.Row />
                    <Grid.Row />
                    <Grid.Row />
                    <Grid.Row />
                    <Grid.Row />
                </Grid>
            </div>
        )
    }
}