import { useEffect, useState } from 'react';

export const useDocumentTitle = (title) => {
  const [documentTitle, setDoucmentTitle] = useState(title);
  useEffect(() => {
    document.title = documentTitle;
  }, [documentTitle]);

  return { setDoucmentTitle };
};
