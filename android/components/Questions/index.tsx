import { useState } from "react";
import { Button, Text, View } from "react-native";

const questions = [
    "É necessário mostrar nossos sentimentos",
    "Signos são fatos",
    "Só como se o prato estiver bonito",
    "Gostaria de ser imortal se fosse possível",
    "Quantidade é melhor que qualidade",

];

export function Question(props: { navigation: any; }) {


    const [selectedCards, setSelectedCards] = useState<number[]>([]);
    let corrente = Math.floor(Math.random() * questions.length);
    const setOfQuestionsSelected = new Set<number>(selectedCards);
    for (let i = 0; i < questions.length; i++) {
        if (setOfQuestionsSelected.has(corrente)) {
            corrente = Math.floor(Math.random() * questions.length);
            continue;
        }
        break;
    }
    const handleGameOver = () => {
        setSelectedCards([]);
    };

    if (setOfQuestionsSelected.size >= questions.length) {
        console.log("game over");
        return <View style={{ alignItems: "center", justifyContent: "space-evenly", flex: 1 }}>
            <View style={{
                width: "80%",
                height: "70%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "gray",
                borderRadius: 50,
            }}
            >
                <Text numberOfLines={4}
                    adjustsFontSizeToFit
                    style={{ textAlign: 'center', fontSize: 30 }}> Fim de jogo </Text>
            </View>
            <View
                style={
                    {
                        width: "80%",
                    }
                }
            >
                <Button
                    onPress={handleGameOver}
                    title="REINICIAR!"
                    color={"gray"}
                />

            </View>

        </View >;
    }


    const handleNextCardEvent = () => {
        selectedCards.push(corrente);
        const newIndex = [...selectedCards.values()];
        setSelectedCards(newIndex);

    };

    return <View style={{ alignItems: "center", justifyContent: "space-evenly", flex: 1 }}>
        <View style={{
            width: "80%",
            height: "70%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5EEED",
            borderRadius: 1,
        }}
        >
            <View style={{
                borderTopEndRadius: 50,borderTopStartRadius: 50,
                backgroundColor: "#095986", height: "15%", width: "100%"
            }}></View>
            <View style={
                {
                    height: "70%",
                    justifyContent: "center",

                }
            }>
                <Text numberOfLines={4}
                    adjustsFontSizeToFit
                    style={{ textAlign: 'center', fontSize: 30,color: "black" }}> {questions[corrente]} </Text>
            </View>
            <View style={{ 
                borderBottomEndRadius: 50,borderBottomStartRadius: 50,
                backgroundColor: "#970D4F", height: "15%", width: "100%" }}></View>
        </View>
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "80%"
            }}
        >
            <View style={{
                width: "38%",
            }}>
                <Button

                    onPress={handleNextCardEvent}
                    title="Verdade!👍"
                    color={"#095986"}
                />

            </View>
            <View style={{
                width: "38%",
            }}>
                <Button

                    onPress={handleNextCardEvent}
                    title="Mentira!👎"
                    color={"#970D4F"}
                />

            </View>
        </View>
        <View
            style={
                {
                    width: "80%",
                }
            }
        >
            <Button
                onPress={handleNextCardEvent}
                title="Complexo!🙄"
                color={"gray"}
            />

        </View>
    </View>;
}