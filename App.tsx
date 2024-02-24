/// <reference types="nativewind/types" />
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Share,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import FullScreenIcon from "./components/Icons/FullScreen";
import ShareIcon from "./components/Icons/ShareIcon";
import InputModal from "./components/Modal/Modal";

type Char = "i" | "o" | "ö" | "u" | "ü";
const chars: Char[] = ["i", "o", "ö", "u", "ü"];

export default function App() {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [outputValue, setOutput] = useState<string>("");
  const [inputValue, setInput] = useState<string>("");
  const [selectedChar, setSelectChar] = useState<Char>("i");
  const debouncedValue = useDebounce(inputValue, 250);
  const textRef = useRef();

  useEffect(() => {
    setOutput(replaceVowels(debouncedValue, selectedChar));
  }, [debouncedValue, selectedChar]);

  return (
    <SafeAreaView className="flex-1 bg-dark px-2 py-4 flex justify-center">
      <StatusBar style="light" />
      <InputModal
        refText={textRef}
        defaultText={inputValue}
        isVisible={isModalVisible}
        onChangeState={(text: string, visible: boolean) => {
          if (!text) setInput("");
          setInput(text);
          setModalVisible(visible);
        }}
      />
      <View className="flex flex-col justify-center items-center m-2 ">
        <Text className="text-white font-bold text-2xl">Sipirmin</Text>
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
                ref={textRef}
                onChangeText={(text) => {
                  setInput(text);
                }}
                className="flex w-full text-white p-2 "
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
                  onPress={() => {
                    outputValue &&
                      Share.share({
                        message: outputValue,
                      });
                  }}
                  className={`w-8 aspect-square p-2 rounded-lg justify-center items-center bg-selectedDark`}
                >
                  <ShareIcon />
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
