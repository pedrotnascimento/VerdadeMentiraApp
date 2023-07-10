import { Children } from "react";
import { View } from "react-native";

export function InstructionCard(props: {
    children: any;
}) {
    const { children } = props;
    return  <View style={{
        width: "80%", 
        height: "70%", 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#095986",
        borderRadius: 50,
    }}
    >{children}
    </View>
};