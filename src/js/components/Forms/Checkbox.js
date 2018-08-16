import React, { Component } from 'react';
import PropTypes from "prop-types"

class Checkbox extends Component {
    state = {
        isChecked: false,
    }

    toggleCheckboxChange = () => {
        const { handleCheckboxChange, id } = this.props;

        this.setState(({ isChecked }) => (
            {
                isChecked: !isChecked,
            }
        ));

        handleCheckboxChange(id);
    }

    render() {
        const { name, id } = this.props;
        const { isChecked } = this.state;

        return (
            <div className="pr3 pb1">
                <label>
                    <input
                        className="mr1"
                        type="checkbox"
                        value={id}
                        checked={isChecked}
                        onChange={this.toggleCheckboxChange}
                    />
                    {name}
                </label>
            </div>
        );
    }
}

Checkbox.propTypes = {
    handleCheckboxChange: PropTypes.func,
    id: PropTypes.number
}

export default Checkbox;
