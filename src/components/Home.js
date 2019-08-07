import React from 'react'
import { Grid, Divider } from 'semantic-ui-react'

export default function Home() {
    return(
        <div>
            <img src="/images/single_mount_bg.jpg" width="100%" />
            <div className="text">
                <div className="textTitle">Abetek - Solutions for Sound & Film</div>
                <div className="textSubtitle">Buttondown Lavalier Mount for Personal Microphones</div>
            </div>
            <Divider />
            <Grid columns={3} verticalAlign="middle">
                <Grid.Column>
                    <img src="/images/B6.jpg" className="imgMic"/>
                </Grid.Column>
                <Grid.Column>
                    <img src="/images/cos11.png" className="imgMic"/>
                </Grid.Column>
                <Grid.Column>
                    <img src="/images/dpa.jpg" className="imgMic"/>
                </Grid.Column>
            </Grid>
            <Grid columns={3} verticalAlign="top">
                <Grid.Column>
                    <span className="textCaption">COUNTRYMAN B6</span>
                </Grid.Column>
                <Grid.Column>
                    <span className="textCaption">SANKEN COS-11</span>
                </Grid.Column>
                <Grid.Column>
                    <span className="textCaption">DPA 4060 SERIES</span>
                </Grid.Column>
            </Grid>
            <Grid centered>
                <Grid.Column width={13}>
                <div className="text">
                    Abetek Button-Down Lav Mounts are available in black or white for the above microphones.  The material is a strong and flexible TPE.  All of our packaging is biodegradable.{"\n\n"}

                    Abetek products are available from:{"\n\n"}

                    <span className="textSubtitle">USA</span>{"\n\n"}

                    Professional Sound Services (NYC, New Orleans, Ft. Lauderdale){"\n\n"}

                    Location Sound Corp (Los Angeles){"\n\n"}

                    Trew Audio (Nashville, Atlanta, Los Angeles){"\n\n"}

                    <span className="textSubtitle">CANADA</span>{"\n\n"}

                    Sonotechnique (Montreal){"\n\n"}

                    Trew Audio (Toronto, Vancouver){"\n\n"}

                    <span className="textSubtitle">EUROPE</span>{"\n\n"}

                    Soundkit (UK){"\n\n"}

                    Noyz Boyz Audio (Netherlands){"\n\n"}

                    SoundOnSetEurope (Spain){"\n\n"}

                    <span className="textSubtitle">AFRICA</span>{"\n\n"}

                    Pro Gear SA (South Africa){"\n\n"}
                </div>
                </Grid.Column>
            </Grid>
        </div>
    )
}