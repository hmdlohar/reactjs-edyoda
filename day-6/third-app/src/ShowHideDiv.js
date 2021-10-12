import React from 'react'

class ShowHideDiv extends React.Component {
    state = {
        showDiv: true
    }

    onButtonClick = () => {
        this.setState({ showDiv: !this.state.showDiv })
    }

    render() {
        console.log(this.state.showDiv, "Show")
        return (
            <div>
                <button onClick={this.onButtonClick} >Click Me</button>
                {this.state.showDiv == true ?
                    <div style={{ height: '100px', width: '100%', border: '1px solid blue' }}>
                        This div will be hidden
                    </div>
                    :
                    null}
            </div>
        );
    }
}

export default ShowHideDiv;