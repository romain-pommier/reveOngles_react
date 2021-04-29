import React, { Component } from "react"
import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor"
import { Button } from "react-bootstrap"
import { convertToHTML, convertFromHTML } from "draft-convert"
import createToolbarPlugin, {
    Separator,
} from "@draft-js-plugins/static-toolbar"
import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    // CodeButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    // BlockquoteButton,
    // CodeBlockButton,
} from "@draft-js-plugins/buttons"
import "@draft-js-plugins/static-toolbar/lib/plugin.css"
import "../../style/editorStyles.scss"

class HeadlinesPicker extends Component {
    componentDidMount() {
        setTimeout(() => {
            window.addEventListener("click", this.onWindowClick)
        })
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.onWindowClick)
    }

    onWindowClick = () =>
        // Call `onOverrideContent` again with `undefined`
        // so the toolbar can show its regular content again.
        this.props.onOverrideContent(undefined)

    render() {
        const buttons = [
            HeadlineOneButton,
            HeadlineTwoButton,
            HeadlineThreeButton,
        ]
        return (
            <div>
                {buttons.map((Button, i) => (
                    // eslint-disable-next-line
                    <Button key={i} {...this.props} />
                ))}
            </div>
        )
    }
}

class HeadlinesButton extends Component {
    onClick = () =>
        // A button can call `onOverrideContent` to replace the content
        // of the toolbar. This can be useful for displaying sub
        // menus or requesting additional information from the user.
        this.props.onOverrideContent(HeadlinesPicker)

    render() {
        return (
            <div className="headlineButtonWrapper">
                <button onClick={this.onClick} className="headlineButton">
                    H
                </button>
            </div>
        )
    }
}

const toolbarPlugin = createToolbarPlugin()
const { Toolbar } = toolbarPlugin
const plugins = [toolbarPlugin]
const text =
    "In this editor a toolbar shows up once you select part of the text …"

export default class FormFormation extends Component {
    state = {
        editorState: createEditorStateWithText(text),
    }

    onChange = (editorState) => {
        this.setState({
            editorState,
        })
    }

    focus = () => {
        this.editor.focus()
    }

    render() {
        return (
            <div className="editor" onClick={this.focus}>
                <Editor
                    editorState={this.state.editorState}
                    onChange={this.onChange}
                    plugins={plugins}
                    ref={(element) => {
                        this.editor = element
                    }}
                />
                <Toolbar>
                    {
                        // may be use React.Fragment instead of div to improve perfomance after React 16
                        (externalProps) => (
                            <div>
                                <BoldButton {...externalProps} />
                                <ItalicButton {...externalProps} />
                                <UnderlineButton {...externalProps} />
                                {/* <CodeButton {...externalProps} /> */}
                                <Separator {...externalProps} />
                                <HeadlinesButton {...externalProps} />
                                <UnorderedListButton {...externalProps} />
                                <OrderedListButton {...externalProps} />
                                {/* <BlockquoteButton {...externalProps} />
                                <CodeBlockButton {...externalProps} /> */}
                            </div>
                        )
                    }
                </Toolbar>
                <Button
                    onClick={() => {
                        console.log(
                            convertToHTML(
                                this.state.editorState.getCurrentContent()
                            )
                        )
                    }}
                >
                    submit
                </Button>
            </div>
        )
    }
}
// console.log(convertToHTML(editorState.getCurrentContent()))
