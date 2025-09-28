import React, { useEffect, useState } from 'react'
import JSZip from 'jszip'
import parse from 'xml-parser'
import DOMPurify from 'dompurify'

interface EbooksProps {
    file?: File;
}

const Ebooks: React.FC<EbooksProps> = ({ file }) => {
  const [content, setContent] = useState<string>("");
  const [page, setPage] = useState<number>(0);
  const [pages, setPages] = useState<string[]>([]);
  const [scroll, setScroll] = useState(0);
    useEffect(() => {
    async function getContainerFile() {
      const zip = new JSZip();
      if (!file) return;
      const arrayBuffer = await file.arrayBuffer();
      const loadedZip = await zip.loadAsync(arrayBuffer);
      const xmlString = await loadedZip.files["META-INF/container.xml"].async("string");
      const xmlObj = parse(xmlString);
      const manifestFile = xmlObj["root"]["children"][0]["children"][0]["attributes"]["full-path"];
      const manifestString = await loadedZip.files[manifestFile].async('string');
      const manifestXml = parse(manifestString);
      const size = manifestXml["root"]["children"][1]["children"].length;
      let i = 0;
      const pages = [];

      while (i < size) {
        const currentFile = manifestXml["root"]["children"][1]["children"][i]["attributes"]["href"];
        if (currentFile.endsWith(".xhtml")) {
          let fileContent = "";
          if (loadedZip.files[currentFile]) {
            fileContent = await loadedZip.files[currentFile].async('string');
          } else {
            fileContent = await loadedZip.files["OEBPS/" + currentFile].async('string');
          }
          pages.push(fileContent);
          let content = DOMPurify.sanitize(pages[page]);
          setContent(content)
        }
        i++;
      }
      setPages(pages);
    }

    if (file) {
      getContainerFile();
    }
  }, [file]);

  useEffect(() => {
    const handleKeyDown = (event: { key: string; }) => {
      if (event.key === 'ArrowLeft') {
        if (pages.length > 0) {
          setPage(page - 1)
          setContent(pages[page - 1])
        }
      } else if (event.key === 'ArrowRight') {
        if (pages.length > page) {
          setPage(page + 1);
          setContent(pages[page + 1]);
        }
      }
    };


    const handleClick = (event: MouseEvent) => {
        if (pages.length > page) {
          setPage(page + 1)
          setContent(pages[page])
        }
      };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClick);
        return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleClick);
    };
  }, [pages, page, setPage, setContent]);

  
  return (
    <div className="h-[85vh] overflow-y-auto p-4 border touch-auto">
      <div dangerouslySetInnerHTML={{ __html: content ? content : ''}}></div>
    </div>
  )
}

export default Ebooks
