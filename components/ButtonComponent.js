import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../constants/colors";

const ButtonComponent = ({ onPressHandler, style, children }) => {
  return (
    <TouchableOpacity onPress={onPressHandler} activeOpacity={0.6}>
      <View style={{ ...styles.btn, ...style }}>
        <Text style={styles.btnText}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.grey,
    padding: 9,
  },
  btnText: {
    color: colors.white,
    textAlign: "center",
    fontSize: 17,
  },
});

export default ButtonComponent;
