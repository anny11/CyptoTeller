import React, {Component} from 'react';
import { Button } from 'react-toolbox/lib/button';
import AppBar from 'react-toolbox/lib/app_bar';
import Navigation from 'react-toolbox/lib/navigation';
import Link from 'react-toolbox/lib/link';
import {Card, CardTitle} from 'react-toolbox/lib/card';
import TableTest from './components/DataTable'
import { FiTrendingUp } from "react-icons/fi";
import { IconContext } from "react-icons";

const UserModel = {
    name: {type: String},
    twitter: {type: String},
    birthdate: {type: Date,
      title: 'Date of Birth'},
    cats: {type: Number},
    dogs: {type: Number},
    active: {type: Boolean}
  };
  
const users = [
{name: 'Javi Jimenez', twitter: '@soyjavi', birthdate: new Date(1980, 3, 11), cats: 1},
{name: 'Javi Velasco', twitter: '@javivelasco', birthdate: new Date(1987, 1, 1), dogs: 1, active: true}
];

const icon = <IconContext.Provider value={{ color: "blue", size: "50px" }}>
<div>
  <FiTrendingUp />
</div>
</IconContext.Provider>;

class App extends Component {
    state = { selected: [], source: users };

    handleChange = (row, key, value) => {
      const source = this.state.source;
      source[row][key] = value;
      this.setState({source});
    };
  
    handleSelect = (selected) => {
      this.setState({selected});
    };
    render () {
        return (<div className="app">
                <AppBar className="appBar" title="CryptoTeller">
                    <Navigation className="nav" type='horizontal'>
                        <Link href='http://' active label='MyList' icon='person' />
                        <Link href='http://' active label='On Trend'/>
                    </Navigation>
                </AppBar>
                <Card raised={true}>
                    <CardTitle
                        avatar={icon}
                        title="Following"
                        subtitle="Subtitle here" />
                <TableTest />
                </Card>
 
           </div>)
    }
}
export default App