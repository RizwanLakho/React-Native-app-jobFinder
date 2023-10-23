import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image,FlatList} from 'react-native'

import styles from './welcome.style'
import { useRouter } from 'expo-router'

import {icons,SIZES} from '../../../constants'
const jobTypes=['newjobs', 'fulltimejobs','internship' ,'i3nternship', 'int4ernship', 'in4ternship']
const Welcome = ({searchTerm,setSearchTerm,handleClick}) => {
  
  const [activeJobType, setActiveJobType] = useState('newjobs')
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
          <Text style={styles.userName}>Hello Rizwan Ali </Text>
          <Text style={styles.welcomeMessage}>Find your perfect job </Text>
      </View>

      <View style={styles.searchContainer}>
         <View style={styles.searchWrapper}>
            <TextInput 
              style={styles.searchInput}
               value={searchTerm}
               onChangeText={(text)=>setSearchTerm(text)}
               placeholder='What are you Looking for?'
            />
         </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
         <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
       </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({item})=>(
            <TouchableOpacity
            style={styles.tab(activeJobType,item)}
            onPress={()=>{
              setActiveJobType(item);
              router.push(`/search/${item}`)
            }}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal
        />

      </View>
    </View>
  )
}

export default Welcome