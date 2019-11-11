import React, { Component } from 'react'

import './static/styles/Textbox.css'

interface TextboxProps {
  name?: string,
  className?: string,
  type?: 'text' | 'number' | 'tel' | 'password' | 'email' | string,
  onChange?: Function,
  value?: string,
  placeholder?: string,
  validation?: Function,
  onValidate?: Function,
  validationErrorHelptext?: string,
  hideCheckOnValidatedTrue?: boolean
}

export class Textbox extends Component<TextboxProps> {
  state = {
    needsValidation: false,
    isValidated: false
  }

  render() {
    return (
      <div className="textbox-container">
        <div className="input-container">
          <input name={this.props.name} className={(this.props.className!==undefined ? `textbox ${this.props.className}` : "textbox")} 
            type={ this.props.type!==null ? this.props.type : 'text' } 
            placeholder={this.props.placeholder}
            defaultValue={(this.props.value!==undefined && this.props.value!==null ? this.props.value : '' )}
            onChange={(event)=>{
              if(this.props.onChange!==undefined)
                this.props.onChange(event)
              
              var validationResult:boolean
              if(this.props.validation!==undefined)
                validationResult = this.props.validation(event)

              this.setState((prevState, props)=>{
                if(this.props.validation!==undefined)
                  if(validationResult) {
                    if(this.props.onValidate!==undefined)
                      this.props.onValidate(event)
                    return {
                      needsValidation: true,
                      isValidated: true
                    }
                  }                  
                  else 
                    return {
                      needsValidation: true,
                      isValidated: false
                    }
                else
                  return {
                    needsValidation: false
                }
              })
            }}
          />

          {
            this.state.needsValidation ? (
              <span className="validation">
                {
                  this.state.isValidated ? (
                    this.props.hideCheckOnValidatedTrue!==undefined ? (
                      this.props.hideCheckOnValidatedTrue ? (
                        <span></span>
                      ) : (
                        <span className="true"></span>
                      )
                    ) : (
                      <span></span>
                    )
                  ) : (
                    <span className="false"></span>
                  )
                }
              </span>
            ) : (
              <span></span>
            )
          }
        </div>

        {
          this.state.needsValidation ? (
            this.state.isValidated ? (
              <span></span>
            ) : (
              <span className="val-error-text">
                {
                  this.props.validationErrorHelptext
                }
              </span>
            )
          ) : (
            <span></span>
          )
        }
      </div>
    )
  }
}

export class Textarea extends Component<TextboxProps> {
  render() {
    return (
      <div className="textbox-container">
        <div className="input-container">
          <textarea rows={6} name={this.props.name} className="textbox"
            placeholder={this.props.placeholder}
            onChange={(event)=>{
              if(this.props.onChange!==undefined)
                this.props.onChange(event)
            }}
          />
        </div>
      </div>
    )
  }
}
