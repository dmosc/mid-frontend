import styled from 'styled-components';
import {Button, Layout} from 'antd';

const {Header} = Layout;

const NavbarContainer = styled(Header)`
  background: #ffffff;
  padding-right: 10px !important;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.background.grey};
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 15px;
`;

const ProfileButton = styled(Button)`
  height: 100%;
  display: flex;
  align-items: center;
`;

export {NavbarContainer, NameContainer, ProfileButton};
