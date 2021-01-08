import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button';
import Icon from './components/Icon/icon';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/submenu';

function App() {
  return (
    <>
      <Menu defaultIndex="0" className="test">
        <MenuItem>cool link 1</MenuItem>
        <MenuItem disabled>cool link 2</MenuItem>
        <MenuItem>cool link 1</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>drop down 1</MenuItem>
          <MenuItem>drop down 2</MenuItem>
        </SubMenu>
      </Menu>

      <Menu defaultIndex="0" mode="vertical" defaultOpenSubMenus={['3']}>
        <MenuItem>cool link 1</MenuItem>
        <MenuItem disabled>cool link 2</MenuItem>
        <MenuItem>cool link 1</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>drop down 1</MenuItem>
          <MenuItem>drop down 2</MenuItem>
        </SubMenu>
      </Menu>

      <Button btnType={ButtonType.Primary} onClick={() => console.log('You clicked.')}>
        Primary
      </Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button btnType={ButtonType.Default}>Default</Button>
      <Button btnType={ButtonType.Link}>Link</Button>

      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>
        Small
      </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>
        Large
      </Button>

      <Button btnType={ButtonType.Default} disabled>
        Default
      </Button>

      <Button btnType={ButtonType.Primary} disabled>
        Disabled Primary
      </Button>

      <Button btnType={ButtonType.Link} disabled>
        Disabled Link
      </Button>
    </>
  );
}

export default App;
