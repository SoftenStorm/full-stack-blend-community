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
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  
});

// Auto[ClassBegin]--->
class Entering extends Base {
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
        
  }
  // <---Auto[ClassBegin]
  
  // Declare class variables and functions here:
  //
  protected initialize(): void {
    // This is an example of creating a static collection and use in data binding:
    // 
    /* this.state.data = this.state.data || this.props.data || window.data || {};
    const staticCollection: HierarchicalDataTable = {
      source: SourceType.Collection,
      group: 'collection',
      rows: [{
        keys: {...}
        columns: {...}
        relations: {...}
      },
      ...]
    };
    this.state.data['collection'] = staticCollection; */
    //
    // Don't forget to create the mockup's schemata in Explore / Data.
    // 
  }
  
  protected componentDidMount(): void {
  	this.register();
  }
  
  protected componentWillUnmount(): void {
  }
  
  protected componentWillReceiveProps(nextProps: any): void {
    // This is an example of creating a dynamic collection and use in data binding:
    // 
    /* this.state.data = this.state.data || this.props.data || window.data || {};
    const dynamicCollection: HierarchicalDataTable = {
      source: SourceType.Collection,
      group: 'collection',
      rows: nextProps.items.map((item) => {
        return {
          keys: {...}
          columns: {...}
          relations: {...}
        };
      })
    };
    this.state.data['collection'] = dynamicCollection; */
    //
    // Don't forget to create the mockup's schemata in Explore / Data.
    // 
  }
  
  // Providing data array base on dot notation:
  // 
  protected getDataFromNotation(notation: string, inArray: boolean=false, always: boolean=false): any {
    // Redirect the target by overriding the notation value, for example:
    // 
    // notation = `collection[${notation.split(',')[1]}].collection`;
    //
    
    return super.getDataFromNotation(notation, inArray, always);
  }
  
  
  // Auto[Merging]--->
  protected onButtonClick_c3924de0(event: Event) {

    // Handle the event of onButtonClick (OK) here:
    // 
    // const target = EventHelper.getCurrentElement(event); /* current invoking element */
    // const element1 = HTMLHelper.getElementById('ID');    /* accessing an element */
    // const control1 = ReactDOM.findDOMNode(this.refs.ID); /* accessing a component */
    // 
    window.location = '/inbox';
    
  }
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    TestHelper.identify();
    return pug `
      div(style=Object.assign({'FsbInheritedPresets': '123d6889'}, this.props.forward && this.props.forward.styles || {}), className="-fsb-preset-123d6889 internal-fsb-element " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="74a21934")
        .container-fluid
          .internal-fsb-strict-layout.row
            .-fsb-preset-70525d1d.col-4.internal-fsb-element.offset-4(style={'FsbInheritedPresets': '70525d1d', 'height': 'auto', 'top': '30vh'}, internal-fsb-guid="3853b21a")
              .col-12.internal-fsb-element.offset-0(style={'MsFlexDirection': 'row', 'WebkitAlignItems': 'center', 'WebkitFlexDirection': 'row', 'alignItems': 'center', 'display': 'flex', 'flexDirection': 'row', 'paddingBottom': '36px', 'paddingTop': '48px'}, internal-fsb-guid="994e8673")
                .col-6.internal-fsb-element.offset-3(style={'paddingLeft': '0px', 'paddingRight': '0px', 'textAlign': 'center'}, internal-fsb-guid="b5475641")
                  .internal-fsb-element(style={'display': 'inline-block', 'marginBottom': '14px'}, dangerouslySetInnerHTML={__html: "<svg width=\"63\" height=\"63\" viewBox=\"0 0 63 63\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M31.5 0.25C14.3125 0.25 0.25 14.3125 0.25 31.5C0.25 48.6875 14.3125 62.75 31.5 62.75C48.6875 62.75 62.75 48.6875 62.75 31.5C62.75 14.3125 48.6875 0.25 31.5 0.25ZM25.25 47.125L9.625 31.5L14.0312 27.0938L25.25 38.2812L48.9688 14.5625L53.375 19L25.25 47.125Z\" fill=\"#10B981\"/>\n</svg>\n"}, internal-fsb-guid="0d03b423")
                  .internal-fsb-element(style={'fontSize': '16px', 'fontWeight': '500', 'lineHeight': '34px', 'marginBottom': '47px'}, internal-fsb-guid="a14bd572")
                    | Login Successful
                  Button.btn.col-12.internal-fsb-element(style={'FsbInheritedPresets': '', 'background': 'rgba(3, 101, 244, 1)', 'borderBottomStyle': 'none', 'borderLeftStyle': 'none', 'borderRightStyle': 'none', 'borderTopStyle': 'none', 'color': 'rgba(255, 255, 255, 1)', 'fontSize': '16px', 'fontWeight': '700', 'height': '48px', 'lineHeight': '24px'}, type="button", onClick=this.onButtonClick_c3924de0.bind(this), internal-fsb-guid="c3924de0")
                    .internal-fsb-element(internal-fsb-guid="9d5c5c11")
                      | OK
    `
  }
}
DeclarationHelper.declare('Site', 'Authentication.Entering', Entering);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};


// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.