import { useMemo } from "react"

export default function Base() {

  const handleFileChange = (e: any) => {
    console.log('xxxxx', e)
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