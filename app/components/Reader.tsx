import React, {ChangeEvent, useState} from 'react'
import JSZip from 'jszip'

const Reader = () => {
    const [ file, setFile ] = useState<File | null>(null);
    const zip = new JSZip();

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            setFile
            zip.loadAsync(e.target.files[0]).then(function (zip) {
            return zip.file("Hello.txt")?.async("string");
            }).then(function (text) {
            console.log(text);
            });
        }
    }

  return (
    <div>
      <input type="file" onChange={handleChange} />
    </div>
  )
}

export default Reader
