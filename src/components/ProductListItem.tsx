import { StyleSheet, Image, Text, View } from 'react-native';
import Colors from '@/constants/Colors';
import { Product } from '../types'

export const defaultProductImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/margarita.png'

type ProductListItemProps = {
    product: Product

}


const ProductListItem = ({ product }: ProductListItemProps
) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{
                uri: product.image || defaultProductImage
            }} resizeMode='contain' />
            <Text style={styles.title}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>

        </View>
    )
}

export default ProductListItem


const styles = StyleSheet.create({
    container: {
        flex: 1,





        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.light.tint
    },
    image: {
        width: '100%',
        aspectRatio: 1,

    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
