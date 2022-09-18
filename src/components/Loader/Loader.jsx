
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <ThreeDots 
        height="80" 
        width="80" 
        radius="9"
        color="#0d253f" 
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: 'center', margin: '16px' }}
        wrapperClassName=""
        visible={true}
        />
    ) 
}


