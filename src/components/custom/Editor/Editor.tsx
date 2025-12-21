// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import {EditorProps} from 'types/index';
//
// const Editor = ({ value = '', onChange }: EditorProps) => {
//   return (
//     <CKEditor
//       editor={ClassicEditor}
//       data={value}
//       config={{
//         placeholder: 'Nhập nội dung...',
//         toolbar: {
//           items: [
//             'heading',
//             '|',
//             'bold',
//             'italic',
//             'underline',
//             'link',
//             'bulletedList',
//             'numberedList',
//             '|',
//             'codeBlock',
//             'blockQuote',
//             'insertTable',
//             '|',
//             'undo',
//             'redo',
//           ],
//         },
//         table: {
//           contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
//         },
//       }}
//       onChange={(_, editor) => {
//         const data = editor.getData();
//         onChange?.(data);
//       }}
//     />
//   );
// };
//
// export default Editor;
