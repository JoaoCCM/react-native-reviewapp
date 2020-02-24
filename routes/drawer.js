import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

import Home from "./homeStack";
import About from "./aboutStack";

const rootDrawerNavigation = createDrawerNavigator({
    Home: {
        screen: Home
    },
    About: {
        screen: About
    }
});

export default createAppContainer(rootDrawerNavigation);
