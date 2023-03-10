import React from 'react';

const Comments = ({ comment }) => {
    console.log(comment.comment);
    const { userName, userImage, commentText, date, time } = comment.comment;
    const dateTime = date + " " + time;
    console.log(dateTime);
    return (
        <div>
            <div className="flex space-x-4 py-3">
                <img
                    alt=""
                    src={userImage}
                    className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                />
                <div className="flex flex-col space-y-1">
                    <a
                        rel="noopener noreferrer"
                        href="#"
                        className="text-sm font-semibold"
                    >
                        {userName}
                    </a>
                    <span className="text-xs dark:text-gray-400">{commentText}</span>
                    <span className="text-xs dark:text-gray-400">
                        {date} {time}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Comments;