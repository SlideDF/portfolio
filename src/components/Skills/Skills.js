import './Skills.css'
import skills from '../../data/skills'
import SkillCard from './SkillsCard/SkillsCard'

const Skills = () => {
    return (
        <section className='skills'>
            <h1>Compétences</h1>
            <div className='line'></div>

            <ul className='branch'>
                {skills.map((data, index) => {
                    let name = 'left'

                    if(index%2 === 0) {
                        name = 'right'
                    }

                    return (
                        <SkillCard key={`${data.name}-${index}`} data={data} name={name} />
                    )
                })}
            </ul>
        </section>
    )
}

export default Skills