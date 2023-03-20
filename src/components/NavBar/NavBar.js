import './NavBar.css'
import logo from '../../assets/images/logo.png'

const NavBar = ({ setOpenPresentation, openPresentation, openPortfolio, setOpenPortfolio, openSkills, setOpenSkills, openExperience, setOpenExperience }) => {

    const fadeOut = async (value) => {
        const buttonPresentation = document.querySelector('.container-nav button:nth-child(1)')
        const buttonPortfolio = document.querySelector('.container-nav button:nth-child(2)')
        const buttonSkills = document.querySelector('.container-nav button:nth-child(3)')
        const buttonExperience = document.querySelector('.container-nav button:nth-child(4)')

        switch(value) {
            case 'presentation':
                if(buttonPortfolio.classList.value.includes('active') || buttonSkills.classList.value.includes('active') || buttonExperience.classList.value.includes('active')) {
                    buttonPresentation.classList.add('active-right')
                    buttonPortfolio.classList.add('close-left')
                    buttonSkills.classList.add('close-left')
                } else {
                    buttonPresentation.classList.add('active-left')
                }

                buttonPortfolio.classList.remove('active-left')
                buttonPortfolio.classList.remove('active-right')
                buttonSkills.classList.remove('active-left')
                buttonSkills.classList.remove('active-right')
                buttonExperience.classList.remove('active-left')

                break
            case 'portfolio':
                if(buttonPresentation.classList.value.includes('active')) {
                    buttonPortfolio.classList.add('active-left')
                    buttonPortfolio.classList.add('close-left')
                    buttonPortfolio.classList.remove('close-right')
                } else {
                    buttonPortfolio.classList.add('active-right')
                    buttonPortfolio.classList.remove('close-left')
                    buttonPortfolio.classList.add('close-right')
                    buttonSkills.classList.remove('close-right')
                    buttonSkills.classList.add('close-left')
                }

                buttonPresentation.classList.remove('active-right')
                buttonPresentation.classList.remove('active-left')
                buttonSkills.classList.remove('active-left')
                buttonSkills.classList.remove('active-right')
                buttonExperience.classList.remove('active-left')
                break
            case 'skills':
                if(buttonPresentation.classList.value.includes('active') || buttonPortfolio.classList.value.includes('active')) {
                    buttonSkills.classList.add('active-left')
                    buttonSkills.classList.remove('close-left')
                    buttonSkills.classList.add('close-right')
                    buttonPortfolio.classList.remove('close-left')
                    buttonPortfolio.classList.add('close-right')
                } else {
                    buttonSkills.classList.add('active-right')
                    buttonSkills.classList.remove('close-left')
                    buttonSkills.classList.add('close-right')
                }

                buttonPresentation.classList.remove('active-right')
                buttonPresentation.classList.remove('active-left')
                buttonPortfolio.classList.remove('active-left')
                buttonPortfolio.classList.remove('active-right')
                buttonExperience.classList.remove('active-left')
                break
            case 'experience':
                if(buttonSkills.classList.value.includes('active')) {
                    buttonSkills.classList.add('close-right')
                    buttonSkills.classList.remove('close-left')
                }
                if(buttonPortfolio.classList.value.includes('active')) {
                    buttonPortfolio.classList.add('close-right')
                    buttonPortfolio.classList.remove('close-left')
                }
                buttonExperience.classList.add('active-left')
                
                buttonPresentation.classList.remove('active-right')
                buttonPresentation.classList.remove('active-left')
                buttonPortfolio.classList.remove('active-left')
                buttonPortfolio.classList.remove('active-right')
                buttonSkills.classList.remove('active-left')
                buttonSkills.classList.remove('active-right')
                break
            default:
        }

        const promise = new Promise((resolve, reject) => {
            document.getElementById('home').classList.add('close-section')
            
            if(openPresentation === true) {
                if(value !== 'presentation') {
                    document.querySelector('.presentation').classList.add('close-section')
                }
            }
            if(openPortfolio === true) {
                if(value !== 'portfolio') {    
                    document.querySelector('.portfolio').classList.add('close-section')
                }
            }
            if(openSkills === true) {
                if(value !== 'skills') {
                    document.querySelector('.skills').classList.add('close-section')
                }
            }
            if(openExperience === true) {
                if(value !== 'experience') {
                    document.querySelector('.experience').classList.add('close-section')
                }
            }

            setTimeout(() => {
                resolve()
            }, 400)
        })

        await promise.then(() => {
            document.getElementById('home').style.display = 'none'

            setOpenPresentation(false)
            setOpenPortfolio(false)
            setOpenSkills(false)
            setOpenExperience(false)
        })

        return
    }

    return (
        <nav>
            <a href='/'>
                <img className='logo-navbar' src={logo} alt='' />
            </a>
            <div className='container-nav'>
                <button className='close-right' onClick={() => {
                    fadeOut('presentation').then(() => {  
                        setOpenPresentation(true)
                    })
                    document.querySelector('nav').classList.add('open-nav')
                }}>Présentation</button>
                <button className='close-right' onClick={() => {
                    fadeOut('portfolio').then(() => {
                        setOpenPortfolio(true)
                    })
                    document.querySelector('nav').classList.add('open-nav')
                }}>Portfolio</button>
                <button className='close-right' onClick={() => {
                    fadeOut('skills').then(() => {
                        setOpenSkills(true)
                    })
                    document.querySelector('nav').classList.add('open-nav')
                }}>Compétences</button>
                <button className='close-left' onClick={() => {
                    fadeOut('experience').then(() => {
                        setOpenExperience(true)
                    })
                    document.querySelector('nav').classList.add('open-nav')
                }}>Expérience</button>
            </div>
        </nav>
    )
}

export default NavBar