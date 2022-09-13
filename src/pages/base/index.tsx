import { useState } from "react";


const CHUNK_SIZE = 1 * 1024 * 1024;

export default function Base() {

  const handleFileChange = (e: any) => {
    const [file] = e.target.files;

    if (!file) return;
    

  }

  return (
    <>
      <div style={{textAlign: 'center'}}> 
        <h1>大文件上传</h1>
        <input 
          type='file'
          onChange={handleFileChange}
        />
      </div>
    </>
  )
}