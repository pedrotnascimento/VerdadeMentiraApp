import { Text } from "react-native";

export function InstructionContent(props: {
    state: number; dispatch: any;
}) {
    const { state, dispatch } = props;
    const firstSlide =
        <Text numberOfLines={22}
            adjustsFontSizeToFit
            style={{ textAlign: 'center', fontSize: 25 }}>{`“Saber ganhar dinheiro é melhor do que saber fazer algo bem”
“Quem espera sempre alcança.”

“Mentir às vezes é necessário.”

Crenças que todos já ouviram e muitos questionaram.

O que pensa as pessoas ao seu redor?

Puxe um card e deixe a discussão fluir

SEM JULGAMENTOS.`}</Text>
        ;
    const secondSlide = <>
        <Text
            numberOfLines={22}
            adjustsFontSizeToFit
            style={{ textAlign: 'center', fontSize: 30 }}>{`Se todos chegaram a um consenso pressione VERDADE ou MENTIRA
     
Se não há consenso pressione COMPLEXO

Ao final é mostrado um resumo das respostas.`}</Text>

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