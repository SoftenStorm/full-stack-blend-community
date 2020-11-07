// Auto[Generating:V1]--->
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.

// Auto[Import]--->
import {Project as $Project, DeclarationHelper} from '../helpers/DeclarationHelper.js';
import {CodeHelper} from '../helpers/CodeHelper.js';
import {EventHelper} from '../helpers/EventHelper.js';
import {HTMLHelper} from '../helpers/HTMLHelper.js';
import {AnimationHelper} from '../helpers/AnimationHelper.js';
import {IBaseProps, IBaseState, DefaultBaseProps, DefaultBaseState, Button as $Button, Base} from './Base.js';
// <---Auto[Import]

// Import additional modules here:
//

// Auto[Declare]--->

declare let React: any;
declare let ReactDOM: any;
declare let window: any;
declare let DataManipulationHelper: any;
declare let pug: any;

let Button = $Button;
let Project = $Project;

// <---Auto[Declare]

// Declare private static variables here:
//

// Auto[Interface]--->
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
  currentTab: number;
  submitting: boolean;
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  currentTab: 0,
  submitting: false
});

// Auto[ClassBegin]--->
class FlowLayout_4d816ba8 extends Base {
  state: IState = null;
  protected static defaultProps: IProps = DefaultProps;
  
  constructor(props) {
    super(props);
    this.state = CodeHelper.clone(DefaultState);
    
    this.initialize();
  }
  
  register() {
    DataManipulationHelper.register("954a291a", "navigate", ["1b650e66","22d343bd"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: null});
    DataManipulationHelper.register("b2b66792", "navigate", ["1b650e66","22d343bd","d3de6c93"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, retrieveInto: null});
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
  }
  
  protected componentDidMount(): void {
  	this.register();
  }
  
  protected componentWillUnmount(): void {
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false): any {
    return super.getDataFromNotation(notation, inArray);
  }
  
  // Auto[Merging]--->
  protected onButtonClick_d7d59dd2(event: Event) {

    // Handle the event of onButtonClick (Button 1) here:
    // 
    this.setState({currentTab: 0});
    
  }

  protected onButtonClick_875ac000(event: Event) {

    // Handle the event of onButtonClick (Button 4) here:
    // 
    this.setState({currentTab: 1});
    
  }

  protected onButtonSubmitting_954a291a(event: Event) {

    // Handle the event of onButtonSubmitting (Button 3) here:
    // 
    this.setState({submitting: true});
    
  }

  protected onButtonSubmitted_954a291a(event: Event) {

    // Handle the event of onButtonSubmitted (Button 3) here:
    // 
    this.setState({submitting: false});
    
  }

  protected onButtonSubmitting_b2b66792(event: Event) {

    // Handle the event of onButtonSubmitting (Button 1) here:
    // 
    this.setState({submitting: true});
    
  }

  protected onButtonSubmitted_b2b66792(event: Event) {

    // Handle the event of onButtonSubmitted (Button 1) here:
    // 
    this.setState({submitting: false});
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    return pug `
      div(style=Object.assign({'FsbInheritedPresets': '245bc127'}, this.props.forward && this.props.forward.styles || {}), className="-fsb-preset-245bc127 internal-fsb-element " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="4d816ba8")
        .container-fluid
          .internal-fsb-allow-cursor.internal-fsb-strict-layout.row
            .col-6.internal-fsb-allow-cursor.internal-fsb-element.offset-0(style={'MsFlexDirection': 'column', 'WebkitFlexDirection': 'column', 'background': 'rgba(3, 115, 252, 1)', 'bottom': '0px', 'display': 'flex', 'flexDirection': 'column', 'left': '0px', 'paddingBottom': '15px', 'paddingTop': '15px', 'position': 'absolute', 'top': '0px'}, internal-fsb-guid="257894ed")
              .internal-fsb-element(style={'color': 'rgba(255, 255, 255, 1)', 'fontSize': '24px'}, internal-fsb-guid="08a05b72")
                | StackBlend Studio 2020
              .internal-fsb-allow-cursor.internal-fsb-element(style={'WebkitFlexGrow': '1', 'flexGrow': '1'}, internal-fsb-guid="e80dd7c1")
              .internal-fsb-element(style={'color': 'rgba(255, 255, 255, 1)', 'fontSize': '13px'}, internal-fsb-guid="e55072d1")
                | By accessing the website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
            .col-6.internal-fsb-allow-cursor.internal-fsb-element.offset-6(style={'MsFlexDirection': 'column', 'MsOverflowX': 'hidden', 'MsOverflowY': 'auto', 'WebkitFlexDirection': 'column', 'bottom': '0px', 'display': 'flex', 'flexDirection': 'column', 'overflowX': 'hidden', 'overflowY': 'auto', 'position': 'absolute', 'right': '0px', 'top': '0px'}, internal-fsb-guid="b20bb476")
              .internal-fsb-allow-cursor.internal-fsb-element(style={'WebkitFlexGrow': '1', 'flexGrow': '1'}, internal-fsb-guid="73b5e922")
              .internal-fsb-element(style={'WebkitFlexBasis': '300px', 'flexBasis': '300px'}, internal-fsb-guid="35e36a4a")
                .container-fluid
                  .internal-fsb-allow-cursor.internal-fsb-strict-layout.row
                    .col-12.internal-fsb-element(style={'color': 'rgba(166, 166, 166, 1)', 'fontSize': '13px', 'marginBottom': '15px', 'textAlign': 'center'}, internal-fsb-guid="e439a68e")
                      | Please login or signup to start using StackBlend studio
                    .col-12.internal-fsb-allow-cursor.internal-fsb-element(style={'marginBottom': '15px', 'paddingLeft': '0px', 'paddingRight': '15px'}, internal-fsb-guid="89972713")
                      .container-fluid
                        .internal-fsb-allow-cursor.internal-fsb-strict-layout.row
                          Button.-fsb-self-d7d59dd2.col-5.internal-fsb-allow-cursor.internal-fsb-element.offset-1(style={background: (()=>{return (this.state.currentTab == 0) ? '' : 'transparent';})(), borderBottomStyle: (()=>{return (this.state.currentTab == 0) ? '' : 'none';})(), color: (()=>{return (this.state.currentTab == 0) ? '' : 'rgba(200, 200, 200, 1)';})()}, disabled=this.state.submitting, type="button", onClick=this.onButtonClick_d7d59dd2.bind(this), internal-fsb-guid="d7d59dd2")
                            .internal-fsb-element(internal-fsb-guid="d7d59dd2-text")
                              | Login
                          Button.-fsb-preset-d7d59dd2.col-5.internal-fsb-allow-cursor.internal-fsb-element.offset-0(style={'FsbInheritedPresets': 'd7d59dd2', 'marginLeft': '15px', background: (()=>{return (this.state.currentTab == 1) ? '' : 'transparent';})(), borderBottomStyle: (()=>{return (this.state.currentTab == 1) ? '' : 'none';})(), color: (()=>{return (this.state.currentTab == 1) ? '' : 'rgba(200, 200, 200, 1)';})()}, disabled=this.state.submitting, type="button", onClick=this.onButtonClick_875ac000.bind(this), internal-fsb-guid="875ac000")
                            .internal-fsb-element(internal-fsb-guid="875ac000-text")
                              | Signup
                    .col-10.internal-fsb-element.offset-1(style={padding: '0px'}, internal-fsb-guid="1b650e66")
                      input.form-control.form-control-sm(style={'display': 'block', 'height': '34px', 'width': '100%'}, placeholder="Email address", type="text", disabled=this.state.submitting, required=true)
                    .col-10.internal-fsb-element.offset-1(style={padding: '0px'}, internal-fsb-guid="22d343bd")
                      input.form-control.form-control-sm(style={'display': 'block', 'height': '34px', 'marginTop': '10px', 'width': '100%'}, placeholder="Password", type="password", disabled=this.state.submitting, required=true)
                    .col-12.internal-fsb-element(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return (this.state.currentTab == 0) ? 'none' : 'block';})()}, internal-fsb-guid="4729c240")
                      .container-fluid
                        .internal-fsb-allow-cursor.internal-fsb-strict-layout.row
                          .col-10.internal-fsb-element.offset-1(style={padding: '0px'}, internal-fsb-guid="d3de6c93")
                            input.form-control.form-control-sm(style={'display': 'block', 'height': '34px', 'marginTop': '10px', 'width': '100%'}, placeholder="Confirm password", type="password", disabled=this.state.submitting, required=true)
                    Button.btn.btn-md.btn-primary.col-6.internal-fsb-allow-cursor.internal-fsb-element.offset-3(style={'marginTop': '10px', display: (()=>{return (this.state.currentTab == 0) ? 'block' : 'none';})()}, onClick=((event) => { window.internalFsbSubmit('954a291a', 'User', event, ((results) => { this.manipulate('954a291a', 'User', results); }).bind(this)); }).bind(this), disabled=this.state.submitting, type="button", onSubmitted=this.onButtonSubmitted_954a291a.bind(this), onSubmitting=this.onButtonSubmitting_954a291a.bind(this), internal-fsb-guid="954a291a")
                      .internal-fsb-element(internal-fsb-guid="954a291a-text")
                        | Continue
                    Button.btn.btn-md.btn-primary.col-6.internal-fsb-allow-cursor.internal-fsb-element.offset-3(style={'marginTop': '10px', display: (()=>{return (this.state.currentTab == 1) ? 'block' : 'none';})()}, onClick=((event) => { window.internalFsbSubmit('b2b66792', 'User', event, ((results) => { this.manipulate('b2b66792', 'User', results); }).bind(this)); }).bind(this), disabled=this.state.submitting, type="button", onSubmitted=this.onButtonSubmitted_b2b66792.bind(this), onSubmitting=this.onButtonSubmitting_b2b66792.bind(this), internal-fsb-guid="b2b66792")
                      .internal-fsb-element(internal-fsb-guid="b2b66792-text")
                        | Continue
              .internal-fsb-allow-cursor.internal-fsb-element(style={'WebkitFlexGrow': '1', 'flexGrow': '1'}, internal-fsb-guid="d5903637")
    `
  }
}
DeclarationHelper.declare('Site', 'Controls.FlowLayout_4d816ba8', FlowLayout_4d816ba8);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.