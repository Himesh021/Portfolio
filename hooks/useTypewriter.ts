'use client';

import { useEffect, useState } from 'react';

export function useTypewriter(roles: string[]) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }, 50); // delete 50ms/char
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, 80); // type 80ms/char
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 1500); // pause 1500ms at full word
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return { displayText, isDeleting };
}
