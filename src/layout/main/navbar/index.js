import React from 'react';
import {Avatar, Dropdown, Menu, PageHeader, Typography} from 'antd';
import {useHistory} from 'react-router-dom';
import {DownOutlined, LogoutOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';
import {NameContainer, NavbarContainer, ProfileButton} from './elements';
import {useUser} from 'providers/user';

const {Item, ItemGroup} = Menu;
const {Text} = Typography;

const NavBar = () => {
  const {push} = useHistory();
  const {user, logout} = useUser();

  return (
    <NavbarContainer>
      <PageHeader
        backIcon={false}
        style={{marginRight: 'auto', padding: 0}}
        title='Mid'
        subTitle='Mediaciones digitales'
      />
      <Dropdown
        trigger={['click']}
        overlay={
          <Menu mode='vertical'>
            <ItemGroup title='Cuenta'>
              <Item onClick={() => push(`/@oscard`)} icon={<UserOutlined />}>
                Mi perfil
              </Item>
              <Item onClick={() => push('/settings')} icon={<SettingOutlined />}>
                Configuración
              </Item>
            </ItemGroup>
            <ItemGroup title='Sesión'>
              <Item onClick={() => logout()} icon={<LogoutOutlined />}>
                Salir
              </Item>
            </ItemGroup>
          </Menu>
        }
      >
        <ProfileButton type='text'>
          <Avatar style={{marginRight: 15}} size={35} src={user?.profileImg}>
            {user?.firstName?.[0]}
          </Avatar>
          <NameContainer>
            <Text style={{fontSize: 12}} type='secondary'>
              Bienvenido
            </Text>
            <Text style={{marginTop: -5}} strong>
              {user?.firstName}
            </Text>
          </NameContainer>
          <DownOutlined />
        </ProfileButton>
      </Dropdown>
    </NavbarContainer>
  );
};

export default NavBar;
