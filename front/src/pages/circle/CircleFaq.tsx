import React, { useState } from 'react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

interface Props {
  isUpdate: boolean;
  faq: FAQ;
}

const CircleFaq = ({ isUpdate, faq }: Props) => {
  const [update, setUpdate] = useState<boolean>(false);

  return <div></div>;
};

export default CircleFaq;
