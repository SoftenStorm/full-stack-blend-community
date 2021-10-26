// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.


// Auto[Import]--->
import {Project as $Project, DeclarationHelper} from '../helpers/DeclarationHelper';
import {CodeHelper} from '../helpers/CodeHelper';
import {EventHelper} from '../helpers/EventHelper';
import {HTMLHelper} from '../helpers/HTMLHelper';
import {AnimationHelper} from '../helpers/AnimationHelper';
import {TestHelper} from '../helpers/TestHelper';
import {SourceType, HierarchicalDataTable, HierarchicalDataRow} from '../helpers/DataManipulationHelper';
import {IBaseProps, IBaseState, DefaultBaseProps, DefaultBaseState, Button as $Button, Base as $Base} from './Base';

// Assign to an another one to override the base class.
// 
let Base: any = $Base;

// <---Auto[Import]

// Import additional modules here:
//
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "@firebase/auth";
import { initializeApp } from '@firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDFqOdX8ozrUUxHz_hOV1p4YBl5ZEBDXbM",
  authDomain: "e-walless.firebaseapp.com",
  databaseURL: "https://e-walless.firebaseio.com",
  projectId: "e-walless",
  storageBucket: "e-walless.appspot.com",
  messagingSenderId: "24757398305",
  appId: "1:24757398305:web:75af08a4bd0bebe817ac60",
  measurementId: "G-N14ZV51QMY"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);

// Auto[Declare]--->

declare let React: any;
declare let ReactDOM: any;
declare let window: any;
declare let DataManipulationHelper: any;
declare let pug: any;

let Button = $Button;
let Project = $Project;

/*enum SourceType {
  Relational,
  PrioritizedWorker,
  Document,
  VolatileMemory,
  RESTful,
  Dictionary,
  Collection
}*/
// <---Auto[Declare]

// Declare private static variables here:
//

// Auto[Interface]--->
/*interface HierarchicalDataTable {
	source: SourceType;
	group: string;
  rows: HierarchicalDataRow[];
}
interface HierarchicalDataRow {
  keys: {[Identifier: string]: any};
  columns: {[Identifier: string]: any};
  relations: {[Identifier: string]: HierarchicalDataTable};
}*/
interface IAutoBaseProps extends IBaseProps {
  forward: {classes: String, styles: any};
}
interface IAutoBaseState extends IBaseState {
}
// <---Auto[Interface]

// Declare or extend interfaces here:
//
interface IProps extends IAutoBaseProps {
  
}
interface IState extends IAutoBaseState {
  submitting: boolean,
  verify: boolean,
  sent: boolean,
  countDown: number,
  error: string
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  submitting: false,
  verify: false,
  sent: false,
  countDown: 0,
  error: ''
});

// Auto[ClassBegin]--->
class OTP extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    TestHelper.identify();
    function ready(a){"loading"!=document.readyState?a(new Event('ready')):document.addEventListener?document.addEventListener("DOMContentLoaded",a):(document.onreadystatechange=function(e){"complete"==document.readyState&&a(e)})};
        
    DataManipulationHelper.register("a65ba73a", "popup", ["35980ca9"], {initClass: "Project.Authentication.Entering", submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return null; }});
  }
  // <---Auto[ClassBegin]
  
  lock: boolean = false;
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
  }
  
  protected componentDidMount(): void {
  	this.register();
  	this.sendOTP();
  	
  	window.setInterval((() => {
  	  this.setState({
  	    countDown: Math.max(0, this.state.countDown - 1)
  	  });
  	}).bind(this), 1000);
  }
  
  protected componentWillUnmount(): void {
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false, always: boolean=false): any {
    return super.getDataFromNotation(notation, inArray, always);
  }
  
  private sendOTP(): void {
    const phoneNumber = this.getDataFromNotation('Information.number');
    const appVerifier = window.recaptchaVerifier;
    
    this.setState({error: '', sent: false});
    AnimationHelper.remove(['ad9e60b6']);
    
    signInWithPhoneNumber(firebaseAuth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        this.lock = false;
        
        this.setState({error: '', sent: true});
        window.confirmationResult = confirmationResult;
      }).catch((error) => {
        this.setState({error: error.message.match(/\/([A-Za-z0-9\-]+)\)/)[1].replace(/[\-]/g, ' ')});
        AnimationHelper.add(['ad9e60b6']);
      });
      
    this.setState({
      countDown: 60
    });
  }
  
  
  
  // Auto[Merging]--->
  protected onTextboxChange_565a6108(event: Event) {

    // Handle the event of onTextboxChange ([otp1]) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const target = EventHelper.getCurrentElement(event);
    const previousOTP = null
    const nextOTP = ReactDOM.findDOMNode(this.refs.otp2);
    
    if (target.value.length >= 1) {
      nextOTP && nextOTP.focus();
    } else {
      previousOTP && previousOTP.focus();
    }
    
  }


  protected onTextboxKeyDown_4795a1e2(event: Event) {

    // Handle the event of onTextboxKeyDown ([otp2]) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const target = EventHelper.getCurrentElement(event);
    const previousOTP = ReactDOM.findDOMNode(this.refs.otp1);
    const nextOTP = ReactDOM.findDOMNode(this.refs.otp3);
    
    const kbevent: KeyboardEvent = event as KeyboardEvent;
    
    if (kbevent.keyCode == 8 || kbevent.keyCode == 46) {
      window.setTimeout(() => {
        previousOTP.focus();
      }, 0);
    } else if (target.value.length >= 1) {
      nextOTP && nextOTP.focus();
    }
    
  }

  protected onTextboxChange_4795a1e2(event: Event) {

    // Handle the event of onTextboxChange ([otp2]) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const target = EventHelper.getCurrentElement(event);
    const previousOTP = ReactDOM.findDOMNode(this.refs.otp1);
    const nextOTP = ReactDOM.findDOMNode(this.refs.otp3);
    
    if (target.value.length >= 1) {
      nextOTP && nextOTP.focus();
    } else {
      previousOTP && previousOTP.focus();
    }
    
  }


  protected onTextboxKeyDown_601642ae(event: Event) {

    // Handle the event of onTextboxKeyDown ([otp3]) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const target = EventHelper.getCurrentElement(event);
    const previousOTP = ReactDOM.findDOMNode(this.refs.otp2);
    const nextOTP = ReactDOM.findDOMNode(this.refs.otp4);
    
    const kbevent: KeyboardEvent = event as KeyboardEvent;
    
    if (kbevent.keyCode == 8 || kbevent.keyCode == 46) {
      window.setTimeout(() => {
        previousOTP.focus();
      }, 0);
    } else if (target.value.length >= 1) {
      nextOTP && nextOTP.focus();
    }
    
  }

  protected onTextboxChange_601642ae(event: Event) {

    // Handle the event of onTextboxChange ([otp3]) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const target = EventHelper.getCurrentElement(event);
    const previousOTP = ReactDOM.findDOMNode(this.refs.otp2);
    const nextOTP = ReactDOM.findDOMNode(this.refs.otp4);
    
    if (target.value.length >= 1) {
      nextOTP && nextOTP.focus();
    } else {
      previousOTP && previousOTP.focus();
    }
    
  }


  protected onTextboxKeyDown_17447eb7(event: Event) {

    // Handle the event of onTextboxKeyDown ([otp4]) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const target = EventHelper.getCurrentElement(event);
    const previousOTP = ReactDOM.findDOMNode(this.refs.otp3);
    const nextOTP = ReactDOM.findDOMNode(this.refs.otp5);
    
    const kbevent: KeyboardEvent = event as KeyboardEvent;
    
    if (kbevent.keyCode == 8 || kbevent.keyCode == 46) {
      window.setTimeout(() => {
        previousOTP.focus();
      }, 0);
    } else if (target.value.length >= 1) {
      nextOTP && nextOTP.focus();
    }
    
  }

  protected onTextboxChange_17447eb7(event: Event) {

    // Handle the event of onTextboxChange ([otp4]) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const target = EventHelper.getCurrentElement(event);
    const previousOTP = ReactDOM.findDOMNode(this.refs.otp3);
    const nextOTP = ReactDOM.findDOMNode(this.refs.otp5);
    
    if (target.value.length >= 1) {
      nextOTP && nextOTP.focus();
    } else {
      previousOTP && previousOTP.focus();
    }
    
  }


  protected onTextboxKeyDown_23469e85(event: Event) {

    // Handle the event of onTextboxKeyDown ([otp5]) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const target = EventHelper.getCurrentElement(event);
    const previousOTP = ReactDOM.findDOMNode(this.refs.otp4);
    const nextOTP = ReactDOM.findDOMNode(this.refs.otp6);
    
    const kbevent: KeyboardEvent = event as KeyboardEvent;
    
    if (kbevent.keyCode == 8 || kbevent.keyCode == 46) {
      window.setTimeout(() => {
        previousOTP.focus();
      }, 0);
    } else if (target.value.length >= 1) {
      nextOTP && nextOTP.focus();
    }
    
  }

  protected onTextboxChange_23469e85(event: Event) {

    // Handle the event of onTextboxChange ([otp5]) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const target = EventHelper.getCurrentElement(event);
    const previousOTP = ReactDOM.findDOMNode(this.refs.otp4);
    const nextOTP = ReactDOM.findDOMNode(this.refs.otp6);
    
    if (target.value.length >= 1) {
      nextOTP && nextOTP.focus();
    } else {
      previousOTP && previousOTP.focus();
    }
    
  }


  protected onTextboxKeyDown_c7cb5545(event: Event) {

    // Handle the event of onTextboxKeyDown ([otp6]) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const target = EventHelper.getCurrentElement(event);
    const previousOTP = ReactDOM.findDOMNode(this.refs.otp5);
    const nextOTP = null;
    
    const kbevent: KeyboardEvent = event as KeyboardEvent;
    
    if (kbevent.keyCode == 8 || kbevent.keyCode == 46) {
      window.setTimeout(() => {
        previousOTP.focus();
      }, 0);
    } else if (target.value.length >= 1) {
      nextOTP && nextOTP.focus();
    }
    
  }

  protected onTextboxChange_c7cb5545(event: Event) {

    // Handle the event of onTextboxChange ([otp6]) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    //
    const target = EventHelper.getCurrentElement(event);
    const previousOTP = ReactDOM.findDOMNode(this.refs.otp5);
    const nextOTP = null;
    
    if (target.value.length >= 1) {
      nextOTP && nextOTP.focus();
    } else {
      previousOTP && previousOTP.focus();
    }
    
  }


  protected onButtonClick_ea34e034(event: Event) {

    // Handle the event of onButtonClick ([resend]) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    if (this.state.countDown != 0) return;
    this.sendOTP();
    
  }


  protected onButtonClick_4573b3a8(event: Event) {

    // Handle the event of onButtonClick ([verify]) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    const control1 = ReactDOM.findDOMNode(this.refs.verify);
    control1.click();
    
  }


  protected onButtonSubmitting_a65ba73a(event: CustomEvent) {

    // Handle the event of onButtonSubmitting ([verify]) here:
    // 
    // const params = event.detail.params;                  /* manipulation parameters */
    // const response = event.detail.response;              /* manipulation response */
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    // return EventHelper.cancel(event);                    /* cancelling this manipulation */
    //
    if (!window.confirmationResult) return EventHelper.cancel(event);
    if (this.lock) return;
    
    this.lock = true;
    
    this.setState({error: '', submitting: true});
    AnimationHelper.remove(['ad9e60b6']);
    
    if (!this.state.verify) {
      const otp1 = ReactDOM.findDOMNode(this.refs.otp1);
      const otp2 = ReactDOM.findDOMNode(this.refs.otp2);
      const otp3 = ReactDOM.findDOMNode(this.refs.otp3);
      const otp4 = ReactDOM.findDOMNode(this.refs.otp4);
      const otp5 = ReactDOM.findDOMNode(this.refs.otp5);
      const otp6 = ReactDOM.findDOMNode(this.refs.otp6);
      const referenceId = ReactDOM.findDOMNode(this.refs.referenceId);
      const params = event.detail.params;
      
      window.confirmationResult.confirm([otp1.value,otp2.value,otp3.value,otp4.value,otp5.value,otp6.value].join('')).then((async (result) => {
        const referenceId = ReactDOM.findDOMNode(this.refs.referenceId);
        const user = result.user;
        
        referenceId.value = await user.getIdToken();
        
        this.state.verify = true;
        const verify = ReactDOM.findDOMNode(this.refs.verify);
        
        this.lock = false;
        
        verify.click();
      }).bind(this)).catch(((error) => {
        this.setState({submitting: false, error: error.message.match(/\/([A-Za-z0-9\-]+)\)/)[1].replace(/[\-]/g, ' ')});
        AnimationHelper.add(['ad9e60b6']);
      }).bind(this));
      
      return EventHelper.cancel(event);
    } else {
      
    }
    
  }

  protected onButtonSubmitted_a65ba73a(event: CustomEvent) {

    // Handle the event of onButtonSubmitted ([verify]) here:
    // 
    // const params = event.detail.params;                  /* manipulation parameters */
    // const response = event.detail.response;              /* manipulation response */
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    // return EventHelper.cancel(event);                    /* cancelling this manipulation */
    // 
    
  }

  protected onButtonFailed_a65ba73a(event: CustomEvent) {

    // Handle the event of onButtonFailed ([verify]) here:
    // 
    // const params = event.detail.params;                  /* manipulation parameters */
    // const response = event.detail.response;              /* manipulation response */
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    // return EventHelper.cancel(event);                    /* cancelling this manipulation */
    // 
    this.setState({submitting: false, error: 'Cannot verify a user credential.'});
    AnimationHelper.add(['ad9e60b6']);
    
    AnimationHelper.add([], undefined);
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    TestHelper.identify();
    return pug `
      div(style=Object.assign({'background': 'rgba(255, 255, 255, 1)', 'fontFamily': 'Inter', 'height': '100vh', 'left': '0px', 'position': 'fixed', 'top': '0px', 'width': '100vw', 'zIndex': '1000'}, this.props.forward && this.props.forward.styles || {}), className="internal-fsb-element " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="109e4b01")
        .container-fluid
          .internal-fsb-strict-layout.row
            .col-8.container-fluid.internal-fsb-element.internal-fsb-strict-layout.offset-2(style={'minHeight': '571px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="87b8dc56")
              .col-6.container-fluid.internal-fsb-element.internal-fsb-strict-layout.offset-0(style={'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-guid="647dc8cd")
            .col-12.internal-fsb-element.offset-0(style={'MsFlexDirection': 'row', 'WebkitAlignItems': 'center', 'WebkitFlexDirection': 'row', 'alignItems': 'center', 'display': 'flex', 'flexDirection': 'row', 'height': '100vh'}, internal-fsb-guid="d33849a7")
              .col-6.internal-fsb-element.offset-3(style={'paddingLeft': '0px', 'paddingRight': '0px', 'textAlign': 'center'}, internal-fsb-guid="1be39d07")
                .col-12.internal-fsb-element(style={'fontSize': '50px', 'fontWeight': '500', 'lineHeight': '34px', 'marginBottom': '61px'}, internal-fsb-guid="93549c12")
                  | Walless Logo
                .col-12.internal-fsb-element(style={'fontSize': '24px', 'fontWeight': '500', 'lineHeight': '34px', 'marginBottom': '39px'}, internal-fsb-guid="73048567")
                  | Verification OTP
                .col-12.internal-fsb-element(style={'fontSize': '16px', 'fontWeight': '500', 'lineHeight': '34px'}, internal-fsb-guid="c20e9008")
                  | We've sent you SMS with 6 digit verification code (OTP) on
                .col-12.internal-fsb-element(style={'color': 'rgba(3, 101, 244, 1)', 'fontSize': '20px', 'fontWeight': '500', 'lineHeight': '34px', 'marginBottom': '9px'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(CodeHelper.toSecuredDataString(this.getDataFromNotation("Information.number")))}, internal-fsb-guid="21e97a3e")
                .col-12.internal-fsb-element(style={'fontSize': '16px', 'fontWeight': '500', 'lineHeight': '34px', 'marginBottom': '49px'}, internal-fsb-guid="1b2ce8a1")
                .-fsb-preset-d5e3a46c.internal-fsb-element(style={'height': '60px', 'marginBottom': '37px', 'textAlign': 'center', 'whiteSpace': 'nowrap'}, internal-fsb-guid="cbd350c8")
                  .-fsb-self-e2d95219.internal-fsb-element(style={'FsbReusableId': 'e2d95219', 'FsbReusableName': '', 'display': 'inline-block', 'height': '60px', 'marginRight': '12px', 'width': '60px'}, internal-fsb-guid="e2d95219")
                    .-fsb-preset-d5e3a46c.-fsb-self-565a6108.internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="565a6108")
                      input.form-control(ref="otp1", maxLength=1, onChange=this.onTextboxChange_565a6108.bind(this), disabled=this.state.submitting || !!this.state.error || !this.state.sent, type="text")
                  .-fsb-self-e2d95219.internal-fsb-element(style={'FsbReusableId': 'e2d95219', 'FsbReusableName': '', 'display': 'inline-block', 'height': '60px', 'marginRight': '12px', 'width': '60px'}, internal-fsb-guid="962ba5dd")
                    .-fsb-preset-565a6108.-fsb-preset-d5e3a46c.internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="4795a1e2")
                      input.form-control(ref="otp2", maxLength=1, onChange=this.onTextboxChange_4795a1e2.bind(this), onKeyDown=this.onTextboxKeyDown_4795a1e2.bind(this), disabled=this.state.submitting || !!this.state.error || !this.state.sent, type="text")
                  .-fsb-self-e2d95219.internal-fsb-element(style={'FsbReusableId': 'e2d95219', 'FsbReusableName': '', 'display': 'inline-block', 'height': '60px', 'marginRight': '12px', 'width': '60px'}, internal-fsb-guid="c2032283")
                    .-fsb-preset-565a6108.-fsb-preset-d5e3a46c.internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="601642ae")
                      input.form-control(ref="otp3", maxLength=1, onChange=this.onTextboxChange_601642ae.bind(this), onKeyDown=this.onTextboxKeyDown_601642ae.bind(this), disabled=this.state.submitting || !!this.state.error || !this.state.sent, type="text")
                  .-fsb-self-e2d95219.internal-fsb-element(style={'FsbReusableId': 'e2d95219', 'FsbReusableName': '', 'display': 'inline-block', 'height': '60px', 'marginRight': '12px', 'width': '60px'}, internal-fsb-guid="184e59db")
                    .-fsb-preset-565a6108.-fsb-preset-d5e3a46c.internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="17447eb7")
                      input.form-control(ref="otp4", maxLength=1, onChange=this.onTextboxChange_17447eb7.bind(this), onKeyDown=this.onTextboxKeyDown_17447eb7.bind(this), disabled=this.state.submitting || !!this.state.error || !this.state.sent, type="text")
                  .-fsb-self-e2d95219.internal-fsb-element(style={'FsbReusableId': 'e2d95219', 'FsbReusableName': '', 'display': 'inline-block', 'height': '60px', 'marginRight': '12px', 'width': '60px'}, internal-fsb-guid="de07bb32")
                    .-fsb-preset-565a6108.-fsb-preset-d5e3a46c.internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="23469e85")
                      input.form-control(ref="otp5", maxLength=1, onChange=this.onTextboxChange_23469e85.bind(this), onKeyDown=this.onTextboxKeyDown_23469e85.bind(this), disabled=this.state.submitting || !!this.state.error || !this.state.sent, type="text")
                  .-fsb-self-e2d95219.internal-fsb-element(style={'FsbReusableId': 'e2d95219', 'FsbReusableName': '', 'display': 'inline-block', 'height': '60px', 'width': '60px'}, internal-fsb-guid="4d4bc3ad")
                    .-fsb-preset-565a6108.-fsb-preset-d5e3a46c.internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="c7cb5545")
                      input.form-control(ref="otp6", maxLength=1, onChange=this.onTextboxChange_c7cb5545.bind(this), onKeyDown=this.onTextboxKeyDown_c7cb5545.bind(this), disabled=this.state.submitting || !!this.state.error || !this.state.sent, type="text")
                  input.col-12.internal-fsb-element(ref="referenceId", type="hidden", internal-fsb-guid="35980ca9")
                  .col-12.internal-fsb-element(style={'color': 'rgba(220, 53, 69, 1)', 'fontSize': '11px', 'fontStyle': 'italic', 'fontWeight': '400', 'lineHeight': '16px', 'marginTop': '10px', 'paddingLeft': '0px', 'textAlign': 'center', 'textTransform': 'capitalize'}, internal-fsb-guid="7b4794c7")
                    | #{this.state.error}
                .internal-fsb-element(style={'marginBottom': '63px', 'textAlign': 'center'}, internal-fsb-guid="5c668d43")
                  .internal-fsb-element(style={'display': 'inline-block', 'fontSize': '16px', 'fontWeight': '400', 'lineHeight': '34px'}, internal-fsb-guid="465b58ee")
                    | Can't find your code? 
                  Button.internal-fsb-element(style={'background': 'rgba(255, 255, 255, 0)', 'borderBottomStyle': 'none', 'borderLeftStyle': 'none', 'borderRightStyle': 'none', 'borderTopStyle': 'none'}, ref="resend", type="button", onClick=this.onButtonClick_ea34e034.bind(this), internal-fsb-guid="ea34e034")
                    .internal-fsb-element(style={'display': 'inline-block', 'fontSize': '16px', 'fontWeight': '500', 'lineHeight': '34px'}, internal-fsb-guid="7ba68106")
                      | Resend code (#{this.state.countDown})
                Button.btn.col-12.internal-fsb-element(style={'FsbInheritedPresets': '', 'background': 'rgba(3, 101, 244, 1)', 'borderBottomStyle': 'none', 'borderLeftStyle': 'none', 'borderRightStyle': 'none', 'borderTopStyle': 'none', 'color': 'rgba(255, 255, 255, 1)', 'fontSize': '16px', 'fontWeight': '700', 'height': '48px', 'lineHeight': '24px'}, disabled=this.state.submitting || !!this.state.error || !this.state.sent, type="button", onClick=this.onButtonClick_4573b3a8.bind(this), internal-fsb-guid="4573b3a8")
                  .internal-fsb-element(internal-fsb-guid="9428834c")
                    | Confirm
                Button.btn.col-12.internal-fsb-element(style={'FsbInheritedPresets': '', 'background': 'rgba(3, 101, 244, 1)', 'borderBottomStyle': 'none', 'borderLeftStyle': 'none', 'borderRightStyle': 'none', 'borderTopStyle': 'none', 'color': 'rgba(255, 255, 255, 1)', 'display': 'none', 'fontSize': '16px', 'fontWeight': '700', 'height': '48px', 'lineHeight': '24px'}, ref="verify", onClick=((event) => { window.internalFsbSubmit('a65ba73a', 'users', event, ((results) => { this.manipulate('a65ba73a', 'users', results); }).bind(this)); }).bind(this), type="button", onFailed=this.onButtonFailed_a65ba73a.bind(this), onSubmitted=this.onButtonSubmitted_a65ba73a.bind(this), onSubmitting=this.onButtonSubmitting_a65ba73a.bind(this), internal-fsb-guid="a65ba73a")
    `
  }
}
DeclarationHelper.declare('Site', 'Authentication.OTP', OTP);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState, firebaseApp, firebaseAuth, RecaptchaVerifier};


// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.