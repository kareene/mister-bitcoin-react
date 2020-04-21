import React, { Component } from 'react'

export class ContactFilter extends Component {
    state = {
        term: ''
    };

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

    render() {
        return (
            <form className="ContactFilter">
                <input type="text" name="term" placeholder="Search"
                    onChange={this.onChangeHandler}
                    value={this.state.term}
                />
            </form>
        )
    }
}

export default ContactFilter;