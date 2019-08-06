import React from 'react'
import { Grid, Button, Divider } from 'semantic-ui-react'

export default function NavBar(props) {
    return(
        <Grid centered stackable textAlign="center">
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
            <Grid.Row width={16}>
                <Button type="button" className="buttonText">Home</Button>
                <Button type="button" className="buttonText">Instructions</Button>
                <Button type="button" className="buttonText">Contact</Button>
            </Grid.Row>
        </Grid>
    )
}