import { useState } from "react";
// import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useFonts, Bangers_400Regular } from "@expo-google-fonts/bangers";
import {
  Button,
  FlatList,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import DismissKeyboard from "./components/DismissKeyboard";
import ButtonComponent from "./components/ButtonComponent";
import Header from "./components/Header";
import colors from "./constants/colors";

const fetchFonts = () => {
  return Font.loadAsync({
    "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
    "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
    "pacifico-regular": require("./assets/fonts/Pacifico-Regular.ttf"),
  });
};

export default function App() {
  const [productList, setProductList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  const [fontsLoaded, error] = useFonts({
    BangersRegular: Bangers_400Regular,
    "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
    "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
    "pacifico-regular": require("./assets/fonts/Pacifico-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const addProducts = (product, setProduct) => {
    setDisplayModal(false);

    if (product.length > 1) {
      const idString = Date.now().toString();
      setProductList((currentProductList) => [
        { key: idString, name: product },
        ...currentProductList,
      ]);
    } else {
      setShowModal(true);
    }
  };

  const cancelNewProduct = () => {
    setDisplayModal(false);
  };

  const deleteProduct = (key) => {
    setProductList((currentProductList) => {
      return currentProductList.filter((product) => product.key != key);
    });
  };

  return (
    <DismissKeyboard>
      <ImageBackground
        style={styles.bgImage}
        source={{
          uri: "https://cdn.pixabay.com/photo/2022/09/01/22/37/leaves-7426312_1280.png",
        }}
      >
        <Header />

        <View style={styles.container}>
          <Modal
            visible={showModal}
            onRequestClose={() => setShowModal(false)}
            animationType="slide"
            transparent
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                  <Text style={styles.modalHeaderText}>OUPS!</Text>
                </View>
                <View style={styles.modalBody}>
                  <Image
                    // source={require("./assets/red-check-128.png")}
                    source={{
                      uri: "https://cdn.pixabay.com/photo/2012/04/26/19/45/cross-42928_1280.png",
                    }}
                    style={styles.redCheck128}
                  />
                  <Text style={styles.modalBodyText}>
                    Une erreur est survenu
                  </Text>
                </View>
                <View style={styles.modalFooter}>
                  <Pressable
                    style={styles.pressableBtnModal}
                    onPress={() => setShowModal(false)}
                  >
                    <Text style={styles.modalBtn}>OK</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>

          <ButtonComponent
            style={styles.addProductBtn}
            onPressHandler={() => setDisplayModal(true)}
          >
            NOUVEAU PRODUIT
          </ButtonComponent>

          <AddProduct
            addProducts={addProducts}
            displayModal={displayModal}
            cancelNewProduct={cancelNewProduct}
          />

          <FlatList
            data={productList}
            renderItem={({ item }) => (
              <Products item={item} deleteProduct={deleteProduct} />
            )}
          />
        </View>
      </ImageBackground>
    </DismissKeyboard>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0,0.2)",
  },
  modalContent: {
    backgroundColor: colors.white,
    width: "90%",
    height: 300,
    borderRadius: 15,
    alignItems: "center",
  },
  modalHeader: {
    backgroundColor: "grey",
    width: "100%",
    alignItems: "center",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
  },
  modalHeaderText: {
    // color: "grey"
    fontSize: 17,
  },
  modalBody: {
    flex: 1,
    width: "100%",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  modalBodyText: {
    fontSize: 17,
  },
  modalFooter: {
    width: "100%",
    // borderBottomLeftRadius: 15,
    // borderBottomRightRadius: 15,
  },
  pressableBtnModal: {
    backgroundColor: colors.info,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  modalBtn: {
    fontSize: 17,
    color: colors.white,
    textAlign: "center",
    padding: 16,
  },
  addProductBtn: {
    padding: 16,
    backgroundColor: colors.success,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: colors.white,
    marginBottom: 20,
  },
  redCheck128: {
    width: 50,
    height: 50,
  },
  bgImage: {
    flex: 1,
  },
});
