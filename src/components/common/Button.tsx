import styled from 'styled-components';

const handleWidthSizeTypes = (size?: string) => {
    switch (size) {
        case 'small':
            return '5.5em';
        case 'medium':
            return '30%';
        case 'large':
            return '40%';
        default:
            return '30%';
    }
};

const handleHeightSizeTypes = (size?: string) => {
    switch (size) {
        case 'small':
            return '2.5em';
        case 'medium':
            return '50%';
        case 'large':
            return '60%';
        default:
            return '50%';
    }
};

const handleFontSizeTypes = (size?: string) => {
    switch (size) {
        case 'small':
            return '1.2em';
        case 'medium':
            return '1.5em';
        case 'large':
            return '1.7em';
        default:
            return '1.5em';
    }
};

export const Button = styled.button<{ inverted?: boolean; size?: string }>`
    width: ${({ size }) => handleWidthSizeTypes(size)};
    height: ${({ size }) => handleHeightSizeTypes(size)};
    font-size: ${({ size }) => handleFontSizeTypes(size)};
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
        'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${(props) => (props.inverted ? '#4e2c0b' : '#ffc791')};
    color: ${(props) => (props.inverted ? '#ffc791' : '#4e2c0b')};
    border-style: none;
    border-radius: 14px;
    font-weight: 500;
    :hover {
        cursor: pointer;
    }
`;

// export const Button = ({ children, inverted }: IButton) => {
//   return <StartButton inverted={inverted}>{children}</StartButton>;
// };

export default Button;
