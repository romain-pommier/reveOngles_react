// import React from "react"
// // import "./App.css"
// import {
//     Editor,
//     EditorState,
//     RichUtils,
//     getDefaultKeyBinding,
//     KeyBindingUtil,
// } from "draft-js"

// function keyBindingFunction(event) {
//     if (
//         KeyBindingUtil.hasCommandModifier(event) &&
//         event.shiftKey &&
//         event.key === "x"
//     ) {
//         return "strikethrough"
//     }

//     return getDefaultKeyBinding(event)
// }

// class TestForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             editorState: EditorState.createEmpty(),
//         }

//         this.onChange = this.onChange.bind(this)
//         this.handleKeyCommand = this.handleKeyCommand.bind(this)
//         this.toggleInlineStyle = this.toggleInlineStyle.bind(this)
//         this.toggleBlockType = this.toggleBlockType.bind(this)
//     }

//     onChange(editorState) {
//         this.setState({ editorState })
//     }

//     handleKeyCommand(command) {
//         // inline formatting key commands handles bold, italic, code, underline
//         var editorState = RichUtils.handleKeyCommand(
//             this.state.editorState,
//             command
//         )

//         if (!editorState && command === "strikethrough") {
//             editorState = RichUtils.toggleInlineStyle(
//                 this.state.editorState,
//                 "STRIKETHROUGH"
//             )
//         }

//         if (editorState) {
//             this.setState({ editorState })
//             return "handled"
//         }

//         return "not-handled"
//     }

//     toggleInlineStyle(event) {
//         event.preventDefault()

//         let style = event.currentTarget.getAttribute("data-style")
//         this.setState({
//             editorState: RichUtils.toggleInlineStyle(
//                 this.state.editorState,
//                 style
//             ),
//         })
//     }

//     toggleBlockType(event) {
//         event.preventDefault()

//         let block = event.currentTarget.getAttribute("data-block")
//         this.setState({
//             editorState: RichUtils.toggleBlockType(
//                 this.state.editorState,
//                 block
//             ),
//         })
//     }

//     renderBlockButton(value, block) {
//         return (
//             <input
//                 type="button"
//                 key={block}
//                 value={value}
//                 data-block={block}
//                 onMouseDown={this.toggleBlockType}
//             />
//         )
//     }

//     renderInlineStyleButton(value, style) {
//         return (
//             <input
//                 type="button"
//                 key={style}
//                 value={value}
//                 data-style={style}
//                 onMouseDown={this.toggleInlineStyle}
//             />
//         )
//     }

//     render() {
//         const inlineStyleButtons = [
//             {
//                 value: "Bold43",
//                 style: "BOLD",
//             },

//             {
//                 value: "Italic",
//                 style: "ITALIC",
//             },

//             {
//                 value: "Underline",
//                 style: "UNDERLINE",
//             },

//             {
//                 value: "Strikethrough",
//                 style: "STRIKETHROUGH",
//             },

//             {
//                 value: "Code",
//                 style: "CODE",
//             },
//         ]

//         const blockTypeButtons = [
//             {
//                 value: "Heading One",
//                 block: "header-one",
//             },

//             {
//                 value: "Heading Two",
//                 block: "header-two",
//             },

//             {
//                 value: "Heading Three",
//                 block: "header-three",
//             },

//             {
//                 value: "Blockquote",
//                 block: "blockquote",
//             },

//             {
//                 value: "Unordered List",
//                 block: "unordered-list-item",
//             },

//             {
//                 value: "Ordered List",
//                 block: "ordered-list-item",
//             },
//         ]

//         return (
//             <div className="my-little-app">
//                 <h1>Playing with Draft!</h1>
//                 <div className="inline-style-options">
//                     Inline Styles:
//                     {inlineStyleButtons.map((button) => {
//                         return this.renderInlineStyleButton(
//                             button.value,
//                             button.style
//                         )
//                     })}
//                 </div>

//                 <div className="block-style-options">
//                     Block Types:
//                     {blockTypeButtons.map((button) => {
//                         return this.renderBlockButton(
//                             button.value,
//                             button.block
//                         )
//                     })}
//                 </div>
//                 <div className="draft-editor-wrapper">
//                     <Editor
//                         editorState={this.state.editorState}
//                         onChange={this.onChange}
//                         handleKeyCommand={this.handleKeyCommand}
//                         keyBindingFn={keyBindingFunction}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }

// export default TestForm

import "./formik-demo.css"
import "./rich-editor.css"
import React from "react"
import { render } from "react-dom"
import { withFormik } from "formik"
import { EditorState } from "draft-js"
import { RichEditorExample } from "./RichEditor"
import Yup from "yup"

const formikEnhancer = withFormik({
    mapPropsToValues: (props) => ({
        editorState: new EditorState.createEmpty(),
        email: "",
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string().email("That's not an email").required("Required!"),
    }),
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            // you probably want to transform draftjs state to something else, but I'll leave that to you.
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
        }, 1000)
    },
    displayName: "MyForm",
})

const MyForm = ({
    values,
    touched,
    dirty,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    setFieldValue,
    isSubmitting,
}) => (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email" style={{ display: "block" }}>
            Email
        </label>
        <input
            id="email"
            placeholder="Enter your email"
            type="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
        />
        {errors.email && touched.email && (
            <div style={{ color: "red", marginTop: ".5rem" }}>
                {errors.email}
            </div>
        )}
        <label htmlFor="email" style={{ display: "block", marginTop: ".5rem" }}>
            Story
        </label>
        <RichEditorExample
            editorState={values.editorState}
            onChange={setFieldValue}
            onBlur={handleBlur}
        />
        <button
            type="button"
            className="outline"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
        >
            Reset
        </button>
        <button type="submit" disabled={isSubmitting}>
            Submit
        </button>
    </form>
)

const MyEnhancedForm = formikEnhancer(MyForm)

// Helper styles for demo
import "./formik-demo.css"
import { MoreResources, DisplayFormikState } from "./formik-helper"

const App = () => (
    <div className="app">
        <h1>
            Using{" "}
            <a href="https://github.com/jaredpalmer/formik" target="_blank">
                Formik
            </a>{" "}
            with{" "}
            <a href="https://draftjs.org/" target="_blank">
                Draft.js
            </a>
        </h1>
        <p>
            This example shows to use Formik with Facebook's Draft.js. The Rich
            Text Editor is taken directly from the Draft.js examples directory.
            The trick is to lift editor state up to Formik instead of in the
            input class component and then use Formik's{" "}
            <code>setFieldValue</code> method to make state changes.{" "}
        </p>
        <MyEnhancedForm user={{ email: "hello@reason.nyc" }} />
        <MoreResources />
    </div>
)

export default App
