import { memo, useEffect, useRef } from 'react';
import ColorText from '@/components/colorText';
import styled from 'styled-components';


function AppBar() {
  return (
    <>
      <ColorText 
        changeTextArry={['去想', '去做', '去爱!']}
        fixedText='Hi, bw, '
      />
    </>
  )
}

export default memo(AppBar);

const TextWrap = styled.div`
  font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
  font-size: 60px;
  font-weight: 600;
`

const TextArry = styled.span`
  display: inline-flex;
  position: relative;
  min-width: 350px;
  overflow: hidden;
  padding-bottom: 15px;
`