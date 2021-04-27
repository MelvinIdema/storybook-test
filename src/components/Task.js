import React from "react";
import PropTypes from "prop-types";

export default function Task({task: { id, title, state}, onArchiveTask, onPinTask}) {
    return (
        <div className={['list-item', state].join(' ')}>
            <label htmlFor={'checked'} className={'checkbox'}>
            <input
                type="checkbox"
                defaultChecked={state === 'TASK_ARCHIVED'}
                disabled={true}
                value={title}
                name={'checked'}
                readOnly={true} />
            <span className={'checkbox-custom'} onClick={() => onArchiveTask(id)} />
            </label>
            <div className="title">
                <input type="text" value={title} readOnly={true} placeholder={"Input title"} style={{background: 'red'}}/>
            </div>

            <div className="actions" onClick={event => event.stopPropagation()}>
                {state !== 'TASK_ARCHIVED' && (
                    <a onClick={() => {onPinTask(id)}}>
                        <span className="icon-star" />
                    </a>
                )}
            </div>
        </div>
    )
}

Task.propTypes = {
    /** Task composition */
    task: PropTypes.shape({
        /** ID of the task */
        id: PropTypes.number.isRequired,
        /** Title of the task */
        title: PropTypes.string.isRequired,
        /** Current state of the task */
        state: PropTypes.string.isRequired,
    }).isRequired,
    /** Event to change the task to archived */
    onArchiveTask: PropTypes.func,
    /** Event to change the task to pinned */
    onPinTask: PropTypes.func,
};