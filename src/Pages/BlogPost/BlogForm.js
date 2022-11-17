import React, { useRef, useState, useMemo } from 'react';
import ReactQuill from 'react-quill';
import './BlogForm.css'
import 'react-quill/dist/quill.snow.css';

const BlogForm = ({placeholder}) => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

  const [value, setValue] = useState('');
	return <ReactQuill theme="snow" value={value} onChange={setValue} modules={{
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }}/>

}

export default BlogForm