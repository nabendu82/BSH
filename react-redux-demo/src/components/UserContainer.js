import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

const UserContainer = ({ fetchUsers, userData }) => {
    useEffect(() => {
        fetchUsers()
    },[])

    return userData.loading ? <h2>Loading...</h2> : userData.error ? <h2>{userData.error}</h2> : (
        <>
            <h2>User List</h2>
            <div>{userData.users && userData.users.map(user => <h4>{user.name}</h4>)}</div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)