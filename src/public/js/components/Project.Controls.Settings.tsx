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
import {loc as $loc} from '../helpers/LocalizationHelper';
import {IBaseProps, IBaseState, DefaultBaseProps, DefaultBaseState, Button as $Button, Base as $Base} from './Base';

// Assign to an another one to override the base class.
// 
let Base: any = $Base;

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
let loc = $loc;

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
class Settings extends Base {
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
        
    DataManipulationHelper.register("ea9268d1", "update", ["0762b97d","098c6ea6","1da99335","25254217","27d35136","33832ba7","3478b9ac","46a8347a","49da134d","74d68ec6","d3e700b6","e80795e3","ece2d619"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return null; }});
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
  protected onRectangleClick_14382c35(event: Event) {

    // Handle the event of onRectangleClick (Profile Menu) here:
    // 
    this.setState({currentTab: 0});
    
  }

  protected onRectangleClick_5b9e63bb(event: Event) {

    // Handle the event of onRectangleClick (Repository Menu) here:
    // 
    this.setState({currentTab: 1});
    
  }

  protected onRectangleClick_dbcddce6(event: Event) {

    // Handle the event of onRectangleClick (Account Menu) here:
    // 
    this.setState({currentTab: 2});
    
  }

  protected onButtonSubmitting_ea9268d1(event: CustomEvent) {

    // Handle the event of onButtonSubmitting (Button 2) here:
    // 
    this.setState({submitting: true});
    
  }

  protected onButtonSubmitted_ea9268d1(event: CustomEvent) {

    // Handle the event of onButtonSubmitted (Button 2) here:
    // 
    this.setState({submitting: false});
    
  }

  protected onButtonSuccess_ea9268d1(event: CustomEvent) {

    // Handle the event of onButtonSuccess (Submit Button) here:
    // 
    // const params = event.detail.params;                  /* manipulation parameters */
    // const response = event.detail.response;              /* manipulation response */
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    // return EventHelper.cancel(event);                    /* cancelling this manipulation */
    // 
    const password1 = ReactDOM.findDOMNode(this.refs.password1);
    if (password1) password1.value = '';
    
    const password2 = ReactDOM.findDOMNode(this.refs.password2);
    if (password2) password2.value = '';
    
    const password3 = ReactDOM.findDOMNode(this.refs.password3);
    if (password3) password3.value = '';
    
    const password4 = ReactDOM.findDOMNode(this.refs.password4);
    if (password4) password4.value = '';
    
  }

  protected onButtonClick_68840b17(event: Event) {

    // Handle the event of onButtonClick (Button 8) here:
    // 
    window.location = '/auth/github';
    
  }

  protected onButtonClick_b391283e(event: Event) {

    // Handle the event of onButtonClick (Button 3) here:
    // 
    window.location = '/account/delete';
    
  }

  protected onButtonClick_187c250b(event: Event) {

    // Handle the event of onButtonClick (Button 4) here:
    // 
    window.location = '/auth/facebook';
    
  }

  protected onButtonClick_551c67a8(event: Event) {

    // Handle the event of onButtonClick (Button 5) here:
    // 
    window.location = '/auth/github';
    
  }

  protected onButtonClick_82975b43(event: Event) {

    // Handle the event of onButtonClick (Button 6) here:
    // 
    window.location = '/account/unlink/facebook';
    
  }

  protected onButtonClick_4e677128(event: Event) {

    // Handle the event of onButtonClick (Button 7) here:
    // 
    window.location = '/account/unlink/github';
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    TestHelper.identify();
    return pug `
      div(style=Object.assign({}, this.props.forward && this.props.forward.styles || {}), internal-fsb-class="FlowLayout", className="-fsb-self-245bc127 internal-fsb-element internal-fsb-strict-layout " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="245bc127")
        .col-3.internal-fsb-element(style={'MsFlexDirection': 'column', 'WebkitFlexDirection': 'column', 'bottom': '0px', 'display': 'flex', 'flexDirection': 'column', 'left': '0px', 'paddingLeft': '0px', 'paddingRight': '0px', 'position': 'absolute', 'top': '0px'}, internal-fsb-guid="e2601245")
          .-fsb-self-14382c35.internal-fsb-element(style={'FsbReusableId': '14382c35', 'FsbReusableName': '', 'background': (()=>{return (this.state.currentTab == 0) ? 'transparent' : 'rgba(3, 115, 252, 1)';})() || 'rgba(255, 255, 255, 1)', 'paddingBottom': '10px', 'paddingLeft': '15px', 'paddingTop': '10px', cursor: (()=>{return (this.state.currentTab == 0) ? 'default' : 'pointer';})()}, onClick=this.onRectangleClick_14382c35.bind(this), internal-fsb-guid="14382c35")
            .internal-fsb-element(style={'display': 'inline-block'}, internal-fsb-guid="be0d0387")
              | 👤 
            .-fsb-self-99e5677d.internal-fsb-element(style={'FsbReusableId': '99e5677d', 'color': (()=>{return (this.state.currentTab == 0) ? 'rgba(3, 115, 252, 1)' : 'rgba(255, 255, 255, 1)';})() || 'rgba(3, 115, 252, 1)', 'display': 'inline-block'}, dangerouslySetInnerHTML={__html: loc('Profile')}, internal-fsb-guid="99e5677d")
          .internal-fsb-element(style={'FsbInheritedPresets': '', 'background': (()=>{return (this.state.currentTab == 1) ? 'transparent' : 'rgba(3, 115, 252, 1)';})() || 'rgba(3, 115, 252, 1)', 'paddingBottom': '10px', 'paddingLeft': '15px', 'paddingTop': '10px', cursor: (()=>{return (this.state.currentTab == 1) ? 'default' : 'pointer';})()}, onClick=this.onRectangleClick_5b9e63bb.bind(this), internal-fsb-guid="5b9e63bb")
            .internal-fsb-element(style={'display': 'inline-block'}, internal-fsb-guid="e7896154")
              | 📎 
            .internal-fsb-element(style={'FsbInheritedPresets': '', 'color': (()=>{return (this.state.currentTab == 1) ? 'rgba(3, 115, 252, 1)' : 'rgba(255, 255, 255, 1)';})() || 'rgba(255, 255, 255, 1)', 'display': 'inline-block'}, dangerouslySetInnerHTML={__html: loc('Repository')}, internal-fsb-guid="a345a908")
          .internal-fsb-element(style={'WebkitFlexGrow': '1', 'background': 'rgba(3, 115, 252, 1)', 'color': 'rgba(3, 115, 252, 1)', 'flexGrow': '1'}, internal-fsb-guid="5c40caec")
          .internal-fsb-element(style={'FsbInheritedPresets': '', 'background': (()=>{return (this.state.currentTab == 2) ? 'transparent' : 'rgba(3, 115, 252, 1)';})() || 'rgba(3, 115, 252, 1)', 'paddingBottom': '10px', 'paddingLeft': '15px', 'paddingTop': '10px', cursor: (()=>{return (this.state.currentTab == 2) ? 'default' : 'pointer';})()}, onClick=this.onRectangleClick_dbcddce6.bind(this), internal-fsb-guid="dbcddce6")
            .internal-fsb-element(style={'display': 'inline-block'}, internal-fsb-guid="9aab58ec")
              | 🔐 
            .internal-fsb-element(style={'FsbInheritedPresets': '', 'color': (()=>{return (this.state.currentTab == 2) ? 'rgba(3, 115, 252, 1)' : 'rgba(255, 255, 255, 1)';})() || 'rgba(255, 255, 255, 1)', 'display': 'inline-block'}, dangerouslySetInnerHTML={__html: loc('Account')}, internal-fsb-guid="c7844719")
        .col-9.internal-fsb-element.internal-fsb-strict-layout.offset-3(style={'WebkitBorderRadius': '0px 8px 0px 0px', 'background': 'rgba(255, 255, 255, 0.95)', 'borderRadius': '0px 8px 0px 0px', 'height': '45px', 'left': '0px', 'paddingRight': '10px', 'paddingTop': '10px', 'position': 'absolute', 'right': '0px', 'top': '0px', 'zIndex': '900'}, internal-fsb-class="FlowLayout", internal-fsb-guid="ea965490")
          Button.btn.btn-primary.btn-sm.col-2.internal-fsb-element.offset-10(onClick=((event) => { window.internalFsbSubmit('ea9268d1', 'User', event, ((results) => { this.manipulate('ea9268d1', 'User', results); }).bind(this)); }).bind(this), disabled=this.state.submitting || undefined, type="button", onSubmitted=this.onButtonSubmitted_ea9268d1.bind(this), onSubmitting=this.onButtonSubmitting_ea9268d1.bind(this), onSuccess=this.onButtonSuccess_ea9268d1.bind(this), internal-fsb-guid="ea9268d1")
            .internal-fsb-element(dangerouslySetInnerHTML={__html: loc('Save')}, internal-fsb-guid="ea9268d1-text")
        .col-9.internal-fsb-element.internal-fsb-strict-layout.offset-3(style={'MsOverflowX': 'hidden', 'MsOverflowY': 'scroll', 'background': 'rgba(255, 255, 255, 0)', 'bottom': '0px', 'overflowX': 'hidden', 'overflowY': 'scroll', 'paddingTop': '10px', 'position': 'absolute', 'right': '0px', 'top': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="3096eb71")
          .col-12.internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return (this.state.currentTab == 0) ? 'block' : 'none';})()}, internal-fsb-class="FlowLayout", internal-fsb-guid="ce3c1a1c")
            .-fsb-self-7003c7d5.col-8.internal-fsb-element.offset-2(dangerouslySetInnerHTML={__html: loc('Profile Settings')}, internal-fsb-guid="7003c7d5")
            .-fsb-self-12bc19e4.col-12.internal-fsb-element(dangerouslySetInnerHTML={__html: loc('General')}, internal-fsb-guid="12bc19e4")
            label.-fsb-self-24bc9bae.col-12.internal-fsb-element(internal-fsb-guid="24bc9bae")
              .container-fluid
                .internal-fsb-strict-layout.row
                  .-fsb-self-c8d71ae6.col-4.internal-fsb-element(dangerouslySetInnerHTML={__html: loc('Email address:')}, internal-fsb-guid="c8d71ae6")
                  .col-7.internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="27d35136")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.submitting, defaultValue=this.getDataFromNotation("User.email"))
            label.-fsb-preset-24bc9bae.col-12.internal-fsb-element(style={'FsbInheritedPresets': '24bc9bae'}, internal-fsb-guid="81ce8063")
              .container-fluid
                .internal-fsb-strict-layout.row
                  .-fsb-preset-c8d71ae6.col-4.internal-fsb-element(style={'FsbInheritedPresets': 'c8d71ae6'}, dangerouslySetInnerHTML={__html: loc('Full name:')}, internal-fsb-guid="e40410b7")
                  .col-7.internal-fsb-element.offset-0(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="ece2d619")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.submitting, defaultValue=this.getDataFromNotation("User.name"))
            label.-fsb-preset-24bc9bae.col-12.internal-fsb-element(style={'FsbInheritedPresets': '24bc9bae'}, internal-fsb-guid="e9b6b178")
              .container-fluid
                .internal-fsb-strict-layout.row
                  .-fsb-preset-c8d71ae6.col-4.internal-fsb-element(style={'FsbInheritedPresets': 'c8d71ae6'}, dangerouslySetInnerHTML={__html: loc('Current password:')}, internal-fsb-guid="5394d786")
                  .col-7.internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="e80795e3")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, ref="password1", autocomplete="off", type="password", disabled=this.state.submitting)
          .col-12.internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return (this.state.currentTab == 1) ? 'block' : 'none';})()}, internal-fsb-class="FlowLayout", internal-fsb-guid="17704a94")
            .-fsb-preset-7003c7d5.col-8.internal-fsb-element.offset-2(style={'FsbInheritedPresets': '7003c7d5', 'fontSize': '18px', 'textAlign': 'center'}, dangerouslySetInnerHTML={__html: loc('Repository Settings')}, internal-fsb-guid="36835b75")
            .-fsb-preset-12bc19e4.col-12.internal-fsb-element(style={'FsbInheritedPresets': '12bc19e4'}, dangerouslySetInnerHTML={__html: loc('GitHub Reference')}, internal-fsb-guid="4b6deb72")
            .-fsb-self-baed14b5.col-12.internal-fsb-element(dangerouslySetInnerHTML={__html: loc('You have to create a GitHub repository by  following the instruction before linking the account into StackBlend Studio, at:  https://github.com/SoftenStorm/boilerplate\n\n\nAbout privacy policy and terms of use, and notable information on data controller: https://www.softenstorm.com/stackblend-policy-and-terms')}, internal-fsb-guid="baed14b5")
            Button.btn.btn-primary.btn-sm.col-6.internal-fsb-element.offset-3(style={'marginBottom': '5px', display: (()=>{return (this.getDataFromNotation('User.github')) ? 'none' : 'block';})()}, disabled=this.state.submitting, type="button", onClick=this.onButtonClick_68840b17.bind(this), internal-fsb-guid="68840b17")
              .internal-fsb-element(dangerouslySetInnerHTML={__html: loc('Link your GitHub account')}, internal-fsb-guid="68840b17-text")
            label.-fsb-preset-24bc9bae.col-12.internal-fsb-element(style={'FsbInheritedPresets': '24bc9bae', display: (()=>{return (this.getDataFromNotation('User.github')) ? 'block' : 'none';})()}, internal-fsb-guid="7148868c")
              .container-fluid
                .internal-fsb-strict-layout.row
                  .-fsb-preset-c8d71ae6.col-4.internal-fsb-element(style={'FsbInheritedPresets': 'c8d71ae6'}, dangerouslySetInnerHTML={__html: loc('Organization or user alias:')}, internal-fsb-guid="d72eb9ad")
                  .col-7.internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="d3e700b6")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.submitting, defaultValue=this.getDataFromNotation("User.alias"))
            label.-fsb-preset-24bc9bae.col-12.internal-fsb-element(style={'FsbInheritedPresets': '24bc9bae', display: (()=>{return (this.getDataFromNotation('User.github')) ? 'block' : 'none';})()}, internal-fsb-guid="2b6d3336")
              .container-fluid
                .internal-fsb-strict-layout.row
                  .-fsb-preset-c8d71ae6.col-4.internal-fsb-element(style={'FsbInheritedPresets': 'c8d71ae6'}, dangerouslySetInnerHTML={__html: loc('Project name:')}, internal-fsb-guid="4654b0a7")
                  .col-7.internal-fsb-element.offset-0(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="0762b97d")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.submitting, defaultValue=this.getDataFromNotation("User.project"))
            .-fsb-preset-12bc19e4.col-12.internal-fsb-element(style={'FsbInheritedPresets': '12bc19e4', display: (()=>{return (this.getDataFromNotation('User.github')) ? 'block' : 'none';})()}, dangerouslySetInnerHTML={__html: loc('Branching and Saving')}, internal-fsb-guid="c7437d56")
            label.-fsb-preset-24bc9bae.col-12.internal-fsb-element(style={'FsbInheritedPresets': '24bc9bae', display: (()=>{return (this.getDataFromNotation('User.github')) ? 'block' : 'none';})()}, internal-fsb-guid="b47dda0b")
              .container-fluid
                .internal-fsb-strict-layout.row
                  .-fsb-preset-c8d71ae6.col-4.internal-fsb-element(style={'FsbInheritedPresets': 'c8d71ae6'}, dangerouslySetInnerHTML={__html: loc('Feature branch (isolate):')}, internal-fsb-guid="16ce21b0")
                  .col-7.internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="098c6ea6")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.submitting, defaultValue=this.getDataFromNotation("User.feature"))
            label.-fsb-preset-24bc9bae.col-12.internal-fsb-element(style={'FsbInheritedPresets': '24bc9bae', display: (()=>{return (this.getDataFromNotation('User.github')) ? 'block' : 'none';})()}, internal-fsb-guid="234685a2")
              .container-fluid
                .internal-fsb-strict-layout.row
                  .-fsb-preset-c8d71ae6.col-4.internal-fsb-element(style={'FsbInheritedPresets': 'c8d71ae6'}, dangerouslySetInnerHTML={__html: loc('Develop branch (merge):')}, internal-fsb-guid="1a8d1591")
                  .col-7.internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="25254217")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.submitting, defaultValue=this.getDataFromNotation("User.develop"))
            label.-fsb-preset-24bc9bae.col-12.internal-fsb-element(style={'FsbInheritedPresets': '24bc9bae', display: (()=>{return (this.getDataFromNotation('User.github')) ? 'block' : 'none';})()}, internal-fsb-guid="682d4659")
              .container-fluid
                .internal-fsb-strict-layout.row
                  .-fsb-preset-c8d71ae6.col-4.internal-fsb-element(style={'FsbInheritedPresets': 'c8d71ae6'}, dangerouslySetInnerHTML={__html: loc('Staging branch (deploy):')}, internal-fsb-guid="c5b93d69")
                  .col-7.internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="1da99335")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.submitting, defaultValue=this.getDataFromNotation("User.staging"))
            .-fsb-preset-12bc19e4.col-12.internal-fsb-element(style={'FsbInheritedPresets': '12bc19e4', display: (()=>{return (this.getDataFromNotation('User.github')) ? 'block' : 'none';})()}, dangerouslySetInnerHTML={__html: loc('Testing')}, internal-fsb-guid="41645776")
            label.-fsb-preset-24bc9bae.col-12.internal-fsb-element(style={'FsbInheritedPresets': '24bc9bae', display: (()=>{return (this.getDataFromNotation('User.github')) ? 'block' : 'none';})()}, internal-fsb-guid="e0ec7192")
              .container-fluid
                .internal-fsb-strict-layout.row
                  .-fsb-preset-c8d71ae6.col-4.internal-fsb-element(style={'FsbInheritedPresets': 'c8d71ae6'}, dangerouslySetInnerHTML={__html: loc('Endpoint root URL:')}, internal-fsb-guid="eaad3e05")
                  .col-7.internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="74d68ec6")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, type="text", disabled=this.state.submitting, defaultValue=this.getDataFromNotation("User.endpoint"))
            label.-fsb-preset-24bc9bae.col-12.internal-fsb-element(style={'FsbInheritedPresets': '24bc9bae', display: (()=>{return (this.getDataFromNotation('User.github')) ? 'block' : 'none';})()}, internal-fsb-guid="2b429b9b")
              .container-fluid
                .internal-fsb-strict-layout.row
                  .-fsb-preset-c8d71ae6.col-4.internal-fsb-element(style={'FsbInheritedPresets': 'c8d71ae6'}, dangerouslySetInnerHTML={__html: loc('Progressively update:')}, internal-fsb-guid="75639b3d")
                  .col-8.internal-fsb-element(style={'paddingLeft': '0px', 'paddingRight': '0px', 'width': '100%'}, internal-fsb-guid="1c5273a4")
                    .internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="49da134d")
                      input.form-control.form-control-sm(style={'display': 'block', 'height': '16px', 'marginTop': '8px', 'width': '16px'}, type="checkbox", defaultChecked=this.getDataFromNotation("User.progressivelyUpdate") === true)
                    .internal-fsb-element(style={'color': 'rgba(166, 166, 166, 1)', 'fontSize': '12px', 'lineHeight': '1.25em', 'marginTop': '7px', 'paddingLeft': '0px'}, dangerouslySetInnerHTML={__html: loc('⚠️ This option will continuously push changes to your console immediately right after you have changed any content. It may cause high CPU usage and high laptop battery consumption. You may turn it on if you use desktop or laptop with an AC adapter. When you are switching between projects, don\'t forget to kill all of running ports of the previous one before using the editor.')}, internal-fsb-guid="89237a4d")
          .col-12.internal-fsb-element.internal-fsb-strict-layout(style={'paddingLeft': '0px', 'paddingRight': '0px', display: (()=>{return (this.state.currentTab == 2) ? 'block' : 'none';})()}, internal-fsb-class="FlowLayout", internal-fsb-guid="d7b6b2c3")
            .-fsb-preset-7003c7d5.col-8.internal-fsb-element.offset-2(style={'FsbInheritedPresets': '7003c7d5', 'fontSize': '18px', 'textAlign': 'center'}, dangerouslySetInnerHTML={__html: loc('Account Settings')}, internal-fsb-guid="4e0342bd")
            .-fsb-preset-12bc19e4.col-12.internal-fsb-element(style={'FsbInheritedPresets': '12bc19e4'}, dangerouslySetInnerHTML={__html: loc('Change Password')}, internal-fsb-guid="a379e3b8")
            label.-fsb-preset-24bc9bae.col-12.internal-fsb-element(style={'FsbInheritedPresets': '24bc9bae'}, internal-fsb-guid="e3585c2e")
              .container-fluid
                .internal-fsb-strict-layout.row
                  .-fsb-preset-c8d71ae6.col-4.internal-fsb-element(style={'FsbInheritedPresets': 'c8d71ae6'}, dangerouslySetInnerHTML={__html: loc('Current password:')}, internal-fsb-guid="820b41b8")
                  .col-7.internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="46a8347a")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, ref="password2", autocomplete="off", type="password", disabled=this.state.submitting)
            label.-fsb-preset-24bc9bae.col-12.internal-fsb-element(style={'FsbInheritedPresets': '24bc9bae'}, internal-fsb-guid="06cb46e5")
              .container-fluid
                .internal-fsb-strict-layout.row
                  .-fsb-preset-c8d71ae6.col-4.internal-fsb-element(style={'FsbInheritedPresets': 'c8d71ae6'}, dangerouslySetInnerHTML={__html: loc('New password:')}, internal-fsb-guid="0bd07ebe")
                  .col-7.internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="3478b9ac")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, ref="password3", autocomplete="off", type="password", disabled=this.state.submitting)
            label.-fsb-preset-24bc9bae.col-12.internal-fsb-element(style={'FsbInheritedPresets': '24bc9bae'}, internal-fsb-guid="76574a2d")
              .container-fluid
                .internal-fsb-strict-layout.row
                  .-fsb-preset-c8d71ae6.col-4.internal-fsb-element(style={'FsbInheritedPresets': 'c8d71ae6'}, dangerouslySetInnerHTML={__html: loc('Confirm password:')}, internal-fsb-guid="b4d97ce1")
                  .col-7.internal-fsb-element(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="33832ba7")
                    input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, ref="password4", autocomplete="off", type="password", disabled=this.state.submitting)
            .-fsb-preset-12bc19e4.col-12.internal-fsb-element(style={'FsbInheritedPresets': '12bc19e4'}, dangerouslySetInnerHTML={__html: loc('Delete Account')}, internal-fsb-guid="d577da61")
            .-fsb-preset-baed14b5.col-12.internal-fsb-element(style={'FsbInheritedPresets': 'baed14b5'}, dangerouslySetInnerHTML={__html: loc('⚠️ You can delete your account, but keep in mind this action is irreversible.')}, internal-fsb-guid="1bdb6469")
            Button.btn.btn-danger.btn-sm.col-6.internal-fsb-element.offset-3(disabled=this.state.submitting, type="button", onClick=this.onButtonClick_b391283e.bind(this), internal-fsb-guid="b391283e")
              .internal-fsb-element(dangerouslySetInnerHTML={__html: loc('Delete my account')}, internal-fsb-guid="b391283e-text")
            .-fsb-preset-12bc19e4.col-12.internal-fsb-element(style={'FsbInheritedPresets': '12bc19e4'}, dangerouslySetInnerHTML={__html: loc('Linked Accounts')}, internal-fsb-guid="be0488a7")
            Button.btn.btn-primary.btn-sm.col-6.internal-fsb-element.offset-3(style={'marginBottom': '5px', display: (()=>{return (this.getDataFromNotation('User.facebook')) ? 'none' : 'block';})()}, disabled=this.state.submitting, type="button", onClick=this.onButtonClick_187c250b.bind(this), internal-fsb-guid="187c250b")
              .internal-fsb-element(dangerouslySetInnerHTML={__html: loc('Link your Facebook account')}, internal-fsb-guid="187c250b-text")
            Button.btn.btn-primary.btn-sm.col-6.internal-fsb-element.offset-3(style={'marginBottom': '5px', display: (()=>{return (this.getDataFromNotation('User.github')) ? 'none' : 'block';})()}, disabled=this.state.submitting, type="button", onClick=this.onButtonClick_551c67a8.bind(this), internal-fsb-guid="551c67a8")
              .internal-fsb-element(dangerouslySetInnerHTML={__html: loc('Link your GitHub account')}, internal-fsb-guid="551c67a8-text")
            Button.btn.btn-danger.btn-sm.col-6.internal-fsb-element.offset-3(style={'marginBottom': '5px', display: (()=>{return (this.getDataFromNotation('User.facebook')) ? 'block' : 'none';})()}, disabled=this.state.submitting, type="button", onClick=this.onButtonClick_82975b43.bind(this), internal-fsb-guid="82975b43")
              .internal-fsb-element(dangerouslySetInnerHTML={__html: loc('Unlink your Facebook account')}, internal-fsb-guid="82975b43-text")
            Button.btn.btn-danger.btn-sm.col-6.internal-fsb-element.offset-3(style={'marginBottom': '5px', display: (()=>{return (this.getDataFromNotation('User.github')) ? 'block' : 'none';})()}, disabled=this.state.submitting, type="button", onClick=this.onButtonClick_4e677128.bind(this), internal-fsb-guid="4e677128")
              .internal-fsb-element(dangerouslySetInnerHTML={__html: loc('Unlink your GitHub account')}, internal-fsb-guid="4e677128-text")
    `
  }
}
DeclarationHelper.declare('Site', 'Controls.Settings', Settings);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.