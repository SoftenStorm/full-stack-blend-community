import {CodeHelper} from '../../../helpers/CodeHelper';
import {EventHelper} from '../../../helpers/EventHelper';
import {IProps, IState, DefaultState, DefaultProps, Base} from '../Base';
import {FullStackBlend, DeclarationHelper} from '../../../helpers/DeclarationHelper';
import {ITreeNode} from '../../controls/TreeNode';
import '../../controls/Textbox';
import '../generic/ListManager';

declare let React: any;
declare let ReactDOM: any;
declare let perform: any;

interface Props extends IProps {
}

interface State extends IState {
  nodes: [ITreeNode];
  prev: string;
  src: string;
  mode: string;
  priority: string;
}

let ExtendedDefaultState = Object.assign({}, DefaultState);
Object.assign(ExtendedDefaultState, {
  nodes: [],
  prev: '',
  src: '',
  mode: '',
  priority: ''
});

let ExtendedDefaultProps = Object.assign({}, DefaultProps);
Object.assign(ExtendedDefaultProps, {
  watchingExtensionNames: ["customExternalLibraries"]
});

class ExternalLibrariesManager extends Base<Props, State> {
    protected state: State = {};
    protected static defaultProps: Props = ExtendedDefaultProps;

    constructor(props) {
        super(props);
        Object.assign(this.state, CodeHelper.clone(ExtendedDefaultState));
    }
    
    public update(properties: any) {
        if (!super.update(properties)) return;
        
        let values: string[] = (this.state.extensionValues[this.props.watchingExtensionNames[0]] || '').split(' ');
        values = values.filter(value => !!value);
        
        let nodes: [ITreeNode] = [{
            id: 'delete',
            name: 'Delete',
            selectable: false,
            dropable: true,
            disabled: false,
            selected: false,
            customClassName: 'delete',
            nodes: []
        }];
        
        for (let value of values) {
        		let splited = value.split('#');
            nodes.push({
            		id: JSON.stringify({src: splited[0], mode: splited[1], priority: splited[2] || ''}),
                name: splited[0],
                selectable: true,
                dropable: false,
								insertable: true,
								dragable: true,
                disabled: false,
                selected: false,
                nodes: []
            });
        }
        
        this.state.nodes = nodes;
        this.forceUpdate();
    }
    
    private onUpdate(node: ITreeNode) {
        
    }
    
    private onDragged(element: ITreeNode, reference: ITreeNode, direction: InsertDirection) {
    		if (reference.id == 'delete') {
    		    let info = JSON.parse(element.id);
    		    
    		    let values: string[] = (this.state.extensionValues[this.props.watchingExtensionNames[0]] || '').split(' ');
    		    values = values.filter(value => value.indexOf(info.src + '#') == -1);
    		    
    		    perform('update', {
    		        extensions: [{
		        				name: this.props.watchingExtensionNames[0],
		        				value: values.join(' ')
		        		}]
    		    });
    		}
    		
    		document.body.click();
    }
    
    private onInsertOptionVisibleChanged(value: boolean) {
        this.setState({
            isAdding: value
        });
        
        if (value) {
            this.setState({
                src: '',
                mode: 'header',
                priority: ''
            });
        }
    }
    
    private onUpdateOptionVisibleChanged(value: boolean, node: ITreeNode) {
        this.setState({
            isAdding: false
        });
        
        if (value) {
            let info = JSON.parse(node.id);
            
            this.setState({
            		prev: info.src,
                src: info.src,
                mode: info.mode,
                priority: info.priority
            });
        }
    }
    
    protected srcOnUpdate(value: any) {
        this.state.src = value;
    }
    
    protected modeOnUpdate(value: any) {
        this.state.mode = value;
    }
    
    protected priorityOnUpdate(value: any) {
        this.state.priority = value;
    }
    
    private addOnClick(event) {
        if (this.state.src && this.state.mode) {
            let values: string[] = (this.state.extensionValues[this.props.watchingExtensionNames[0]] || '').split(' ');
    		    values = values.filter(value => value.indexOf(this.state.src + '#') == -1);
    		    
    		    values.push(this.state.src + '#' + this.state.mode + '#' + this.state.priority);
    		    values.sort((value1, value2) => parseInt(value1.split('#')[2] || '0') > parseInt(value2.split('#')[2] || '0') ? 1 : -1);
    		    
    		    perform('update', {
    		        extensions: [{
		        				name: this.props.watchingExtensionNames[0],
		        				value: values.join(' ')
		        		}]
    		    });
            
            document.body.click();
        }
    }
    
    private updateOnClick(event) {
        if (this.state.src && this.state.mode) {
            let values: string[] = (this.state.extensionValues[this.props.watchingExtensionNames[0]] || '').split(' ');
    		    values = values.filter(value => value.indexOf(this.state.prev + '#') == -1);
    		    
    		    values.push(this.state.src + '#' + this.state.mode + '#' + this.state.priority);
    		    values.sort((value1, value2) => parseInt(value1.split('#')[2] || '0') > parseInt(value2.split('#')[2] || '0') ? 1 : -1);
    		    
    		    perform('update', {
    		        extensions: [{
		        				name: this.props.watchingExtensionNames[0],
		        				value: values.join(' ')
		        		}]
    		    });
            
            document.body.click();
        }
    }
    
    render() {
        return (
            <FullStackBlend.Components.ListManager customClassName="non-selectable non-insertable" nodes={this.state.nodes} onUpdate={this.onUpdate.bind(this)} onDragged={this.onDragged.bind(this)} onInsertOptionVisibleChanged={this.onInsertOptionVisibleChanged.bind(this)} onUpdateOptionVisibleChanged={this.onUpdateOptionVisibleChanged.bind(this)}>
                <div className="section-container" style={{width: '225px'}}>
                    <div className="section-title">{(this.state.isAdding) ? "New External Library" : "Update an External Library"}</div>
                    <div className="section-subtitle">Source</div>
                    <div className="section-body">
                        <FullStackBlend.Controls.Textbox ref="src" value={this.state.src} placeholder="URL" preRegExp='[^# ]*' postRegExp='[^# ]*' onUpdate={this.srcOnUpdate.bind(this)}></FullStackBlend.Controls.Textbox>
                    </div>
                    <div className="section-subtitle">Insertion</div>
                    <div className="section-body">
                   			<div className="btn-group btn-group-sm mr-1 mb-1" role="group">
                    			<button className={"btn text-center " + ((this.state.mode != 'footer') ? 'btn-primary' : 'btn-light')} style={{fontSize: '12px'}} onClick={() => { this.setState({mode: 'header'}); }}>Header</button>
                    			<button className={"btn text-center " + ((this.state.mode == 'footer') ? 'btn-primary' : 'btn-light')} style={{fontSize: '12px'}} onClick={() => { this.setState({mode: 'footer'}); }}>Footer</button>
			              		</div>
                    </div>
                    <div className="section-subtitle">Priority</div>
                    <div className="section-body">
                    		<FullStackBlend.Controls.Textbox ref="priority" value={this.state.priority} placeholder="Priority" preRegExp='[0-9]*' postRegExp='[0-9]*' onUpdate={this.priorityOnUpdate.bind(this)}></FullStackBlend.Controls.Textbox>
                    </div>
                    <div className="section-body" style={{display: (this.state.isAdding) ? '' : 'none'}}>
                        <button className="btn btn-sm btn-primary" onClick={this.addOnClick.bind(this)} style={{padding: '3px 20px', borderRadius: '4px'}}>Create</button>
                    </div>
                    <div className="section-body" style={{display: (this.state.isAdding) ? 'none' : 'inline-block'}}>
                        <button className="btn btn-sm btn-primary" onClick={this.updateOnClick.bind(this)} style={{padding: '3px 20px', borderRadius: '4px'}}>Update</button>
                    </div>
                </div>
            </FullStackBlend.Components.ListManager>
        )
    }
}

DeclarationHelper.declare('Components.ExternalLibrariesManager', ExternalLibrariesManager);

export {ExternalLibrariesManager};