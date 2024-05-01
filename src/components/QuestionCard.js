import React from 'react'
import PropTypes from 'prop-types';

import '../css/QuestionCard.css';

const QuestionCard = (props) => {
    return (
        <div className="question1-container">
            <span className="question1-text heading3">{props.question}</span>
            <span className="bodySmall">{props.answer}</span>
        </div>
    );
}


QuestionCard.propTypes = {
    answer: PropTypes.string,
    question: PropTypes.string,
}

export default QuestionCard;