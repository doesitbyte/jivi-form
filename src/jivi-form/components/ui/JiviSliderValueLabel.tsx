import PropTypes from 'prop-types';
import React from 'react';

type SliderValueLabelProps = {
    children: PropTypes.ReactNodeLike;
}

const SliderValueLabel: React.FC<SliderValueLabelProps> = ({ children }) => {
    return (
        <span className="label">
            <div className="value absolute text-jiviBlack text-sm font-bold top-4">{children}</div>
        </span>
    );
}
// SliderValueLabel.propTypes = {
//     children: PropTypes.element.isRequired,
// };

export default SliderValueLabel;