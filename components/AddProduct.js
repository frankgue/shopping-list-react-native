import { useState } from "react";
import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import ButtonComponent from "./ButtonComponent";
import colors from "../constants/colors";
import Input from "./Input";
import BodyText from "./BodyText";
import AppStyles from "../constants/AppStyles";

const AddProduct = ({ addProducts, displayModal, cancelNewProduct }) => {
  const [product, setProduct] = useState("");
  const [showModal, setShowModal] = useState(displayModal);

  const inputHanler = (val) => {
    const regex = /[^a-z]/gi;
    setProduct(val.replace(regex, ""));
  };

  const submitOnPressBtn = (product) => {
    addProducts(product);
    setProduct("");
  };

  return (
    <Modal
      visible={displayModal}
      animationType="slide"
      //   transparent
    >
      <View style={styles.inputContainer}>
        <BodyText style={AppStyles.headerTwo}>
          Veuillez indiquer un produit
        </BodyText>
        <BodyText style={AppStyles.textBody}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen boo
        </BodyText>

        <Input
          inputValue={product}
          style={styles.textInput}
          textPlaceHolder="Nouveau produit"
          onChangeHandler={inputHanler}
          maxLength={9}
        />

        <View style={styles.btnContainer}>
          <ButtonComponent
            style={styles.btnBlue}
            onPressHandler={() => submitOnPressBtn(product)}
          >
            Valider
          </ButtonComponent>
          <ButtonComponent
            style={styles.btnCancel}
            onPressHandler={cancelNewProduct}
          >
            Annuler
          </ButtonComponent>
        </View>
      </View>
    </Modal>
  );
};

export default AddProduct;

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 15,
    justifyContent: "center",
    flex: 1,
    padding: 20,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    marginBottom: 15,
    padding: 5,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 30,
    height: 50,
  },
  modalContainer: {
    justifyContent: "center",
    padding: 9,
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0,0.2)",
  },
  btnCancel: {
    backgroundColor: colors.warning,
    width: 150,
    borderRadius: 8,
  },
  btnBlue: {
    backgroundColor: colors.success,
    width: 150,
    borderRadius: 8,
  },
});
