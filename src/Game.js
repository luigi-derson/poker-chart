import React from 'react';
import TableHand from './components/table/TableHand';
import SituationChart from './components/situation-chart/SituationChart';

export default class Game extends React.Component {
    render() {
        return (
            <div>
                <TableHand />
                <SituationChart />
            </div>
        )
    }
}