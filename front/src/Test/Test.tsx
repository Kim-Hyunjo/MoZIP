import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DevelopUrl } from '../http/HttpUrl';

interface TestDTO {
  users: string;
  clubs: string;
}

const Test = () => {
  const [dto, setDto] = useState<TestDTO>({ users: 'no', clubs: 'no' });

  const getApi = async () => {
    await axios.get(DevelopUrl+'api/').then((r) => {
      let res: TestDTO = r.data;
      console.log(res);
      setDto(res);
    });
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <div>{dto.clubs}</div>
      <div>{dto.users}</div>
    </div>
  );
};

export default Test;
