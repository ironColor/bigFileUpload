import { FC, memo, useRef,} from 'react';
import AppBar from '@/layout/appBar'
import styled from 'styled-components';

export const Layout:FC<{ keyConfig?: string }> = memo(({ keyConfig }) => {
  const textRef = useRef<HTMLDivElement>(null);

  return(
    <>
      <AppBar />
      <BaseCard>
        <TextWrap ref={textRef}>
          <span>随风起，意难平</span>
        </TextWrap>
      </BaseCard>
    </>
    
  )
})

const BaseCard = styled.div`
  position: sticky;
  top: 0;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
`

const TextWrap = styled.div`

  width: 100vw;
  height: 50vh;
  line-height: 50vh;
  text-align: center;
  font-family: Helvetica;
  margin: 0;
  padding: 0;
  font-size: 48px;
  color: #fff;
  letter-spacing: -0.3px;
  
  background-image: linear-gradient(75deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 33.33%, rgba(255, 255, 255, 0) 66.67%, rgba(255, 255, 255, 0) 100%);
  background-size: 300% 100%;
  background-position-x: 100%;
  
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  transition: 2s background-position-x ease-in-out;

  &:hover {
    background-position-x: 0%;
  }
`