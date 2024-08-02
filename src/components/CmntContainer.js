import React, { useState } from 'react'
import CommentsData from '../utils/CommentsData'
import Comment from './Comment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const CmntContainer = () => {

    const [cmntView, setCmntView] = useState(false)

    const toggleCmntView = () => {
        setCmntView(!cmntView)
    }

    return (
        <div className='p-6 bg-gray-100'>
            <h1
                onClick={toggleCmntView}
                className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                Comments
                {cmntView
                ?<FontAwesomeIcon icon={faChevronUp} />
                : <FontAwesomeIcon icon={faChevronDown} />
                }
            </h1>

            {cmntView && CommentsData.map((comment, index) => (
                <Comment key={index} comment={comment} />
            ))}
        </div>
    )
}

export default CmntContainer
