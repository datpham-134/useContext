import React, { useContext } from 'react';
import { UserContext } from '../UserContext';

const About = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      About
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default About;
