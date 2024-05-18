
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from './LoginPage';
import WelcomePage from './WelcomePage';
import OtpVerification from './OtpVerification';
import HomePage from './HomePage';
import InfoPage from './InfoPage';
import AddressPage from './AddressPage'
import PaymentDetails from './PaymentDetails';

const stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <stack.Navigator>
            <stack.Screen 
                name="WelcomePage"
                component={WelcomePage}
                options={{headerShown:false}}
                />
                <stack.Screen 
                name="LoginPage"
                component={LoginPage}
                options={{headerShown:false}}
                />
                <stack.Screen 
                name="OtpVerification"
                component={OtpVerification}
                options={{headerShown:false}}
                />
                <stack.Screen 
                name="HomePage"
                component={HomePage}
                options={{headerShown:false}}
                />
                <stack.Screen 
                name="InfoPage"
                component={InfoPage}
                options={{headerShown:false}}
                />
                <stack.Screen 
                name="AddressPage"
                component={AddressPage}
                options={{headerShown:false}}
                />
                <stack.Screen 
                name="PaymentDetails"
                component={PaymentDetails}
                options={{headerShown:false}}
                />
            </stack.Navigator>
        </NavigationContainer>
    )
}