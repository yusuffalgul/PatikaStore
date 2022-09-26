import { Dimensions,StyleSheet } from "react-native";


export default StyleSheet.create({

    container : {
        flex : 1,
        backgroundColor : 'white',
        margin : 10,
        borderRadius : 10,
        backgroundColor  : '#eceff1',
        padding : 10
    },
    image : {
        height : Dimensions.get('window').height / 4,
        borderRadius : 10
    },
    title : {
        fontWeight : 'bold',
        fontSize : 15
    },
    price : {
        fontSize : 20
    },
    stock : {
        marginTop : 3,
        color : 'red',
    },
    inner_container : {
        padding : 5
    }
})