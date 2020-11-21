import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const RouteTest = (props: RouteComponentProps<{ postId: string }>) => {
  // 추가
  function goNextPost() {
    const nextPostId = Number(props.match.params.postId) + 1;
    props.history.push(`/posts/${nextPostId}`);
  }

  return (
    <div>
      <h3>Post {props.match.params.postId}</h3>
      {/* 버튼추가 */}
      <button onClick={goNextPost}>Next post</button>
      {/* URL Paramter Parsing */}
      <p>{new URLSearchParams(props.location.search).get('bodys')}</p>
    </div>
  );
};

export default RouteTest;
