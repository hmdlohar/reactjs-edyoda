import React from 'react'

class LightBulb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBulbOn: false
        }
        console.log("Constructor run. ")
    }

    componentDidMount() {
        console.log("Component Did Mount run. ")
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component Update Called. ")
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update Called. ")
    }

    componentWillUnmount() {
        console.log("Component is going to be destroyed. ")
    }

    onClickOfBulb = () => {
        console.log("Bulb is clicked")
        this.setState({ isBulbOn: !this.state.isBulbOn })
    }

    render() {
        console.log("Render run. ")
        return (
            <div style={{ border: '1px solid gold', padding: 10, margin: 5, backgroundColor: '#ECEFCD' }}>
                {/* <img src={`https://www.w3schools.com/js/pic_bulb${this.state.isBulbOn ? 'on' : 'off'}.gif`}
                    onClick={this.onClickOfBulb} />
                <img
                    src={this.state.isBulbOn ? "https://www.w3schools.com/js/pic_bulbon.gif" : "https://www.w3schools.com/js/pic_bulboff.gif"}
                    onClick={this.onClickOfBulb} /> */}
                {this.state.isBulbOn ?
                    <img src="https://www.w3schools.com/js/pic_bulbon.gif" onClick={this.onClickOfBulb} />
                    :
                    <img src="https://www.w3schools.com/js/pic_bulboff.gif" onClick={this.onClickOfBulb} />
                }
            </div>
        )
    }
}

export default LightBulb;
