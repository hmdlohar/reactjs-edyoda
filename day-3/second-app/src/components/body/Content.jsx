import React from 'react'
// import CH from './ContentHeader'; // We are using Default exported item. 
import { ContentHeader2, name } from './ContentHeader'
import Grid from './Grid'

export default function Content(props) {
    return (
        <div>
            <div>name: {name}</div>
            <div >
                <ContentHeader2 />
            </div>
            <div>
                <Grid selectedPlaces={props.selectedPlaces}
                    onSelect={props.onSelect} places={props.places}></Grid>
            </div>
        </div>
    )
}
