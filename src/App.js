// import React from 'react';
// // import logo from './logo.svg';
// import { Button,Icon,Row,Col,Select  } from 'antd';

// import './App.css';
// const { Option } = Select;

// function onChange(value) {
//   console.log(`selected ${value}`);
// }

// function onBlur() {
//   console.log('blur');
// }

// function onFocus() {
//   console.log('focus');
// }

// function onSearch(val) {
//   console.log('search:', val);
// }

// function App() {
//   return (
//     <div className="App">
//  <Button type="dashed">Dashed</Button>
//  <Icon type="up-circle" theme="filled" />
//  <Row>
//       <Col span={8}>col-8</Col>
//       <Col span={8}>col-8</Col>
//       <Col span={8}>col-8</Col>
//     </Row>
//     <Select
//     showSearch
//     style={{ width: 200 }}
//     placeholder="Select a person"
//     optionFilterProp="children"
//     onChange={onChange}
//     onFocus={onFocus}
//     onBlur={onBlur}
//     onSearch={onSearch}
//     filterOption={(input, option) =>
//       option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
//     }
//   >
//     <Option value="jack">Jack</Option>
//     <Option value="lucy">Lucy</Option>
//     <Option value="tom">Tom</Option>
//   </Select>
//     </div>
//   );
// }

// export default App;









import React from 'react';
import { Button } from 'antd';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import './App.css';
 
class App extends React.Component {
render(){
return(
<Router >
                <div>
                <Button type="primary">Primary</Button>
                <Button type="primary">Button</Button>
<Route path="/" component={Home} />
<Route path="/Page1" component={Page1} />
<Route path="/Page2" component={Page2} />
<Route path="/Page3" component={Page3} />
</div>
</Router>
)
}
}
export default App;