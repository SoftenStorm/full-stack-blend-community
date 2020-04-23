import {HTMLHelper} from '../../helpers/HTMLHelper.js';
import {FullStackBlend, DeclarationHelper} from '../../../helpers/DeclarationHelper.js';
import {ITreeNode, TreeNode, InsertDirection} from './TreeNode.js';
import {Point, MathHelper} from '../../helpers/MathHelper.js';

declare let React: any;
declare let ReactDOM: any;

interface IProps {
  nodes: [ITreeNode];
  onUpdate(node: ITreeNode);
  onDragged(element: ITreeNode, reference: ITreeNode, direction: InsertDirection);
  enableDragging: boolean;
}

interface IState {
	currentDraggingNode: ITreeNode,
	currentInsertingReferenceNode: ITreeNode,
	currentInsertingDirection: InsertDirection,
	revision: number
}

class Tree extends React.Component<IProps, IState> {
		state: IState = {currentDraggingNode: null, currentInsertingReferenceNode: null, currentInsertingDirection: InsertDirection.NONE, revision: 0}
    protected static defaultProps: IProps = {
      nodes: [],
      onUpdate: null,
      enableDragging: false,
      enableNameEditing: false
    }
    
    constructor(props) {
        super(props);
    }
    
    protected onUpdate(node: ITreeNode) {
      if (this.props.onUpdate != null) {
        this.props.onUpdate(node);
      }
    }
    
    private onStartDragging(node: ITreeNode) {
    	this.state.currentDraggingNode = node;
    	this.setDragging(true, [node]);
    }
    
    private onDragging(point: Point) {
  		let changed = this.resetInsertDirection(this.props.nodes);
  		
  		this.state.currentInsertingReferenceNode = null;
			this.state.currentInsertingDirection = InsertDirection.NONE;
  		
  		let container = ReactDOM.findDOMNode(this.refs.container);
  		let elements = [...HTMLHelper.getElementsByClassName('treenode-body', container)];
  		
  		for (let element of elements) {
				let node = this.getNode(element.getAttribute('node'));
				
				if (this.state.currentDraggingNode == node) continue;
				if (node.dragging) continue;
				
				let position = HTMLHelper.getPosition(element);
				position = {x: position[0], y: position[1]};
				let size = HTMLHelper.getSize(element);
				
				let topRegion = MathHelper.createRegion(MathHelper.createPoint(0, 0, position), MathHelper.createPoint(size[0], size[1] / 3.0, position));
				let middleRegion = MathHelper.createRegion(MathHelper.createPoint(0, size[1] / 3.0, position), MathHelper.createPoint(size[0], size[1] * 2.0 / 3.0, position));
				let bottomRegion = MathHelper.createRegion(MathHelper.createPoint(0, size[1] * 2.0 / 3.0, position), MathHelper.createPoint(size[0], size[1], position));
				
				if (node.selectable && MathHelper.inRegion(topRegion, point)) {
					node.insert = InsertDirection.TOP;
					
					this.state.currentInsertingReferenceNode = node;
					this.state.currentInsertingDirection = node.insert;
					
					changed = true;
					break;
				} else if (MathHelper.inRegion(middleRegion, point)) {
					node.insert = InsertDirection.INSIDE;
					
					this.state.currentInsertingReferenceNode = node;
					this.state.currentInsertingDirection = node.insert;
					
					changed = true;
					break;
				} else if (node.selectable && MathHelper.inRegion(bottomRegion, point)) {
					node.insert = InsertDirection.BOTTOM;
					
					this.state.currentInsertingReferenceNode = node;
					this.state.currentInsertingDirection = node.insert;
					
					changed = true;
					break;
				}
  		}
  		
  		if (changed) {
  			this.setState({
  				revision: this.state.revision + 1
  			});
  		}
    }
    
    private onEndDragging() {
    	this.resetInsertDirection(this.props.nodes);
    	this.setDragging(false);
    	
    	if (this.props.onDragged && this.state.currentDraggingNode && this.state.currentInsertingReferenceNode && this.state.currentInsertingDirection) {
    		this.props.onDragged(this.state.currentDraggingNode, this.state.currentInsertingReferenceNode, this.state.currentInsertingDirection);
    	}
    	
    	this.state.currentDraggingNode = null;
    	
    	this.setState({
				revision: this.state.revision + 1
			});
    }
    
    private resetInsertDirection(nodes: [ITreeNode]) {
    	let changed = false;
    	
  		for (let node of nodes) {
  			if (node.insert !== InsertDirection.NONE) {
  				node.insert = InsertDirection.NONE;
  				changed = true;
  			}
  			
  			this.resetInsertDirection(node.nodes);
  		}
  		
  		return changed;
    }
    private setDragging(value: boolean, nodes: [ITreeNode]=this.props.nodes) {
  		for (let node of nodes) {
  			node.dragging = value;
  			
  			this.setDragging(value, node.nodes);
  		}
    }
		private getNode(id: string, nodes: [ITreeNode]=this.props.nodes) {
			for (let node of nodes) {
				if (node.id == id) {
					return node;
				}
				let result = this.getNode(id, node.nodes);
				if (result != null) {
					return result;
				}
			}
			return null;
		}
    
    render() {
      return (
        <div ref="container" className="tree-container">
          <div className="container-fluid">
            <TreeNode deep={0} nodes={this.props.nodes} onUpdate={this.onUpdate.bind(this)} enableDragging={this.props.enableDragging} onStartDragging={this.onStartDragging.bind(this)} onDragging={this.onDragging.bind(this)} onEndDragging={this.onEndDragging.bind(this)} revision={this.state.revision} />
          </div>
        </div>
      )
    }
}

DeclarationHelper.declare('Controls.Tree', Tree);

export {IProps, IState, Tree};