import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { 
    DashboardLayoutRoot,
    DashboardLayoutWrapper,
    DashboardLayoutContainer,
    DashboardLayoutContent
} from './StyledComponents';

import SideBar from './Sidebar';
import TopAppBar from './TopNavbar';

const DashboardLayout = () => {
    const [isMobileNavOpen, setMobileNavOpen ] = useState(false);
    return(
        <DashboardLayoutRoot>
            <TopAppBar onMobileNavOpen={() => setMobileNavOpen(true)} />
            <SideBar 
                onMobileClose={() => setMobileNavOpen(false)}
                openMobile={isMobileNavOpen}
            />
          <DashboardLayoutWrapper>
              <DashboardLayoutContainer>
                  <DashboardLayoutContent>
                      <Outlet />
                  </DashboardLayoutContent>
              </DashboardLayoutContainer>
          </DashboardLayoutWrapper>
        </DashboardLayoutRoot>
    );
}

export default DashboardLayout;