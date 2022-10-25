import { forwardRef, useImperativeHandle, useRef } from 'react';

const NiceInput = (_, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));
  return <input type='text' ref={inputRef} />;
};
export default forwardRef(NiceInput);
