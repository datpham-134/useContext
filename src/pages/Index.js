import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import { login } from '../utils/login';

const Index = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      Index
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {!user ? (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      ) : (
        <button
          onClick={() => {
            setUser(null);
          }}
        >
          logout
        </button>
      )}
    </div>
  );
};

export default Index;
