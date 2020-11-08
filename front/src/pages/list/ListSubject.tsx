import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const ListSubject = (props: RouteComponentProps<{ subject: string }>) => {
  return (
    <div>
      <h1>asdasdasd</h1>
      <h1>{props.match.params.subject}</h1>
    </div>
  );
};

export default ListSubject;
