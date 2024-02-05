import styled from 'styled-components'

export const Item = styled.li`
  width: 100%;
  height: 50px;
  border:none;
  display: flex;
  align-items:center;
  justify-content:center;
  border-radius: 10px;
  font-weight: 600;
  cursor:pointer;
  font-size: 1.5rem;
  a {
    color:  #000;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items:Center;
    justify-content: center;
    :hover {
    color:#fff;
    }
  }
`
