import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import BlogPage from 'components/containers/blog/Page';

const App = () => (
  <div>
    <Navbar inverse color='inverse'>
      <NavbarBrand href='#'>Blog on React</NavbarBrand>
    </Navbar>
    <BlogPage />
  </div>
);

export default App;
