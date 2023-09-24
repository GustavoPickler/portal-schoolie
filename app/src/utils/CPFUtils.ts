export function formatCPF(text: string) : string {
    const cleanedText = text.replace(/\D/g, '');

    let formattedText = cleanedText;
    if (cleanedText.length >= 3) {
        formattedText = `${cleanedText.slice(0, 3)}.${cleanedText.slice(3)}`;
    }
    if (cleanedText.length >= 6) {
        formattedText = `${formattedText.slice(0, 7)}.${formattedText.slice(7)}`;
    }
    if (cleanedText.length >= 9) {
        formattedText = `${formattedText.slice(0, 11)}-${formattedText.slice(11)}`;
    }

    return formattedText;
}