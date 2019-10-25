import styled from 'styled-components';


const Header = styled.header`
display: flex;
justify-content: flex-end;
padding: 1em;
background-color: rgb(205, 202, 169);

span:first-child {
  font-weight: bold;
  margin-right: 1em;
}

span:last-child {
  margin-left: 1em;
}
`;
export default Header