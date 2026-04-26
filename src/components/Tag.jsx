import PropTypes from 'prop-types';

const Tag = ({ text, href }) => {
    const isExternalLink = href ? /^(https?:)?\/\//.test(href) : false;
    const baseClasses = 'bg-[#EBEBFF] rounded-md font-medium flex items-center';
    const content = <span className="px-3 py-1 text-xs font-bold text-[#6070FF]">{text}</span>;

    if (!href) {
        return <div className={baseClasses}>{content}</div>;
    }

    return (
        <a
            href={href}
            className={`${baseClasses} no-underline hover:bg-[#d8dcff] active:bg-[#d8dcff] transition-colors`}
            target={isExternalLink ? '_blank' : undefined}
            rel={isExternalLink ? 'noreferrer' : undefined}
        >
            {content}
        </a>
    );
};

Tag.propTypes = {
    text: PropTypes.string.isRequired,
    href: PropTypes.string,
};

export default Tag;