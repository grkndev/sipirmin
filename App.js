import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Pressable,
  KeyboardAvoidingView,
  Text,
  TextInput,
  Share,
  View,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [outputValue, setOutput] = useState("");
  const [inputValue, setInput] = useState("");
  const [selectedChar, setSelectChar] = useState("i");
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView className="flex-1 bg-dark p-4">
        {/* <StatusBar backgroundColor={"#0D0D0D"} barStyle={"light-content"} /> */}
        <StatusBar style="light" />
        <Text className="text-white text-2xl font-extrabold self-center">
          Sipirmin
        </Text>
        <Text className="text-white font-extralight self-center text-[8px]">
          by gweepcreative
        </Text>
        <View className="flex-1 items-center justify-evenly">
          <View className="w-full border border-white/10 rounded-lg">
            <View className="p-4 w-full bg-lightdark rounded-lg">
              <Text className="text-white/50 font-bold">Input</Text>
            </View>
            <TextInput
              onChangeText={(e) => setInput(e)}
              className="bg-semidark rounded-lg text-white h-64 p-2"
              placeholder="Sipirmin için metninizi giriniz..."
              textAlignVertical="top"
              placeholderTextColor={"rgba(255 255 255 / 0.5)"}
            />
          </View>

          <View className="h-[1px] w-[90vw] bg-lightdark" />

          <View className="w-full border border-white/10 rounded-lg">
            <View className="flex flex-row justify-between items-center p-4 w-full bg-lightdark rounded-lg">
              <Text className="text-white/50 font-bold">Output</Text>
              <View className="flex flex-row space-x-2 bg-[#2B2B2B] rounded px-2 py-1">
                <Pressable
                  onPress={() => setSelectChar("i")}
                  className={`${
                    selectedChar === "i" && "bg-lightdark"
                  } rounded w-6 h-6 justify-center items-center flex`}
                >
                  <Text className="text-white">i</Text>
                </Pressable>
                <Pressable
                  onPress={() => setSelectChar("o")}
                  className={`${
                    selectedChar === "o" && "bg-lightdark"
                  } rounded w-6 h-6 justify-center items-center flex`}
                >
                  <Text className="text-white ">o</Text>
                </Pressable>
                <Pressable
                  onPress={() => setSelectChar("ö")}
                  className={`${
                    selectedChar === "ö" && "bg-lightdark"
                  } rounded w-6 h-6 justify-center items-center flex`}
                >
                  <Text className="text-white">ö</Text>
                </Pressable>
                <Pressable
                  onPress={() => setSelectChar("ü")}
                  className={`${
                    selectedChar === "ü" && "bg-lightdark"
                  } rounded w-6 h-6 justify-center items-center flex`}
                >
                  <Text className="text-white">ü</Text>
                </Pressable>
                <Pressable
                  onPress={() => setSelectChar("u")}
                  className={`${
                    selectedChar === "u" && "bg-lightdark"
                  } rounded w-6 h-6 justify-center items-center flex`}
                >
                  <Text className="text-white">u</Text>
                </Pressable>
              </View>
            </View>
            <TextInput
              editable={false}
              value={outputValue}
              className="bg-semidark rounded-lg text-white h-64 p-2"
              placeholder="Sipirmin çıktınız"
              textAlignVertical="top"
              placeholderTextColor={"rgba(255 255 255 / 0.5)"}
            />
          </View>

          <View className="flex flex-row w-full justify-center items-center space-x-2">
            <Pressable
              onPress={() => {
                Share.share({
                  message: outputValue,
                });
              }}
              className="w-auto justify-center items-center bg-lightdark  p-4 rounded"
            >
              <Text className="text-white">Paylaş</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setOutput(replaceVowels(inputValue, selectedChar));
              }}
              className="w-2/3 justify-center items-center bg-lightdark  p-4 rounded"
            >
              <Text className="text-white">Sipirmin!</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

function replaceVowels(inputString, replacementChar) {
  // Regex ile sesli harfleri bulma
  const vowelsRegex = /[aeiouü]/gi;

  // inputString içindeki sesli harfleri replacementChar ile değiştirme
  const resultString = inputString.replace(vowelsRegex, replacementChar);

  return resultString;
}
