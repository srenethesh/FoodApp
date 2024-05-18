import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { Text, View ,ImageBackground,SafeAreaView,ScrollView,StyleSheet,TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
const AddressPage = () => {

    const navigation = useNavigation();

    return(
        <ImageBackground  style={{flex:1,backgroundColor:'#D2F4D6',resizeMode:'cover'}}>
            <SafeAreaView style={{marginTop:'30%' ,alignItems:'center'}}>
                
                <View style={{width:114,height:24,backgroundColor:'#364A15',borderRadius:50}}>
                    <Text style={{color:'#D2F4D6',textAlign:'center'}}>3</Text>
                </View>
               
                    <Text style={{marginTop:51,fontSize:30,color:'#364A15'}}>Sign up</Text>
                    <Text style={{marginTop:24,fontSize:16,color:'#364A15'}}>Enter your information to sing up</Text>
            </SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flex:1, display:'flex',marginTop:'20%',borderWidth:1,width:'100%',borderColor:'#364A15',borderTopLeftRadius:16,borderTopRightRadius:16,}}>
                <View style={styles.authContainer}>
                     <Text style={{width:193,height:31,fontSize:24,fontWeight:500,marginTop:14,marginLeft:20,color:'#364A15'}}>Payment</Text>
                     <Text style={{width:176,height:24,fontSize:16,fontWeight:400,marginTop:17,marginLeft:20,color:'#364A15'}}>Card Holder Name</Text>
                     <View style={{marginTop:10,alignItems:'center'}}>
                     <TextInput style={{width:361, height:47,backgroundColor:'#EFEFEF',borderRadius:12,paddingHorizontal:25}} placeholder='Name'/>
                     </View>
                     <Text style={{width:116,height:24,fontSize:16,fontWeight:400,marginTop:17,marginLeft:20,color:'#364A15'}}>Card Number</Text>
                     <View style={{marginTop:10,alignItems:'center'}}>
                     <TextInput style={{width:361, height:47,backgroundColor:'#EFEFEF',borderRadius:12,paddingHorizontal:25}} placeholder='4958 | XXXX XXXX XXXX'/>
                     </View>
                     <View style={{flexDirection:'row'}}>
                     <Text style={{width:116,height:24,fontSize:16,fontWeight:400,marginTop:17,marginLeft:20,color:'#364A15'}}>CVV</Text>
                     <Text style={{width:116,height:24,fontSize:16,fontWeight:400,marginTop:17,marginLeft:4,color:'#364A15'}}>Expire date</Text>
                     </View>
                    <View style={{alignItems:'center'}}>
                    <View style={{justifyContent:'center',display:'flex',flexDirection:'row',gap:16,marginTop:8}}>
                      <View style={{width:106,height:47,borderRadius:12,backgroundColor:'#EFEFEF'}}>
                      <TextInput style={{marginTop:10,marginLeft:25}} placeholder="***"/>
                      </View>
                        <View style={{width:239,height:47,borderRadius:12,backgroundColor:'#EFEFEF'}}>
                        <TextInput style={{marginTop:10,marginLeft:25}} placeholder="MM/YY"/>
                        </View>
                      </View>
                    
                    
                    <TouchableOpacity onPress={()=> {navigation.navigate("HomePage")}} style={{marginTop:'10%',width:361,height:60,borderRadius:29,borderWidth:1,borderColor:'#364A15',justifyContent:'center'}}>
                        <Text style={{fontSize:16,textAlign:'center',fontWeight:500,color:'#364A15'}}>Continue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> {navigation.navigate("HomePage")}}>
                        <Text style={{width:33,height:21,textDecorationLine:'underline', marginTop:17}}>Skip</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
export default AddressPage;
const styles = StyleSheet.create({
    authContainer:
    {
      flex:1,
      display:'flex',
      backgroundColor:'#FFFFFF1A',
    },
})
