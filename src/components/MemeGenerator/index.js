import {Component} from 'react'
import {
  AppContainer,
  MemeContainer,
  MainHeading,
  MobileContainerView,
  InputContainer,
  FormContainer,
  InputLabel,
  Input,
  SelectContainer,
  Option,
  GenerateButton,
  DesktopContainer,
  InputText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    font: '',
    isFormSubmitted: false,
  }

  onFormSubmit = event => {
    event.preventDefault()
    this.setState({isFormSubmitted: true})
  }

  imageUrl = event => {
    this.setState({imgUrl: event.target.value})
  }

  topText = event => {
    this.setState({topText: event.target.value})
  }

  bottomText = event => {
    this.setState({bottomText: event.target.value})
  }

  onChangeFont = event => {
    this.setState({font: event.target.value})
  }

  render() {
    const {imgUrl, topText, bottomText, font, isFormSubmitted} = this.state
    console.log(isFormSubmitted)
    return (
      <AppContainer>
        <MemeContainer data-testid="meme">
          <MainHeading>Meme Generator</MainHeading>
          {isFormSubmitted && (
            <MobileContainerView imageUrl={imgUrl}>
              <InputText fontValue={font}>{topText}</InputText>
              <InputText fontValue={font}>{bottomText}</InputText>
            </MobileContainerView>
          )}

          <FormContainer onSubmit={this.onFormSubmit}>
            <InputContainer>
              <InputLabel htmlFor="imageUrl">Image URL</InputLabel>
              <Input
                id="imageUrl"
                onChange={this.imageUrl}
                value={this.imageUrl}
              />
            </InputContainer>

            <InputContainer>
              <InputLabel htmlFor="topText">Top Text</InputLabel>
              <Input id="topText" onChange={this.topText} value={topText} />
            </InputContainer>

            <InputContainer>
              <InputLabel htmlFor="bottomText">Bottom Text</InputLabel>
              <Input
                id="bottomText"
                onChange={this.bottomText}
                value={bottomText}
              />
            </InputContainer>

            <InputLabel htmlFor="selectId">Font size</InputLabel>
            <SelectContainer
              value={font}
              onChange={this.onChangeFont}
              id="selectId"
            >
              {fontSizesOptionsList.map(eachItem => (
                <Option key={eachItem.optionId} value={eachItem.displayText}>
                  {eachItem.displayText}
                </Option>
              ))}
            </SelectContainer>

            <GenerateButton type="submit"> Generate</GenerateButton>
          </FormContainer>
        </MemeContainer>
        {isFormSubmitted && (
          <DesktopContainer imageUrl={imgUrl}>
            <InputText fontValue={font}>{topText}</InputText>
            <InputText fontValue={font}>{bottomText}</InputText>
          </DesktopContainer>
        )}
      </AppContainer>
    )
  }
}

export default MemeGenerator
