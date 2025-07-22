import React from 'react'
import SkillDataProvider from '../sub/SkillsDataProvider'
import SkillText from '../sub/SkillText'

const SelectedSkills = [
  { name: "HTML", Image: "/skills/html.png", width: 60, height: 60 },
  { name: "CSS", Image: "/skills/css.png", width: 60, height: 60 },
  { name: "React", Image: "/skills/react.png", width: 60, height: 60 },
  { name: "Next.js", Image: "/skills/next.png", width: 60, height: 60 },
  { name: "Python", Image: "/skills/python.png", width: 60, height: 60 },
  { name: "Node.js", Image: "/skills/node.png", width: 60, height: 60 },
  { name: "Tailwind", Image: "/skills/tailwind.png", width: 60, height: 60 },
  { name: "Firebase", Image: "/skills/Firebase.png", width: 60, height: 60 },
  { name: "Dart", Image: "/skills/dart.svg", width: 60, height: 60 },
  { name: "SQL", Image: "/skills/mysql.png", width: 60, height: 60 },
  { name: "NumPy", Image: "/skills/NumPy.png", width: 60, height: 60 },
  { name: "Flutter", Image: "/skills/flutter.png", width: 60, height: 60 },
  { name: "C#", Image: "/skills/c-sharp.png", width: 60, height: 60 },
  { name: "Figma", Image: "/skills/figma.png", width: 60, height: 60 },
]

const Skills = () => {
  return (
    <section
      id='skills'
      className='flex flex-col items-center justify-center gap-0 h-full relative overflow-hidden py-20'
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {SelectedSkills.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
            label={image.name}
          />
        ))}
      </div>

      {/* Background video */}
      <div className='w-full h-full absolute'>
        <div className='w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover'>
          <video
            className='w-full h-auto'
            preload='false'
            playsInline
            loop
            muted
            autoPlay
            src='/cards-video.webm'
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
