import React, { Component } from 'react'

export class ContactFilter extends Component {
    
    constructor(props) {
        super(props);
        this.state = { ...props.filterBy };
    }

    onChangeHandler = (ev) => {
        const { value, name } = ev.target;
        this.setState({ [name]: value }, () => {
            this.props.onFilter({ ...this.state });
        });
    };
    
    onSubmitHandler = (ev) => {
        ev.preventDefault();
    }

    render() {
        return (
            <form className="ContactFilter" onSubmit={this.onSubmitHandler}>
                <input type="text" name="term" placeholder="Search"
                    onChange={this.onChangeHandler}
                    value={this.state.term}
                />
            </form>
        )
    }
}

export default ContactFilter;