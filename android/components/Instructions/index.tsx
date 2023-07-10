import { Alert, Button, Text, View } from "react-native";
import { InstructionCard } from "./InstructionCard";
import { InstructionContent } from "./InstructionContent";
import { useReducer, useState } from "react";
import { instructionReducer } from "./instructionReducer";

export function Instructions(props: { navigation: any; }) {
    const { navigation } = props;
    // const [contentIndex, setContentIndex] = useState(0); // using useState
    const [state, dispatch] = useReducer(instructionReducer, 0);
    if (state == -1) {
        navigation.navigate("Verdade Ou Mentira");
        // Alert("Over");
    }

    return <View style={
        {
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center"
        }
    }>
        <InstructionCard>
            <InstructionContent state={state} dispatch={dispatch} />
        </InstructionCard>
        <View style={{
            justifyContent: "center",
            width: "80%",
            height: "10%"
        }}>
            <Button

                onPress={() => {
                    // setContentIndex(contentIndex + 1); // using useState

                    dispatch({ type: "procceed" });
                }}
                title="Procceed!"
                color={"#970D4F"}
            />

        </View>
    </View>;
}