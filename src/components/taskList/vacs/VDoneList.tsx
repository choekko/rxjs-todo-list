/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {css} from '@emotion/react';

interface VDoneListProps {

}

const VDoneList = ({}: VDoneListProps) => {
  return (
    <section css={DoneListStyle}>

    </section>
  );
};

const DoneListStyle = css`
  flex: 1 0 300px;
  height: 100%;
  border: 1px solid gray;
`
export default VDoneList;