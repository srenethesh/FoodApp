import { SafeAreaView, Text, View , ImageBackground,ScrollView,StyleSheet, TextInput, TouchableHighlight, TouchableOpacity} from "react-native";
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

const LoginPage = () =>{
  const navigation = useNavigation();
  return(
    <ImageBackground  style={{flex:1,backgroundColor:'#D2F4D6',resizeMode:'cover'}}>
 <SafeAreaView style={{marginTop:'20%' ,alignItems:'center'}}>
    <View style={{display:'flex',flexDirection:'row',gap:0}}>
      <View style={{width:24,height:24,borderRadius:50, backgroundColor:'#364A15'}}>
        <Text style={{color:'#D2F4D6',textAlign:'center'}}>1</Text>
      </View>  
      <View style={styles.line} />
      <View style={{width:24,height:24,borderWidth:2,borderColor:'#364A1580',borderRadius:50}}>
        <Text style={{color:'#364A1580',textAlign:'center'}}>2</Text>
      </View>
    </View>  
    <Text style={{marginTop:74,fontSize:30,color:'#364A15'}}>Log In</Text>
    <Text style={{marginTop:24,fontSize:16,color:'#364A15'}}>Enter your mobile number and login</Text>
 </SafeAreaView>
 <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flex:1, display:'flex',marginTop:'30%',borderWidth:1,width:'100%',borderColor:'#364A15',borderTopLeftRadius:16,borderTopRightRadius:16,}}>
 <View style={styles.authContainer}>
    <Text style={{width:116,height:24,fontSize:16,fontWeight:400,marginTop:32,marginLeft:20}}>Phone</Text>
    <View style={{alignItems:'center'}}>
    <View style={{justifyContent:'center',display:'flex',flexDirection:'row',gap:16,marginTop:8}}>
      <View style={{width:106,height:47,borderRadius:12,backgroundColor:'#EFEFEF'}}>

      </View>
      <View style={{width:239,height:47,borderRadius:12,backgroundColor:'#EFEFEF'}}>
          <TextInput style={{marginTop:10,marginLeft:25}} placeholder="+60 (000) 0000 0000"/>
      </View>
    </View>
    <TouchableOpacity onPress={()=> {navigation.navigate("OtpVerification")}} style={{marginTop:'10%',width:361,height:60,borderRadius:29,borderWidth:1,borderColor:'#364A15',justifyContent:'center'}}>
      <Text style={{fontSize:16,textAlign:'center',fontWeight:500,color:'#364A15'}}>Continue</Text>
    </TouchableOpacity>
    <Text style={{color:'#364A15',fontSize:14,marginTop:13}}>Or</Text>
    <View style={styles.horizontalLine}/>
    <TouchableOpacity style={{marginTop:'10%',width:361,height:60,borderRadius:29,borderWidth:1,borderColor:'#364A15',justifyContent:'center'}}>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:8}}>
      <Feather name="mail" size={24} color="#364A1580" />
      <Text style={{fontSize:16,fontWeight:500,color:'#364A1580'}}>Login with email</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={{marginTop:16,width:361,height:60,borderRadius:29,borderWidth:1,borderColor:'#364A15',justifyContent:'center'}}>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:8}}>
      <AntDesign name="apple-o" size={24} color="#364A1580" />
      <Text style={{fontSize:16,fontWeight:500,color:'#364A1580'}}>Login with Apple</Text>
      </View>
    </TouchableOpacity>
    </View>
 </View>
 </ScrollView>
 </ImageBackground>
  )
}

export default LoginPage;

const styles = StyleSheet.create({

  authContainer:
  {
    flex:1,
    display:'flex',
    backgroundColor:'#FFFFFF1A',
  },
  horizontalLine: {
    width:353,
    height: 1,
    backgroundColor: '#364A15', 
    marginVertical: 10, 
  },
  line:{
    width:12,
    height:1,
    backgroundColor:"#364A15",
    marginVertical:10,
  }
}
);