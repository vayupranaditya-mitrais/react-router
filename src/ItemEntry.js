import React from "react"
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

export default class ItemEntry extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.base_price}</td>
                <td>{this.props.item.stock}</td>
                <td>{this.props.item.description}</td>
                <td>
                    <Button color="danger" onClick={() => this.props.remove(this.props.item._id)}>Remove</Button>
                    <Button color="warning">
                        <Link to={`/items/${this.props.item._id}`}>
                            Edit
                        </Link>
                    </Button>
                </td>
            </tr>
        )
    }
}