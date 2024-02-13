import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RootTabParamsList} from '../../../navigation/tabNavigation/Navigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {IMAGES} from '../../../constants/assessts/AllAssessts';
import {userStyle} from '../../../styles/frontEnd/User';
import {TextInput} from 'react-native-gesture-handler';
import Button from '../../../components/button/Button';
import Toast from 'react-native-toast-message';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useAuthContext } from '../../../context/AuthContext';

interface userScreenProps {
  navigation:  BottomTabNavigationProp<RootTabParamsList, 'user'>;
}

export default function User({navigation}: userScreenProps) {
  const [passowrd, setPassword] = useState('');
  const [name, setName] = useState('');
  const {user}=useAuthContext()
  useEffect(() => {
    console.log('User Email:', user.email);
  }, [user]);
  console.log('userEamil',user)

  const handleSubmit = () => {
    console.log('submit');
    if(!passowrd.trim() || !name.trim()){
      Toast.show({
        type:'error',
        text1:'Enter Email or Passowrd'
      })
      console.log('enter email and password')
      return;
    }
  }
  return (
    <View style={userStyle.mainContainer}>
      <View style={userStyle.main}>
        <Text style={userStyle.heading}>Profile Setting</Text>
        <IMAGES.userImg />
        <Text style={userStyle.mail}>Username</Text>
        <TextInput
          style={userStyle.input}
          value={passowrd}
          onChangeText={name => setName(name)}
        />
        <Text style={userStyle.mail}>Email</Text>
        <TextInput
          style={userStyle.input}
          value={user.email}
          onChangeText={passowrd => setPassword(passowrd)}
        />
      </View>
      <View style={userStyle.btnsContainer}>
        <Button
          title={'Update profile'}
          buttonStyle={userStyle.btnsContainer}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}
