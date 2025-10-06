import React, { useEffect, useRef, useState } from 'react'
import ePub, { Rendition } from 'epubjs'

interface EbooksProps {
  file?: File;
}

const Ebooks: React.FC<EbooksProps> = ({ file }) => {
  const renditionRef = useRef<Rendition | null>(null);

  useEffect(() => {
    if (!file) return;

    const setupBook = async () => {
      const arrayBuffer = await file.arrayBuffer();
      const book = ePub(arrayBuffer);
      const rendition = book.renderTo("viewer", {
        height: 720,
        spread: "auto"
      });

      renditionRef.current = rendition;
      rendition.display();
    };

    setupBook();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key == 'ArrowLeft') {
        renditionRef.current?.prev();
      } else if (event.key == 'ArrowRight') {
        renditionRef.current?.next();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [file]);

  return (
    <div  className="text-left text-l w-[100%] h-[100%] overflow-y">
      <div id="viewer" className="scrolled"></div>
      <button className="border w-[50%]" onClick={() => renditionRef.current?.prev()}>{ "< Previous " }</button>
      <button className="border w-[50%]" onClick={() => renditionRef.current?.next()}>{"Next >"}</button>
    </div>
  )
}

export default Ebooks
