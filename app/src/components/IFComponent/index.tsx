interface Props {
    children: any;
    condition: boolean;
}
const IF = ({ children, condition }: Props) => {
    if (condition) {
        return children
    }
    return null
}

export default IF;