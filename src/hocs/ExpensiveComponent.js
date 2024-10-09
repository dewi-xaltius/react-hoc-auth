const ExpensiveComponent = React.memo(function ExpensiveComponent(props) {
  // Expensive rendering or calculations here
  return <div>{/* Rendered content */}</div>;
});

import React, { useMemo } from 'react';

function ComplexComponent({ complexInput }) {
  const memoizedValue = useMemo(() => {
    // Perform complex calculation
    return complexCalculation(complexInput);
  }, [complexInput]);

  return <div>{memoizedValue}</div>;
}

import React, { useCallback } from 'react';

function ParentComponent() {
  const [input, setInput] = React.useState('');

  const memoizedCallback = useCallback(
    () => {
      // Do something with 'input'
    },
    [input], // Dependencies
  );

  return <ChildComponent onAction={memoizedCallback} />;
}
