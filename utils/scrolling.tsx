import React from 'react';

export const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  if (!href) return;

  const targetId = href.substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const header = document.querySelector('header');
    // Usar a altura real do header ou um fallback
    const headerOffset = header ? header.offsetHeight : 72; 
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
