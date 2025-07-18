import FroalaEditor from 'react-froala-wysiwyg'

const FormBoxItem = ({
                       title,
                       shortDescription,
                       description,
                       type,
                       image,
                       estimatedTimeToRead = 5
                     }: {
  title: string;
  shortDescription?: string;
  description?: string;
  type?: string;
  image?: string;
  estimatedTimeToRead?: number;
})=>{
  return(
    <div >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="sm:col-span-2">
            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input type="text" name="title" id="title"
                   onChange={handleChange} value={data.title}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Nhập tiêu đề" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="shortDescription" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Mô tả ngắn
            </label>
            <input type="textarea" name="shortDescription" id="shortDescription"
                   onChange={handleChange} value={data.shortDescription}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="Nhập văn bản" />
          </div>
          <div>
            <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Kiểu nội dung
            </label>
            <select id="type"
                    name="type" value={data.type} onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option >Select your type</option>
              <option value={'blog'}>Blog</option>
              <option value={'doc'}>Tài liệu</option>
              <option value={'service'}>Dịch vụ</option>
              <option value={'solution'}>Giải pháp</option>
            </select>
          </div>
          <div>
            <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Ảnh
            </label>
            <input type="file"  name="image" id="image"
                   onChange={handleChange}
                   accept=".png,.jpeg,.jpg"
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                   placeholder="12" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="description"
                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
            <FroalaEditor
              tag="textarea"
              model={content}
              onModelChange={(newContent: any): void => {
                setContent(newContent);
                setData(prev => ({ ...prev, content: newContent })); // cập nhật vào data.content
              }}
              // config={config}
            />
          </div>
        </div>
      <button type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 ">
        Add blog
      </button>
    </div>
  )
}

export default FormBoxItem;