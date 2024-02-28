/// <reference types="nativewind/types" />
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Modal from "react-native-modal";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import * as Clipboard from "expo-clipboard";
import FullScreenIcon from "../components/Icons/FullScreen";
import InfoIcon from "../components/Icons/InfoIcon";
import CopyIcon from "../components/Icons/CopyIcon";
type Char = "i" | "o" | "ö" | "u" | "ü";
const chars: Char[] = ["i", "o", "ö", "u", "ü"];

export default function App({ navigation }) {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [outputValue, setOutput] = useState<string>("");
  const [inputValue, setInput] = useState<string>("");
  const [selectedChar, setSelectChar] = useState<Char>("i");
  const debouncedValue = useDebounce(inputValue, 150);

  useEffect(() => {
    setOutput(replaceVowels(debouncedValue, selectedChar));
  }, [debouncedValue, selectedChar]);

  return (
    <SafeAreaView className="flex-1 bg-dark px-2 py-4 flex justify-center">
      <StatusBar style="light" />

      <Modal isVisible={isModalVisible}>
        <View className="bg-dark/90 flex-1 space-y-2">
          <Text className="text-white font-bold text-2xl text-center bg-areaDark/90  p-4 rounded-lg">
            Input
          </Text>
          <TextInput
            defaultValue={""}
            value={inputValue}
            onChangeText={(text) => {
              setInput(text);
            }}
            keyboardType="default"
            multiline
            inputMode="text"
            textAlignVertical="top"
            placeholderTextColor={"#8B8B8B"}
            className="border border-1 border-borderDark flex-1 rounded-lg flex w-full text-white p-2"
          />
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false);
            }}
            className="bg-selectDark p-4 justify-center items-center rounded-lg"
          >
            <Text className="text-white">Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <View className="flex flex-row justify-center items-center m-2 ">
        <Text className="text-white font-bold text-2xl">Sipirmin</Text>
        <Pressable
          className="absolute right-4"
          onPress={() => {
            navigation.navigate("Info");
          }}
        >
          <InfoIcon />
        </Pressable>
      </View>

      <View className="flex-1 flex flex-col  space-y-4">
        {/* INPUT */}
        <View className="flex-1 p-4 h-1/3">
          <View className="flex-1 rounded-xl border-1 border border-borderDark overflow-hidden h-1/3">
            <View className="flex-1/3 flex flex-row justify-between bg-titleDark p-4 items-center">
              <Text className="text-textDark font-bold">Input</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                className=" bg-borderDark p-2 rounded-xl justify-center items-center"
              >
                <FullScreenIcon />
              </TouchableOpacity>
            </View>
            <View className="flex-1 bg-areaDark">
              <TextInput
                value={inputValue}
                // ref={textRef}
                onChangeText={(text) => {
                  setInput(text);
                }}
                className="flex w-full h-full  text-white p-2 "
                keyboardType="default"
                multiline
                inputMode="text"
                placeholder="Example"
                textAlignVertical="top"
                placeholderTextColor={"#8B8B8B"}
              />
            </View>
          </View>
        </View>

        <View className="w-full h-[2px] bg-borderDark" />
        {/* <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      > */}
        {/* OUTPUT */}
        <View className="flex-1 p-4 h-1/3">
          <View className="flex-1 rounded-xl border-1 border border-borderDark overflow-hidden h-1/3">
            <View className="flex flex-row justify-between bg-titleDark p-4 items-center">
              <Text className="text-textDark font-bold">Output</Text>
              <View className="bg-selectDark rounded-md p-1 flex flex-row space-x-2 items-center justify-center">
                {chars.map((char, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      setSelectChar(char);
                    }}
                    className={`w-8 aspect-square p-2 rounded-lg justify-center items-center ${
                      selectedChar === char && `bg-selectedDark`
                    } `}
                  >
                    <Text className="text-white font-bold text-[12px]">
                      {char}
                    </Text>
                  </TouchableOpacity>
                ))}
                <TouchableOpacity
                  key={"share-button"}
                  onPress={async () => {
                    outputValue &&
                      (await Clipboard.setStringAsync(outputValue));
                  }}
                  className={`w-8 aspect-square p-2 rounded-lg justify-center items-center bg-selectedDark`}
                >
                  <CopyIcon />
                </TouchableOpacity>
              </View>
            </View>
            <View className="flex-1 bg-areaDark">
              <TextInput
                className="flex h-full w-full text-white p-2"
                keyboardType="default"
                multiline
                inputMode="text"
                editable={false}
                value={outputValue}
                textAlignVertical="top"
                placeholderTextColor={"#8B8B8B"}
              />
            </View>
          </View>
        </View>
        {/* </KeyboardAvoidingView> */}
      </View>
    </SafeAreaView>
  );
}

function replaceVowels(inputString, replacementChar) {
  // Regex ile sesli harfleri bulma
  const vowelsRegex = /[aeioöuü]/gi;

  // inputString içindeki sesli harfleri replacementChar ile değiştirme. Eğer harf büyükse büyük, küçükse küçük olarak değiştirme
  const resultString = inputString.replace(vowelsRegex, (match) => {
    if (match === String(match).toLocaleUpperCase()) {
      return replacementChar.toLocaleUpperCase();
    } else {
      return replacementChar;
    }
  });
  // const resultString = inputString.replace(vowelsRegex, replacementChar);

  return resultString;
}
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
