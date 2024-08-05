import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  headerOne: {
    fontFamily: "BangersRegular",
    color: colors.white,
    fontSize: 30,
    padding: 9,
  },
  headerTwo: {
    fontFamily: "BangersRegular",
    color: colors.danger,
    fontSize: 25,
    padding: 9,
    textAlign: "center",
  },
  textBody: {
    color: colors.grey,
    fontSize: 15,
  },
});
