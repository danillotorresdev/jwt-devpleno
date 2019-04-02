import React from 'react'
import { Route, Link } from 'react-router-dom'

const Home = props => <h1>Home Admin</h1>

const Users = props => <h1>Users Admin</h1>

const Admin = props => {
    return (
        <div>
        {console.log(props.match)}
            <h1>Admin</h1>
            <p>
                <Link to='/admin'>Home</Link>
                <Link to='/admin/users'>Users</Link>

            </p>
            <div>
                <Route exact path={`${props.match.path}/`} component={Home} />
                <Route exact path={`${props.match.path}/users`} component={Users}/>
            </div>
        </div>
    )
}

export default Admin