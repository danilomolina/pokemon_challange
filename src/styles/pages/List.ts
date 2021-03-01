import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 10px;

  div {
    font-size: 12px;
    color: ${props => props.theme.colors.primary};
  }

  #link { 
      margin-top: 5px;
      font-size: 15px;
      text-decoration: none;
  }

`