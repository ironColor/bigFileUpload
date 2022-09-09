import { memo, useEffect, useRef } from 'react';
import ColorText from '@/components/colorText';
import RotateText, { WorldColor } from '@/components/rotateText';
import styled from 'styled-components';


function AppBar() {
  let changeText: Array<[WorldColor, string]> = [
    [WorldColor.ALIZARIN, '去想'],
    [WorldColor.SUNFLOWER, '去做'],
    [WorldColor.PETERRIVER, '去爱']
  ]
  return (
    <Nav>
      <Content>
        <RotateText 
          fixedText='Hi, bro, '
          changeText={changeText}
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