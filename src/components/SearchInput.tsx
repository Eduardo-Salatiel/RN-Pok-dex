import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextInput,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useDebounce } from "../hooks/useDebounce";

interface Props {
  style?: StyleProp<ViewStyle>;
  onDebounce: (value:string) => void
}

const SearchInput = ({ style, onDebounce }: Props) => {
  const [textValue, setTextValue] = useState("");
  const { debounceValue } = useDebounce(textValue, 500);

  useEffect(() => {
    onDebounce(debounceValue)
  }, [debounceValue]);

  return (
    <View style={{ ...styles.container, ...(style as any) }}>
      <View style={styles.textBackground}>
        <TextInput
          placeholder="Buscar pokémon"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" color="grey" size={30} />
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {},
  textBackground: {
    backgroundColor: "#F3F1F3",
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  },
});
