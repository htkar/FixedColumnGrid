import React from "react";
import {render} from "react-dom";
import FixedColumnGrid from "../src/lib/FixedColumnGrid"

class Index extends React.Component {
	
	constructor(props, context) {
        super(props, context);

    }

    render() {
    	var gridData = [
    		["col1", "row2", "row3", "row4", "row5", "row6", "row7", "row8", "row9"],
    		["col2", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col3", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col4", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col5", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col6", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col7", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col8", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col9", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col10", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col11", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col12", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col13", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col14", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col15", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col16", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col17", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col18", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col19", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col20", "1", "2", "3", "4", "5", "6", "7", "8"],
    		["col21", "1", "2", "3", "4", "5", "6", "7", "8"],
    	]
    	var renderHeader = (data, column_index, row_index) => (
    							<h3
    								className="fixed-column__cell
    								fixed-column__header"
    								data-column-index={column_index}
    								data-row-index ={row_index}
								>
									{data}
								</h3>
							);

    	var renderLeft = (data, column_index, row_index) => (
	    						<label
	    							className="fixed-column__cell"
	    							data-column-index={column_index}
	    							data-row-index ={row_index}
								>
									{data}
								</label>
							);

    	var renderRight = (data, column_index, row_index) => (
	    						<div
	    							className="fixed-column__cell"
	    							data-column-index={column_index}
	    							data-row-index ={row_index}
								>
									<input className="form-control" value={data} disabled />
								</div>
							);

    	var renderCenter = (data, column_index, row_index) => (
    							<div
    								className="fixed-column__cell"
    								data-column-index={column_index}
    								data-row-index ={row_index}
								>
    								<input className="form-control" value={data} />
								</div>
							);


    	return (
    		<div className="wrapper">
	    		<FixedColumnGrid
	                className="fixed-column-grid--center form-list print-reverse-fixed-column-grid fixed-column-grid--border"
	                name="confirmation"
	                data={gridData}
	                fixedColumns={[0, gridData.length - 2, gridData.length - 1]}
	                renderHeader={renderHeader}
	                renderLeft={renderLeft}
	                renderCenter={renderCenter}
	                renderRight={renderRight}
	            />
            </div>
    	)

    }

}
render(<Index/>, document.querySelector("#example"));