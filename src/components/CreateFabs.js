import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as fabActions from 'actions/fabActions';

import FabComponent from './FabComponent';

export default function CreateFabs() {
  const fab = useSelector((state) => state.fab);
  const dispatch = useDispatch();

  const dummies = new Array(fab).fill(0);

  return (
    <>
      <div>
        <label htmlFor="fabCount">{fab}</label>
        <button
          name="FabIncrement"
          onClick={() => dispatch(fabActions.fabIncrement())}
        >
          INCREMENT
        </button>
        <button
          name="FabIncrement"
          onClick={() => dispatch(fabActions.fabDecrement())}
        >
          DECREMENT
        </button>
      </div>
      {dummies.map((value, index) => (
        <FabComponent key={index} index={index} />
      ))}
    </>
  );
}
