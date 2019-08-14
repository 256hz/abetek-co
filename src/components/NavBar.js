import React from 'react'
import { Grid, Divider } from 'semantic-ui-react'
import { NavLink, } from "react-router-dom"

export default function NavBar(props) {
    return(
        <Grid centered stackable textAlign="center">
            <Grid.Row />
            <Grid.Row />
            <Grid.Row textAlign="center" verticalAlign="top">
                <Grid.Column width={16} verticalAlign="middle">
                    <img src="/images/abetek_logo.png" className="logoImg" alt="Abetek logo" />
                </Grid.Column>
                <Grid.Column width={16} verticalAlign="bottom">
                    <span className="logoTextLg">ABETEK</span> <span className="logoTextSm">LLC</span>
                </Grid.Column>
            </Grid.Row>

            <Divider />

            <Grid.Row columns={7} className="navBar">
                <Grid.Column textAlign="center">
                    <NavLink className="linkNav" to="/" exact={true}>
                        <span>HOME</span>
                    </NavLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                    <NavLink className="linkNav" to="/instructions">
                        <span>INSTRUCTIONS</span>
                    </NavLink>
                </Grid.Column>
                <Grid.Column textAlign="center">
                    <NavLink className="linkNav" to="/contact">
                        <span>CONTACT</span>
                    </NavLink>
                </Grid.Column>
            </Grid.Row>

            <Divider />

            <Grid.Row />
        </Grid>
    )
}