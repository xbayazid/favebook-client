import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import '../../styles.css';
import Login from '../Login/Login';
import SignUp from '../../SignUp/SignUp';


const Authentication = () => {
  return (
    <div className='w-[30%] mx-auto pt-20'>
      <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Login
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Register
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
          <Login/>
        </Tabs.Content>
        {/* Register here  */}
        <Tabs.Content className="TabsContent" value="tab2">
          <SignUp/>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default Authentication;





//Authentication