import styled from 'styled-components';

const handleWidthSizeTypes = (size?: string) => {
    switch (size) {
        case 'small':
            return '90px';
        case 'medium':
            return '125px';
        case 'large':
            return '160px';
        default:
            return '125px';
    }
};

const handleHeightSizeTypes = (size?: string) => {
    switch (size) {
        case 'small':
            return '40px';
        case 'medium':
            return '60px';
        case 'large':
            return '75px';
        default:
            return '60px';
    }
};

const handleFontSizeTypes = (size?: string) => {
    switch (size) {
        case 'small':
            return '1.2rem';
        case 'medium':
            return '1.5rem';
        case 'large':
            return '1.7rem';
        default:
            return '1.5rem';
    }
};

export interface ButtonProps {
    inverted?: boolean; 
    size?: string
}

export const Button = styled.button<ButtonProps>`
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

export default Button;
