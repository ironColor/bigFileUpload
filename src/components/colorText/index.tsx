import { memo, useEffect, useRef } from 'react';
import styled from 'styled-components';
import styles from './style.module.less';
import cn from 'classnames';

interface Iprops {
  /** 变化的文字列表 */
  changeTextArry: string[];
  /** 固定文字 */
  fixedText?: string;
}

const TextColorArry = ['typeColorYellow', 'typeColorPink', 'typeColorPink', 'typeColorPurple', 'typeColorHue',]

function ColorText({ changeTextArry, fixedText }: Iprops) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const lastSpanRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (spanRef.current) {
      // 获得变化文字节点
      const nodes = spanRef.current.children
      let len = nodes.length;
      // 每个文字追加动画
      let timeout = function(i: number) {
        setTimeout(() => {
            nodes[i].className += ' ' + styles.dataHueAnim;
        }, i * 800);
      }
      for(let i = 0; i < len - 1; i++) {
          timeout(i);
      }
      setTimeout(() => {
        lastSpanRef.current && (lastSpanRef.current.className += ' ' + styles.dataShiftAnim)
    }, (changeTextArry.length - 1) * 800);
    }
  })
  return (
    <TextWrap>
      { fixedText && <span>{fixedText}</span>}
      <TextArry className={styles.typeColors} ref={spanRef}>
        {
          changeTextArry.map((text, index) => {
            // 最后一个变化文字 用 特殊颜色
            const colorNum =  index === changeTextArry.length -1 ? TextColorArry.length - 1 : index % TextColorArry.length;
            console.log(97, TextColorArry[colorNum])
            return (
              <span 
                className={cn(styles[TextColorArry[colorNum]], styles.typeColor) } 
                key={index} 
                ref={ index === changeTextArry.length - 1 ? lastSpanRef : null}
              >
                {text}
              </span>
            )
          })
        }
      </TextArry>
    </TextWrap>
  )
}

export default memo(ColorText);

const TextWrap = styled.div`
  font-family: "SF Pro SC","SF Pro Display","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
  font-size: 21px;
  font-weight: 600;
  display: inline-block;
  margin: 14px 0 -14px;
`

const TextArry = styled.span`
  display: inline-flex;
  position: relative;
  min-width: 350px;
  overflow: hidden;
  padding-bottom: 15px;
`