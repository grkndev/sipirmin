import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
export default function InputModal({
  refText,
  defaultText,
  onChangeState,
  isVisible = false,
}) {
  const [InputText, setInputText] = useState(
    refText.current ? refText.current.value : defaultText
  );
  return (
    <View>
      <Modal isVisible={isVisible}>
        <View className="bg-dark/90 flex-1 space-y-2">
          <Text className="text-white font-bold text-2xl text-center bg-areaDark/90  p-4 rounded-lg">
            Input
          </Text>
          <TextInput
            defaultValue={defaultText}
            value={refText.current ? refText.current.value : InputText}
            onChangeText={(text) => {
              setInputText(text);
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
              onChangeState(InputText, false);
            }}
            className="bg-selectDark p-4 justify-center items-center rounded-lg"
          >
            <Text className="text-white">Save</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
