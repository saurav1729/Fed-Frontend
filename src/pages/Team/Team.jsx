import React, { useState, useEffect } from 'react';
import styles from './styles/Team.module.scss'; 
import teamMembers from '../../data/MemberCard.json'; 
import MemberCard from '../../components/Team/Member/MemberCard';
import { FaRegArrowAltCircleRight } from "react-icons/fa";


function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}

const Team = () => {
  const roles = ['Director', 'Technical', 'Creative', 'Marketing', 'Operations', 'Sponsorship & PR'];
  const teamByRole = roles.map(role => ({
    role,
    members: teamMembers.filter(member => member.role === role)
  }));

  console.log('Team by role:', teamByRole);

  const TeamSection = ({ title, members, isDirector }) => {
    const windowWidth = useWindowWidth();
    const membersPerRow = windowWidth < 500 ? 2 : 4;
    const remainderMembersCount = members.length % membersPerRow;
    const lastRowMembers = remainderMembersCount > 0 ? members.slice(-remainderMembersCount) : [];
    const otherMembers = remainderMembersCount > 0 ? members.slice(0, -remainderMembersCount) : members;

    return (
      <div className={`${styles.teamSection} ${isDirector ? styles.directorSection : ''}`}>
        <h3>{title}</h3>
        <div className={`${styles.teamGrid} ${isDirector ? styles.directorGrid : ''}`}>
          {otherMembers.map((member, idx) => (
            <MemberCard
              key={idx}
              className="teamMember"
              name={member.name}
              image={member.image}
              social={member.social}
              title={member.title}
              role={member.role}
              know={member.know}
            />
          ))}
        </div>
        {lastRowMembers.length > 0 && (
          <div className={styles.lastRowCentered}>
            {lastRowMembers.map((member, idx) => (
              <MemberCard
                key={idx}
                className="teamMember"
                name={member.name}
                image={member.image}
                social={member.social}
                title={member.title}
                role={member.role}
                know={member.know}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <h2>Meet Our <span>Team</span></h2>
      <div className={styles.para}><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam provident commodi consequatur neque magni, non tempore dolor corporis voluptate animi voluptatibus assumenda illo consectetur voluptatem quam, cum eligendi libero quos.</p></div>
      <div className={styles.circle}></div>
      <div className={styles.circle2}></div>
      
      {teamByRole.filter(section => section.role === 'Director').map((section, index) => (
        <TeamSection
          key={index}
          // title="Director"
          members={section.members}
          isDirector={true}
        />
      ))}
      
      {teamByRole.filter(section => section.role !== 'Director').map((section, index) => (
        <TeamSection
          key={index}
          title={<span><span style={{ color: '#fff' }}>Team </span><strong style={{ color: '#FF8A00' }}>{section.role}</strong></span>}
          members={section.members}
          isDirector={false}
        />
      ))}

      <div className={styles.alumniBut}><a href='#'><span style={{ color: '#fff' }}>Meet</span> Our Alumni</a><FaRegArrowAltCircleRight /></div>
    </div>
  );
};

export default Team;
