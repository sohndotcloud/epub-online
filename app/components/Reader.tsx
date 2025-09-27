import React, {ChangeEvent, useState, useEffect} from 'react'
import Ebooks from '../ebook/Ebooks';

interface ReaderProps {
  setReaderPicked: (picked: boolean) => void;
}

const Reader = ({setReaderPicked}: ReaderProps) => {
    const [ file, setFile ] = useState<File | null>(null);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
          setFile(e.target.files[0]);
        }
    }

    useEffect(() => {
      if (file) {
        setReaderPicked(true);
      }
    }, [file]);

  return (
    <div className="">
      { !file ? <input type="file" onChange={handleChange} /> : ""}
      {file && <Ebooks file={file} />}
    </div>
  )
}

export default Reader
