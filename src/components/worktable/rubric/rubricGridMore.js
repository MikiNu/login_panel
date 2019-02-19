import React from 'react';
import ReactDOM from 'react-dom';
import charters from './charters.json';
import blockCharters from './blockCharters.json';
import  {Rubric} from './rubric';
var blockCharter;
var viewCharters;
export class RubricGridMore extends React.Component{

    render() {
        // const { charters } = this.state;

        return (

            <div className = "list-group list-group-dividered list-group-full icons_area">
                <div className="list-group-item sortable ui-sortable">
                    {
                        charters.secondCharters.map(function(charters){
                            blockCharter=null
                            blockCharters.map(function(blockCharters){
                                if (charters.id===blockCharters.id){
                                    blockCharter=blockCharters.id;
                                }
                            })
                            if (blockCharter !== null){
                                return(
                                    <Rubric
                                        stateMod={charters.stateMod}
                                        key={charters.id}
                                        linK={"/"}
                                        image={charters.imageCharter}
                                        status="hidden">
                                        {charters.nameCharter}
                                    </Rubric>)

                            }
                            if (blockCharter === null)
                                    {
                                        return(
                                        <Rubric
                                        stateMod={charters.stateMod}
                                        key={charters.id}
                                        linK={charters.linK}
                                        image={charters.imageCharter}
                                        status={charters.status}
                                        pstCompletion={charters.pstCompletion}>
                                        {charters.nameCharter}
                                    </Rubric>)
                                }
                                })
                    }
                </div>
            </div>
		);
	}
}
