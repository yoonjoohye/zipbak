export const getFormattedText = (str: string) => {
    const newLineRegex = /\n/g;
    const urlRegex = /(https?:\/\/.*?)([.!?;,])?(\n|\s+|"|$)/g;
    str = str?.replace(urlRegex, `<a href="$1" style="color:#664a00;" target="_blank">$1</a>`).replace(newLineRegex, '<br />')
    return str;
}
