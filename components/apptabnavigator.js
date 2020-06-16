import React from 'react';
import Bookdonation from '../screens/bookdonatescreen';
import Bookrequest from '../screens/bookrequestscreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native'

export const Apptabnavigator = createBottomTabNavigator({
    donatebooks:{screen:Bookdonation,navigationoptions:{
        tabbaricon: <Image source={require("../assets/request-icon.png")}style={{width:50,height:50}}/>,
        tabbarlabel:"donate books"
    }},
    requestbooks:{screen:Bookrequest,navigationoptions:{
        tabbaricon: <Image source={require("../assets/donate-icon.png")}style={{width:50,height:50}}/>,
        tabbarlabel:"request books"
    }}
})

