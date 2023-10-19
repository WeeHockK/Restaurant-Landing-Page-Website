import {images} from '../../Constants';

function SubHeading({title}){
    return (
        <div style={{marginBottom: '1rem'}}>
            <p className='p__cormorant'>{title}</p>
            <img src={images.spoon} alt='spoon' className='spoon__img'></img>
        </div>
    )
};

export default SubHeading;