import { StyleSheet,Image,Text, View } from 'react-native';
import Colors from '@/src/constants/Colors';

const ProductListItem = ({product}) => {
    console.log(product)
    return (
      <View style={styles.container}>
        <Image  style={styles.image} source={{uri: product.image}}/>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
  
      </View>
    )
  }

export default ProductListItem


const styles = StyleSheet.create({
    container: {
      backgroundColor:'white',
      padding:10,
      borderRadius:10
  
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingVertical:10
    },
    price: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Colors.light.tint
    },
    image:{
      width:'70%',
      aspectRatio:1,
    
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
  