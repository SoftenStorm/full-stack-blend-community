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
import $Base, {IBaseProps, IBaseState, DefaultBaseProps, DefaultBaseState, Button as $Button} from './Base';

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
}

let DefaultProps = Object.assign({}, DefaultBaseProps, {
  
});
let DefaultState = Object.assign({}, DefaultBaseState, {
  
});

// Auto[ClassBegin]--->
class FlowLayout_52d0514b extends Base {
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
        
    DataManipulationHelper.register("65759748", "insert", ["174ec3c5","320d25b6","37790653","4d43796a","7311c62a","821640a3","ad367405","bb881bb6"], {initClass: null, submitCrossType: null, enabledRealTimeUpdate: false, manipulateInto: () => { return eval("\"guestbook\""); }});
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
  
  private isEmpty(): boolean {
    return this.getDataFromNotation('guestbook', true).length == 0;
  }
  
  // Auto[Merging]--->
  // <---Auto[Merging]
  
  // Auto[ClassEnd]--->
  protected render(): any {
    TestHelper.identify();
    return pug `
      div(style=Object.assign({'marginBottom': '20px', 'marginTop': '20px', 'paddingLeft': '0px', 'paddingRight': '0px'}, this.props.forward && this.props.forward.styles || {}), internal-fsb-class="FlowLayout", className="col-6 internal-fsb-element internal-fsb-strict-layout offset-3 " + (this.props.forward && this.props.forward.classes || ''), internal-fsb-guid="52d0514b")
        .col-12.internal-fsb-element.internal-fsb-inverse.internal-fsb-strict-layout.offset-0(style={'MsFlexDirection': 'column-reverse', 'MsOverflowY': 'scroll', 'WebkitFlexDirection': 'column-reverse', 'display': 'flex', 'flexDirection': 'column-reverse', 'maxHeight': '75vh', 'overflowY': 'scroll', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="46de0c81")
          each data, i in this.getDataFromNotation("guestbook", true, false)
            .internal-fsb-element(style={'WebkitBorderRadius': '5px 5px 5px 5px', 'background': 'rgba(247, 247, 247, 1)', 'borderRadius': '5px 5px 5px 5px', 'marginBottom': '5px', 'paddingBottom': '5px', 'paddingLeft': '5px', 'paddingRight': '5px', 'paddingTop': '5px', 'width': '100%'}, key="item_" + (data && data.keys && Object.keys(data.keys).map((key)=>{return key + ":" + data.keys[key];}).join("_") || i), data-fsb-index=i, internal-fsb-guid="4d89825a")
              .col-12.internal-fsb-element(style={'marginBottom': '15px', 'textAlign': 'center'}, dangerouslySetInnerHTML={__html: CodeHelper.escape(CodeHelper.toSecuredDataString(this.getDataFromNotation("guestbook[" + i + "].message")))}, internal-fsb-guid="e8a4e015")
              .internal-fsb-element(style={'paddingLeft': '0px', 'paddingRight': '0px', 'textAlign': 'right', 'width': '100%'}, internal-fsb-guid="82dc32c7")
                .internal-fsb-element(style={'display': 'inline-block', 'fontSize': '12px', 'paddingLeft': '0px', 'paddingRight': '0px', 'textAlign': 'right'}, dangerouslySetInnerHTML={__html: loc('Name:')}, internal-fsb-guid="d3906688")
                .internal-fsb-element(style={'display': 'inline-block', 'fontSize': '12px', 'paddingLeft': '0px', 'paddingRight': '0px', 'textAlign': 'right'}, internal-fsb-guid="bac293a0")
                  | #{this.getDataFromNotation("guestbook[" + i + "].name")} 
                .internal-fsb-element(style={'display': 'inline-block', 'fontSize': '12px', 'paddingLeft': '0px', 'paddingRight': '0px', 'textAlign': 'right'}, dangerouslySetInnerHTML={__html: loc('At:')}, internal-fsb-guid="da92e48e")
                .internal-fsb-element(style={'display': 'inline-block', 'fontSize': '12px', 'paddingLeft': '0px', 'paddingRight': '0px', 'textAlign': 'right'}, internal-fsb-guid="ca7910e7")
                  | #{this.getDataFromNotation("guestbook[" + i + "].createdAt")}
          if this.isEmpty()
            .internal-fsb-element(style={'color': 'rgba(166, 166, 166, 1)', 'fontSize': '13px', 'marginBottom': '15px', 'marginTop': '15px', 'textAlign': 'center'}, dangerouslySetInnerHTML={__html: loc('None of comment available.')}, internal-fsb-guid="db5c1b64")
        .col-12.internal-fsb-element.internal-fsb-strict-layout.offset-0(style={'WebkitBorderRadius': '5px 5px 5px 5px', 'background': 'rgba(3, 115, 252, 0.15)', 'borderRadius': '5px 5px 5px 5px', 'marginTop': '30px', 'paddingBottom': '10px', 'paddingLeft': '10px', 'paddingRight': '10px', 'paddingTop': '10px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="67ee18c3")
          input.col-12.internal-fsb-element(type="hidden", internal-fsb-guid="ad367405")
          input.col-12.internal-fsb-element(type="hidden", internal-fsb-guid="4d43796a")
          input.col-12.internal-fsb-element(type="hidden", internal-fsb-guid="7311c62a")
          input.col-12.internal-fsb-element(type="hidden", internal-fsb-guid="821640a3")
          input.col-12.internal-fsb-element(type="hidden", internal-fsb-guid="174ec3c5")
          .internal-fsb-element.internal-fsb-strict-layout(style={'marginBottom': '5px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="9d3a3982")
            .col-4.internal-fsb-element.offset-0(style={'fontSize': '15px', 'paddingRight': '5px', 'paddingTop': '3px', 'textAlign': 'right'}, dangerouslySetInnerHTML={__html: loc('Message:')}, internal-fsb-guid="7862eb69")
            .col-8.internal-fsb-element.offset-0(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="320d25b6")
              textarea.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, required=true, rows="3", type="text")
          .internal-fsb-element.internal-fsb-strict-layout(style={'marginBottom': '5px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="87a58374")
            .col-4.internal-fsb-element.offset-0(style={'fontSize': '15px', 'paddingRight': '5px', 'paddingTop': '3px', 'textAlign': 'right'}, dangerouslySetInnerHTML={__html: loc('Name:')}, internal-fsb-guid="78e6d75b")
            .col-8.internal-fsb-element.offset-0(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="37790653")
              input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, required=true, type="text")
          .internal-fsb-element.internal-fsb-strict-layout(style={'marginBottom': '5px', 'paddingLeft': '0px', 'paddingRight': '0px'}, internal-fsb-class="FlowLayout", internal-fsb-guid="96400d41")
            .col-4.internal-fsb-element.offset-0(style={'fontSize': '15px', 'paddingRight': '5px', 'paddingTop': '3px', 'textAlign': 'right'}, dangerouslySetInnerHTML={__html: loc('Verify Human:')}, internal-fsb-guid="952bec68")
            .col-8.internal-fsb-element.offset-0(style={padding: '0px'}, internal-fsb-forward="1", internal-fsb-guid="bb881bb6")
              input.form-control.form-control-sm(style={'display': 'block', 'width': '100%'}, placeholder="1 + 2 = ?", required=true, type="text")
          Button.btn.btn-md.btn-primary.col-8.internal-fsb-element.offset-4(onClick=((event) => { window.internalFsbSubmit('65759748', 'guestbook', event, ((results) => { this.manipulate('65759748', 'guestbook', results); }).bind(this)); }).bind(this), type="button", internal-fsb-guid="65759748")
            .internal-fsb-element(dangerouslySetInnerHTML={__html: loc('Comment')}, internal-fsb-guid="65759748-text")
    `
  }
}
DeclarationHelper.declare('Document', 'Controls.FlowLayout_52d0514b', FlowLayout_52d0514b);
// <---Auto[ClassEnd]

// Export variables here:
//
export {IProps, IState, DefaultProps, DefaultState};

// <--- Auto[Generating:V1]
// PLEASE DO NOT MODIFY BECAUSE YOUR CHANGES MAY BE LOST.