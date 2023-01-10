import {IProps, IState, DefaultState, DefaultProps, Base} from '../Base';
import {FullStackBlend, DeclarationHelper} from '../../../helpers/DeclarationHelper';
import './BorderStylePicker';
import './SizePicker';
import './BackgroundStylePicker';

declare let React: any;
declare let ReactDOM: any;

interface Props extends IProps {
}

interface State extends IState {
}

let ExtendedDefaultProps = Object.assign({}, DefaultProps);
Object.assign(ExtendedDefaultProps, {
  watchingStyleNames: ["border-top-style", "border-right-style", "border-bottom-style", "border-left-style", "border-top-color", "border-right-color", "border-bottom-color", "border-left-color", "background-color", "border-radius"]
});

class AppearancePicker extends Base<Props, State> {
  protected static defaultProps: Props = ExtendedDefaultProps;

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="appearance-picker">
        <div className="hover-container">
          <div className="hover-body">
            <div className="appearance-panel appearance-border internal-fsb-selecting-on" style={{
              borderTop: (!this.state.styleValues[this.props.watchingStyleNames[0]]) ? 'none' : (this.state.styleValues[this.props.watchingStyleNames[0]] + ' 4px '
                + ((!this.state.styleValues[this.props.watchingStyleNames[4]]) ? '#999' : this.state.styleValues[this.props.watchingStyleNames[4]])),
              borderRight: (!this.state.styleValues[this.props.watchingStyleNames[1]]) ? 'none' : (this.state.styleValues[this.props.watchingStyleNames[1]] + ' 4px '
                + ((!this.state.styleValues[this.props.watchingStyleNames[5]]) ? '#999' : this.state.styleValues[this.props.watchingStyleNames[5]])),
              borderBottom: (!this.state.styleValues[this.props.watchingStyleNames[2]]) ? 'none' : (this.state.styleValues[this.props.watchingStyleNames[2]] + ' 4px '
                + ((!this.state.styleValues[this.props.watchingStyleNames[6]]) ? '#999' : this.state.styleValues[this.props.watchingStyleNames[6]])),
              borderLeft: (!this.state.styleValues[this.props.watchingStyleNames[3]]) ? 'none' : (this.state.styleValues[this.props.watchingStyleNames[3]] + ' 4px '
                + ((!this.state.styleValues[this.props.watchingStyleNames[7]]) ? '#999' : this.state.styleValues[this.props.watchingStyleNames[7]])),
              borderRadius: (!this.state.styleValues[this.props.watchingStyleNames[9]]) ? '' : this.state.styleValues[this.props.watchingStyleNames[9]]
            }}>
              <FullStackBlend.Components.BorderStylePicker additionalClassName="t" watchingStyleNames={["border-top-style", "border-top-color"]} />
              <FullStackBlend.Components.BorderStylePicker additionalClassName="r" watchingStyleNames={["border-right-style", "border-right-color"]} />
              <FullStackBlend.Components.BorderStylePicker additionalClassName="b" watchingStyleNames={["border-bottom-style", "border-bottom-color"]} />
              <FullStackBlend.Components.BorderStylePicker additionalClassName="l" watchingStyleNames={["border-left-style", "border-left-color"]} />

              <FullStackBlend.Components.SizePicker additionalClassName="tl" watchingStyleNames={["border-radius[0,4]", "border-radius"]} />
              <FullStackBlend.Components.SizePicker additionalClassName="tr" watchingStyleNames={["border-radius[1,4]", "border-radius"]} />
              <FullStackBlend.Components.SizePicker additionalClassName="br" watchingStyleNames={["border-radius[2,4]", "border-radius"]} />
              <FullStackBlend.Components.SizePicker additionalClassName="bl" watchingStyleNames={["border-radius[3,4]", "border-radius"]} />
            </div>
            <div className="appearance-panel appearance-padding" style={{
              backgroundColor: (!this.state.styleValues[this.props.watchingStyleNames[8]]) ? '' : this.state.styleValues[this.props.watchingStyleNames[8]]
            }}>
              <FullStackBlend.Components.BackgroundStylePicker watchingStyleNames={["background", "-fsb-background-type"]} watchingAttributeNames={["internal-fsb-guid"]} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

DeclarationHelper.declare('Components.AppearancePicker', AppearancePicker);

export {Props, State, AppearancePicker};