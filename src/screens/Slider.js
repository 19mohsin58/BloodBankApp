import React from 'react';
import {View , Text , Image , ScrollView, Dimensions, StyleSheet } from 'react-native';


const {width} = Dimensions.get('window');
const height = width * 0.6
const images = [
    'https://i.ytimg.com/vi/uj3VF_EqXAs/maxresdefault.jpg',
    'https://pakobserver.net/wp-content/uploads/2019/09/2-39.jpg',
    'https://www.arabnews.pk/sites/default/files/styles/n_670_395/public/2020/06/14/2147251-1005641842.jpg?itok=L4SSY0vi',
    'https://prcs.org.pk/wp-content/uploads/2016/01/Blood-1024x624.jpg',
    
]

class slider extends React.Component{
    state={
        active:0
    }

        change=({nativeEvent}) => {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide !== this.state.active){
                this.setState({active: slide});
            }
        }

        render(){

    return(
        <View style={style.container}>
            <ScrollView pagingEnabled horizontal showsHorizontalScrollIndicator={false}
            onScroll={this.change}
             style={style.scroll}>
  {
      images.map((images,index) =>(
          <Image
          key={index}
          source={{uri:images}}
          style={style.image} />
      ))
  }

  </ScrollView>

    <View style={style.pagination}>
        {
            images.map((i,key) => (
            <Text key={key} style={key==this.state.active ? style.paginationActiveText: style.textpagin}>⚫</Text>
            ))
        }
    
        
    </View>


  </View>
    )
}}


const style =StyleSheet.create({
    container:{width,height},
    scroll:{width,height},
    image:{width,height,resizeMode:'cover'},
    pagination:{flexDirection:'row', position:'absolute', bottom:0, alignSelf:'center'},
    textpagin:{ fontSize:(width/30),color:'#8a8a8a', margin:3,},
    paginationActiveText:{fontSize:(width/30),backgroundColor:'#fff', margin:3,borderRadius:15}

})


export default slider;
