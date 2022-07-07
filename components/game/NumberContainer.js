import {View, Text, StyleSheet} from "react-native";

function NumberContainer({children}) {
    return (
      <View style={styles.container}>
          <Text style={styles.numberText}>{children}</Text>
      </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: "white",
        padding: 24,
        margin: 25,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center"
    },

    numberText: {
        color: "white",
        fontSize: 36,
        fontWeight: "bold",
    }
})