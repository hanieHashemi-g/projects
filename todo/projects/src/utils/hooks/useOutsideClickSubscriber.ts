import type { RefObject } from 'react';
import { useEffect } from 'react';

function useOutsideClickSubscriber(ref: RefObject<HTMLElement | null>, callback: () => void) {
  useEffect(() => {

    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    function keyDownEscapeHandler(event: KeyboardEvent) {
      if (event.key == 'Escape') {
        callback();
      }
    }

    document.addEventListener('keydown', keyDownEscapeHandler);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', keyDownEscapeHandler);
    };
  }, [ref]);
}
export default useOutsideClickSubscriber