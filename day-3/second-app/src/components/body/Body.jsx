import React from 'react'
import Content from './Content'
import RightPanel from './RightPanel'
import './Body.css'

export default function Body() {
    const listOfLinks = [
        {
            label: "Google",
            link: "https://google.com"
        },
        {
            label: "Yahoo",
            link: "https://google.com"
        },
        {
            label: "Facebook",
            link: "https://google.com"
        },
        {
            label: "WEbsite 2665",
            link: "https://google.com"
        },
        {
            label: "Edyoda",
            link: "https://google.com"
        },
        {
            label: "Hamid Lohar",
            link: "https://google.com"
        }
    ];

    const places = [
        {
            imageURL: "https://www.w3schools.com/w3images/nature.jpg",
            title: "Place1",
            place: "County1"
        },
        {
            imageURL: "https://www.w3schools.com/w3images/rocks.jpg",
            title: "Place2",
            place: "County2"
        },
        {
            imageURL: "https://www.w3schools.com/w3images/underwater.jpg",
            title: "Place3",
            place: "County3"
        },
        {
            imageURL: "https://www.w3schools.com/w3images/wedding.jpg",
            title: "Place4",
            place: "County4"
        },
        {
            imageURL: "https://www.w3schools.com/w3images/wedding.jpg",
            title: "Place5",
            place: "County5"
        },
        {
            imageURL: "https://www.w3schools.com/w3images/mountainskies.jpg",
            title: "Place6",
            place: "County6"
        },
    ]
    return (
        <div className="body-container">
            <div className="content" >
                <Content places={places}></Content>
            </div>
            <div className="right" >
                <RightPanel listOfLinks={listOfLinks}></RightPanel>
            </div>
        </div>
    )
}
