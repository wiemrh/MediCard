import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import {Left , Right, Icon, Header } from 'native-base'


class ParcoursDeSoin extends Component {

  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name = "folder" style ={{ fontSize : 24 ,
      color:tintColor}}/>
    )
  }

  render() {
    return (

     <View style={ styles.container}>
          <Header style ={{backgroundColor : "#FFFFFF" }} >
            <Left style ={{top:10 , flex:1 }} >
                 <Icon name ="menu"  onPress={() =>
                this.props.navigation.openDrawer()
                } />
             </Left>
         </Header>

     <View style ={{ flex:1, alignItems:'center',justifyContent:'center'}}>
           <Text>ParcoursDeSoin </Text>
     </View>
      
     </View>

    );
  }

}

export default ParcoursDeSoin;

const styles =StyleSheet.create({
    container : {

      flex: 1,
    
    
       
    }
})
