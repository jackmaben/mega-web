import type * as React from 'react';

// The AI Integration page uses the <image-slot> web component (public/image-slot.js):
// a drag-and-drop image placeholder. Declare it so TSX/JSX recognises the custom element.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'image-slot': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        shape?: string;
        radius?: string;
        placeholder?: string;
        src?: string;
      };
    }
  }
}

export {};
