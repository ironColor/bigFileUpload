import { memo, useEffect, useRef } from 'react';
import ColorText from '@/components/colorText';
import styled from 'styled-components';


function AppBar() {
  return (
    <Nav>
      <Content>
        <ColorText 
          changeTextArry={['去想', '去做', '去爱!']}
          fixedText='Hi, bro, '
        />
        <RightNav> 
          <span>大文件上传</span>
        </RightNav>
      </Content>
    </Nav>
  )
}

export default memo(AppBar);

const Nav = styled.nav`
  position: sticky;
  height: 52px;
  border-bottom: 1px solid;
`

const Content = styled.div`
  margin: 0 auto;
  max-width: 980px;
  display: flex;
  justify-content: space-between;
  
`

const RightNav = styled.div`
  display: flex;
  padding-top: 18px;
  font-size: 12px;
`