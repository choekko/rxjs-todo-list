/** @jsxImportSource @emotion/react */
import * as React from 'react';
import {css} from '@emotion/react';

interface VTodoListProps {

}

const VTodoList = ({}: VTodoListProps) => {
  return (
    <section css={TodoListStyle}>

    </section>
  );
};

const TodoListStyle = css`
  flex: 1 0 auto;
  width: 100%;  
  border: 1px solid gray;
`

export default VTodoList;