import { Text } from "react-native";

export function InstructionContent(props: {
     state: number; dispatch: any;
}) {
    const { state, dispatch } = props;
    const firstSlide = <>
        <Text>“Saber ganhar dinheiro é melhor do que saber fazer algo bem”</Text>
        <Text></Text>
        <Text>“Quem espera sempre alcança.”</Text>
        <Text></Text>
        <Text>“Mentir às vezes é necessário.”</Text>
        <Text></Text>
        <Text>Crenças que todos já ouviram e muitos questionaram.
            O que pensa as pessoas ao seu redor?
            Puxe um card e deixe a discussão fluir
            SEM JULGAMENTOS.</Text>
    </>;
    const secondSlide = <>
        <Text>Se todos chegaram a um consenso pressione VERDADE ou MENTIRA</Text>
        <Text></Text>
        <Text>Se não há consenso pressione COMPLEXO
        </Text>
        <Text></Text>
        <Text>Ao final é mostrado um resumo das respostas.</Text>

    </>;

    // let indexContent = 0;
    // if (state == "nextPage") {
    //     indexContent = indexContent + 1;
    // }
    // else if (state == "startingPage") {
    //     indexContent = 0;
    // }
    const contents = [firstSlide, secondSlide];
    if (state >= contents.length) {
        dispatch({ type: "finish" });
    }
    return contents[state];
}