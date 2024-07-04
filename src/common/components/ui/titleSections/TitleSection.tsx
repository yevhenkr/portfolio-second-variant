import styled from 'styled-components'

type TitleProps = {
  title: string
}

export const TitleSection = (props: TitleProps) => {
  return (
      <StyledDiv>
        <h2>{props.title}</h2>
      </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    position: relative;
    margin-top: 0;
    margin-bottom: 80px;

    &::before {
      content: '';

      position: absolute;
      bottom: -30px;
      left: 50%;
      transform: translateX(-50%);

      width: 55px;
      height: 1px;

      //background: var(--color-info-500);
    }
  }
`
