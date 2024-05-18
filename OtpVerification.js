import React, { useRef } from 'react'
import { Text, StyleSheet, View,ImageBackground,SafeAreaView ,ScrollView,TouchableOpacity,TextInput} from 'react-native'
import {useNavigation} from '@react-navigation/native'
 
const OtpVerification = () =>{

  const navigation = useNavigation();
  const inputRefs =[
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleInputChange = (text, index) => {
    if(text.length===1 && index<inputRefs.length-1)
      {
        inputRefs[index+1].current.focus();
      }
  };
  const handleInputClear=(index)=>{
      if(inputRefs[index].current){
        inputRefs[index].current.clear();
      }
  }
  return(
    <ImageBackground  style={{flex:1,backgroundColor:'#D2F4D6',resizeMode:'cover'}}>
        <SafeAreaView style={{marginTop:'20%' ,alignItems:'center'}}>
    <View style={{display:'flex',flexDirection:'row',gap:0}}>
      <View style={{width:24,height:24,borderWidth:2,borderColor:'#364A1580',borderRadius:50}} >
        <Text style={{color:'#364A1580',textAlign:'center'}}>1</Text>
      </View>  
      <View style={styles.line} />
      <View style={{width:24,height:24,borderRadius:50, backgroundColor:'#364A15'}}>
        <Text style={{color:'#D2F4D6',textAlign:'center'}}>2</Text>
      </View>
    </View>  
    <Text style={{marginTop:74,fontSize:30,color:'#364A15'}}>OTP</Text>
    <Text style={{marginTop:24,fontSize:16,color:'#364A15'}}>We sent OTP code to verify your number</Text>
 </SafeAreaView>
 <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flex:1, display:'flex',marginTop:'30%',borderWidth:1,width:'100%',borderColor:'#364A15',borderTopLeftRadius:16,borderTopRightRadius:16,}}>
      <View style={styles.authContainer}>
        <Text style={{width:116,height:24,fontSize:16,fontWeight:400,marginTop:32,marginLeft:20}}>Enter OTP</Text>
        <View style={styles.container}>
        {[0,1,2,3].map((index)=>(
          <TextInput
            key={index}
            keyboardType='numeric'
            maxLength={1}
            style={styles.input}
            ref={inputRefs[index]}
            onChangeText={(text)=>handleInputChange(text,index)}
            onFocus={()=>handleInputClear(index)}
          />
        ))       
        }
      
    </View>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={()=> {navigation.navigate("HomePage")}} style={{marginTop:'50%',width:361,height:60,borderRadius:29,borderWidth:1,borderColor:'#364A15',justifyContent:'center'}}>
           <Text style={{fontSize:16,textAlign:'center',fontWeight:500,color:'#364A15'}}>Continue</Text>
       </TouchableOpacity>
        </View>
      </View>
        
  </ScrollView>
  </ImageBackground>
  )
};
export default OtpVerification;

const styles = StyleSheet.create({
  line:{
    width:12,
    height:1,
    backgroundColor:"#364A15",
    marginVertical:10,
  },
  authContainer:
  {
    flex:1,
    display:'flex',
    backgroundColor:'#FFFFFF1A',
  },
  container: {
    flexDirection: 'row',

    justifyContent:'center',
    gap:32,
    paddingHorizontal: 16,
    marginTop: 24,
    
  },
  input: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 24,
    textAlign: 'center',
    backgroundColor:'#EFEFEF'
  },
})
