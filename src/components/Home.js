import React from 'react';
import { Select } from 'antd';

const { Option } = Select;
// import { Link } from 'react-router-dom';
 
class Home extends React.Component{
render(){
return(
<div>
<div>This is Home!</div>
<div>
{/* <Link to="/Page1/" style={{color:'black'}}>
<div>点击跳转到Page1</div>
</Link>
<Link to="/Page2/" style={{color:'black'}}>
<div>点击跳转到Page2</div>
</Link>
<Link to="/Page3/" style={{color:'black'}}>
<div>点击跳转到Page3</div>
</Link> */}
</div>
<Select defaultValue="lucy" style={{ width: 120 }}>
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="disabled" disabled>
        Disabled
      </Option>
      <Option value="Yiminghe">yiminghe</Option>
    </Select>
</div>
);
}
}
 
export default Home;