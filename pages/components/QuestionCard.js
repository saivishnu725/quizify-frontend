import React from 'react'
import PropTypes from 'prop-types';

import styles from '../../styles/QuestionCard.module.css';

const QuestionCard = (props) => {
    return (
        <div className={styles.questionContainer}>
            <span className={[styles.questionText, styles.heading3]}>{props.question}</span>
            <span className="bodySmall">{props.answer}</span>
        </div>
    );
}


QuestionCard.propTypes = {
    answer: PropTypes.string,
    question: PropTypes.string,
}

export default QuestionCard;