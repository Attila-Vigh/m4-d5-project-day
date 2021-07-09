import { Component } from 'react';

class NavItem extends Component {


    render() {
        const { title } = this.props
        
        return (
            <div> { title } </div>
             
        );
    }
}

export default NavItem;