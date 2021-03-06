import { useRef, useEffect } from 'react';

export function useClickOutsideHook(handler) {
  const domNode = useRef();

  useEffect(() => {
    const onCloseHandler = (e) => {
      if (domNode.current && !domNode.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener('mousedown', onCloseHandler);

    return () => (document.removeEventListener('mousedown', onCloseHandler));
  });

  return domNode;
}
