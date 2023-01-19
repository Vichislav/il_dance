import head from './asset/head.png'; //
import leftArm from './asset/left_arm.png';
import leftHand from './asset/left_hand.png';
import body from './asset/body.png';
import rightArm from './asset/right_arm.png';
import rightHand from './asset/right_hand.png';
import leftLeg from './asset/left_leg.png';
import leftFoot from './asset/left_foot.png';
import leftShoes from './asset/left_shoes.png';
import rightLeg from './asset/right_leg.png';
import rightFoot from './asset/right_foot.png';
import rightShoes from './asset/right_shoes.png';

import './App.css';

function App() {
  return (
      <div className={'wrap'}>
        <div className="wrapHead">
          <img src={head} alt={'head not find'} className={'headImg'}/>
        </div>
        <div className="wrapBody">
          <div className={"wrapBodyLeftArm"}>
            <img src={leftArm} alt={'leftArm not find'} className={'leftArm'}/>
          </div>

          <img src={body} alt={'body not find'} className={'bodyImg'}/>

          <div className={"wrapBodyRightArm"}>
            <img src={rightArm} alt={'rightArm not find'} className={'rightArm'}/>
          </div>
        <div className={"wrapLegs"}>
            <img src={rightArm} alt={'rightArm not find'} className={'rightArm'}/>
        </div>
        </div>
      </div>
  );
}

export default App;
