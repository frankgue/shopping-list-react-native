import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../constants/colors";

export default Products = ({ item, deleteProduct }) => {
  return (
    <Pressable onPress={() => deleteProduct(item.key)}>
      <View style={styles.items}>
        <FontAwesome name="remove" size={30} color={colors.white} />
        <Text style={styles.element}>{item.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  items: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    backgroundColor: colors.danger,
    borderRadius: 8,
    padding: 15,
  },
  element: {
    color: colors.white,
    fontSize: 17,
    marginLeft: 20,
  },
});
