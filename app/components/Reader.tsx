import React, {ChangeEvent, useState, useEffect} from 'react'
import Ebooks from '../ebook/Ebooks';

const Reader = () => {
    const [ file, setFile ] = useState<File | null>(null);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
          setFile(e.target.files[0]);
        }
    }

  return (
    <div className="">
      { !file ? <input type="file" onChange={handleChange} accept=".epub"/> : ""}
      {file && <Ebooks file={file} />}
    </div>
  )
}

export default Reader
