import axios from "axios";
import React from "react"
import { Table, Pagination, PaginationItem, PaginationLink } from "reactstrap"
import ItemEntry from "./ItemEntry";

export default class ItemList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentPage: 1,
            lastPage: null
        }
    }

    componentDidMount() {
        this.initData();
    }

    initData(page=1) {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlvZWx0YW51amF5YSIsIm5hbWUiOiJ5b2VsYWphaCIsInJvbGUiOiJTVEFGRiIsInJvbGVfbGV2ZWwiOjAsImlhdCI6MTYyNTQ1ODI0MCwiZXhwIjoxNjI1NTQ0NjQwfQ.GScIMHgATTMhI2eJT59qxooAGVomyVUqbiKxRQjJt_I';
        axios.get(`http://localhost:8000/merchant/product?page=${page}`, {
            headers: {
                authorization: `bearer ${token}`
            }
        }).then(res => {
            this.setState({
                currentPage: res.data.page.current,
                lastPage: res.data.page.last,
                items: res.data.products
            });
        })
    }

    remove = (itemId) => {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InlvZWx0YW51amF5YSIsIm5hbWUiOiJ5b2VsYWphaCIsInJvbGUiOiJTVEFGRiIsInJvbGVfbGV2ZWwiOjAsImlhdCI6MTYyNTQ1ODI0MCwiZXhwIjoxNjI1NTQ0NjQwfQ.GScIMHgATTMhI2eJT59qxooAGVomyVUqbiKxRQjJt_I';
        axios.delete(`http://localhost:8000/merchant/product/${itemId}`, {
            headers: {
                authorization: `bearer ${token}`
            }
        }).then(res => {
            if (res.status === 200) {
                alert('Item deleted')
                this.initData(this.state.currentPage);
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Items</h1>
                <Table>
                    <thead>
                        <th>Name</th>
                        <th>Base Price</th>
                        <th>Stock</th>
                        <th>Description</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {this.state.items.map((item, key) => {
                            return <ItemEntry key={key} item={item} remove={this.remove} />
                        })}
                    </tbody>
                </Table>
                <Pagination>
                    <PaginationItem>
                        <PaginationLink first onClick={() => {this.initData(1)}} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink previous onClick={() => {this.initData(Math.max(1, this.state.currentPage - 1))}} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink>
                            {this.state.currentPage}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink next onClick={() => {this.initData(Math.min(this.state.lastPage, this.state.currentPage + 1))}} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink last onClick={() => {this.initData(this.state.lastPage)}} />
                    </PaginationItem>
                </Pagination>
            </div>
        )
    }
}
