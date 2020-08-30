import React, { Component } from "react";

class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = { accordions: this.props.data };
    }
    componentDidMount() {
        this.setPanelHeight(".panel-1", false);
    }
    handleClick = (currentAccordion) => {
        const newAccordions = this.state.accordions;
        newAccordions.forEach((accordion) => {
            if (currentAccordion.id === accordion.id) {
                accordion.state = "active";
                this.setPanelHeight(`.panel-${accordion.id}`, false);
            } else {
                accordion.state = "inactive";
                this.setPanelHeight(`.panel-${accordion.id}`, true);
            }
        });
        this.setState({ accordions: newAccordions });
    };
    setPanelHeight(selector, close) {
        const panel = document.querySelector(`${selector}`);
        panel.style.maxHeight = close === true ? null : panel.scrollHeight + "px";
    }
    render() {
        const { accordions } = this.state;
        return (
            <React.Fragment>
                {accordions.map((accordion, index) => {
                    return (
                        <div className="container">
                            <React.Fragment key={index}>
                                <button className={`accordion ${accordion.state}`} onClick={() => this.handleClick(accordion)} >
                                    {accordion.name}
                                </button>
                                <div className={`panel panel-${accordion.id} `}>
                                    {accordion.content()}
                                </div>
                            </React.Fragment>
                        </div>
                    );
                })}
            </React.Fragment>
        );
    }
}

export default Accordion;