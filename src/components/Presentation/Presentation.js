import './Presentation.css'

const Presentation = () => {
    const getAge = () => {
        const date = new Date() 
        const birthday = [16, 11, 1992]
        let age = date.getFullYear() - birthday[2]
        
        if(birthday[1] > date.getMonth()) {
            age--
        }
        
        if(birthday[1] === date.getMonth()) {
            if(birthday[0] > date.getDate()) {
                age--
            }
        }

        return age
    }

    const age = getAge()
        
    return (
        <section className='presentation'>
            <h1>PRESENTATION</h1>
            <div className='line'></div>

            <div className='profil'>
                <div className='profil-picture'>
                </div>

                <div className='profil-text'>
                    <p>Je m'appelle <strong>David Fevre</strong>, j'ai {age} ans et je suis passioné par les domaines de l'informatique.</p>
                    <p><strong>Développeur web</strong> en Back-End et Front-End. J'ai une appétence pour le Développement Front-End avec <strong>React</strong> et les technologies basées sur <strong>JavaScript</strong>.</p>
                    <p>J'aime réaliser, expérimenter, découvrir et apprendre de nouvelles technologies.</p>
                </div>
            </div>
        </section>
    )
}

export default Presentation