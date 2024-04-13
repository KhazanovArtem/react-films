import { Star } from './Star';

interface Count {
    count: number;
}


export const Stars = ({ count }: Count) => {

    const isValid = () => {
        if (count > 0 && count < 6) {
            return true; 
        }
        else {
            return false;
        }
    };

    return (
        <ul className='card-body-stars u-clearfix'>
            {isValid() ?
                [...Array(count)].map((item, index) => <li key={index} className='Star'><Star/></li>)
            :
            null
            }
        </ul>
    )
}
