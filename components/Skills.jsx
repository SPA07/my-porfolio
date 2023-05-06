import '../styles/skills.css'

const Skills = () => {
    return (
        <main id="skills-container">
            <h1 id="title-skills">
                Skills
            </h1>
            <section className="skills-img-container">
                <img src="../public/skills/react.svg" alt="react" className='react'/>
                <img src="../public/skills/icons8-javascript.svg" alt="javascript" className='javascript'/>
                <img src="../public/skills/icons8-html-5.svg" alt="" />
                <img src="../public/skills/icons8-css3 (1).svg" alt="css" />
                <img src="../public/skills/icons8-git.svg" alt="git" />
                <img src="../public/skills/file_type_node_icon_130301.svg" alt="node.js" />
            </section>
        </main>
    );
};

export default Skills;