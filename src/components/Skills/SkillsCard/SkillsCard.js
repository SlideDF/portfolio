import './SkillsCard.css'
import { Reveal } from 'react-awesome-reveal'
import { keyframes } from '@emotion/react'

const SkillCard = ({ data, name }) => {
    const customAnimation = keyframes`
        from {
            opacity: 0;
        }
        
        to {
            opacity: 1;
        }
    `
    return (
        <li className={name}>
            <Reveal className='panel' keyframes={customAnimation}>
                <div className='circle'></div>
                <div className='logo-skills'>
                    {data.logo.map((logo, index) => {
                        return (
                            <img key={index} src={logo} alt={data.name} />
                        )
                    })}
                </div>
                <p>{data.description}</p>
            </Reveal>
        </li>
    )
}

export default SkillCard