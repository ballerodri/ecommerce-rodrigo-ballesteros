import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const LoginWidget = () => {

    return (
        <Link to="/login" className='login-widget'>
            <FaUser />
            <span to="/login"></span>
        </Link>
    )
}