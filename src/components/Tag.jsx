import PropTypes from 'prop-types';

const Tag = ({text}) => {
    return (
        <div className="bg-[#EBEBFF] rounded-md text-[#6070FF] font-medium
        flex items-center">
            <span className="px-3 py-1 text-xs font-bold">{text}</span>
        </div>
    )
};

Tag.propTypes = {
    text: PropTypes.string.isRequired
};

export default Tag;