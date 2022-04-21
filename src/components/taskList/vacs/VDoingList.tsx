/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {css} from '@emotion/react';

interface VDoingListProps {

}

const VDoingList = ({}: VDoingListProps) => {
  return (
    <section css={DoingListStyle}>

    </section>
  );
};

const DoingListStyle = css`
  flex: 1 0 300px;
  height: 100%;
  border: 1px solid gray;
`

export default VDoingList;