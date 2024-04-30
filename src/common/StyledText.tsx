

type StyledElementData = {
    text: string[],
    elements: StyledElementData[],
    style?: string
}

type StyleObject = {
    [index: string]: string
}

type Props = {
    text: string
}

function styledTextToElement(head: StyledElementData) {
    const style = head.style && head.style.length > 0
        ? head.style.split(',').reduce((acc, curr) => {
            const split = curr.trim().split(':');
            acc[split[0]] = split[1];
            return acc;
        }, {} as StyleObject)
        : {};
    const elements = [];
    for (let i=0;i<head.text.length;i++) {
        elements.push(head.text[i]);
        if (head.elements.length-1>=i) {
            elements.push(styledTextToElement(head.elements[i]));
        }
    }

    return <span style={style}>{elements}</span>;
}

function textToStyle(text: string, style?: string) {
    const head: StyledElementData = {
        text: [],
        elements: [],
        style: style
    };

    let computingStyle = false;
    let currentStyle = '';
    let currentText = '';
    let i = 0;
    while (i < text.length) {
        if (i < text.length - 3 && text.substring(i, i+3) === '</>') {
            i+=4;
            break;
        } else if (text.charAt(i) === '<') {
            computingStyle = true;
        } else if(text.charAt(i) === '>') {
            if (!computingStyle) {
                console.error('Closing tag with no opening tag?');
            } else {
                computingStyle = false;
                head.text.push(currentText);
                const { newElement, indexIncrease } = textToStyle(text.substring(i+1, text.length), currentStyle);
                head.elements.push(newElement);
                currentText = '';
                currentStyle = '';
                i+=indexIncrease-1;
            }
        }else {
            if (computingStyle) {
                currentStyle += text.charAt(i);
            } else {
                currentText += text.charAt(i);
            }
        }
        i++;
    }
    head.text.push(currentText);
    head.style = style;

    return { newElement: head, indexIncrease: i };
}

export default function StyledText({text}: Props) {
    return <>{styledTextToElement(textToStyle(text).newElement)}</>;
}