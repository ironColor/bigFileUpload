type requestProps = {
  url: string | URL,
  method: string,
  data: Document | XMLHttpRequestBodyInit | null | undefined,
  headers: {[p:string]: string},
  onprogress: any
}

const request = ( { url, method = 'post', data, headers, onprogress}: requestProps ) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    Object.keys(headers).forEach(key =>
      xhr.setRequestHeader(key, headers[key])
    );
    xhr.upload.onprogress = onprogress;
    xhr.send(data);
    xhr.onload = (e: any) => {
      resolve({
        data: e.target.response
      });
    };
  })
} 

export default request;

