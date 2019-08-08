import React from 'react'
import { Grid, Divider } from 'semantic-ui-react'

export default function Home() {
    return(
        <div>
            <img src="/images/single_mount_bg.jpg" width="100%" alt="Abetek mount with mic"/>
            <div className="text">
                <div className="textTitle">Abetek - Solutions for Sound & Film</div>
                <div className="textSubtitle">Buttondown Lavalier Mount for Personal Microphones</div>
                <br />
            </div>
            <Divider />
            <Grid columns={3} stackable>
                <Grid.Column>
                    <img src="/images/B6.jpg" className="imgMic" alt="Countryman B6" />
                    <span className="textCaption">COUNTRYMAN B6</span>
                </Grid.Column>
                <Grid.Column>
                    <img src="/images/cos11.png" className="imgMic" alt="Sanken COS-11" />
                    <span className="textCaption">SANKEN COS-11</span>
                </Grid.Column>
                <Grid.Column>
                    <img src="/images/dpa.jpg" className="imgMic" alt="DPA 4060 series" />
                    <span className="textCaption">DPA 4060 SERIES</span>
                </Grid.Column>
            </Grid>
            <Grid centered>
                <Grid.Column width={13}>
                <div className="text">
                    Abetek Button-Down Lav Mounts are available in black and white for the above microphones.  The material is a strong, flexible TPE.  All packaging is biodegradable.{"\n\n"}

                    Abetek products are available from:{"\n\n"}

                    <span className="textSubtitle">USA</span>

                    <ul>
                        <li><a href="http://www.pro-sound.com/p/SABEMICMOUNT.html" 
                                target='_blank' 
                                rel='noopener noreferrer'>
                                Professional Sound Services
                            </a> 
                            {' '}(NYC, New Orleans, Ft. Lauderdale)
                        </li>
                        <li><a href="https://www.locationsound.com/abetek-button-down-lav-mount-3338" target='_blank' rel='noopener noreferrer'>Location Sound Corp</a> (Los Angeles)</li>
                        <li><a href="https://www.trewaudio.com/product/abetek-button-down-mounts/" target='_blank' rel='noopener noreferrer'>Trew Audio</a> (Nashville, Atlanta, Los Angeles)</li>
                    </ul>

                    <span className="textSubtitle">CANADA</span>

                    <ul>
                        <li><a href="http://sonotechnique.ca/contact" target='_blank' rel='noopener noreferrer'>Sonotechnique</a> (Montreal)</li>
                        <li><a href="https://www.trewaudio.com/product/abetek-button-down-mounts/" target='_blank' rel='noopener noreferrer'>Trew Audio</a> (Toronto, Vancouver)</li>
                    </ul>

                    <span className="textSubtitle">EUROPE</span>

                    <ul>
                        <li><a href="http://www.soundkit.co.uk/product/9004173/abetek-mic-concealer" target='_blank' rel='noopener noreferrer'>Soundkit</a> (UK)</li>
                        <li><a href="http://www.noyzboyz.nl/Producten/AbeTek" target='_blank' rel='noopener noreferrer'>Noyz Boyz Audio</a> (Netherlands)</li>
                        <li><a href="http://soundonseteurope.com/abetek-mount?search=abetek" target='_blank' rel='noopener noreferrer'>SoundOnSetEurope</a> (Spain)</li>
                    </ul>

                    <span className="textSubtitle">AFRICA</span>
                    <ul>
                        <li><a href="http://www.progearsa.co.za" target='_blank' rel='noopener noreferrer'>Pro Gear SA</a> (South Africa)</li>{"\n\n"}
                    </ul>
                </div>
                </Grid.Column>
            </Grid>
            <Divider />
            <br />
            <br />
            <br />
        </div>
    )
}