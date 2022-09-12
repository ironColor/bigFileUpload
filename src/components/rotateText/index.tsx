import { useEffect, useRef } from "react";
import styled from "styled-components";
import cn from "classnames";
export enum WorldColor {
  ALIZARIN = 'alizarin',
  WISTERIA = 'wisteria',
  PETERRIVER = 'peter-river',
  EMERALD = 'emerald',
  SUNFLOWER = 'sun-flower'
}

interface Iprops {
  fixedText: string;
  changeText: Array<[WorldColor, string]>
}

export default function RotateText({fixedText, changeText}: Iprops) {
    const wordRef = useRef<HTMLSpanElement[]>([]);

    useEffect(() => {
      if (wordRef.current.length) {
        wordRef.current.forEach((word) => {
          let letters = word.textContent?.split('');
          word.textContent = '';
          letters?.forEach((letter) => {
            let span = document.createElement('span');
            span.textContent = letter;
            span.className = 'letter';
            word.append(span);
          });
        });

        let currentWordIndex = 0;
        let maxWordIndex = wordRef.current.length - 1;
        wordRef.current[currentWordIndex].style.opacity = '1';
        
        let rotateText = () => {
          let currentWord = wordRef.current[currentWordIndex];
          let nextWord = currentWordIndex  === maxWordIndex ? wordRef.current[0] : wordRef.current[currentWordIndex + 1];

          Array.from(currentWord.children).forEach((letter, i) => {
            setTimeout(() => {
              letter.className = 'letter out';
            }, i * 80);
          });

          nextWord.style.opacity = '1';

          Array.from(nextWord.children).forEach((letter, i) => {
            letter.className = 'letter behind';
            setTimeout(() => {
              letter.className = 'letter in';
            }, 340 + i * 80);
          });

          currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        };
        rotateText();
        setInterval(rotateText, 4000);
      }
    });

    return (
      <RotateWrap>
        <p>{fixedText}</p>
        <p>
          {
            changeText.map((item, i) => {
              return (
                <span 
                  key={i} 
                  className={cn('word', item[0])}
                  ref={(r) => {
                    if (r) {
                      wordRef.current[i] = r
                    }
                  }}
                >
                  {item[1]}
                </span>
              )
            })
          }
        </p>
      </RotateWrap>
    )
}

const RotateWrap = styled.div`
  font-weight: 600;
  font-size: 36px;
  color: #444;
  p {
    display: inline-flex;
    margin: 0;
    vertical-align: top;

    &:first-child {
      margin-right: 10px;
    }

    .word {
      position: absolute;
      display: flex;
      opacity: 0;
    }
  }

  .alizarin {
    color: #e74c3c;
  }

  .wisteria {
    color: #8e44ad;
  }

  .peter-river {
    color: #3498db;
  }

  .emerald {
    color: #2ecc71;
  }

  .sun-flower {
    color: #f1c40f;
  }

  .dark {
    .rotating-text {
      color: #ccc;
    }
  }
  .letter {
    transform-origin: center center 25px;

    &.out {
      transform: rotateX(90deg);
      transition: 0.32s cubic-bezier(0.6, 0, 0.7, 0.2);
    }
    &.in {
      transition: 0.38s ease;
    }
    &.behind {
      transform: rotateX(-90deg);
    }
  }
`