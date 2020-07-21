import {Row, Col} from "react-bootstrap";
import React from "react";

export const EstimatedTotal = (props) => {
    return (
        <>
            <Row>
                <h3>Gesamtpreis: </h3>

            </Row>
            <Row >
                <h3 className={"text-right"}>{props.total} €</h3>
            </Row>
        </>
    );

}
export default EstimatedTotal;
