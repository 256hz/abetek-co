import React from 'react'
import { Grid, Button, Divider } from 'semantic-ui-react'
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom"

export default function NavBar(props) {
    return(
        <Grid centered stackable textAlign="center">
            <Grid.Row />
            <Grid.Row />
            <Grid.Row textAlign="center" verticalAlign="top">
                <Grid.Column width={16} centered verticalAlign="middle">
                    <img src="/images/abetek_logo.png" className="logoImg" />
                </Grid.Column>
                <Grid.Column width={16} centered verticalAlign="bottom">
                    <span className="logoTextLg">ABETEK</span> <span className="logoTextSm">LLC</span>
                </Grid.Column>
            </Grid.Row>

            <Divider />

            <Grid.Row columns={5} className="navBar">
                <Grid.Column textAlign="center">
                    <NavLink to="/" className="linkNav">HOME</NavLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                    <NavLink to="/instructions" className="linkNav">INSTRUCTIONS</NavLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                    <NavLink to="/contact" className="linkNav">CONTACT</NavLink>
                </Grid.Column>
            </Grid.Row>

            <Divider />

            <Grid.Row />
        </Grid>
    )
}