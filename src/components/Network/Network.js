import './Network.css'
import gitLogo from '../../assets/images/github.png'
import linkedinLogo from '../../assets/images/logo-linkedin.png'
import mailLogo from '../../assets/images/mail.png'

const Network = () => {
    return (
        <ul className='network'>
            <li className='network-logo'>
                <a href='https://github.com/SlideDF' target="_blank" rel="noreferrer">
                <img src={gitLogo} alt="logo github" />
                </a>
            </li>
            <li className='network-logo'>
                <a href="https://www.linkedin.com/in/david-fevre-7b16ba1b3/" target="_blank" rel="noreferrer">
                <img src={linkedinLogo} alt="logo linkedin" />
                </a>
            </li>
            <li className='network-logo'>
                <a href="mailto:fevre.david52@gmail.com">
                <img src={mailLogo} alt="logo mail" />
                </a>
            </li>
        </ul>
    )
}

export default Network