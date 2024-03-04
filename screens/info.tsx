import { View, Text, Image, Linking } from "react-native";
import React from "react";

export default function InfoScreen() {
  return (
    <View className="flex-1 bg-dark px-4 space-y-8">
      <View className="flex flex-col justify-center items-center">
        <Image
          source={require("../assets/adaptive-icon.png")}
          className="h-32 w-32"
        />
        <Text className="text-white font-bold text-3xl">Sipirmin</Text>
        <Text className="text-textDark text-center">1.0.2</Text>
      </View>
      {/* HOW IS IT WORKS? */}
      <View>
        <Text className="text-white text-2xl font-bold">How is it works?</Text>
        <Text className="text-textDark text-lg">
          Sipirmin it changes the vowels in your sentence and makes your
          conversation more fun.
          {"\n"}
          {"\n"}
          Example:{"\n"}
          Input: "Hello, how are you?"{"\n"}
          Output: "Hollo, how oro yoo?" {"\n"}
          <Text className="text-[10px]">(All vowels are changed to "o")</Text>
        </Text>
      </View>
      <View className="h-1 w-full bg-titleDark rounded-full" />
      {/* Detail about app */}
      <View>
        <Text className="text-white text-2xl font-bold">Detail about app</Text>
        <Text className="text-textDark text-lg">
          This app is developed by{" "}
          <Text
            className="text-blue-500"
            onPress={() => {
              Linking.openURL("https://x.com/gweepcreative");
            }}
          >
            GrknDev
          </Text>
          .{"\n"}
          Our Website{" "}
          <Text
            onPress={async () => {
              await Linking.openURL("https://sipirmin.com");
            }}
            className="text-blue-500"
          >
            Sipirmin.com
          </Text>
        </Text>
        <Text className="text-textDark text-lg">
          Primary Language:{" "}
          <Text className="text-white">Turkish (Türkçe) 🇹🇷</Text>
        </Text>
      </View>
    </View>
  );
}
