import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="mail">
        <a href="/">Home</a>
      </Menu.Item>

      <Menu.Item key="about">
        <a href="/about">About</a>
      </Menu.Item>
      <SubMenu title={<span>Locations</span>}>
        <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Gedung JTK</Menu.Item>
          <Menu.Item key="setting:2">Masjid LH</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Pujasera</Menu.Item>
          <Menu.Item key="setting:4">ATM</Menu.Item>
        </MenuItemGroup>
      </SubMenu>
      <Menu.Item key="cari">
        <a href="/cari">Cari</a>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;
