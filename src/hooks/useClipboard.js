import {useState, useCallback} from 'react';

export default function useClipboard() {
  const [status, setStatus] = useState('');

  const copy = useCallback(async text => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('Copied');
      setTimeout(() => setStatus(''), 1800);
      return true;
    } catch (err) {
      setStatus('Copy failed');
      setTimeout(() => setStatus(''), 2000);
      return false;
    }
  }, []);

  return {status, copy};
}
