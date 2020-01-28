import If from '../helpers/If';
import React from 'react';

class Input extends React.Component {

    render() {
        return (
            <div className="input-group my-4">
                <If test={this.props.icon}>
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="search">
                            <i className={'fa fa-'+this.props.icon}></i>
                        </span>
                    </div>
                </If>
                <input 
                    type={this.props.category} 
                    className="form-control" 
                    placeholder={this.props.placeholder} />
            </div>
        );
    }

}

export default Input;