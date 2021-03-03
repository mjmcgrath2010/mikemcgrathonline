import React, { useState } from "react"
import styled, {createGlobalStyle} from 'styled-components'
import { EditorState } from "draft-js"
import { Editor } from "react-draft-wysiwyg"
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"

const EditorStyle = createGlobalStyle`
  .wrapper-class {
    padding: 1rem;
    background-color: ${({theme}) =>theme.colors.white_100};
    border: 1px solid #ccc;
  }
  
  .editor-class {
    background-color: ${({theme}) =>theme.colors.white_100};
    padding: 1rem;
    border: 1px solid #ccc;
    min-height: 300px;
    max-height: 90vh;
  }

  .toolbar-class {
    border: 1px solid #ccc;
    font-family: ${({theme}) => theme.fontFamilies.sans_100};
  }
`
const TextEditor = () => {
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );
  const  [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  }
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }
  // TODO: Send this to db
  const createMarkup = (html) => {
    return  {
      __html: DOMPurify.sanitize(html)
    }
  }
  return <>
    <EditorStyle />
    <Editor
      editorState={editorState}
      onEditorStateChange={handleEditorChange}
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      toolbarClassName="toolbar-class"
    />
  </>
}

export default TextEditor
