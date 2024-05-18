import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import{useNavigation} from '@react-navigation/native';

export default function WelcomePage() {
  const navigation= useNavigation();
  return (
    <ImageBackground  style={{flex:1,backgroundColor:'#D2F4D6',resizeMode:'cover'}}>
      <SafeAreaView style={{alignItems:'center'}}>
        <Image source={require('./assets/pazarclick-icon.png')} style={{width:193, height:193, marginTop:"40%"}}/>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flex:1, display:'flex',marginTop:'30%',borderWidth:1,width:'100%',borderColor:'#364A15',borderTopLeftRadius:16,borderTopRightRadius:16,}}>
        <View style={styles.authContainer}>
          <Text style={{fontSize:24,fontWeight:400, color:'#364A15' ,textAlign:'center', marginTop:44}}>Welcome to Pasar click</Text>
          <View style={{width:340,height:48,marginTop:12,justifyContent:'center'}}>
          <Text style={{textAlign:'center', fontSize:12, fontWeight:500, color:'#364A15'}}>We're thrilled to have you join our community. Get ready for a seamless grocery shopping experience right at your fingertips.</Text>
          </View> 
          <View style={{display:'flex', flexDirection:'row', gap:10, justifyContent:'center',marginTop:49}}> 
            <TouchableOpacity onPress={()=>{navigation.navigate("LoginPage")}}>
              <View style={{width:150,height:60 ,borderRadius:29, backgroundColor:'#DEF9EC',alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:16,color:'#364A15',fontWeight:500}}>Log in</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate("InfoPage")}}>
              <View style={{width:150,height:60 ,borderRadius:29, backgroundColor:'#DEF9EC',alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:16,color:'#364A15',fontWeight:500}}>Sign up</Text>
              </View>
            </TouchableOpacity>
  
            </View>
            <Text style={{color:'#364A15', fontWeight:500,textAlign:'center', marginTop:12, fontSize:16}}>or</Text>
            <View style={{display:'flex',flexDirection:'row',gap:16, justifyContent:'center',marginTop:12}}>
            <View style={{backgroundColor:'#364A15', width:44,height:44,justifyContent:'center', borderRadius:10,alignItems:'center'}}>
            <SimpleLineIcons name="social-google" size={23} color="#D2F4D6" />
            </View>
            
            <View style={{backgroundColor:'#364A15', width:44,height:44,justifyContent:'center', borderRadius:10,alignItems:'center'}}>
            <Fontisto name="apple" size={23} color="#D2F4D6" />
            </View>
            </View>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({

  authContainer:
  {
    flex:1,
    display:'flex',
    backgroundColor:'#FFFFFF1A',
    alignItems:'center'
  }
});
