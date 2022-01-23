import React, { FC, useCallback } from 'react';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import axios from 'axios';

const Workspace: FC = ({ children }) => {
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher);
  const onLogout = useCallback(() => {
    axios
      .post('https://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        mutate();
      });
  }, []);
  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
      {children}
      {/*  다른 컴포넌트를 안에 쓰면 children이 된다. */}
    </div>
  );
};

export default Workspace;
