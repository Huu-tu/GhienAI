import FroalaEditor from 'react-froala-wysiwyg';
import {EditorProps} from 'types/index';

import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'font-awesome/css/font-awesome.css';

const Editor = ({ value = '', onChange }: EditorProps) => {
  return (
    <FroalaEditor
      tag="textarea"
      model={value}
      onModelChange={(content: string) => onChange(content)}
      config={{
        imageUploadURL: `${import.meta.env.VITE_BASE_API_URL}/api/user/upload-image`,
        imageUploadMethod: 'POST',
        imageAllowedTypes: ['jpeg', 'jpg', 'png'],
      }}
    />

  );
};

export default Editor;
