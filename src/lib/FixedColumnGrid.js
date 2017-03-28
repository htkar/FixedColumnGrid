/**
 * Created by Jeffry on 2017/03/09.
 */

import React from "react";


class FixedColumnGrid extends React.Component {
    constructor(props, context) {
        super(props, context);
        if (typeof this.props.renderHeader === "function") {
            this.renderHeader = this.props.renderHeader;
        } else {
            this.renderHeader = this.defaultCellCenter;
        }
        if (typeof this.props.renderLeft === "function") {
            this.renderLeft = this.props.renderLeft;
        } else {
            this.renderLeft = this.defaultCellCenter;
        }
        if (typeof this.props.renderCenter === "function") {
            this.renderCenter = this.props.renderCenter;
        } else {
            this.renderCenter = this.defaultCellCenter;
        }
        if (typeof this.props.renderRight === "function") {
            this.renderRight = this.props.renderRight;
        } else {
            this.renderRight = this.defaultCellCenter;
        }
    }

    componentDidUpdate() {
    }
    defaultCellCenter(data, column_index, row_index) {
        return <div className="fixed-column__cell">{cell}</div>;
    }

    render() {

        var data = this.props.data;
        var row_counts = data[0].length;
        var column_counts = data.length;
        var fixedColumns = this.props.fixedColumns;
        var fixedLeftColumns = [];
        var fixedRightColumns = [];

        for (var i = 0, len = fixedColumns.length; i < len; i++) {
            if (fixedColumns[i] < column_counts
                && fixedColumns[i] >= 0 && i === fixedColumns[i]
            ) {
                fixedLeftColumns.push(fixedColumns[i]);
            } else {
                break;
            }
        }


        for (var j = 0; j < len; j++) {
            if (fixedColumns[len - j - 1] < column_counts
                && fixedColumns[len - j - 1] > 0
                && column_counts - j - 1 === fixedColumns[len - j - 1]
            ) {
                fixedRightColumns.push(fixedColumns[len - j - 1]);
            } else {
                break;
            }
        }
        return (
            <div
                className={"fixed-column-grid " + (this.props.className || "")}
                name={this.props.name || ""}
            >
                {/* left */}
                {fixedLeftColumns.length > 0 && (

                    <div className="fixed-column__left">
                    {data.map((column, index) => {
                        if (index >= fixedLeftColumns.length) {
                            return ;
                        }
                        return (
                            <div className="fixed-column" ref={"left" + index}>
                                {column.map((cell, jindex) => {
                                    if (jindex === 0) {
                                        return this.renderHeader(cell, index, jindex);
                                    } else {
                                        return this.renderLeft(cell, index, jindex);
                                    }
                                })}
                            </div>
                        );
                    })}
                    </div>
                )}
                {/* center */}
                <div className="fixed-column__scroll">
                    {data.map((column, index) => {
                        if (index < fixedLeftColumns.length
                            || index >= column_counts - fixedRightColumns.length
                        ) {
                            return ;
                        }
                        return (
                            <div className="fixed-column" ref={"center" + index} data-index={index}>
                                {column.map((cell, jindex) => {
                                    if (jindex === 0) {
                                        return this.renderHeader(cell, index, jindex);
                                    } else {
                                        return this.renderCenter(cell, index, jindex);
                                    }
                                })}
                            </div>
                        );
                    })}
                </div>
                {/* right */}
                {fixedRightColumns.length > 0 && (
                    <div className="fixed-column__right">
                    {data.map((column, index) => {
                        if (index < column_counts - fixedRightColumns.length) {
                            return ;
                        }
                        return (
                            <div className="fixed-column" ref={"right" + index} data-index={index}>
                                {column.map((cell, jindex) => {
                                    if (jindex === 0) {
                                        return this.renderHeader(cell, index, jindex);
                                    } else {
                                        return this.renderRight(cell, index, jindex);
                                    }
                                })}
                            </div>
                        );
                    })}
                    </div>
                )}
            </div>

        )
    }
}
module.exports = FixedColumnGrid;
