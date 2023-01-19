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
              <div className={'wrapBodyLeftArmHand'}>
                  <img src={leftHand} alt={'leftHand not find'} className={'leftHand'}/>
              </div>
          </div>

          <img src={body} alt={'body not find'} className={'bodyImg'}/>

          <div className={"wrapBodyRightArm"}>
            <img src={rightArm} alt={'rightArm not find'} className={'rightArm'}/>
              <div className={'wrapBodyRightArmHand'}>
                  <img src={rightHand} alt={'rightHand not find'} className={'rightHand'}/>
              </div>
          </div>

        <div className={"wrapLegs"}>
            <div className={'wrapLegsLeft'}>
                <img src={leftLeg} alt={'leftLeg not find'} className={'leftLeg'}/>
                <div className={'wrapLegsLeftFoot'}>
                    <img src={leftFoot} alt={'leftFoot not find'} className={'leftFoot'}/>
                    <div className={'wrapLegsLeftFootShoes'}>
                        <img src={leftShoes} alt={'leftShoes not find'} className={'leftShoes'}/>
                    </div>
                </div>
            </div>
            <div className={'wrapLegsRight'}>
                <img src={rightLeg} alt={'rightLeg not find'} className={'rightLeg'}/>
                <div className={'wrapLegsRightFoot'}>
                    <img src={rightFoot} alt={'rightFoot not find'} className={'rightFoot'}/>
                    <div className={'wrapLegsRightFootShoes'}>
                        <img src={rightShoes} alt={'rightShoes not find'} className={'rightShoes'}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
  );
}

export default App;
