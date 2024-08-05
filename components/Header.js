import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import TitleText from "./TitleText";
import AppStyles from "../constants/AppStyles";

const Header = () => {
  return (
    <View style={styles.headerWrapper}>
      {/* <Text style={styles.logo}>My Shopping List</Text> */}
      <TitleText style={AppStyles.headerOne}>My Shopping List</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: colors.danger,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 30,
    paddingTop: 25,
    paddingBottom: 15,
  },
});

export default Header;
