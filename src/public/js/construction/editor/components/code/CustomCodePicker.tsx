import {CodeHelper} from '../../../helpers/CodeHelper';
import {IProps, IState, DefaultState, DefaultProps, Base} from '../Base';
import {FullStackBlend, DeclarationHelper} from '../../../helpers/DeclarationHelper';
import '../../controls/Textbox';

declare let React: any;
declare let ReactDOM: any;
declare let perform: any;

interface Props extends IProps {
}

interface State extends IState {
  value: any
}

let ExtendedDefaultState = Object.assign({}, DefaultState);
Object.assign(ExtendedDefaultState, {
  value: null
});

let ExtendedDefaultProps = Object.assign({}, DefaultProps);
Object.assign(ExtendedDefaultProps, {
});

class CustomCodePicker extends Base<Props, State> {
  protected state: State = {};
  protected static defaultProps: Props = ExtendedDefaultProps;

  constructor(props) {
    super(props);
    Object.assign(this.state, CodeHelper.clone(ExtendedDefaultState));
  }

  public update(properties: any) {
    if (!super.update(properties)) return;

    let original = null;
    if (this.props.watchingAttributeNames[0]) {
      original = this.state.attributeValues[this.props.watchingAttributeNames[0]];
    }

    if (original && original.indexOf("CODE[") == 0) {
      this.state.value = (original || '').match(/^[A-Z]+\[(.+)\]$/)[1];
    } else {
      this.state.value = null;
    }

    this.forceUpdate();
  }

  protected textboxOnUpdate(value: any) {
    this.state.value = value;
    if (this.props.watchingAttributeNames[0]) {
      perform('update', {
        attributes: [{
          name: this.props.watchingAttributeNames[0],
          value: this.getValue()
        }],
        replace: this.props.watchingAttributeNames[0]
      });
    }
  }

  public getValue() {
    let value = this.state.value;
    return (value) ? 'CODE[' + value + ']' : null;
  }

  render() {
    return (
      <div className="input-group inline custom-code-picker" internal-fsb-event-no-propagate="click">
        <FullStackBlend.Controls.Textbox ref="input" value={this.state.value} placeholder="return (statement) ? 'abc' : null;" preRegExp=".*" postRegExp=".*" onUpdate={this.textboxOnUpdate.bind(this)}></FullStackBlend.Controls.Textbox>
        <div className="input-group-append">
          <div className="btn btn-sm btn-secondary" internal-fsb-event-always-propagate="click">
            <i className="fa fa-code m-0" internal-fsb-event-always-propagate="click" />
          </div>
        </div>
      </div>
    )
  }
}

DeclarationHelper.declare('Components.CustomCodePicker', CustomCodePicker);

export {Props, State, CustomCodePicker};