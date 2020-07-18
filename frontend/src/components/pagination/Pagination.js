import React from "react";
import "./Pagination.css"

const Pagination = (props) => {
    const onPageClick = (number) => {
        props.onPageClick(number);
    };

    const renderButtons = () => {
        let listLength =
            !props.listLength || Math.ceil(props.listLength / props.limit) === 1 // remove the buttons when we have only one page
                ? 0
                : Math.ceil(props.listLength / props.limit);

        let items = [];
        for (let number = 0; number < listLength; number++) {
            items.push(
                <button
                    key={number}
                    className={`page-button ${
                        props.page === number ? "page-button-active" : ""
                    }`}
                    onClick={() => onPageClick(number)}
                >
                    {number + 1}
                </button>
            );
        }
        return items;
    };

    return renderButtons();
};

export default Pagination;
